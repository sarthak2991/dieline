import React, { useMemo, useState } from 'react'
import axios from 'axios'


// defining main page component
const Parameters = () => {
  localStorage.clear()
  // defining constants
  const [boxstyle,setBoxstyle] = useState('')
  const [glueflap,setGlueflap] = useState('')
  const [parameters,setParameters] = useState('')
  const [tuckflap,setTuckflap] = useState('')
  const [pastingside,setPastingside] = useState('')
  const [dustflap,setDustflap] = useState('')
  const [search,setSearch] = useState(false)
  
  
  // handling generate dieline click
  const handleClick = (e) => {
    e.preventDefault()    
    // defining constants
    const modified_glueflap = parseFloat(glueflap)
    const modified_tuckflap = parseFloat(tuckflap)
    const modified_parameters =  parameters.split('x')
    modified_parameters.forEach((item,index,arr)=>{arr[index] = (parseFloat(item))})
    const modified_dustflap = parseFloat(dustflap)
    // storing this parameters in local storage
    localStorage.setItem('box style',boxstyle)
    localStorage.setItem('glueflap',modified_glueflap)
    localStorage.setItem('tuckflap',modified_tuckflap)
    localStorage.setItem('dustflap',modified_dustflap)
    localStorage.setItem('parameters',modified_parameters)
   
      // sending data to backend and getting dieline in response
     alert("Generating Dieline.........")
    axios.post('http://localhost:5000/',{boxstyle,modified_glueflap,modified_parameters,modified_tuckflap,pastingside,modified_dustflap},{headers:{'Allow-Control-Allow-Origin':'*'}}).then((res)=>{
  
    if(res.data.message !== "Error") { 
    localStorage.setItem('width',res.data.width)
      localStorage.setItem('height',res.data.height)
      localStorage.setItem('image',res.data.svg)
      localStorage.setItem('image1',res.data.svg2)
      localStorage.setItem('cut',res.data.cut)
      localStorage.setItem('crease',res.data.crease)
      localStorage.setItem('area',res.data.area)
    
      window.location.href='/dieline'  
     }  
      else{
        alert("Some Error With Input!!!")
      }
  
  }).catch(err=>{
    alert('Some Error With Input!!!')
  })
  
    
    
  
  }
  
  const designs = ["A001","A001A","A001B","A001D","A001E","A001F","A001H","A001I","A001J","A001AX","A002","A002A","A002AX","A002B","A002BX","A002CX","A002D","A002DX","A002E","A002EX","A002F","A002FX","A002X","C001A","C001AX"]
  let filtered_result = designs
  const handleSearch = (task) => {
    if(task){
      setSearch(true)
    filtered_result = designs.filter((element)=>{if(element.match(boxstyle.toUpperCase() )){return element}else{}})
    
    const a = document.getElementsByClassName('content')
    for (let i = 0; i < a.length; i++) {
      
      
      if(filtered_result.includes(a[i].innerHTML)){
        a[i].style.display = 'block';
      }
      else{a[i].style.display = 'none'}
    
      
    }}
    else{
      setSearch(false)
      document.getElementById('myDropdown').hidden = true
    }
    
  }

  return (
  <>
  <div id='parameters'>
    {/*taking parameters for generating dieline */}
        Box Style and Dimensions(Millimeters)
        <div id='grid'>
        <div id='grid-item' >Box Style <div><input style={{position:'relative',width:'fit-content'}} type='text' onKeyUp={()=>{handleSearch(true)}}  value = {boxstyle} onChange={(e)=>{setBoxstyle(e.target.value);}}/>
        {(search)?(<div id='myDropdown' className='dropdown-content'>{filtered_result.map((data,index)=>{return <p key={index} onClick={()=>{setBoxstyle(data);handleSearch(false)}} className='content' >{data}</p>})}</div>):(<></>)} </div></div>
        <div id='grid-item'> Glue Flap <input type='text' value={glueflap} onChange={(e)=>{setGlueflap(e.target.value)}}></input></div>
        <div id='grid-item'>L x W x H <input type='text' value={parameters} onChange={(e)=>{setParameters(e.target.value)}}></input></div>
        <div id='grid-item'> Tuck Flap <input type='text' value={tuckflap} onChange={(e)=>{setTuckflap(e.target.value)}}></input></div>
        {(useMemo(()=>{if(tuckflap && parameters && parameters.split('x').length === 3){setDustflap((parseFloat(tuckflap)+parseFloat(parameters.split('x')[1]))/2)}},[tuckflap,parameters]))}
        <div id='grid-item'>Pasting Side <input type='text' value={pastingside} onChange={(e)=>{setPastingside(e.target.value)}}></input></div>
        <div id='grid-item'> Dust Flap <input type='text' value={dustflap} onChange={(e)=>{setDustflap(e.target.value)}}></input></div></div>
        <br/>
        <div>
          <button onClick={(e)=>{handleClick(e)}}>Die Keyline and Nesting</button>
          
          </div>
  </div>
  
  </>
  )
}



export default Parameters
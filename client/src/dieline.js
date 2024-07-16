import React, { useState } from 'react'
import parse from 'html-react-parser'
import axios from 'axios'

const Dieline = () => {
    const [save,setSave] = useState(false)
    
    const [bleed,setBleed] = useState(0)
    const keyline = localStorage.getItem('image')
    const keyline1 = localStorage.getItem('image1')
    const keyline_width = localStorage.getItem('width')
    const keyline_height = localStorage.getItem('height')
    const keyline_area = localStorage.getItem('area')
    const keyline_cut = localStorage.getItem('cut')
    const keyline_crease = localStorage.getItem('crease')
    var boxstyle = localStorage.getItem('box style')
    const modified_parameters = localStorage.getItem('parameters').split(',')
  modified_parameters.forEach((item,index,arr)=>{arr[index] = (parseFloat(item))})
    const arr = boxstyle.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}
const modified_boxstyle = arr.join(" ");
const modified_tuckflap = parseFloat(localStorage.getItem('tuckflap'))
const modified_glueflap = parseFloat(localStorage.getItem('glueflap'))
const modified_dustflap = parseFloat(localStorage.getItem('dustflap'))
    const options = {
        replace: domNode => {
          if (domNode.attribs ) {
            domNode.attribs.width = '80%'
            domNode.attribs.height = '80%'
          }
        }
        }
        const generateKeyline = () => {
          const type = localStorage.getItem('type')
            alert("Generating PDF ....")
            const rt = ["A001","A001A","A001B","A001D","A001E","A001F","A001H","A001I","A001J","A001AX"]
            
            if(!rt.includes(boxstyle)){
            
                if(type === "B"){
                    if(boxstyle[boxstyle.length - 1] !== 'X' || boxstyle == "A002CX")
                    {boxstyle = boxstyle + "X"}
                    else{
                      boxstyle = boxstyle.slice(0,boxstyle.length-1)
                    }
                     
                }
                
            }            
            axios.post('http://localhost:5000/generate-keyline-pdf',{type,boxstyle,modified_parameters,bleed,modified_glueflap,modified_tuckflap,modified_dustflap},{headers:{'Allow-Control-Allow-Origin':'*'}}).then((res)=>{if(res.data === "Success"){alert('KeyLine PDF Generated')}
          else{
            alert("Please Check Your Input!!!")
          }}).catch(err=>{
        
            if(err.response.data === "Error"){
              alert("Can't Generate PDF With This Inputs")
            }
            else{
            alert("Some Error With Server!!!")}
          })
            
          }
          
  return (
    <>
  {(save )?(<div style={{width :'20%',marginLeft:'40%' }}>
  <div id='title'>Bleed Line</div>
  <div className='nesting'><br/>
    <div className='title'>Outer/Inner Bleed in mm : <input style={{width : '3.5em'}} value={bleed} onChange={(e)=>{setBleed(e.target.value)}}></input><br/><br/>
    <div className='footer'><button style={{marginLeft:'100%'}} onClick={()=>{
      
      generateKeyline(), setSave(false) }}>OK</button></div>
    </div></div>
  </div>):(<><div id='title'>Dieline Creation</div>
    <div className='nesting'>
    <div className='grid-nesting'>
        <div className='grid-item-nesting'>
            
            <div className='image-keyline'>
            <div className='title' >Dieline-A [Basic Diagram]</div><br/>
                {parse(keyline,options)}
            </div><br/>
        </div>
        <div className='grid-item-nesting'>
       
        <div className='image-keyline'>
        <div className='title'>Dieline-B [Panels Interchanged for Interlock Nesting]</div><br/>
        {parse(keyline1,options)}
                </div><br/>
        </div>
        <div className='grid-item-nesting'>
        <div className='title' style={{fontSize:'1em',padding:'30% 1%',textAlign:'center'}}> {modified_boxstyle}<br/> {modified_parameters.join('x')} G{modified_glueflap} T{modified_tuckflap}
           <br/>
           <br/>
           <div id='grid' style={{fontWeight : 'bolder'}}>
           <div id='grid-item'>Rectangle Height</div> <div id='grid-item'>{keyline_height}</div>
           <div id='grid-item'>Rectangle Width</div> <div id='grid-item'>{keyline_width}</div>
           <div id='grid-item'>Actual Used Area</div><div id='grid-item'> {keyline_area} Sq.mm</div>
           <div id='grid-item'>Rectangle Used Area </div><div id='grid-item'>{keyline_height*keyline_width} Sq.mm</div>
           <div id='grid-item'>Cutting Blade Length </div><div id='grid-item'>{keyline_cut} mm</div>
           <div id='grid-item'>Creasing Blade Length </div><div id='grid-item'>{keyline_crease} mm</div>
          
            </div>
           </div>

        </div>
        </div>
        <div className='footer'>
       <button onClick={()=>{localStorage.setItem('type','A'),setSave(true),setBleed(0)}}>Save Key-line-A as PDF</button>
      <button  onClick={()=>{localStorage.setItem('type','B'),setSave(true),setBleed(0)}}>Save Key-line-B as PDF</button>
      <button onClick={()=>{window.location.href = '/nesting'}}>Generate Nesting Imposition</button>
      <button onClick={()=>{window.location.href = '/'}}>Back to Box Style</button>
        </div>
    </div></>)}
    
    </>
  )
}

export default Dieline
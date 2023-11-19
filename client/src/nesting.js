import React, { useState } from 'react'
import axios from 'axios'
import parse from 'html-react-parser'

// nesting component 
const Nesting = () => {
  // defining constants
  const [save,setSave] = useState(false)
  const [bleed,setBleed] = useState(0)
  const [length,setLength] = useState(0)
  const [width,setWidth] = useState(0)
  const [gripper,setGripper] = useState(0)
  const [top,setTop] = useState(0)
  const [right,setRight] = useState(0)
  const [left,setLeft] = useState(0)
  const [interlock,setInterlock] = useState(0)
  const [side,setSide] = useState(0)
  const [image,setImage] = useState('')
  const modified_parameters = localStorage.getItem('parameters').split(',')
  modified_parameters.forEach((item,index,arr)=>{arr[index] = (parseFloat(item))})
  const [units,setUnits] = useState('')
  const modified_tuckflap = parseFloat(localStorage.getItem('tuckflap'))
  const boxstyle = localStorage.getItem('box style')
 
  const modified_glueflap = parseFloat(localStorage.getItem('glueflap'))
  const arr = boxstyle.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}
const modified_boxstyle = arr.join(" ");
  // rescaling image
  const options = {
    replace: domNode => {
      if (domNode.attribs ) {
        domNode.attribs.width = '80%'
        domNode.attribs.height = '80%'
      }
    }
    }
  // handling generate layout click
  const handleClick = (e) => {
    e.preventDefault()
    // defining constants
    const modified_length = parseFloat(length)
    const modified_width = parseFloat(width)
    const modified_gripper= parseFloat(gripper)
    const modified_top = parseFloat(top)
    const modified_right = parseFloat(right)
    const modified_left = parseFloat(left)
    const modified_interlock = parseFloat(interlock)
    const modified_side = parseFloat(side)
    const modified_glueflap = parseFloat(localStorage.getItem('glueflap'))
    const modified_dustflap = parseFloat(localStorage.getItem('dustflap'))
    const modified_tuckflap = parseFloat(localStorage.getItem('tuckflap'))
    const boxstyle = localStorage.getItem('box style')
    
    
    
    // posting constants to backend and getting image in response
    if(units !== ""){
  
    axios.post('http://localhost:5000/nesting',{units,modified_length,modified_width,modified_gripper,modified_right,modified_left,modified_top,modified_interlock,modified_side,modified_dustflap,modified_glueflap,modified_tuckflap,modified_parameters,boxstyle},{headers:{'Allow-Control-Allow-Origin':'*'}}).then((res) => {if(res.data !== "Error"){setImage(res.data)}
    else{
      alert("Some Error With Input!!!")
    }}).catch(err=>{
      alert("Some Error With Server!!!")
    })
      }
    
else{
  alert('please select units')
}}

  
  
  
  const generateNesting = (image1,style) =>{
    alert("Generating PDF ....")
    let vertical,horizontal
  
    
      

    if(units.length === 4){
       vertical = 25.4*parseFloat(length) - parseFloat(top) - parseFloat(gripper)
   horizontal = 25.4*parseFloat(width) - parseFloat(left) - parseFloat(right)   
    }
  else{
    vertical = parseFloat(length) - parseFloat(top) - parseFloat(gripper)
    horizontal = parseFloat(width) - parseFloat(left) - parseFloat(right)}
  
    axios.post('http://localhost:5000/generate-nesting-pdf',{image1,boxstyle,vertical,top,left,horizontal,modified_parameters,style,modified_glueflap,modified_tuckflap},{headers:{'Allow-Control-Allow-Origin':'*'}}).then((res)=>{if(res.data === "Success"){alert('Nesting PDF Generated')}
    else{
      alert("Error Occured While Generating PDF!!!")
    }}).catch(err=>{
      if(err.response.data === "Error"){
        alert("Can't Generate PDF With This Inputs")
      }
      else{
      alert("Some Error With Server!!!")}
  
  })
 }
  return (
      <div className='nesting'>
    <div id='title'>Interlock Nesting Imposition</div><br/>
    {(image)?(<><div className='grid-nesting'>
      
     
      {/*nesting in vertical form */}
  
      <div className='grid-item-nesting'>
        {console.log(image.vertical)}
        <div className='image'><div className='title'style={{textAlign : 'center'}}>Vertical Interlocking</div><br/>{parse(image.vertical,options)}</div><br/>
        <div id='grid'>
        <div className='title' style={{textAlign : 'center'}}>{image.vertical_ups[0]*image.vertical_ups[1]} Ups  Click to Select For Cost Estimation<input style={{width:'1em'}} name='selection' type='radio' /></div>
      </div> <br/>
      <div id='grid'>
          <div id='grid-item'>Max Printable Image Area : </div><div id='grid-item'> 
        {(length && width && top && gripper && right && left)?(<>
        {(units.length === 2)?(<>
        {parseFloat(length)-parseFloat(top)-parseFloat(gripper)}x{parseFloat(width)-parseFloat(right)-parseFloat(left)}[{((parseFloat(length)-parseFloat(top)-parseFloat(gripper))/25.4).toFixed(2)}x{((parseFloat(width)-parseFloat(right)-parseFloat(left))/25.4).toFixed(2)}]</>):(<div id='grid'>
        
        <> {(parseFloat(length)*25.4-parseFloat(top)-parseFloat(gripper)).toFixed(2)} x {(parseFloat(width)*25.4-parseFloat(right)-parseFloat(left)).toFixed(2)}[ {(parseFloat(length)-(parseFloat(top)+parseFloat(gripper))/25.4).toFixed(2)}'' x {(parseFloat(width)-(parseFloat(right)+parseFloat(left))/25.4).toFixed(2)}'']</>
        </div> )}
        </>):(<></>)}
        </div>
          <div id='grid-item'>Utilised Area of Paper [Wstg%]</div><div id='grid-item'>{image.utilised_length_vertical}*{image.utilised_width_vertical} [{(image.utilised_length_vertical/25.4).toFixed(2)}'' * {(image.utilised_width_vertical/25.4).toFixed(2)}''] {(units.length === 2)?(<>[{(100-100*(image.area*image.vertical_ups[0]*image.vertical_ups[1]/parseFloat(length)/parseFloat(width))).toFixed(2)}%]</>):(<>[{(100-100*(image.area*image.vertical_ups[0]*image.vertical_ups[1]/parseFloat(length)/parseFloat(width)/25.4/25.4)).toFixed(2)}%]</>)}</div>
          <div id='grid-item'>Suggested Paper Size</div><div id='grid-item'>{(parseFloat(image.utilised_length_vertical)+parseFloat(top)+parseFloat(gripper))}*{(parseFloat(image.utilised_width_vertical)+parseFloat(left)+parseFloat(right))}[{((parseFloat(image.utilised_length_vertical)+parseFloat(top)+parseFloat(gripper))/25.4).toFixed(2)}''*{((parseFloat(image.utilised_width_vertical)+parseFloat(left)+parseFloat(right))/25.4).toFixed(2)}'']</div>
          <div id='grid-item'>Cut/Crease Blade Length</div><div id='grid-item'>{image.vertical_cutting_length} [{(image.vertical_cutting_length/25.4).toFixed(2)}'']/{image.vertical_creasing_length}[{(image.vertical_creasing_length/25.4).toFixed(2)}'']</div>
          </div>
                  
        </div>
        <div className='grid-item-nesting' >
            <div className='title'style={{textAlign : 'center',fontSize:'medium'}}>{boxstyle}
            <br/>
            {modified_parameters.join('x')} G{modified_glueflap} T{modified_tuckflap}
            </div>
            <div className='grid-parameters'>
    {/*parameters box */}
    <div className='grid-parameters-item'>
        
        
        <div className='title' style={{'margin':'15px 0px'}}>Print Run Size of Paper<br/><br/>
        Select: 
        Inch <input name='unit' style={{width:'1em'}} onChange={()=>{setUnits('inch')}}  type='radio'/> 
        mm <input name='unit' style={{width:'1em'}} onChange={()=>{setUnits('mm')}} type='radio'/></div>
        
        <div id='grid' style={{'marginTop':'1em'}}>
      
         
        <div id='grid-item'>Height  <input type='text'  value={length} onChange={(e)=>{setLength(e.target.value)}} /></div>
        <div id='grid-item'> Width  <input type='text'  value={width} onChange={(e)=>{setWidth(e.target.value)}}/></div>
        </div></div>
        <div className='grid-parameters-item'>
        <div className='title' style={{'margin':'5px 0px'}}>Specify Margins in mm</div> <br/>
        <div id='grid'>
        <div id='grid-item'>Left  <input type='text' value={left} onChange={(e)=>{setLeft(e.target.value)}}/></div>
        <div id='grid-item'>Right  <input type='text' value={right} onChange={(e)=>{setRight(e.target.value)}}/></div> 
        <div id='grid-item'>Top  <input type='text' value={top} onChange={(e)=>{setTop(e.target.value)}}/> </div>
        <div id='grid-item'>Gripper  <input type='text' value={gripper} onChange={(e)=>{setGripper(e.target.value)}}/> </div>
        </div>
        </div>
         
        </div>
        <div className='grid-parameters-item'><div className='title' style={{margin:'5px 0px'}}>Bleed Margin in mm</div> <br/>
        <div id='grid'>
        <div id='grid-item'>Interlock  <input type='text' value={interlock} onChange={(e)=>{setInterlock(e.target.value)}}/> </div>
        <div id='grid-item'>Side  <input type='text' value={side} onChange={(e)=>{setSide(e.target.value)}}/></div>
        </div>
        </div>
          </div>
        {/*nesting in horizontal form */}
        <div className='grid-item-nesting'>
          {console.log(image.horizontal)}
          <div className='image'><div className='title'style={{textAlign : 'center'}}>Horizontal Interlocking</div><br/>{parse(image.horizontal,options)}</div><br/>
          <div id='grid'>
        <div className='title' style={{textAlign : 'center'}}>{image.horizontal_ups[0]*image.horizontal_ups[1]} Ups  Click to Select For Cost Estimation<input style={{width:'1em'}} name='selection' type='radio' /></div>
      </div> <br/>
      <div id='grid'>
        
          <div id='grid-item'>Max Printable Image Area : </div><div id='grid-item'> 
        {(length && width && top && gripper && right && left)?(<>
        {(units.length === 2)?(<>
        {parseFloat(length)-parseFloat(top)-parseFloat(gripper)}x{parseFloat(width)-parseFloat(right)-parseFloat(left)}[{((parseFloat(length)-parseFloat(top)-parseFloat(gripper))/25.4).toFixed(2)}x{((parseFloat(width)-parseFloat(right)-parseFloat(left))/25.4).toFixed(2)}]</>):(<div id='grid'>
        
        <> {(parseFloat(length)*25.4-parseFloat(top)-parseFloat(gripper)).toFixed(2)} x {(parseFloat(width)*25.4-parseFloat(right)-parseFloat(left)).toFixed(2)}[ {(parseFloat(length)-(parseFloat(top)+parseFloat(gripper))/25.4).toFixed(2)}'' x {(parseFloat(width)-(parseFloat(right)+parseFloat(left))/25.4).toFixed(2)}'']</>
        </div> )}
        </>):(<></>)}
        </div>
          <div id='grid-item'>Utilised Area of Paper [Wstg%]</div><div id='grid-item'>{image.utilised_length_horizontal}*{image.utilised_width_horizontal} [{(image.utilised_length_horizontal/25.4).toFixed(2)}'' * {(image.utilised_width_horizontal/25.4).toFixed(2)}''] {(units.length === 2)?(<>[{(100-100*(image.area*image.horizontal_ups[0]*image.horizontal_ups[1]/parseFloat(length)/parseFloat(width))).toFixed(2)}%]</>):(<>[{(100-100*(image.area*image.horizontal_ups[0]*image.horizontal_ups[1]/parseFloat(length)/parseFloat(width)/25.4/25.4)).toFixed(2)}%]</>)}</div>
            <div id='grid-item'>Suggested Paper Size</div><div id='grid-item'>{(parseFloat(image.utilised_length_horizontal)+parseFloat(top)+parseFloat(gripper))}*{(parseFloat(image.utilised_width_horizontal)+parseFloat(left)+parseFloat(right))}[{((parseFloat(image.utilised_length_horizontal)+parseFloat(top)+parseFloat(gripper))/25.4).toFixed(2)}''*{((parseFloat(image.utilised_width_horizontal)+parseFloat(left)+parseFloat(right))/25.4).toFixed(2)}'']</div>
            <div id='grid-item'>Cut/Crease Blade Length</div><div id='grid-item'>{image.horizontal_cutting_length} [{(image.horizontal_cutting_length/25.4).toFixed(2)}'']/{image.horizontal_creasing_length}[{(image.horizontal_creasing_length/25.4).toFixed(2)}'']</div>
          </div>
          
        
        </div>
            
  </div>
      </>):(<div className='grid-nesting'>
            
            <div className='grid-item-nesting'>
            <div className='image'><div className='title'style={{textAlign : 'center'}}>Vertical Interlocking</div></div>
            </div>
            
            
    {/*parameters box */}
    
    <div className='grid-item-nesting' >
    <div className='grid-parameters'>
          
            <div className='title' style={{textAlign : 'center',fontSize:'medium'}}>{boxstyle}
            <br/>
            {modified_parameters.join('x')} G{modified_glueflap} T{modified_tuckflap}
            </div>
            <div className='grid-parameters-item'>
        <div className='title' style={{'margin':'15px 0px'}}>Print Run Size of Paper<br/><br/>
        Select: 
        Inch <input name='unit' style={{width:'1em'}} onChange={()=>{setUnits('inch')}}  type='radio'/> 
        mm <input name='unit' style={{width:'1em'}} onChange={()=>{setUnits('mm')}} type='radio'/></div>
        
        <div id='grid' style={{'marginTop':'1em'}}>
      
         
        <div id='grid-item'>Height  <input type='text'  value={length} onChange={(e)=>{setLength(e.target.value)}} /></div>
        <div id='grid-item'> Width  <input type='text'  value={width} onChange={(e)=>{setWidth(e.target.value)}}/></div>
        </div></div>
        <div className='grid-parameters-item'>
        <div className='title' style={{'margin':'5px 0px'}}>Specify Margins in mm</div> <br/>
        <div id='grid'>
        <div id='grid-item'>Left  <input type='text' value={left} onChange={(e)=>{setLeft(e.target.value)}}/></div>
        <div id='grid-item'>Right  <input type='text' value={right} onChange={(e)=>{setRight(e.target.value)}}/></div> 
        <div id='grid-item'>Top  <input type='text' value={top} onChange={(e)=>{setTop(e.target.value)}}/> </div>
        <div id='grid-item'>Gripper  <input type='text' value={gripper} onChange={(e)=>{setGripper(e.target.value)}}/> </div>
        </div>
        </div>
       <div className='grid-parameters-item'><div className='title' style={{margin:'5px 0px'}}>Bleed Margin in mm</div> <br/>
        <div id='grid'>
        <div id='grid-item'>Interlock  <input type='text' value={interlock} onChange={(e)=>{setInterlock(e.target.value)}}/> </div>
        <div id='grid-item'>Side  <input type='text' value={side} onChange={(e)=>{setSide(e.target.value)}}/></div>
        </div>
        </div>
        </div>
            </div>
            <div className='grid-item-nesting'>
            <div className='image'><div className='title' style={{textAlign : 'center'}}>Horizontal Interlocking</div></div>
           
            </div>
        </div>)}
   
        <br/>
   <br/>
    <div className='footer'>
      
      <button onClick={(e)=>{handleClick(e)}}>Preview Layouts</button>
      <button onClick={(e)=>{handleClick(e)}}>Refresh Layouts</button>
      <button onClick={()=>{generateNesting(image.vertical,'vertical')}}>Save Vertical Layout As PDF</button>
      <button onClick={()=>{generateNesting(image.horizontal,'horizontal')}}>Save Horiz. Layout As PDF</button>
      <button onClick={()=>{window.location.href = '/dieline'}}>Back To Dieline Creation</button>
    </div>
    </div>
    

  )
}

export default Nesting
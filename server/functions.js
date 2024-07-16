const maker = require('makerjs')
const PDFDocument = require('pdfkit');


const fs = require('fs')
const svgtopdf = require('svg-to-pdfkit');
const { A001, A001A, A001B, A001D, A001E, A001F, A001H, A001I, A001J, A001AX, A002, A002A, A002AX, A002B, A002BX, A002CX, A002D, A002DX, A002E, A002EX, A002F, A002FX, A002X, A002CXX, C001A, C001AX } = require('./design');

function keylinegenerator(svg){
    const svg1 = svg.split('"')
    svg1[1] = (parseInt(svg1[1].slice(0,svg1[1].length-2))+2).toString() + 'mm'
    svg1[3] = (parseInt(svg1[3].slice(0,svg1[3].length-2))+2).toString() + 'mm'
    svg1[5] = svg1[5].split(' ')
    svg1[5][1] = '-1'
    svg1[5][0] = '-1'
    svg1[5][2] = (parseInt(svg1[5][2])+2).toString() 
    svg1[5][3] = (parseInt(svg1[5][3])+2).toString()
    svg1[5] = svg1[5].join(' ')
    svg = svg1.join('"')
    return svg
}

function outlinegenerator  (model,parameters,other_parameters)  {
    const outline = maker.model.outline(model,parseFloat(other_parameters.bleed))
        const model3 = new A001(parameters,other_parameters)
        const outline2 = maker.model.outline(model3,parseFloat(other_parameters.bleed))
        const model4 = new A001D(parameters,other_parameters)
        const outline3 = maker.model.outline(model4,parseFloat(other_parameters.bleed))
        const model5 = new A002BX(parameters,other_parameters)
        const outline4 = maker.model.outline(model5,parseFloat(other_parameters.bleed))


        const model2 = new A001B(parameters,other_parameters)
       const outline1 = maker.model.outline(model2,parseFloat(other_parameters.bleed))
        if(other_parameters.boxstyle === "A001" || other_parameters.boxstyle === "A001A"|| other_parameters.boxstyle === "A001E"){
         
            outline.models['tuckflap'] = maker.model.move(maker.model.mirror(outline2.models['5'],false,true),[-parameters[0]-parameters[1],parameters[2]])
         
           outline.models['glueflap'] =maker.model.move(outline1.models['7'],[0,0])
        }
        if(other_parameters.boxstyle === "A001D"|| other_parameters.boxstyle === "A002E"|| other_parameters.boxstyle === "A002D" || other_parameters.boxstyle === "A001E"|| other_parameters.boxstyle === "A001F"){
            outline.models['window'] = maker.model.move(maker.model.mirror(outline3.models['16'],false,true),[0,parameters[1]+2*parameters[2]])
            outline.models['windowA'] = maker.model.move(maker.model.mirror(outline3.models['8'],false,true),[0,parameters[1]+2*parameters[2]])
        }
        if(other_parameters.boxstyle === "A001H" || other_parameters.boxstyle === "A002FX"|| other_parameters.boxstyle === "A002EX"|| other_parameters.boxstyle === "A001I"|| other_parameters.boxstyle === "A002DX"|| other_parameters.boxstyle === "A001J"){
            outline.models['window'] = maker.model.move(maker.model.mirror(outline3.models['16'],false,true),[-parameters[1]-parameters[0],parameters[1]+2*parameters[2]])
            outline.models['windowA'] = maker.model.move(maker.model.mirror(outline3.models['8'],false,true),[-parameters[0]-parameters[1],parameters[1]+2*parameters[2]])
            
        }
        if(other_parameters.boxstyle === "A002"|| other_parameters.boxstyle === "A002E"  || other_parameters.boxstyle === "A002A" || other_parameters.boxstyle === "A002D" ){
         
            outline.models['tuckflap'] = maker.model.move(maker.model.mirror(maker.model.clone(outline.models['3']),false,true),[0,parameters[2]])
            outline.models['glueflap'] =maker.model.move(outline1.models['7'],[0,0])
            outline.models['box1'] = outline2.models['1']
            outline.models['box2'] = maker.model.move(new maker.models.Rectangle(parameters[1]-1 - 2*parseFloat(other_parameters.bleed),parameters[2]-2*parseFloat(other_parameters.bleed)),[2*parameters[0]+parameters[1]+parseFloat(other_parameters.bleed),parseFloat(other_parameters.bleed)])
            if(other_parameters.boxstyle === "A002D" || other_parameters.boxstyle === "A002E"){
                outline.models['tuckflap'] = maker.model.move(outline2.models['5'],[-parameters[0]-parameters[1],0])
            
            }
           
        }
        if(other_parameters.boxstyle === "A002AX"|| other_parameters.boxstyle ==="A002X"  || other_parameters.boxstyle === "A002F"  || other_parameters.boxstyle === "A002FX"|| other_parameters.boxstyle === "A002EX"|| other_parameters.boxstyle === "A002DX"      ){
           
           
            
           outline.models['glueflap'] =maker.model.move(outline1.models['7'],[0,0])
            outline.models['box1'] = outline2.models['3']
            if(other_parameters.boxstyle !== "A002FX"){
            outline.models['tuckflap'] = maker.model.move(outline1.models['6'],[-parameters[0]-parameters[1]-0.5,0])
            if(other_parameters.boxstyle !== "A002F"){
            outline.models['dustflap'] = outline1.models['8']
            outline.models['tuckflap'] = outline2.models['5']
            }}
            else{
                outline.models['dustflap'] = outline1.models['8']
            }
        }
        if(other_parameters.boxstyle === "A002BX" || other_parameters.boxstyle === "A002CX"    ){
            
           outline.models['glueflap'] =maker.model.move(outline1.models['7'],[0,0])
            outline.models['box1'] = outline2.models['3']
            outline.models['dustflap'] = outline1.models['8']
            outline.models['window2'] = maker.model.move(maker.model.mirror(outline4.models['11'],false,true),[0,parameters[2]]) 
            outline.models['window1'] = maker.model.move(outline4.models['10'],[0,-parameters[2]+other_parameters.modified_tuckflap])
        }
      
        if(other_parameters.boxstyle === "A002B" || other_parameters.boxstyle==="A002CXX" ){
            if(other_parameters.boxstyle === "A002CXX"){
                outline.models['box3'] = outline2.models['3']
            }
            outline.models['tuckflap'] = maker.model.move(maker.model.mirror(outline1.models['5'],false,true),[0,parameters[2]])
            outline.models['glueflap'] =maker.model.move(outline1.models['7'],[0,0])
            outline.models['box1'] = outline2.models['1']
            outline.models['box2'] = maker.model.move(new maker.models.Rectangle(parameters[1]-1 - 2*parseFloat(other_parameters.bleed),parameters[2]-2*parseFloat(other_parameters.bleed)),[2*parameters[0]+parameters[1]+parseFloat(other_parameters.bleed),parseFloat(other_parameters.bleed)])
            outline.models['window2'] = maker.model.move(maker.model.mirror(outline4.models['11'],false,true),[parameters[0]+parameters[1],parameters[2]]) 
            outline.models['window1'] = maker.model.move((maker.model.mirror(outline4.models['10'],false,true)),[parameters[0]+parameters[1],parameters[2]])
            outline.models['window3'] = maker.model.move(outline4.models['11'],[parameters[0]+parameters[1],0]) 
            outline.models['window4'] = maker.model.move(outline4.models['10'],[parameters[0]+parameters[1],0])     
        
        }
        if(other_parameters.boxstyle === "A001B"  ){
         
           
            outline.models['window2'] = maker.model.move(maker.model.mirror(outline4.models['11'],false,true),[parameters[0]+parameters[1],parameters[2]]) 
            outline.models['window1'] = maker.model.move((maker.model.mirror(outline4.models['10'],false,true)),[0,parameters[2]])
            outline.models['window3'] = maker.model.move(outline4.models['11'],[0,0]) 
            outline.models['window4'] = maker.model.move(outline4.models['10'],[parameters[0]+parameters[1],0])     
        
        }
        if(other_parameters.boxstyle === "A001F" || other_parameters.boxstyle === "A002FX"){
         
                      outline.models['window1'] = maker.model.move((maker.model.mirror(outline4.models['10'],false,true)),[0,parameters[2]])
            outline.models['window3'] = maker.model.move(outline4.models['11'],[0,0]) 
           
        }
        if(other_parameters.boxstyle === "A001J"|| other_parameters.boxstyle === "A002F"   ){
         
            outline.models['window1'] = maker.model.move((maker.model.mirror(outline4.models['10'],false,true)),[parameters[0]+parameters[1],parameters[2]])
  outline.models['window3'] = maker.model.move(outline4.models['11'],[parameters[0]+parameters[1],0]) 
 
}
       
      
        const models = {...model.models,...outline.models}
        const model1 = {
            models : models,
            units : 'mm',
            layer : 'silver'
        }
        model1.origin = [0,0] 
        svg =  maker.exporter.toSVG(model1,{strokeWidth:'0.005mm',useSvgPathOnly:'false'})
        return svg
}

const generatekeylinepdf =  (req,res) =>{
   try{ parameters =  req.body.modified_parameters
    other_parameters = req.body
    let svg,model,model2
    
    if(req.body.boxstyle === 'A001'){
       model = new A001(parameters,other_parameters)
      
       
    }
    if(req.body.boxstyle === 'A002'  ) {
        model = new A002(parameters,other_parameters)
      
      
     }
     if(other_parameters.boxstyle === "A002X"){
        model = new A002X(parameters,other_parameters)
     }
    if(req.body.boxstyle === 'A001A'){
         model = new A001A(parameters,other_parameters)
        
        
     }
     if( other_parameters.boxstyle==="A002AX"){
        model = new A002AX(parameters,other_parameters)
     }
     if(req.body.boxstyle === 'A002A' ){
        model = new A002A(parameters,other_parameters)
       
       
    }

     if(req.body.boxstyle === 'A001B'){
         model = new A001B(parameters,other_parameters)
        
        
     }
     if(req.body.boxstyle === 'A001D'){
        model = new A001D(parameters,other_parameters)
       
       
    }
    if(req.body.boxstyle === 'A001E'){
        model = new A001E(parameters,other_parameters)
       
       
    }
    if(req.body.boxstyle === 'A001F'){
        model = new A001F(parameters,other_parameters)
       
       
    }
    if(req.body.boxstyle === 'A001H'){
        model = new A001H(parameters,other_parameters)
       
       
    }
    if(req.body.boxstyle === 'A001I'){
        model = new A001I(parameters,other_parameters)
       
       
    }
    if(req.body.boxstyle === 'A001J'){
        model = new A001J(parameters,other_parameters)
       
       
    }
    if(req.body.boxstyle === 'A001AX'){
        model = new A001AX(parameters,other_parameters)
       
       
    }
   
    
    if(req.body.boxstyle === 'A002CX'){
        model = new A002CX(parameters,other_parameters)
      
       
    }
    
    if(req.body.boxstyle === 'A002CXX'){
        model = new A002CXX(parameters,other_parameters)
      
       
    }
    if(req.body.boxstyle === 'A002B' ){
        model = new A002B(parameters,other_parameters)
        
        
    }
    if(other_parameters.boxstyle === "A002BX"){
        model = new A002BX(parameters,other_parameters)
    }
    if(req.body.boxstyle === 'A002D' ){
        model = new A002D(parameters,other_parameters)
        
       
       
    }
    if(other_parameters.boxstyle === "A002DX"){
        model = new A002DX(parameters,other_parameters)
    }
   
    if( other_parameters.boxstyle === "A002EX"){
        model = new A002EX(parameters,other_parameters)
    }
    if(req.body.boxstyle === 'A002E' ){
        model = new A002E(parameters,other_parameters)
      
       
    }
    if(other_parameters.boxstyle === "A002FX"){
        model = new A002FX(parameters,other_parameters)
    }
    if(req.body.boxstyle === 'A002F' ){
        model = new A002F(parameters,other_parameters)
        
       
       
    }
    if(req.body.boxstyle === 'C001A' ){
        model = new C001A(parameters,other_parameters)
        
       
       
    }
    if(req.body.boxstyle === 'C001AX' ){
        model = new C001AX(parameters,other_parameters)
        
       
       
    }
    
     if(parseFloat(other_parameters.bleed) !== 0){
        svg = outlinegenerator(model,parameters,other_parameters)
    }
        else{
            model.origin = [0,0]
            svg = maker.exporter.toSVG(model,{strokeWidth:'0.005mm',useSvgPathOnly:'false'})
           }
        


    
    const svg1 = svg.split('"')
    const horizontal=(parseInt(svg1[1].slice(0,svg1[1].length - 2))+8)*2.834
    const vertical=(parseInt(svg1[3].slice(0,svg1[3].length -2))+8)*2.834
     const doc2 = new PDFDocument({size:[horizontal,vertical]});
    doc2.pipe(fs.createWriteStream(`${parameters}_${other_parameters.boxstyle}_${other_parameters.type}.pdf`));
    
    svgtopdf(doc2,svg,10,10)
    doc2.end()
     res.send('Success').status(201)}
    catch(err){
        res.status(400).send("Error")
        console.log(err)
    }
} 


const dieline = (req,res)=>{
    
    try{const parameters = req.body.modified_parameters
    const other_parameters = req.body
    let svg,width,height,cutlength,creaselength,area,svg2,actualarea
    if (other_parameters.boxstyle === 'A001'){
        const model = new A001(parameters,other_parameters)
        model.origin = [0,0]
        
        svg = maker.exporter.toSVG(model)
        svg2 = maker.exporter.toSVG(model)
        width = other_parameters.modified_glueflap + 2*parameters[0] + 2*parameters[1] - 1
        height = 2*other_parameters.modified_tuckflap + parameters[2] + parameters[1]*2 
        cutlength = 2*((other_parameters.modified_glueflap**2+225)**0.5) + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*2 - 14 +
            parameters[0] - 14 + 22 + 8)*2 + 2*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
            (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap)
        creaselength = 4*parameters[2] + 4*parameters[0] + 4*parameters[1] - 32
        area =other_parameters.modified_glueflap*15 + other_parameters.modified_glueflap * (parameters[2] - 30)+
(parameters[0] * parameters[1] + (other_parameters.modified_tuckflap - 7)*parameters[0] + 77 + 7*(parameters[0]-14))*2 + 
2*parameters[0]*parameters[2] + 2*parameters[1]*parameters[2] + (0.0018*other_parameters.modified_dustflap**2 + 
other_parameters.modified_dustflap*(0.88*parameters[1] - 10) + 78.5 + (other_parameters.modified_dustflap-10)*10 + 0.036*parameters[1]*other_parameters.modified_dustflap+
0.1*parameters[1]*(0.11*other_parameters.modified_dustflap + 1) + 1 + 0.22*other_parameters.modified_dustflap)*4

    }
    if (other_parameters.boxstyle === 'C001A'){
        const model = new C001A(parameters,other_parameters)
        model.origin = [0,0]
        const model1 = new C001A(parameters,other_parameters)
        
        model1.origin = [0,0]
        svg2 = maker.exporter.toSVG(model1)
        svg = maker.exporter.toSVG(model)
        width = other_parameters.modified_glueflap + 2*parameters[0] + 2*parameters[1] - 1
        height = 2*other_parameters.modified_tuckflap + parameters[2] + parameters[1]*2 
        cutlength = 2*((other_parameters.modified_glueflap**2+225)**0.5) + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*2 - 14 +
            parameters[0] - 14 + 22 + 8)*2 + 2*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
            (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap)
        creaselength = 4*parameters[2] + 4*parameters[0] + 4*parameters[1] - 32
        area =other_parameters.modified_glueflap*15 + other_parameters.modified_glueflap * (parameters[2] - 30)+
(parameters[0] * parameters[1] + (other_parameters.modified_tuckflap - 7)*parameters[0] + 77 + 7*(parameters[0]-14))*2 + 
2*parameters[0]*parameters[2] + 2*parameters[1]*parameters[2] + (0.0018*other_parameters.modified_dustflap**2 + 
other_parameters.modified_dustflap*(0.88*parameters[1] - 10) + 78.5 + (other_parameters.modified_dustflap-10)*10 + 0.036*parameters[1]*other_parameters.modified_dustflap+
0.1*parameters[1]*(0.11*other_parameters.modified_dustflap + 1) + 1 + 0.22*other_parameters.modified_dustflap)*4

    }

    if (other_parameters.boxstyle === 'C001AX'){
        const model = new C001AX(parameters,other_parameters)
        model.origin = [0,0]
        const model1 = new C001AX(parameters,other_parameters)
        
        model1.origin = [0,0]
        svg2 = maker.exporter.toSVG(model1)
        svg = maker.exporter.toSVG(model)
        width = other_parameters.modified_glueflap + 2*parameters[0] + 2*parameters[1] - 1
        height = 2*other_parameters.modified_tuckflap + parameters[2] + parameters[1]*2 
        cutlength = 2*((other_parameters.modified_glueflap**2+225)**0.5) + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*2 - 14 +
            parameters[0] - 14 + 22 + 8)*2 + 2*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
            (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap)
        creaselength = 4*parameters[2] + 4*parameters[0] + 4*parameters[1] - 32
        area =other_parameters.modified_glueflap*15 + other_parameters.modified_glueflap * (parameters[2] - 30)+
(parameters[0] * parameters[1] + (other_parameters.modified_tuckflap - 7)*parameters[0] + 77 + 7*(parameters[0]-14))*2 + 
2*parameters[0]*parameters[2] + 2*parameters[1]*parameters[2] + (0.0018*other_parameters.modified_dustflap**2 + 
other_parameters.modified_dustflap*(0.88*parameters[1] - 10) + 78.5 + (other_parameters.modified_dustflap-10)*10 + 0.036*parameters[1]*other_parameters.modified_dustflap+
0.1*parameters[1]*(0.11*other_parameters.modified_dustflap + 1) + 1 + 0.22*other_parameters.modified_dustflap)*4

    }


    if (other_parameters.boxstyle === 'A002'){
        const model = new A002(parameters,other_parameters)
        model.origin = [0,0]
        const model1 = new A002X(parameters,other_parameters)
        model1.origin = [0,0]
        svg2 = maker.exporter.toSVG(model1)
        svg = maker.exporter.toSVG(model)
        width = other_parameters.modified_glueflap + 2*parameters[0] + 2*parameters[1] - 1
        height = 2*other_parameters.modified_tuckflap + parameters[2] + parameters[1]*2 
        cutlength = 2*((other_parameters.modified_glueflap**2+225)**0.5) + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*2 - 14 +
            parameters[0] - 14 + 22 + 8)*2 + 2*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
            (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap)
        creaselength = 4*parameters[2] + 4*parameters[0] + 4*parameters[1] - 32
        area =other_parameters.modified_glueflap*15 + other_parameters.modified_glueflap * (parameters[2] - 30)+
(parameters[0] * parameters[1] + (other_parameters.modified_tuckflap - 7)*parameters[0] + 77 + 7*(parameters[0]-14))*2 + 
2*parameters[0]*parameters[2] + 2*parameters[1]*parameters[2] + (0.0018*other_parameters.modified_dustflap**2 + 
other_parameters.modified_dustflap*(0.88*parameters[1] - 10) + 78.5 + (other_parameters.modified_dustflap-10)*10 + 0.036*parameters[1]*other_parameters.modified_dustflap+
0.1*parameters[1]*(0.11*other_parameters.modified_dustflap + 1) + 1 + 0.22*other_parameters.modified_dustflap)*4

    }
    if (other_parameters.boxstyle === 'A002X'){
        const model = new A002X(parameters,other_parameters)
        model.origin = [0,0]
        const model1 = new A002(parameters,other_parameters)
        model1.origin = [0,0]
        svg2 = maker.exporter.toSVG(model1)
        svg = maker.exporter.toSVG(model)
        width = other_parameters.modified_glueflap + 2*parameters[0] + 2*parameters[1] - 1
        height = 2*other_parameters.modified_tuckflap + parameters[2] + parameters[1]*2 
        cutlength = 2*((other_parameters.modified_glueflap**2+225)**0.5) + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*2 - 14 +
            parameters[0] - 14 + 22 + 8)*2 + 2*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
            (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap)
        creaselength = 4*parameters[2] + 4*parameters[0] + 4*parameters[1] - 32
        area =other_parameters.modified_glueflap*15 + other_parameters.modified_glueflap * (parameters[2] - 30)+
(parameters[0] * parameters[1] + (other_parameters.modified_tuckflap - 7)*parameters[0] + 77 + 7*(parameters[0]-14))*2 + 
2*parameters[0]*parameters[2] + 2*parameters[1]*parameters[2] + (0.0018*other_parameters.modified_dustflap**2 + 
other_parameters.modified_dustflap*(0.88*parameters[1] - 10) + 78.5 + (other_parameters.modified_dustflap-10)*10 + 0.036*parameters[1]*other_parameters.modified_dustflap+
0.1*parameters[1]*(0.11*other_parameters.modified_dustflap + 1) + 1 + 0.22*other_parameters.modified_dustflap)*4

    }
    if (other_parameters.boxstyle === 'A001A'){
        const model = new A001A(parameters,other_parameters)
        model.origin = [0,0]
        
        svg = maker.exporter.toSVG(model)
        svg2 = maker.exporter.toSVG(model)
        width = other_parameters.modified_glueflap + 2*parameters[0] + 2*parameters[1] - 1
        height = 2*other_parameters.modified_tuckflap + parameters[2] + parameters[1]*2 
        cutlength = 2*((other_parameters.modified_glueflap**2+225)**0.5) + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*2 - 14 +
            parameters[0] - 14 + 22 + 8)*2 + 2*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
            (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap)
            + (parameters[2]/2 - 18) * 2 + (parameters[0]/2 - 18)* 2 + 63
        creaselength = 4*parameters[2] + 4*parameters[0] + 4*parameters[1] - 32
        area =other_parameters.modified_glueflap*15 + other_parameters.modified_glueflap * (parameters[2] - 30)+
(parameters[0] * parameters[1] + (other_parameters.modified_tuckflap - 7)*parameters[0] + 77 + 7*(parameters[0]-14))*2 + 
2*parameters[0]*parameters[2] + 2*parameters[1]*parameters[2] + (0.0018*other_parameters.modified_dustflap**2 + 
other_parameters.modified_dustflap*(0.88*parameters[1] - 10) + 78.5 + (other_parameters.modified_dustflap-10)*10 + 0.036*parameters[1]*other_parameters.modified_dustflap+
0.1*parameters[1]*(0.11*other_parameters.modified_dustflap + 1) + 1 + 0.22*other_parameters.modified_dustflap)*4 

    }
    if (other_parameters.boxstyle === 'A002A'){
        const model = new A002A(parameters,other_parameters)
        model.origin = [0,0]
        const model1 = new A002AX(parameters,other_parameters)
        model1.origin = [0,0]
        svg2 = maker.exporter.toSVG(model1)
        svg = maker.exporter.toSVG(model)
        width = other_parameters.modified_glueflap + 2*parameters[0] + 2*parameters[1] - 1
        height = 2*other_parameters.modified_tuckflap + parameters[2] + parameters[1]*2 
        cutlength = 2*((other_parameters.modified_glueflap**2+225)**0.5) + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*2 - 14 +
            parameters[0] - 14 + 22 + 8)*2 + 2*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
            (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap)
            + (parameters[2]/2 - 18) * 2 + (parameters[0]/2 - 18)* 2 + 63
        creaselength = 4*parameters[2] + 4*parameters[0] + 4*parameters[1] - 32
        area =other_parameters.modified_glueflap*15 + other_parameters.modified_glueflap * (parameters[2] - 30)+
(parameters[0] * parameters[1] + (other_parameters.modified_tuckflap - 7)*parameters[0] + 77 + 7*(parameters[0]-14))*2 + 
2*parameters[0]*parameters[2] + 2*parameters[1]*parameters[2] + (0.0018*other_parameters.modified_dustflap**2 + 
other_parameters.modified_dustflap*(0.88*parameters[1] - 10) + 78.5 + (other_parameters.modified_dustflap-10)*10 + 0.036*parameters[1]*other_parameters.modified_dustflap+
0.1*parameters[1]*(0.11*other_parameters.modified_dustflap + 1) + 1 + 0.22*other_parameters.modified_dustflap)*4 

    }
    if (other_parameters.boxstyle === 'A002AX'){
        const model = new A002AX(parameters,other_parameters)
        model.origin = [0,0]
        const model1 = new A002A(parameters,other_parameters)
        model1.origin = [0,0]
        svg2 = maker.exporter.toSVG(model1)
        svg = maker.exporter.toSVG(model)
        width = other_parameters.modified_glueflap + 2*parameters[0] + 2*parameters[1] - 1
        height = 2*other_parameters.modified_tuckflap + parameters[2] + parameters[1]*2 
        cutlength = 2*((other_parameters.modified_glueflap**2+225)**0.5) + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*2 - 14 +
            parameters[0] - 14 + 22 + 8)*2 + 2*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
            (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap)
            + (parameters[2]/2 - 18) * 2 + (parameters[0]/2 - 18)* 2 + 63
        creaselength = 4*parameters[2] + 4*parameters[0] + 4*parameters[1] - 32
        area =other_parameters.modified_glueflap*15 + other_parameters.modified_glueflap * (parameters[2] - 30)+
(parameters[0] * parameters[1] + (other_parameters.modified_tuckflap - 7)*parameters[0] + 77 + 7*(parameters[0]-14))*2 + 
2*parameters[0]*parameters[2] + 2*parameters[1]*parameters[2] + (0.0018*other_parameters.modified_dustflap**2 + 
other_parameters.modified_dustflap*(0.88*parameters[1] - 10) + 78.5 + (other_parameters.modified_dustflap-10)*10 + 0.036*parameters[1]*other_parameters.modified_dustflap+
0.1*parameters[1]*(0.11*other_parameters.modified_dustflap + 1) + 1 + 0.22*other_parameters.modified_dustflap)*4 

    }
    if (other_parameters.boxstyle === 'A001AX'){
        const model = new A001AX(parameters,other_parameters)
        model.origin = [0,0]
        
        svg = maker.exporter.toSVG(model)
        svg2 = maker.exporter.toSVG(model)
        width = other_parameters.modified_glueflap + 2*parameters[0] + 2*parameters[1] - 1
        height = 2*other_parameters.modified_tuckflap + parameters[2] + parameters[1]*2 
        cutlength = 2*((other_parameters.modified_glueflap**2+225)**0.5) + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*2 - 14 +
            parameters[0] - 14 + 22 + 8)*2 + 2*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
            (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap)
            + (parameters[2]/2 - 18) * 2 + (parameters[0]/2 - 18)* 2 + 63
        creaselength = 4*parameters[2] + 4*parameters[0] + 4*parameters[1] - 32
        area =other_parameters.modified_glueflap*15 + other_parameters.modified_glueflap * (parameters[2] - 30)+
(parameters[0] * parameters[1] + (other_parameters.modified_tuckflap - 7)*parameters[0] + 77 + 7*(parameters[0]-14))*2 + 
2*parameters[0]*parameters[2] + 2*parameters[1]*parameters[2] + (0.0018*other_parameters.modified_dustflap**2 + 
other_parameters.modified_dustflap*(0.88*parameters[1] - 10) + 78.5 + (other_parameters.modified_dustflap-10)*10 + 0.036*parameters[1]*other_parameters.modified_dustflap+
0.1*parameters[1]*(0.11*other_parameters.modified_dustflap + 1) + 1 + 0.22*other_parameters.modified_dustflap)*4 

    }

    if (other_parameters.boxstyle === 'A002BX'){
        const model = new A002BX(parameters,other_parameters)
        model.origin = [0,0]
        svg = maker.exporter.toSVG(model)
        const model1 = new A002B(parameters,other_parameters)
        model1.origin = [0,0]
        svg2 = maker.exporter.toSVG(model1)
        width = other_parameters.modified_glueflap + 2*parameters[0] + 2*parameters[1] - 1
        height = 2*other_parameters.modified_tuckflap + parameters[2] + parameters[1]*2 
        cutlength =  2*((other_parameters.modified_glueflap**2+225)**0.5) + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*6 +
            1.67*parameters[0] - 40 + 47 + 16 -20)*2 + 1.5*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
            (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap)
                    creaselength = 4*parameters[2] + 4.16*parameters[0] + 4*parameters[1] 
        area =other_parameters.modified_glueflap*15 + other_parameters.modified_glueflap * (parameters[2] - 30)+
(parameters[0] * parameters[1] + (other_parameters.modified_tuckflap - 7)*parameters[0] + 77 + 7*(parameters[0]-14))*2 + 
2*parameters[0]*parameters[2] + 2*parameters[1]*parameters[2] + (0.0018*other_parameters.modified_dustflap**2 + 
other_parameters.modified_dustflap*(0.88*parameters[1] - 10) + 78.5 + (other_parameters.modified_dustflap-10)*10 + 0.036*parameters[1]*other_parameters.modified_dustflap+
0.1*parameters[1]*(0.11*other_parameters.modified_dustflap + 1) + 1 + 0.22*other_parameters.modified_dustflap)*4 + (other_parameters.modified_tuckflap - 5)*0.5*parameters[0] + 5*(0.25*parameters[0]-10)*2 + 78.5

    }

    if (other_parameters.boxstyle === 'A002CX'){
        const model = new A002CX(parameters,other_parameters)
        model.origin = [0,0]
        svg = maker.exporter.toSVG(model)
        const model1 = new A002CXX(parameters,other_parameters)
        model1.origin = [0,0]
        svg2 = maker.exporter.toSVG(model1)
        width = other_parameters.modified_glueflap + 2*parameters[0] + 2*parameters[1] - 1
        height = 2*other_parameters.modified_tuckflap + parameters[2] + parameters[1]*2 
        cutlength =  2*((other_parameters.modified_glueflap**2+225)**0.5) + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*6 +
            1.67*parameters[0] - 40 + 47 + 16 -20)*2 + 1.5*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
            (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap)
            + (parameters[2]/2 - 18) * 2 + (parameters[0]/2 - 18)* 2 + 63
                    creaselength = 4*parameters[2] + 4.16*parameters[0] + 4*parameters[1] 
        area =other_parameters.modified_glueflap*15 + other_parameters.modified_glueflap * (parameters[2] - 30)+
(parameters[0] * parameters[1] + (other_parameters.modified_tuckflap - 7)*parameters[0] + 77 + 7*(parameters[0]-14))*2 + 
2*parameters[0]*parameters[2] + 2*parameters[1]*parameters[2] + (0.0018*other_parameters.modified_dustflap**2 + 
other_parameters.modified_dustflap*(0.88*parameters[1] - 10) + 78.5 + (other_parameters.modified_dustflap-10)*10 + 0.036*parameters[1]*other_parameters.modified_dustflap+
0.1*parameters[1]*(0.11*other_parameters.modified_dustflap + 1) + 1 + 0.22*other_parameters.modified_dustflap)*4 + (other_parameters.modified_tuckflap - 5)*0.5*parameters[0] + 5*(0.25*parameters[0]-10)*2 + 78.5
    }


    if (other_parameters.boxstyle === 'A001B'){
        const model = new A001B(parameters,other_parameters)
        model.origin = [0,0]
        
        svg = maker.exporter.toSVG(model)
        svg2 = maker.exporter.toSVG(model)
        width = other_parameters.modified_glueflap + 2*parameters[0] + 2*parameters[1] - 1
        height = 2*other_parameters.modified_tuckflap + parameters[2] + parameters[1]*2 
        cutlength =  2*((other_parameters.modified_glueflap**2+225)**0.5) + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*6 +
            1.67*parameters[0] - 40 + 47 + 16 -20)*2 + 1.5*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
            (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap)
                    creaselength = 4*parameters[2] + 4.16*parameters[0] + 4*parameters[1] 
        area =other_parameters.modified_glueflap*15 + other_parameters.modified_glueflap * (parameters[2] - 30)+
(parameters[0] * parameters[1] + (other_parameters.modified_tuckflap - 7)*parameters[0] + 77 + 7*(parameters[0]-14))*2 + 
2*parameters[0]*parameters[2] + 2*parameters[1]*parameters[2] + (0.0018*other_parameters.modified_dustflap**2 + 
other_parameters.modified_dustflap*(0.88*parameters[1] - 10) + 78.5 + (other_parameters.modified_dustflap-10)*10 + 0.036*parameters[1]*other_parameters.modified_dustflap+
0.1*parameters[1]*(0.11*other_parameters.modified_dustflap + 1) + 1 + 0.22*other_parameters.modified_dustflap)*4 + (other_parameters.modified_tuckflap - 5)*0.5*parameters[0] + 5*(0.25*parameters[0]-10)*2 + 78.5

    }
    if (other_parameters.boxstyle === 'A002B'){
        const model = new A002B(parameters,other_parameters)
        model.origin = [0,0]
        const model1 = new A002BX(parameters,other_parameters)
        model1.origin = [0,0]
        svg2 = maker.exporter.toSVG(model1)
        svg = maker.exporter.toSVG(model)
        width = other_parameters.modified_glueflap + 2*parameters[0] + 2*parameters[1] - 1
        height = 2*other_parameters.modified_tuckflap + parameters[2] + parameters[1]*2 
        cutlength =  2*((other_parameters.modified_glueflap**2+225)**0.5) + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*6 +
            1.67*parameters[0] - 40 + 47 + 16 -20)*2 + 1.5*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
            (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap)
                    creaselength = 4*parameters[2] + 4.16*parameters[0] + 4*parameters[1] 
        area =other_parameters.modified_glueflap*15 + other_parameters.modified_glueflap * (parameters[2] - 30)+
(parameters[0] * parameters[1] + (other_parameters.modified_tuckflap - 7)*parameters[0] + 77 + 7*(parameters[0]-14))*2 + 
2*parameters[0]*parameters[2] + 2*parameters[1]*parameters[2] + (0.0018*other_parameters.modified_dustflap**2 + 
other_parameters.modified_dustflap*(0.88*parameters[1] - 10) + 78.5 + (other_parameters.modified_dustflap-10)*10 + 0.036*parameters[1]*other_parameters.modified_dustflap+
0.1*parameters[1]*(0.11*other_parameters.modified_dustflap + 1) + 1 + 0.22*other_parameters.modified_dustflap)*4 + (other_parameters.modified_tuckflap - 5)*0.5*parameters[0] + 5*(0.25*parameters[0]-10)*2 + 78.5

    }
    if (other_parameters.boxstyle === 'A001D'){
        const model = new A001D(parameters,other_parameters)
        model.origin = [0,0]
        
        svg = maker.exporter.toSVG(model)
        svg2 = maker.exporter.toSVG(model)
        width = other_parameters.modified_glueflap + 2*parameters[0] + 2*parameters[1] - 1
        height = 2*other_parameters.modified_tuckflap + parameters[2] + parameters[1]*2 
        cutlength =  2*(other_parameters.modified_glueflap**2+225)**0.5 + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*2 - 14 +
            parameters[0] - 14 + 22 + 8)*2 + 2*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
            (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap) +
            2*(parameters[1] - 20 + 2*parameters[0]/3 - 0.08*parameters[0] + 31.4 + 6.28*0.03*parameters[1] + 3.14*0.04*parameters[0] )  - 20 + 2*(0.36*other_parameters.modified_tuckflap**2 + 100)**0.5
            creaselength = 4*parameters[2] + 4*parameters[0] + 4*parameters[1] +3*parameters[0] - 20 - 32
        area =other_parameters.modified_glueflap*15 + other_parameters.modified_glueflap * (parameters[2] - 30)+
        (parameters[0] * parameters[1] + (other_parameters.modified_tuckflap - 7)*parameters[0] + 77 + 7*(parameters[0]-14))*2 + 
        2*parameters[0]*parameters[2] + 2*parameters[1]*parameters[2] + (0.0018*other_parameters.modified_dustflap**2 + 
        other_parameters.modified_dustflap*(0.88*parameters[1] - 10) + 78.5 + (other_parameters.modified_dustflap-10)*10 + 0.036*parameters[1]*other_parameters.modified_dustflap+
        0.1*parameters[1]*(0.11*other_parameters.modified_dustflap + 1) + 1 + 0.22*other_parameters.modified_dustflap)*4 +2*((parameters[1]/2 -10)*parameters[0] + (parameters[0]-20)*10 + 157 ) + 3*other_parameters.modified_tuckflap + (parameters[0] - 20)*0.6*other_parameters.modified_tuckflap

    }

    if (other_parameters.boxstyle === 'A002D'){
        const model = new A002D(parameters,other_parameters)
        model.origin = [0,0]
        const model1 = new A002DX(parameters,other_parameters)
        model1.origin = [0,0]
        svg2 = maker.exporter.toSVG(model1)
        svg = maker.exporter.toSVG(model)
        width = other_parameters.modified_glueflap + 2*parameters[0] + 2*parameters[1] - 1
        height = 2*other_parameters.modified_tuckflap + parameters[2] + parameters[1]*2 
        cutlength =  2*(other_parameters.modified_glueflap**2+225)**0.5 + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*2 - 14 +
            parameters[0] - 14 + 22 + 8)*2 + 2*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
            (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap) +
            2*(parameters[1] - 20 + 2*parameters[0]/3 - 0.08*parameters[0] + 31.4 + 6.28*0.03*parameters[1] + 3.14*0.04*parameters[0] )  - 20 + 2*(0.36*other_parameters.modified_tuckflap**2 + 100)**0.5
            creaselength = 4*parameters[2] + 4*parameters[0] + 4*parameters[1] +3*parameters[0] - 20 - 32
        area =other_parameters.modified_glueflap*15 + other_parameters.modified_glueflap * (parameters[2] - 30)+
        (parameters[0] * parameters[1] + (other_parameters.modified_tuckflap - 7)*parameters[0] + 77 + 7*(parameters[0]-14))*2 + 
        2*parameters[0]*parameters[2] + 2*parameters[1]*parameters[2] + (0.0018*other_parameters.modified_dustflap**2 + 
        other_parameters.modified_dustflap*(0.88*parameters[1] - 10) + 78.5 + (other_parameters.modified_dustflap-10)*10 + 0.036*parameters[1]*other_parameters.modified_dustflap+
        0.1*parameters[1]*(0.11*other_parameters.modified_dustflap + 1) + 1 + 0.22*other_parameters.modified_dustflap)*4 +2*((parameters[1]/2 -10)*parameters[0] + (parameters[0]-20)*10 + 157 ) + 3*other_parameters.modified_tuckflap + (parameters[0] - 20)*0.6*other_parameters.modified_tuckflap

    }
    if (other_parameters.boxstyle === 'A002F'){
        const model = new A002F(parameters,other_parameters)
        model.origin = [0,0]
        svg = maker.exporter.toSVG(model)
        const model1 = new A002FX(parameters,other_parameters)
        model1.origin = [0,0]
        svg2 = maker.exporter.toSVG(model1)
        width = other_parameters.modified_glueflap + 2*parameters[0] + 2*parameters[1] - 1
        height = 2*other_parameters.modified_tuckflap + parameters[2] + parameters[1]*2 
        cutlength =  2*(other_parameters.modified_glueflap**2+225)**0.5 + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*2 - 14 +
            parameters[0] - 14 + 22 + 8)*2 + 2*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
            (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap) +
            2*(parameters[1] - 20 + 2*parameters[0]/3 - 0.08*parameters[0] + 31.4 + 6.28*0.03*parameters[1] + 3.14*0.04*parameters[0] )  - 20 + 2*(0.36*other_parameters.modified_tuckflap**2 + 100)**0.5+
            4*other_parameters.modified_tuckflap
            creaselength = 4*parameters[2] + 4*parameters[0] + 4*parameters[1] +3*parameters[0] - 20 - 32 + parameters[0]/2

        area =other_parameters.modified_glueflap*15 + other_parameters.modified_glueflap * (parameters[2] - 30)+
        (parameters[0] * parameters[1] + (other_parameters.modified_tuckflap - 7)*parameters[0] + 77 + 7*(parameters[0]-14))*2 + 
        2*parameters[0]*parameters[2] + 2*parameters[1]*parameters[2] + (0.0018*other_parameters.modified_dustflap**2 + 
        other_parameters.modified_dustflap*(0.88*parameters[1] - 10) + 78.5 + (other_parameters.modified_dustflap-10)*10 + 0.036*parameters[1]*other_parameters.modified_dustflap+
        0.1*parameters[1]*(0.11*other_parameters.modified_dustflap + 1) + 1 + 0.22*other_parameters.modified_dustflap)*4 +2*((parameters[1]/2 -10)*parameters[0] + (parameters[0]-20)*10 + 157 ) + 3*other_parameters.modified_tuckflap + (parameters[0] - 20)*0.6*other_parameters.modified_tuckflap
        +other_parameters.modified_tuckflap*parameters[0]/3 - 16

    }
    if (other_parameters.boxstyle === 'A002FX'){
        const model = new A002FX(parameters,other_parameters)
        model.origin = [0,0]
        const model1 = new A002F(parameters,other_parameters)
        model1.origin = [0,0]
        svg2 = maker.exporter.toSVG(model1)
        svg = maker.exporter.toSVG(model)
        width = other_parameters.modified_glueflap + 2*parameters[0] + 2*parameters[1] - 1
        height = 2*other_parameters.modified_tuckflap + parameters[2] + parameters[1]*2 
        cutlength =  2*(other_parameters.modified_glueflap**2+225)**0.5 + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*2 - 14 +
            parameters[0] - 14 + 22 + 8)*2 + 2*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
            (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap) +
            2*(parameters[1] - 20 + 2*parameters[0]/3 - 0.08*parameters[0] + 31.4 + 6.28*0.03*parameters[1] + 3.14*0.04*parameters[0] )  - 20 + 2*(0.36*other_parameters.modified_tuckflap**2 + 100)**0.5+
            4*other_parameters.modified_tuckflap
            creaselength = 4*parameters[2] + 4*parameters[0] + 4*parameters[1] +3*parameters[0] - 20 - 32 + parameters[0]/2

        area =other_parameters.modified_glueflap*15 + other_parameters.modified_glueflap * (parameters[2] - 30)+
        (parameters[0] * parameters[1] + (other_parameters.modified_tuckflap - 7)*parameters[0] + 77 + 7*(parameters[0]-14))*2 + 
        2*parameters[0]*parameters[2] + 2*parameters[1]*parameters[2] + (0.0018*other_parameters.modified_dustflap**2 + 
        other_parameters.modified_dustflap*(0.88*parameters[1] - 10) + 78.5 + (other_parameters.modified_dustflap-10)*10 + 0.036*parameters[1]*other_parameters.modified_dustflap+
        0.1*parameters[1]*(0.11*other_parameters.modified_dustflap + 1) + 1 + 0.22*other_parameters.modified_dustflap)*4 +2*((parameters[1]/2 -10)*parameters[0] + (parameters[0]-20)*10 + 157 ) + 3*other_parameters.modified_tuckflap + (parameters[0] - 20)*0.6*other_parameters.modified_tuckflap
        +other_parameters.modified_tuckflap*parameters[0]/3 - 16

    }
    if (other_parameters.boxstyle === 'A002E'){
        const model = new A002E(parameters,other_parameters)
        model.origin = [0,0]
        const model1 = new A002EX(parameters,other_parameters)
        model1.origin = [0,0]
        svg2 = maker.exporter.toSVG(model1)
        svg = maker.exporter.toSVG(model)
        width = other_parameters.modified_glueflap + 2*parameters[0] + 2*parameters[1] - 1
        height = 2*other_parameters.modified_tuckflap + parameters[2] + parameters[1]*2 
        cutlength =  2*(other_parameters.modified_glueflap**2+225)**0.5 + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*2 - 14 +
            parameters[0] - 14 + 22 + 8)*2 + 2*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
            (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap) +
            2*(parameters[1] - 20 + 2*parameters[0]/3 - 0.08*parameters[0] + 31.4 + 6.28*0.03*parameters[1] + 3.14*0.04*parameters[0] )  - 20 + 2*(0.36*other_parameters.modified_tuckflap**2 + 100)**0.5
            + (parameters[2]/2 - 18) * 2 + (parameters[0]/2 - 18)* 2 + 63
            creaselength = 4*parameters[2] + 4*parameters[0] + 4*parameters[1] +3*parameters[0] - 20 - 32
        area =other_parameters.modified_glueflap*15 + other_parameters.modified_glueflap * (parameters[2] - 30)+
        (parameters[0] * parameters[1] + (other_parameters.modified_tuckflap - 7)*parameters[0] + 77 + 7*(parameters[0]-14))*2 + 
        2*parameters[0]*parameters[2] + 2*parameters[1]*parameters[2] + (0.0018*other_parameters.modified_dustflap**2 + 
        other_parameters.modified_dustflap*(0.88*parameters[1] - 10) + 78.5 + (other_parameters.modified_dustflap-10)*10 + 0.036*parameters[1]*other_parameters.modified_dustflap+
        0.1*parameters[1]*(0.11*other_parameters.modified_dustflap + 1) + 1 + 0.22*other_parameters.modified_dustflap)*4 +2*((parameters[1]/2 -10)*parameters[0] + (parameters[0]-20)*10 + 157 ) + 3*other_parameters.modified_tuckflap + (parameters[0] - 20)*0.6*other_parameters.modified_tuckflap

    }
    if (other_parameters.boxstyle === 'A002EX'){
        const model = new A002EX(parameters,other_parameters)
        model.origin = [0,0]
        const model1 = new A002E(parameters,other_parameters)
        model1.origin = [0,0]
        svg2 = maker.exporter.toSVG(model1)
        svg = maker.exporter.toSVG(model)
        width = other_parameters.modified_glueflap + 2*parameters[0] + 2*parameters[1] - 1
        height = 2*other_parameters.modified_tuckflap + parameters[2] + parameters[1]*2 
        cutlength =  2*(other_parameters.modified_glueflap**2+225)**0.5 + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*2 - 14 +
            parameters[0] - 14 + 22 + 8)*2 + 2*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
            (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap) +
            2*(parameters[1] - 20 + 2*parameters[0]/3 - 0.08*parameters[0] + 31.4 + 6.28*0.03*parameters[1] + 3.14*0.04*parameters[0] )  - 20 + 2*(0.36*other_parameters.modified_tuckflap**2 + 100)**0.5
            + (parameters[2]/2 - 18) * 2 + (parameters[0]/2 - 18)* 2 + 63
            creaselength = 4*parameters[2] + 4*parameters[0] + 4*parameters[1] +3*parameters[0] - 20 - 32
        area =other_parameters.modified_glueflap*15 + other_parameters.modified_glueflap * (parameters[2] - 30)+
        (parameters[0] * parameters[1] + (other_parameters.modified_tuckflap - 7)*parameters[0] + 77 + 7*(parameters[0]-14))*2 + 
        2*parameters[0]*parameters[2] + 2*parameters[1]*parameters[2] + (0.0018*other_parameters.modified_dustflap**2 + 
        other_parameters.modified_dustflap*(0.88*parameters[1] - 10) + 78.5 + (other_parameters.modified_dustflap-10)*10 + 0.036*parameters[1]*other_parameters.modified_dustflap+
        0.1*parameters[1]*(0.11*other_parameters.modified_dustflap + 1) + 1 + 0.22*other_parameters.modified_dustflap)*4 +2*((parameters[1]/2 -10)*parameters[0] + (parameters[0]-20)*10 + 157 ) + 3*other_parameters.modified_tuckflap + (parameters[0] - 20)*0.6*other_parameters.modified_tuckflap

    }
    if (other_parameters.boxstyle === 'A002DX'){
        const model = new A002DX(parameters,other_parameters)
        model.origin = [0,0]
        const model1 = new A002D(parameters,other_parameters)
        model1.origin = [0,0]
        svg2 = maker.exporter.toSVG(model1)
        svg = maker.exporter.toSVG(model)
        width = other_parameters.modified_glueflap + 2*parameters[0] + 2*parameters[1] - 1
        height = 2*other_parameters.modified_tuckflap + parameters[2] + parameters[1]*2 
        cutlength =  2*(other_parameters.modified_glueflap**2+225)**0.5 + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*2 - 14 +
            parameters[0] - 14 + 22 + 8)*2 + 2*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
            (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap) +
            2*(parameters[1] - 20 + 2*parameters[0]/3 - 0.08*parameters[0] + 31.4 + 6.28*0.03*parameters[1] + 3.14*0.04*parameters[0] )  - 20 + 2*(0.36*other_parameters.modified_tuckflap**2 + 100)**0.5
            creaselength = 4*parameters[2] + 4*parameters[0] + 4*parameters[1] +3*parameters[0] - 20 - 32
        area =other_parameters.modified_glueflap*15 + other_parameters.modified_glueflap * (parameters[2] - 30)+
        (parameters[0] * parameters[1] + (other_parameters.modified_tuckflap - 7)*parameters[0] + 77 + 7*(parameters[0]-14))*2 + 
        2*parameters[0]*parameters[2] + 2*parameters[1]*parameters[2] + (0.0018*other_parameters.modified_dustflap**2 + 
        other_parameters.modified_dustflap*(0.88*parameters[1] - 10) + 78.5 + (other_parameters.modified_dustflap-10)*10 + 0.036*parameters[1]*other_parameters.modified_dustflap+
        0.1*parameters[1]*(0.11*other_parameters.modified_dustflap + 1) + 1 + 0.22*other_parameters.modified_dustflap)*4 +2*((parameters[1]/2 -10)*parameters[0] + (parameters[0]-20)*10 + 157 ) + 3*other_parameters.modified_tuckflap + (parameters[0] - 20)*0.6*other_parameters.modified_tuckflap

    }
    if (other_parameters.boxstyle === 'A001H'){
        const model = new A001H(parameters,other_parameters)
        model.origin = [0,0]
        
        svg = maker.exporter.toSVG(model)
        svg2 = maker.exporter.toSVG(model)
        width = other_parameters.modified_glueflap + 2*parameters[0] + 2*parameters[1] - 1
        height = 2*other_parameters.modified_tuckflap + parameters[2] + parameters[1]*2 
        cutlength =  2*(other_parameters.modified_glueflap**2+225)**0.5 + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*2 - 14 +
            parameters[0] - 14 + 22 + 8)*2 + 2*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
            (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap) +
            2*(parameters[1] - 20 + 2*parameters[0]/3 - 0.08*parameters[0] + 31.4 + 6.28*0.03*parameters[1] + 3.14*0.04*parameters[0] )  - 20 + 2*(0.36*other_parameters.modified_tuckflap**2 + 100)**0.5
            creaselength = 4*parameters[2] + 4*parameters[0] + 4*parameters[1] +3*parameters[0] - 20 - 32
        area =other_parameters.modified_glueflap*15 + other_parameters.modified_glueflap * (parameters[2] - 30)+
        (parameters[0] * parameters[1] + (other_parameters.modified_tuckflap - 7)*parameters[0] + 77 + 7*(parameters[0]-14))*2 + 
        2*parameters[0]*parameters[2] + 2*parameters[1]*parameters[2] + (0.0018*other_parameters.modified_dustflap**2 + 
        other_parameters.modified_dustflap*(0.88*parameters[1] - 10) + 78.5 + (other_parameters.modified_dustflap-10)*10 + 0.036*parameters[1]*other_parameters.modified_dustflap+
        0.1*parameters[1]*(0.11*other_parameters.modified_dustflap + 1) + 1 + 0.22*other_parameters.modified_dustflap)*4 +2*((parameters[1]/2 -10)*parameters[0] + (parameters[0]-20)*10 + 157 ) + 3*other_parameters.modified_tuckflap + (parameters[0] - 20)*0.6*other_parameters.modified_tuckflap

    }
    if (other_parameters.boxstyle === 'A001E'){
        const model = new A001E(parameters,other_parameters)
        model.origin = [0,0]
        
        svg = maker.exporter.toSVG(model)
        svg2 = maker.exporter.toSVG(model)
        width = other_parameters.modified_glueflap + 2*parameters[0] + 2*parameters[1] - 1
        height = 2*other_parameters.modified_tuckflap + parameters[2] + parameters[1]*2 
        cutlength =  2*(other_parameters.modified_glueflap**2+225)**0.5 + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*2 - 14 +
            parameters[0] - 14 + 22 + 8)*2 + 2*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
            (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap) +
            2*(parameters[1] - 20 + 2*parameters[0]/3 - 0.08*parameters[0] + 31.4 + 6.28*0.03*parameters[1] + 3.14*0.04*parameters[0] )  - 20 + 2*(0.36*other_parameters.modified_tuckflap**2 + 100)**0.5+
            (parameters[2]/2 - 18) * 2 + (parameters[0]/2 - 18)* 2 + 63
            creaselength = 4*parameters[2] + 4*parameters[0] + 4*parameters[1] +3*parameters[0] - 20 - 32
        area =other_parameters.modified_glueflap*15 + other_parameters.modified_glueflap * (parameters[2] - 30)+
        (parameters[0] * parameters[1] + (other_parameters.modified_tuckflap - 7)*parameters[0] + 77 + 7*(parameters[0]-14))*2 + 
        2*parameters[0]*parameters[2] + 2*parameters[1]*parameters[2] + (0.0018*other_parameters.modified_dustflap**2 + 
        other_parameters.modified_dustflap*(0.88*parameters[1] - 10) + 78.5 + (other_parameters.modified_dustflap-10)*10 + 0.036*parameters[1]*other_parameters.modified_dustflap+
        0.1*parameters[1]*(0.11*other_parameters.modified_dustflap + 1) + 1 + 0.22*other_parameters.modified_dustflap)*4 +2*((parameters[1]/2 -10)*parameters[0] + (parameters[0]-20)*10 + 157 ) + 3*other_parameters.modified_tuckflap + (parameters[0] - 20)*0.6*other_parameters.modified_tuckflap

    }
    if (other_parameters.boxstyle === 'A001I'){
        const model = new A001I(parameters,other_parameters)
        model.origin = [0,0]
        
        svg = maker.exporter.toSVG(model)
        svg2 = maker.exporter.toSVG(model)
        width = other_parameters.modified_glueflap + 2*parameters[0] + 2*parameters[1] - 1
        height = 2*other_parameters.modified_tuckflap + parameters[2] + parameters[1]*2 
        cutlength =  2*(other_parameters.modified_glueflap**2+225)**0.5 + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*2 - 14 +
            parameters[0] - 14 + 22 + 8)*2 + 2*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
            (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap) +
            2*(parameters[1] - 20 + 2*parameters[0]/3 - 0.08*parameters[0] + 31.4 + 6.28*0.03*parameters[1] + 3.14*0.04*parameters[0] )  - 20 + 2*(0.36*other_parameters.modified_tuckflap**2 + 100)**0.5+
            (parameters[2]/2 - 18) * 2 + (parameters[0]/2 - 18)* 2 + 63
            creaselength = 4*parameters[2] + 4*parameters[0] + 4*parameters[1] +3*parameters[0] - 20 - 32
        area =other_parameters.modified_glueflap*15 + other_parameters.modified_glueflap * (parameters[2] - 30)+
        (parameters[0] * parameters[1] + (other_parameters.modified_tuckflap - 7)*parameters[0] + 77 + 7*(parameters[0]-14))*2 + 
        2*parameters[0]*parameters[2] + 2*parameters[1]*parameters[2] + (0.0018*other_parameters.modified_dustflap**2 + 
        other_parameters.modified_dustflap*(0.88*parameters[1] - 10) + 78.5 + (other_parameters.modified_dustflap-10)*10 + 0.036*parameters[1]*other_parameters.modified_dustflap+
        0.1*parameters[1]*(0.11*other_parameters.modified_dustflap + 1) + 1 + 0.22*other_parameters.modified_dustflap)*4 +2*((parameters[1]/2 -10)*parameters[0] + (parameters[0]-20)*10 + 157 ) + 3*other_parameters.modified_tuckflap + (parameters[0] - 20)*0.6*other_parameters.modified_tuckflap

    }

    if (other_parameters.boxstyle === 'A001F'){
        const model = new A001F(parameters,other_parameters)
        model.origin = [0,0]
        
        svg = maker.exporter.toSVG(model)
        svg2 = maker.exporter.toSVG(model)
        width = other_parameters.modified_glueflap + 2*parameters[0] + 2*parameters[1] - 1
        height = 2*other_parameters.modified_tuckflap + parameters[2] + parameters[1]*2 
        cutlength =  2*(other_parameters.modified_glueflap**2+225)**0.5 + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*2 - 14 +
            parameters[0] - 14 + 22 + 8)*2 + 2*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
            (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap) +
            2*(parameters[1] - 20 + 2*parameters[0]/3 - 0.08*parameters[0] + 31.4 + 6.28*0.03*parameters[1] + 3.14*0.04*parameters[0] )  - 20 + 2*(0.36*other_parameters.modified_tuckflap**2 + 100)**0.5+
            4*other_parameters.modified_tuckflap
            creaselength = 4*parameters[2] + 4*parameters[0] + 4*parameters[1] +3*parameters[0] - 20 - 32 + parameters[0]/2

        area =other_parameters.modified_glueflap*15 + other_parameters.modified_glueflap * (parameters[2] - 30)+
        (parameters[0] * parameters[1] + (other_parameters.modified_tuckflap - 7)*parameters[0] + 77 + 7*(parameters[0]-14))*2 + 
        2*parameters[0]*parameters[2] + 2*parameters[1]*parameters[2] + (0.0018*other_parameters.modified_dustflap**2 + 
        other_parameters.modified_dustflap*(0.88*parameters[1] - 10) + 78.5 + (other_parameters.modified_dustflap-10)*10 + 0.036*parameters[1]*other_parameters.modified_dustflap+
        0.1*parameters[1]*(0.11*other_parameters.modified_dustflap + 1) + 1 + 0.22*other_parameters.modified_dustflap)*4 +2*((parameters[1]/2 -10)*parameters[0] + (parameters[0]-20)*10 + 157 ) + 3*other_parameters.modified_tuckflap + (parameters[0] - 20)*0.6*other_parameters.modified_tuckflap
        +other_parameters.modified_tuckflap*parameters[0]/3 - 16

    }

    if (other_parameters.boxstyle === 'A001J'){
        const model = new A001J(parameters,other_parameters)
        model.origin = [0,0]
        
        svg = maker.exporter.toSVG(model)
        svg2 = maker.exporter.toSVG(model)
        width = other_parameters.modified_glueflap + 2*parameters[0] + 2*parameters[1] - 1
        height = 2*other_parameters.modified_tuckflap + parameters[2] + parameters[1]*2 
        cutlength =  2*(other_parameters.modified_glueflap**2+225)**0.5 + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*2 - 14 +
            parameters[0] - 14 + 22 + 8)*2 + 2*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
            (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap) +
            2*(parameters[1] - 20 + 2*parameters[0]/3 - 0.08*parameters[0] + 31.4 + 6.28*0.03*parameters[1] + 3.14*0.04*parameters[0] )  - 20 + 2*(0.36*other_parameters.modified_tuckflap**2 + 100)**0.5+
            4*other_parameters.modified_tuckflap
            creaselength = 4*parameters[2] + 4*parameters[0] + 4*parameters[1] +3*parameters[0] - 20 - 32 + parameters[0]/2

        area =other_parameters.modified_glueflap*15 + other_parameters.modified_glueflap * (parameters[2] - 30)+
        (parameters[0] * parameters[1] + (other_parameters.modified_tuckflap - 7)*parameters[0] + 77 + 7*(parameters[0]-14))*2 + 
        2*parameters[0]*parameters[2] + 2*parameters[1]*parameters[2] + (0.0018*other_parameters.modified_dustflap**2 + 
        other_parameters.modified_dustflap*(0.88*parameters[1] - 10) + 78.5 + (other_parameters.modified_dustflap-10)*10 + 0.036*parameters[1]*other_parameters.modified_dustflap+
        0.1*parameters[1]*(0.11*other_parameters.modified_dustflap + 1) + 1 + 0.22*other_parameters.modified_dustflap)*4 +2*((parameters[1]/2 -10)*parameters[0] + (parameters[0]-20)*10 + 157 ) + 3*other_parameters.modified_tuckflap + (parameters[0] - 20)*0.6*other_parameters.modified_tuckflap
        +other_parameters.modified_tuckflap*parameters[0]/3 - 16

    }

    
    svg = keylinegenerator(svg)
    svg2 = keylinegenerator(svg2)

    res.status(200).json({message:"Success",svg : svg,svg2 : svg2 , width : width.toFixed(2), height : height.toFixed(2),cut : cutlength.toFixed(2),crease : creaselength.toFixed(2), area:area.toFixed(2)})
}
catch(err){
    console.log(err)
    res.status(400).json({message:'Error'})
}  
    
}

const nesting  = (req,res) => {
    try{
    let area = 0
    let svg_vertical,svg_horizontal,utilised_length_horizontal,utilised_length_vertical,utilised_width_horizontal,utilised_width_vertical
    let vertical_cutting_length, horizontal_cutting_length,vertical_creasing_length,horizontal_creasing_length 
    let [vertical_horizontalup,vertical_verticalup,horizontal_horizontalup,horizontal_verticalup] = [0,0,0,0]
    const parameters = req.body.modified_parameters
    const other_parameters = req.body
    if(other_parameters.units === 'inch'){
        other_parameters.modified_length *= 25.4
        other_parameters.modified_width *= 25.4} 
        
     if(other_parameters.boxstyle === "C001A" || other_parameters.boxstyle === "C001AX"){
        const a = other_parameters.modified_glueflap + 2*parameters[0] + 2*parameters[1]
        const b = other_parameters.modified_tuckflap + 1.75*parameters[1] + parameters[2]
        const c = other_parameters.modified_tuckflap +parameters[1] + parameters[2]  
        const d = 0.75*parameters[1] + parameters[2]
        
        const vertical = other_parameters.modified_length - other_parameters.modified_gripper - other_parameters.modified_top
        const horizontal = other_parameters.modified_width - other_parameters.modified_left - other_parameters.modified_right
    let vertical_verticalup1 = 0,horizontal_horizontalup1 = 0    
        let vertical_model = {}
        let horizontal_model = {}
          while (vertical >= (((vertical_verticalup+1)*b+(vertical_verticalup1)*c+(vertical_verticalup+vertical_verticalup1)*other_parameters.modified_interlock))){
            if(vertical_verticalup>vertical_verticalup1){
                vertical_verticalup1+=1
            }
            else{
                vertical_verticalup+=1
            }
            
        }
        while (horizontal >= (a+(vertical_horizontalup*(other_parameters.modified_side+a)))){
            vertical_horizontalup += 1
        }
        while (horizontal >= (((horizontal_horizontalup+1)*b+horizontal_horizontalup1*c+(vertical_verticalup+vertical_verticalup1)*other_parameters.modified_side))  ){
            if(horizontal_horizontalup>horizontal_horizontalup1){
                horizontal_horizontalup1+=1
            }
            else{
                horizontal_horizontalup+=1
            }
        }
        while(vertical >= (a+(horizontal_verticalup*(other_parameters.modified_interlock+a)))){
            horizontal_verticalup += 1
        }
        for(let i = 0; i < vertical_verticalup;i++){
            for(let j = 0; j < vertical_horizontalup;j++){
                const model1 = new C001AX(parameters,other_parameters)
                const model2 = maker.model.mirror(model1,false,true)
                
                model2.origin = [(req.body.modified_left+j*(a+req.body.modified_side)),-(req.body.modified_top+i*(c+parameters[2]+1.5*parameters[1])+2*i*other_parameters.modified_interlock),]
                vertical_model['v'+i.toString()+j.toString()] = model2
           
                
            }
        }
        for(let i = 0; i < vertical_verticalup1;i++){
            for(let j = 0; j < vertical_horizontalup;j++){
                const model = new C001A(parameters,other_parameters)
            
                model['origin'] = [(req.body.modified_left+j*(a+req.body.modified_side)),-(req.body.modified_top+c+parameters[2]+i*(b+parameters[2]+0.75*parameters[1])+ (2*i+1)* other_parameters.modified_interlock)]
                vertical_model['i'+i.toString()+j.toString()] = model
                
                
            }
        }


        for(let i = 0; i < horizontal_horizontalup;i++){
            for(let j = 0; j < horizontal_verticalup;j++){
                
                const model = new C001A(parameters,other_parameters)
                const model1 = maker.model.rotate(maker.model.mirror(model,false,true),90,[0,0])
                model1.origin = [req.body.modified_left+i*(c+parameters[2]+1.5*parameters[1])+(2*i)*other_parameters.modified_interlock,req.body.modified_top+j*(a+req.body.modified_side)]
                horizontal_model['v'+i.toString()+j.toString()] = model1
                
            }
        }
        
        for(let i = 0; i < horizontal_horizontalup1;i++){
            for(let j = 0; j < horizontal_verticalup;j++){
                
                const model = new C001AX(parameters,other_parameters)
                const model1 = maker.model.rotate(model,90,[0,0])
                model1.origin = [req.body.modified_left+c+parameters[2]+i*(b+parameters[2]+0.75*parameters[1])+(2*i+1)*other_parameters.modified_interlock,req.body.modified_top+j*(a+req.body.modified_side)]
                horizontal_model['i'+i.toString()+j.toString()] = model1
                       
            }
        }
        
        const final_model_vertical = {
            models : vertical_model,
            units : 'mm'
        }
    
        svg_vertical = maker.exporter.toSVG(final_model_vertical)
        vertical_cutting_length = (2*(other_parameters.modified_glueflap**2+225)**0.5 + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*2 - 14 +
            parameters[0] - 14 + 22 + 8)*2 + 2*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
            (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap)
            )*vertical_verticalup*vertical_horizontalup 
        horizontal_cutting_length = (2*(other_parameters.modified_glueflap**2+225)**0.5 + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*2 - 14 +
            parameters[0] - 14 + 22 + 8)*2 + 2*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
            (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap)
            )*horizontal_horizontalup*horizontal_verticalup 
       
            vertical_creasing_length = (4*parameters[2] + 4*parameters[0] + 4*parameters[1] - 32)*vertical_verticalup*vertical_horizontalup
            horizontal_creasing_length = (4*parameters[2] + 4*parameters[0] + 4*parameters[1] - 32)*horizontal_verticalup*horizontal_horizontalup
         

     
        const final_model_horizontal = {
            models : horizontal_model,
            units : 'mm'}

            svg_horizontal = maker.exporter.toSVG(final_model_horizontal)
        vertical_verticalup+=vertical_verticalup1
        horizontal_horizontalup+=horizontal_horizontalup1
        
     }   
    if(other_parameters.boxstyle === "A001"|| other_parameters.boxstyle === "A002X" || other_parameters.boxstyle === "A002B"|| other_parameters.boxstyle === "A002A"|| other_parameters.boxstyle === "A002AX"|| other_parameters.boxstyle === "A002BX"|| other_parameters.boxstyle === "A002CX"|| other_parameters.boxstyle === "A002D"|| other_parameters.boxstyle === "A002DX"|| other_parameters.boxstyle === "A002E"|| other_parameters.boxstyle === "A002EX"|| other_parameters.boxstyle === "A002F"|| other_parameters.boxstyle === "A002FX"|| other_parameters.boxstyle === "A002"|| other_parameters.boxstyle === "A001H"|| other_parameters.boxstyle === "A001AX"|| other_parameters.boxstyle === "A001J" || other_parameters.boxstyle === "A001I"|| other_parameters.boxstyle === "A001A" || other_parameters.boxstyle === "A001B" || other_parameters.boxstyle === "A001D" || other_parameters.boxstyle === "A001E"|| other_parameters.boxstyle === "A001F"){
        const a = other_parameters.modified_glueflap + 2*other_parameters.modified_parameters[0] + 2*other_parameters.modified_parameters[1] -1 
        const b = 2*other_parameters.modified_tuckflap + 2*other_parameters.modified_parameters[1] + other_parameters.modified_parameters[2]
        let c
         c = 0.5+other_parameters.modified_tuckflap + other_parameters.modified_parameters[1] + other_parameters.modified_parameters[2]
        if (other_parameters.boxstyle === "A001B"|| other_parameters.boxstyle === "A002B"|| other_parameters.boxstyle === "A002BX"|| other_parameters.boxstyle === "A002CX"){
            c = 0.5+2*other_parameters.modified_tuckflap + other_parameters.modified_parameters[1] + other_parameters.modified_parameters[2]
        }
        if (other_parameters.boxstyle === "A001D"|| other_parameters.boxstyle === "A002D"|| other_parameters.boxstyle === "A002DX"|| other_parameters.boxstyle === "A002E"|| other_parameters.boxstyle === "A002EX"|| other_parameters.boxstyle === "A002F"|| other_parameters.boxstyle === "A002FX"|| other_parameters.boxstyle === "A001J" || other_parameters.boxstyle === "A001I"|| other_parameters.boxstyle === "A001E"|| other_parameters.boxstyle === "A001F"|| other_parameters.boxstyle === "A001H"){
            c = 0.5+1.6*other_parameters.modified_tuckflap + other_parameters.modified_parameters[1]*2 + other_parameters.modified_parameters[2]
        }        
        const vertical = other_parameters.modified_length - other_parameters.modified_gripper - other_parameters.modified_top
        const horizontal = other_parameters.modified_width - other_parameters.modified_left - other_parameters.modified_right
        
        
        
        let vertical_model = {}
        let horizontal_model = {}
        
        while (vertical >= (b + (vertical_verticalup*(c+other_parameters.modified_interlock)))){
            vertical_verticalup += 1
            
        }
        while (horizontal >= (a+(vertical_horizontalup*(other_parameters.modified_side+a)))){
            vertical_horizontalup += 1
        }
        while (horizontal >= (b + (horizontal_horizontalup*(c+other_parameters.modified_side)))  ){
            horizontal_horizontalup += 1
            
        }
        while(vertical >= (a+(horizontal_verticalup*(other_parameters.modified_interlock+a)))){
            horizontal_verticalup += 1
        }
        if(other_parameters.boxstyle === "A001"){

        
        for(let i = 0; i < vertical_verticalup;i++){
            for(let j = 0; j < vertical_horizontalup;j++){
                
                const model = new A001(parameters,other_parameters)
                model['origin'] = [req.body.modified_left+j*(a+req.body.modified_side),req.body.modified_top+b+i*(c+req.body.modified_interlock)]
                vertical_model['v'+i.toString()+j.toString()] = model
            
            }
        }
        for(let i = 0; i < horizontal_verticalup;i++){
            for(let j = 0; j < horizontal_horizontalup;j++){
                const model = new A001(parameters,other_parameters)
                const model1 = maker.model.rotate(model,90,[0,0])
                model1.origin = [req.body.modified_left+b+j*(c+req.body.modified_interlock),req.body.modified_top+i*(a+req.body.modified_side)]
                horizontal_model['v'+i.toString()+j.toString()] = model1
            }
        }
    }
    if(other_parameters.boxstyle === "A002" ||other_parameters.boxstyle === "A002X"){
        for(let i = 0; i < vertical_verticalup;i++){
            for(let j = 0; j < vertical_horizontalup;j++){
                if(i%2 === 0){
                const model = new A002(parameters,other_parameters)
                model['origin'] = [req.body.modified_left+j*(a+req.body.modified_side),-(req.body.modified_top+b+i*(c+req.body.modified_interlock))]
                vertical_model['v'+i.toString()+j.toString()] = model}
                    else{
                const model1 = new A002X(parameters,other_parameters)
                model1['origin'] = [req.body.modified_left+j*(a+req.body.modified_side),-(req.body.modified_top+b+i*(c+req.body.modified_interlock))]
                vertical_model['v'+i.toString()+j.toString()] = model1}
            }
        }
        for(let i = 0; i < horizontal_verticalup;i++){
            for(let j = 0; j < horizontal_horizontalup;j++){
                if(j%2 === 0){
                const model = new A002(parameters,other_parameters)
                const model1 = maker.model.rotate(model,90,[0,0])
                model1.origin = [req.body.modified_left+b+j*(c+req.body.modified_interlock),req.body.modified_top+i*(a+req.body.modified_side)]
                horizontal_model['v'+i.toString()+j.toString()] = model1}
                else{
                    const model = new A002X(parameters,other_parameters)
                const model1 = maker.model.rotate(model,90,[0,0])
                model1.origin = [req.body.modified_left+b+j*(c+req.body.modified_interlock),req.body.modified_top+i*(a+req.body.modified_side)]
                horizontal_model['v'+i.toString()+j.toString()] = model1
                }
            }
        }
    }
    if(other_parameters.boxstyle === "A002A" || other_parameters.boxstyle === "A002AX"){
        for(let i = 0; i < vertical_verticalup;i++){
            for(let j = 0; j < vertical_horizontalup;j++){
                if(i%2 === 0){
                const model = new A002A(parameters,other_parameters)
                model['origin'] = [req.body.modified_left+j*(a+req.body.modified_side),-(req.body.modified_top+b+i*(c+req.body.modified_interlock))]
                vertical_model['v'+i.toString()+j.toString()] = model}
                    else{
                const model1 = new A002AX(parameters,other_parameters)
                model1['origin'] = [req.body.modified_left+j*(a+req.body.modified_side),-(req.body.modified_top+b+i*(c+req.body.modified_interlock))]
                vertical_model['v'+i.toString()+j.toString()] = model1}
            }
        }
        for(let i = 0; i < horizontal_verticalup;i++){
            for(let j = 0; j < horizontal_horizontalup;j++){
                if(j%2 === 0){
                const model = new A002A(parameters,other_parameters)
                const model1 = maker.model.rotate(model,90,[0,0])
                model1.origin = [req.body.modified_left+b+j*(c+req.body.modified_interlock),req.body.modified_top+i*(a+req.body.modified_side)]
                horizontal_model['v'+i.toString()+j.toString()] = model1}
                else{
                    const model = new A002AX(parameters,other_parameters)
                const model1 = maker.model.rotate(model,90,[0,0])
                model1.origin = [req.body.modified_left+b+j*(c+req.body.modified_interlock),req.body.modified_top+i*(a+req.body.modified_side)]
                horizontal_model['v'+i.toString()+j.toString()] = model1
                }
            }
        }
    }
   
    if(other_parameters.boxstyle === "A002B"){
        for(let i = 0; i < vertical_verticalup;i++){
            for(let j = 0; j < vertical_horizontalup;j++){
                if(i%2 === 0){
                const model = new A002B(parameters,other_parameters)
                model['origin'] = [req.body.modified_left+j*(a+req.body.modified_side),-(req.body.modified_top+b+i*(c+req.body.modified_interlock))]
                vertical_model['v'+i.toString()+j.toString()] = model}
                    else{
                const model1 = new A002BX(parameters,other_parameters)
                model1['origin'] = [req.body.modified_left+j*(a+req.body.modified_side),-(req.body.modified_top+b+i*(c+req.body.modified_interlock))]
                vertical_model['v'+i.toString()+j.toString()] = model1}
            }
        }
        for(let i = 0; i < horizontal_verticalup;i++){
            for(let j = 0; j < horizontal_horizontalup;j++){
                if(j%2 === 0){
                const model = new A002B(parameters,other_parameters)
                const model1 = maker.model.rotate(model,90,[0,0])
                model1.origin = [req.body.modified_left+b+j*(c+req.body.modified_interlock),req.body.modified_top+i*(a+req.body.modified_side)]
                horizontal_model['v'+i.toString()+j.toString()] = model1}
                else{
                    const model = new A002BX(parameters,other_parameters)
                const model1 = maker.model.rotate(model,90,[0,0])
                model1.origin = [req.body.modified_left+b+j*(c+req.body.modified_interlock),req.body.modified_top+i*(a+req.body.modified_side)]
                horizontal_model['v'+i.toString()+j.toString()] = model1
                }
            }
        }
    }
    
    if(other_parameters.boxstyle === "A002CX"){
        for(let i = 0; i < vertical_verticalup;i++){
            for(let j = 0; j < vertical_horizontalup;j++){
                if(i%2 === 0){
                const model = new A002CX(parameters,other_parameters)
                model['origin'] = [req.body.modified_left+j*(a+req.body.modified_side),-(req.body.modified_top+b+i*(c+req.body.modified_interlock))]
                vertical_model['v'+i.toString()+j.toString()] = model}
                    else{
                const model1 = new A002CXX(parameters,other_parameters)
                model1['origin'] = [req.body.modified_left+j*(a+req.body.modified_side),-(req.body.modified_top+b+i*(c+req.body.modified_interlock))]
                vertical_model['v'+i.toString()+j.toString()] = model1}
            }
        }
        for(let i = 0; i < horizontal_verticalup;i++){
            for(let j = 0; j < horizontal_horizontalup;j++){
                if(j%2 === 0){
                const model = new A002CX(parameters,other_parameters)
                const model1 = maker.model.rotate(model,90,[0,0])
                model1.origin = [req.body.modified_left+b+j*(c+req.body.modified_interlock),req.body.modified_top+i*(a+req.body.modified_side)]
                horizontal_model['v'+i.toString()+j.toString()] = model1}
                else{
                    const model = new A002CXX(parameters,other_parameters)
                const model1 = maker.model.rotate(model,90,[0,0])
                model1.origin = [req.body.modified_left+b+j*(c+req.body.modified_interlock),req.body.modified_top+i*(a+req.body.modified_side)]
                horizontal_model['v'+i.toString()+j.toString()] = model1
                }
            }
        }
    }
    if(other_parameters.boxstyle === "A002D" || other_parameters.boxstyle==="A002DX"){
        for(let i = 0; i < vertical_verticalup;i++){
            for(let j = 0; j < vertical_horizontalup;j++){
                if(i%2 === 0){
                const model = new A002D(parameters,other_parameters)
                model['origin'] = [req.body.modified_left+j*(a+req.body.modified_side),-(req.body.modified_top+b+i*(c+req.body.modified_interlock))]
                vertical_model['v'+i.toString()+j.toString()] = model}
                    else{
                const model1 = new A002DX(parameters,other_parameters)
                model1['origin'] = [req.body.modified_left+j*(a+req.body.modified_side),-(req.body.modified_top+b+i*(c+req.body.modified_interlock))]
                vertical_model['v'+i.toString()+j.toString()] = model1}
            }
        }
        for(let i = 0; i < horizontal_verticalup;i++){
            for(let j = 0; j < horizontal_horizontalup;j++){
                if(j%2 === 0){
                const model = new A002D(parameters,other_parameters)
                const model1 = maker.model.rotate(model,90,[0,0])
                model1.origin = [req.body.modified_left+b+j*(c+req.body.modified_interlock),req.body.modified_top+i*(a+req.body.modified_side)]
                horizontal_model['v'+i.toString()+j.toString()] = model1}
                else{
                    const model = new A002DX(parameters,other_parameters)
                const model1 = maker.model.rotate(model,90,[0,0])
                model1.origin = [req.body.modified_left+b+j*(c+req.body.modified_interlock),req.body.modified_top+i*(a+req.body.modified_side)]
                horizontal_model['v'+i.toString()+j.toString()] = model1
                }
            }
        }
    }
    
    if(other_parameters.boxstyle === "A002E" || other_parameters.boxstyle === "A002EX"){
        for(let i = 0; i < vertical_verticalup;i++){
            for(let j = 0; j < vertical_horizontalup;j++){
                if(i%2 === 0){
                const model = new A002E(parameters,other_parameters)
                model['origin'] = [req.body.modified_left+j*(a+req.body.modified_side),-(req.body.modified_top+b+i*(c+req.body.modified_interlock))]
                vertical_model['v'+i.toString()+j.toString()] = model}
                    else{
                const model1 = new A002EX(parameters,other_parameters)
                model1['origin'] = [req.body.modified_left+j*(a+req.body.modified_side),-(req.body.modified_top+b+i*(c+req.body.modified_interlock))]
                vertical_model['v'+i.toString()+j.toString()] = model1}
            }
        }
        for(let i = 0; i < horizontal_verticalup;i++){
            for(let j = 0; j < horizontal_horizontalup;j++){
                if(j%2 === 0){
                const model = new A002E(parameters,other_parameters)
                const model1 = maker.model.rotate(model,90,[0,0])
                model1.origin = [req.body.modified_left+b+j*(c+req.body.modified_interlock),req.body.modified_top+i*(a+req.body.modified_side)]
                horizontal_model['v'+i.toString()+j.toString()] = model1}
                else{
                    const model = new A002EX(parameters,other_parameters)
                const model1 = maker.model.rotate(model,90,[0,0])
                model1.origin = [req.body.modified_left+b+j*(c+req.body.modified_interlock),req.body.modified_top+i*(a+req.body.modified_side)]
                horizontal_model['v'+i.toString()+j.toString()] = model1
                }
            }
        }
    }
   
    if(other_parameters.boxstyle === "A002F" || other_parameters.boxstyle === "A002FX"){
        for(let i = 0; i < vertical_verticalup;i++){
            for(let j = 0; j < vertical_horizontalup;j++){
                if(i%2 === 0){
                const model = new A002F(parameters,other_parameters)
                model['origin'] = [req.body.modified_left+j*(a+req.body.modified_side),-(req.body.modified_top+b+i*(c+req.body.modified_interlock))]
                vertical_model['v'+i.toString()+j.toString()] = model}
                    else{
                const model1 = new A002FX(parameters,other_parameters)
                model1['origin'] = [req.body.modified_left+j*(a+req.body.modified_side),-(req.body.modified_top+b+i*(c+req.body.modified_interlock))]
                vertical_model['v'+i.toString()+j.toString()] = model1}
            }
        }
        for(let i = 0; i < horizontal_verticalup;i++){
            for(let j = 0; j < horizontal_horizontalup;j++){
                if(j%2 === 0){
                const model = new A002F(parameters,other_parameters)
                const model1 = maker.model.rotate(model,90,[0,0])
                model1.origin = [req.body.modified_left+b+j*(c+req.body.modified_interlock),req.body.modified_top+i*(a+req.body.modified_side)]
                horizontal_model['v'+i.toString()+j.toString()] = model1}
                else{
                    const model = new A002FX(parameters,other_parameters)
                const model1 = maker.model.rotate(model,90,[0,0])
                model1.origin = [req.body.modified_left+b+j*(c+req.body.modified_interlock),req.body.modified_top+i*(a+req.body.modified_side)]
                horizontal_model['v'+i.toString()+j.toString()] = model1
                }
            }
        }
    }
  
  

    if(other_parameters.boxstyle === "A001A"){

        
        for(let i = 0; i < vertical_verticalup;i++){
            for(let j = 0; j < vertical_horizontalup;j++){
                
                const model = new A001A(parameters,other_parameters)
                model['origin'] = [req.body.modified_left+j*(a+req.body.modified_side),req.body.modified_top+b+i*(c+req.body.modified_interlock)]
                vertical_model['v'+i.toString()+j.toString()] = model
            
            }
        }
        for(let i = 0; i < horizontal_verticalup;i++){
            for(let j = 0; j < horizontal_horizontalup;j++){
                const model = new A001A(parameters,other_parameters)
                const model1 = maker.model.rotate(model,90,[0,0])
                model1.origin = [req.body.modified_left+b+j*(c+req.body.modified_interlock),req.body.modified_top+i*(a+req.body.modified_side)]
                horizontal_model['v'+i.toString()+j.toString()] = model1
            }
        }
    }
    if(other_parameters.boxstyle === "A001AX"){

        
        for(let i = 0; i < vertical_verticalup;i++){
            for(let j = 0; j < vertical_horizontalup;j++){
                
                const model = new A001AX(parameters,other_parameters)
                model['origin'] = [req.body.modified_left+j*(a+req.body.modified_side),req.body.modified_top+b+i*(c+req.body.modified_interlock)]
                vertical_model['v'+i.toString()+j.toString()] = model
            
            }
        }
        for(let i = 0; i < horizontal_verticalup;i++){
            for(let j = 0; j < horizontal_horizontalup;j++){
                const model = new A001AX(parameters,other_parameters)
                const model1 = maker.model.rotate(model,90,[0,0])
                model1.origin = [req.body.modified_left+b+j*(c+req.body.modified_interlock),req.body.modified_top+i*(a+req.body.modified_side)]
                horizontal_model['v'+i.toString()+j.toString()] = model1
            }
        }
    }
    if(other_parameters.boxstyle === "A001B"){

        
        for(let i = 0; i < vertical_verticalup;i++){
            for(let j = 0; j < vertical_horizontalup;j++){
                
                const model = new A001B(parameters,other_parameters)
                model['origin'] = [req.body.modified_left+j*(a+req.body.modified_side),req.body.modified_top+b+i*(c+req.body.modified_interlock)]
                vertical_model['v'+i.toString()+j.toString()] = model
            
            }
        }
        for(let i = 0; i < horizontal_verticalup;i++){
            for(let j = 0; j < horizontal_horizontalup;j++){
                const model = new A001B(parameters,other_parameters)
                const model1 = maker.model.rotate(model,90,[0,0])
                model1.origin = [req.body.modified_left+b+j*(c+req.body.modified_interlock),req.body.modified_top+i*(a+req.body.modified_side)]
                horizontal_model['v'+i.toString()+j.toString()] = model1
            }
        }
    }
    if(other_parameters.boxstyle === "A001D"){

        
        for(let i = 0; i < vertical_verticalup;i++){
            for(let j = 0; j < vertical_horizontalup;j++){
                
                const model = new A001D(parameters,other_parameters)
                model['origin'] = [req.body.modified_left+j*(a+req.body.modified_side),req.body.modified_top+b+i*(c+req.body.modified_interlock)]
                vertical_model['v'+i.toString()+j.toString()] = model
            
            }
        }
        for(let i = 0; i < horizontal_verticalup;i++){
            for(let j = 0; j < horizontal_horizontalup;j++){
                const model = new A001D(parameters,other_parameters)
                const model1 = maker.model.rotate(model,90,[0,0])
                model1.origin = [req.body.modified_left+b+j*(c+req.body.modified_interlock),req.body.modified_top+i*(a+req.body.modified_side)]
                horizontal_model['v'+i.toString()+j.toString()] = model1
            }
        }
    }
    if(other_parameters.boxstyle === "A001E"){

        
        for(let i = 0; i < vertical_verticalup;i++){
            for(let j = 0; j < vertical_horizontalup;j++){
                
                const model = new A001E(parameters,other_parameters)
                model['origin'] = [req.body.modified_left+j*(a+req.body.modified_side),req.body.modified_top+b+i*(c+req.body.modified_interlock)]
                vertical_model['v'+i.toString()+j.toString()] = model
            
            }
        }
        for(let i = 0; i < horizontal_verticalup;i++){
            for(let j = 0; j < horizontal_horizontalup;j++){
                const model = new A001E(parameters,other_parameters)
                const model1 = maker.model.rotate(model,90,[0,0])
                model1.origin = [req.body.modified_left+b+j*(c+req.body.modified_interlock),req.body.modified_top+i*(a+req.body.modified_side)]
                horizontal_model['v'+i.toString()+j.toString()] = model1
            }
        }
    }
    if(other_parameters.boxstyle === "A001F"){

        
        for(let i = 0; i < vertical_verticalup;i++){
            for(let j = 0; j < vertical_horizontalup;j++){
                
                const model = new A001F(parameters,other_parameters)
                model['origin'] = [req.body.modified_left+j*(a+req.body.modified_side),req.body.modified_top+b+i*(c+req.body.modified_interlock)]
                vertical_model['v'+i.toString()+j.toString()] = model
            
            }
        }
        for(let i = 0; i < horizontal_verticalup;i++){
            for(let j = 0; j < horizontal_horizontalup;j++){
                const model = new A001F(parameters,other_parameters)
                const model1 = maker.model.rotate(model,90,[0,0])
                model1.origin = [req.body.modified_left+b+j*(c+req.body.modified_interlock),req.body.modified_top+i*(a+req.body.modified_side)]
                horizontal_model['v'+i.toString()+j.toString()] = model1
            }
        }
    }
    if(other_parameters.boxstyle === "A001J"){

        
        for(let i = 0; i < vertical_verticalup;i++){
            for(let j = 0; j < vertical_horizontalup;j++){
                
                const model = new A001J(parameters,other_parameters)
                model['origin'] = [req.body.modified_left+j*(a+req.body.modified_side),req.body.modified_top+b+i*(c+req.body.modified_interlock)]
                vertical_model['v'+i.toString()+j.toString()] = model
            
            }
        }
        for(let i = 0; i < horizontal_verticalup;i++){
            for(let j = 0; j < horizontal_horizontalup;j++){
                const model = new A001J(parameters,other_parameters)
                const model1 = maker.model.rotate(model,90,[0,0])
                model1.origin = [req.body.modified_left+b+j*(c+req.body.modified_interlock),req.body.modified_top+i*(a+req.body.modified_side)]
                horizontal_model['v'+i.toString()+j.toString()] = model1
            }
        }
    }
    if(other_parameters.boxstyle === "A001H"){

        
        for(let i = 0; i < vertical_verticalup;i++){
            for(let j = 0; j < vertical_horizontalup;j++){
                
                const model = new A001H(parameters,other_parameters)
                model['origin'] = [req.body.modified_left+j*(a+req.body.modified_side),req.body.modified_top+b+i*(c+req.body.modified_interlock)]
                vertical_model['v'+i.toString()+j.toString()] = model
            
            }
        }
        for(let i = 0; i < horizontal_verticalup;i++){
            for(let j = 0; j < horizontal_horizontalup;j++){
                const model = new A001H(parameters,other_parameters)
                const model1 = maker.model.rotate(model,90,[0,0])
                model1.origin = [req.body.modified_left+b+j*(c+req.body.modified_interlock),req.body.modified_top+i*(a+req.body.modified_side)]
                horizontal_model['v'+i.toString()+j.toString()] = model1
            }
        }
    }
    if(other_parameters.boxstyle === "A001I"){

        
        for(let i = 0; i < vertical_verticalup;i++){
            for(let j = 0; j < vertical_horizontalup;j++){
                
                const model = new A001I(parameters,other_parameters)
                model['origin'] = [req.body.modified_left+j*(a+req.body.modified_side),req.body.modified_top+b+i*(c+req.body.modified_interlock)]
                vertical_model['v'+i.toString()+j.toString()] = model
            
            }
        }
        for(let i = 0; i < horizontal_verticalup;i++){
            for(let j = 0; j < horizontal_horizontalup;j++){
                const model = new A001I(parameters,other_parameters)
                const model1 = maker.model.rotate(model,90,[0,0])
                model1.origin = [req.body.modified_left+b+j*(c+req.body.modified_interlock),req.body.modified_top+i*(a+req.body.modified_side)]
                horizontal_model['v'+i.toString()+j.toString()] = model1
            }
        }
    }
        const vertical_model1 = maker.model.rotate(vertical_model,90,[0,0])
        const final_model_vertical = {
            models : vertical_model1,
            units : 'mm'
        }
        
        svg_vertical = maker.exporter.toSVG(final_model_vertical)
        
        
        
        const final_model_horizontal = {
            models : horizontal_model,
            units : 'mm'}
            svg_horizontal = maker.exporter.toSVG(final_model_horizontal)

            
            if(other_parameters.modified_interlock === 0 && other_parameters.modified_side === 0){
                if(other_parameters.boxstyle === "A001"|| other_parameters.boxstyle === "A002"|| other_parameters.boxstyle === "A002A"|| other_parameters.boxstyle === "A002AX"|| other_parameters.boxstyle === "A002B"|| other_parameters.boxstyle === "A002BX"|| other_parameters.boxstyle === "A002CX"|| other_parameters.boxstyle === "A002D"|| other_parameters.boxstyle === "A002DX"|| other_parameters.boxstyle === "A002E"|| other_parameters.boxstyle === "A002EX"|| other_parameters.boxstyle === "A002F"|| other_parameters.boxstyle === "A002FX"|| other_parameters.boxstyle === "A002X" || other_parameters.boxstyle === "A001A" || other_parameters.boxstyle === "A001AX"  || other_parameters.boxstyle === "A001J" || other_parameters.boxstyle === "A001D" || other_parameters.boxstyle === "A001E"|| other_parameters.boxstyle === "A001I"|| other_parameters.boxstyle === "A001F"|| other_parameters.boxstyle === "A001H"){
                    vertical_cutting_length = (2*(other_parameters.modified_glueflap**2+225)**0.5 + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*2 - 14 +
                        parameters[0] - 14 + 22 + 8)*2 + 2*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
                        (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap)
                        )*vertical_verticalup*vertical_horizontalup 
                    horizontal_cutting_length = (2*(other_parameters.modified_glueflap**2+225)**0.5 + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*2 - 14 +
                        parameters[0] - 14 + 22 + 8)*2 + 2*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
                        (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap)
                        )*horizontal_horizontalup*horizontal_verticalup 
                            if(other_parameters.boxstyle === "A001"|| other_parameters.boxstyle === "A002"|| other_parameters.boxstyle === "A002X"|| other_parameters.boxstyle === "A002A"|| other_parameters.boxstyle === "A002AX" || other_parameters.boxstyle === "A001A"|| other_parameters.boxstyle === "A001AX"){
                                vertical_cutting_length-= (parameters[0]*2 - 28 + parameters[2]-30 +
                                    (parameters[1] - 3 - 0.4*other_parameters.modified_dustflap)*2)*(vertical_verticalup-1)*vertical_horizontalup
                                horizontal_cutting_length -=  (parameters[0]*2 - 28 + parameters[2]-30 +
                                    (parameters[1] - 3 - 0.4*other_parameters.modified_dustflap)*2)*(horizontal_verticalup)*(horizontal_horizontalup-1)
                                }
                            if(other_parameters.boxstyle === "A001D"|| other_parameters.boxstyle === "A002D"|| other_parameters.boxstyle === "A002DX"|| other_parameters.boxstyle === "A002E"|| other_parameters.boxstyle === "A002EX"|| other_parameters.boxstyle === "A002F"|| other_parameters.boxstyle === "A002FX"|| other_parameters.boxstyle === "A001J"|| other_parameters.boxstyle === "A001I"|| other_parameters.boxstyle === "A001H" || other_parameters.boxstyle === "A001E"|| other_parameters.boxstyle === "A001F"){
                                vertical_cutting_length-= (parameters[0] - 20 + parameters[2]-30 
                               )*(vertical_verticalup-1)*vertical_horizontalup
                                horizontal_cutting_length -=  (parameters[0] - 20 + parameters[2]-30 
                               )*(horizontal_verticalup)*(horizontal_horizontalup-1)
                                
                            }
                        }
               
                if(other_parameters.boxstyle === 'A001B'|| other_parameters.boxstyle === "A002B"|| other_parameters.boxstyle === "A002BX"|| other_parameters.boxstyle === "A002CX"){

                     vertical_cutting_length = (2*(other_parameters.modified_glueflap**2+225)**0.5 + 2*parameters[2] - 30  + (2*parameters[1] + other_parameters.modified_tuckflap*6 +
                        1.67*parameters[0] - 40 + 47 + 16 -20)*2 + 1.5*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
                        (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap)  )*vertical_verticalup*vertical_horizontalup - (parameters[0]*0.5 - 20 + parameters[2]-30 
                        )*(vertical_verticalup-1)*vertical_horizontalup
                horizontal_cutting_length = (2*(other_parameters.modified_glueflap**2+225)**0.5 + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*2 - 14 +
                    parameters[0] - 14 + 22 + 8)*2 + 2*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
                    (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap)
                    )*horizontal_horizontalup*horizontal_verticalup - (parameters[0]*0.5 - 20 + parameters[2]-30 )*(horizontal_verticalup)*(horizontal_horizontalup-1)

                }
                    }
                
                    else if (other_parameters.modified_interlock === 0){
                        if(other_parameters.boxstyle === "A001"|| other_parameters.boxstyle === "A002"|| other_parameters.boxstyle === "A002A"|| other_parameters.boxstyle === "A002AX"|| other_parameters.boxstyle === "A002B"|| other_parameters.boxstyle === "A002BX"|| other_parameters.boxstyle === "A002CX"|| other_parameters.boxstyle === "A002D"|| other_parameters.boxstyle === "A002DX"|| other_parameters.boxstyle === "A002E"|| other_parameters.boxstyle === "A002EX"|| other_parameters.boxstyle === "A002F"|| other_parameters.boxstyle === "A002FX"|| other_parameters.boxstyle === "A002X" || other_parameters.boxstyle === "A001A" || other_parameters.boxstyle === "A001AX"  || other_parameters.boxstyle === "A001J" || other_parameters.boxstyle === "A001D" || other_parameters.boxstyle === "A001E"|| other_parameters.boxstyle === "A001I"|| other_parameters.boxstyle === "A001F"|| other_parameters.boxstyle === "A001H"){
                            vertical_cutting_length = (2*(other_parameters.modified_glueflap**2+225)**0.5 + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*2 - 14 +
                                parameters[0] - 14 + 22 + 8)*2 + 2*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
                                (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap)
                                )*vertical_verticalup*vertical_horizontalup 
                            horizontal_cutting_length = (2*(other_parameters.modified_glueflap**2+225)**0.5 + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*2 - 14 +
                                parameters[0] - 14 + 22 + 8)*2 + 2*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
                                (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap)
                                )*horizontal_horizontalup*horizontal_verticalup 
                                    if(other_parameters.boxstyle === "A001"|| other_parameters.boxstyle === "A002"|| other_parameters.boxstyle === "A002X"|| other_parameters.boxstyle === "A002A"|| other_parameters.boxstyle === "A002AX" || other_parameters.boxstyle === "A001A"|| other_parameters.boxstyle === "A001AX"){
                                        vertical_cutting_length-= (parameters[0]*2 - 28 +
                                            (parameters[1] - 3 - 0.4*other_parameters.modified_dustflap)*2)*(vertical_verticalup-1)*vertical_horizontalup
                                        horizontal_cutting_length -=  (parameters[0]*2 - 28 + 
                                            (parameters[1] - 3 - 0.4*other_parameters.modified_dustflap)*2)*(horizontal_verticalup)*(horizontal_horizontalup-1)
                                        }
                                    if(other_parameters.boxstyle === "A001D"|| other_parameters.boxstyle === "A002D"|| other_parameters.boxstyle === "A002DX"|| other_parameters.boxstyle === "A002E"|| other_parameters.boxstyle === "A002EX"|| other_parameters.boxstyle === "A002F"|| other_parameters.boxstyle === "A002FX"|| other_parameters.boxstyle === "A001J"|| other_parameters.boxstyle === "A001I"|| other_parameters.boxstyle === "A001H" || other_parameters.boxstyle === "A001E"|| other_parameters.boxstyle === "A001F"){
                                        vertical_cutting_length-= (parameters[0] - 20  
                                       )*(vertical_verticalup-1)*vertical_horizontalup
                                        horizontal_cutting_length -=  (parameters[0] - 20  
                                       )*(horizontal_verticalup)*(horizontal_horizontalup-1)
                                        
                                    }
                                }
                                if(other_parameters.boxstyle === 'A001B' || other_parameters.boxstyle === "A002B"|| other_parameters.boxstyle === "A002BX"|| other_parameters.boxstyle === "A002CX"){

                                    vertical_cutting_length = (2*(other_parameters.modified_glueflap**2+225)**0.5 + 2*parameters[2] - 30  + (2*parameters[1] + other_parameters.modified_tuckflap*6 +
                                       1.67*parameters[0] - 40 + 47 + 16 -20)*2 + 1.5*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
                                       (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap)  )*vertical_verticalup*vertical_horizontalup - (parameters[0]*0.5 - 20
                                       )*(vertical_verticalup-1)*vertical_horizontalup
                               horizontal_cutting_length = (2*(other_parameters.modified_glueflap**2+225)**0.5 + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*2 - 14 +
                                   parameters[0] - 14 + 22 + 8)*2 + 2*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
                                   (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap)
                                   )*horizontal_horizontalup*horizontal_verticalup - (parameters[0]*0.5 - 20  )*(horizontal_verticalup)*(horizontal_horizontalup-1)
               
                               }
                            }
                    else if (other_parameters.modified_side === 0){
                        if(other_parameters.boxstyle === "A001"|| other_parameters.boxstyle === "A002"|| other_parameters.boxstyle === "A002A"|| other_parameters.boxstyle === "A002AX"|| other_parameters.boxstyle === "A002B"|| other_parameters.boxstyle === "A002BX"|| other_parameters.boxstyle === "A002CX"|| other_parameters.boxstyle === "A002D"|| other_parameters.boxstyle === "A002DX"|| other_parameters.boxstyle === "A002E"|| other_parameters.boxstyle === "A002EX"|| other_parameters.boxstyle === "A002F"|| other_parameters.boxstyle === "A002FX"|| other_parameters.boxstyle === "A002X" || other_parameters.boxstyle === "A001A" || other_parameters.boxstyle === "A001AX"  || other_parameters.boxstyle === "A001J" || other_parameters.boxstyle === "A001D" || other_parameters.boxstyle === "A001E"|| other_parameters.boxstyle === "A001I"|| other_parameters.boxstyle === "A001F"|| other_parameters.boxstyle === "A001H" ){
                            vertical_cutting_length = (2*(other_parameters.modified_glueflap**2+225)**0.5 + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*2 - 14 +
                                parameters[0] - 14 + 22 + 8)*2 + 2*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
                                (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap)
                                )*vertical_verticalup*vertical_horizontalup 
                            horizontal_cutting_length = (2*(other_parameters.modified_glueflap**2+225)**0.5 + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*2 - 14 +
                                parameters[0] - 14 + 22 + 8)*2 + 2*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
                                (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap)
                                )*horizontal_horizontalup*horizontal_verticalup 
                                    if(other_parameters.boxstyle === "A001"|| other_parameters.boxstyle === "A002"|| other_parameters.boxstyle === "A002X"|| other_parameters.boxstyle === "A002A"|| other_parameters.boxstyle === "A002AX" || other_parameters.boxstyle === "A001A"|| other_parameters.boxstyle === "A001AX"){
                                        vertical_cutting_length-= (parameters[2]-30 
                                          )*(vertical_verticalup-1)*vertical_horizontalup
                                        horizontal_cutting_length -=  ( parameters[2]-30)*(horizontal_verticalup)*(horizontal_horizontalup-1)
                                        }
                                    if(other_parameters.boxstyle === "A001D"|| other_parameters.boxstyle === "A002D"|| other_parameters.boxstyle === "A002DX"|| other_parameters.boxstyle === "A002E"|| other_parameters.boxstyle === "A002EX"|| other_parameters.boxstyle === "A002F"|| other_parameters.boxstyle === "A002FX"|| other_parameters.boxstyle === "A001J"|| other_parameters.boxstyle === "A001I"|| other_parameters.boxstyle === "A001H" || other_parameters.boxstyle === "A001E"|| other_parameters.boxstyle === "A001F"){
                                        vertical_cutting_length-= ( parameters[2]-30 
                                       )*(vertical_verticalup-1)*vertical_horizontalup
                                        horizontal_cutting_length -=  ( parameters[2]-30 
                                       )*(horizontal_verticalup)*(horizontal_horizontalup-1)
                                        
                                    }
                                }
                                                   if(other_parameters.boxstyle === 'A001B' || other_parameters.boxstyle === "A002B"|| other_parameters.boxstyle === "A002BX"|| other_parameters.boxstyle === "A002CX"){

                                vertical_cutting_length = (2*(other_parameters.modified_glueflap**2+225)**0.5 + 2*parameters[2] - 30  + (2*parameters[1] + other_parameters.modified_tuckflap*6 +
                                   1.67*parameters[0] - 40 + 47 + 16 -20)*2 + 1.5*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
                                   (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap)  )*vertical_verticalup*vertical_horizontalup - (parameters[2]-30 
                                   )*(vertical_verticalup-1)*vertical_horizontalup
                           horizontal_cutting_length = (2*(other_parameters.modified_glueflap**2+225)**0.5 + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*2 - 14 +
                               parameters[0] - 14 + 22 + 8)*2 + 2*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
                               (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap)
                               )*horizontal_horizontalup*horizontal_verticalup - ( parameters[2]-30 )*(horizontal_verticalup)*(horizontal_horizontalup-1)
           
                           }
                    }
                else{
                    vertical_cutting_length = (2*(other_parameters.modified_glueflap**2+225)**0.5 + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*2 - 14 +
                        parameters[0] - 14 + 22 + 8)*2 + 2*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
                        (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap)
                        )*vertical_verticalup*vertical_horizontalup
                         
                    horizontal_cutting_length = (2*(other_parameters.modified_glueflap**2+225)**0.5 + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*2 - 14 +
                        parameters[0] - 14 + 22 + 8)*2 + 2*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
                        (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap)
                        )*horizontal_horizontalup*horizontal_verticalup
                        if(other_parameters.boxstyle === "A001D"|| other_parameters.boxstyle === "A002D"|| other_parameters.boxstyle === "A002DX"|| other_parameters.boxstyle === "A002E"|| other_parameters.boxstyle === "A002EX"|| other_parameters.boxstyle === "A002F"|| other_parameters.boxstyle === "A002FX"|| other_parameters.boxstyle === "A001J"|| other_parameters.boxstyle === "A001I"|| other_parameters.boxstyle === "A001H"|| other_parameters.boxstyle === "A001F" || other_parameters.boxstyle === "A001E"){
                            vertical_cutting_length += (2*(parameters[1] - 20 + 2*parameters[0]/3 - 0.08*parameters[0] + 31.4 + 6.28*0.03*parameters[1] + 3.14*0.04*parameters[0] )  - 20 + 2*(0.36*other_parameters.modified_tuckflap**2 + 100)**0.5
                            )*vertical_horizontalup*vertical_verticalup
                            horizontal_cutting_length += (2*(parameters[1] - 20 + 2*parameters[0]/3 - 0.08*parameters[0] + 31.4 + 6.28*0.03*parameters[1] + 3.14*0.04*parameters[0] )  - 20 + 2*(0.36*other_parameters.modified_tuckflap**2 + 100)**0.5
                            )*horizontal_horizontalup*horizontal_verticalup
                        } 
                        if(other_parameters.boxstyle === 'A001B'|| other_parameters.boxstyle === "A002B"|| other_parameters.boxstyle === "A002BX"|| other_parameters.boxstyle === "A002CX"){

                            vertical_cutting_length = (2*(other_parameters.modified_glueflap**2+225)**0.5 + 2*parameters[2] - 30  + (2*parameters[1] + other_parameters.modified_tuckflap*6 +
                               1.67*parameters[0] - 40 + 47 + 16 -20)*2 + 1.5*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
                               (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap)  )*vertical_verticalup*vertical_horizontalup 
                       horizontal_cutting_length = (2*(other_parameters.modified_glueflap**2+225)**0.5 + 2*parameters[2] - 30 + (2*parameters[1] + other_parameters.modified_tuckflap*2 - 14 +
                           parameters[0] - 14 + 22 + 8)*2 + 2*parameters[0] + 4* ( 1.025*other_parameters.modified_dustflap + 0.88*parameters[1] - 10 + 16 +
                           (0.01*(parameters[1])**2 + 0.52*(other_parameters.modified_dustflap)**2)**0.5  + 2.24 + 0.11*other_parameters.modified_dustflap)
                           )*horizontal_horizontalup*horizontal_verticalup  
                       }
                    }
                    
                         vertical_creasing_length = (4*parameters[2] + 4*parameters[0] + 4*parameters[1] - 32)*vertical_verticalup*vertical_horizontalup
                        horizontal_creasing_length = (4*parameters[2] + 4*parameters[0] + 4*parameters[1] - 32)*horizontal_verticalup*horizontal_horizontalup
                        if(other_parameters.boxstyle === "A001B"|| other_parameters.boxstyle === "A002B"|| other_parameters.boxstyle === "A002BX"|| other_parameters.boxstyle === "A002CX"){
                            vertical_creasing_length = (4*parameters[2] + 4.16*parameters[0] + 4*parameters[1] - 32)*vertical_verticalup*vertical_horizontalup
                        horizontal_creasing_length = (4*parameters[2] + 4.16*parameters[0] + 4*parameters[1] - 32)*horizontal_verticalup*horizontal_horizontalup
                        area += (other_parameters.modified_tuckflap - 5)*0.5*parameters[0] + 5*(0.25*parameters[0]-10)*2 + 78.5
                
                    }
                    
                        if(other_parameters.boxstyle === "A001D"|| other_parameters.boxstyle === "A002D"|| other_parameters.boxstyle === "A002DX"|| other_parameters.boxstyle === "A002E"|| other_parameters.boxstyle === "A002EX"|| other_parameters.boxstyle === "A002F"|| other_parameters.boxstyle === "A002FX"|| other_parameters.boxstyle === "A001J" || other_parameters.boxstyle === "A001I"|| other_parameters.boxstyle === "A001H"|| other_parameters.boxstyle === "A001E"|| other_parameters.boxstyle === "A001F"){
                            vertical_creasing_length += (3*parameters[0] - 20)*vertical_horizontalup*vertical_verticalup
                            horizontal_creasing_length += (3*parameters[0] - 20)*horizontal_horizontalup*horizontal_verticalup
                            area += 2*((parameters[1]/2 -10)*parameters[0] + (parameters[0]-20)*10 + 157 ) + 3*other_parameters.modified_tuckflap + (parameters[0] - 20)*0.6*other_parameters.modified_tuckflap
                            if(other_parameters.boxstyle === "A001F"|| other_parameters.boxstyle === "A001J"|| other_parameters.boxstyle === "A002F"|| other_parameters.boxstyle === "A002FX"){
                                vertical_cutting_length += (4*other_parameters.modified_tuckflap )*vertical_horizontalup*vertical_verticalup
                                horizontal_cutting_length += (4*other_parameters.modified_tuckflap )*horizontal_horizontalup*horizontal_verticalup
                                vertical_creasing_length += (parameters[0]/2)*vertical_horizontalup*vertical_verticalup
                            horizontal_creasing_length += (parameters[0]/2)*horizontal_horizontalup*horizontal_verticalup
                            area += other_parameters.modified_tuckflap*parameters[0]/3 - 16
                            }
                        }
                        
                        area +=other_parameters.modified_glueflap*15 + other_parameters.modified_glueflap * (parameters[2] - 30)+
                        (parameters[0] * parameters[1] + (other_parameters.modified_tuckflap - 7)*parameters[0] + 77 + 7*(parameters[0]-14))*2 + 
                        2*parameters[0]*parameters[2] + 2*parameters[1]*parameters[2] + (0.0018*other_parameters.modified_dustflap**2 + 
                        other_parameters.modified_dustflap*(0.88*parameters[1] - 10) + 78.5 + (other_parameters.modified_dustflap-10)*10 + 0.036*parameters[1]*other_parameters.modified_dustflap+
                        0.1*parameters[1]*(0.11*other_parameters.modified_dustflap + 1) + 1 + 0.22*other_parameters.modified_dustflap)*4        
                            utilised_length_horizontal = (a+other_parameters.modified_side)*horizontal_verticalup-other_parameters.modified_side
                            utilised_length_vertical = (b + (c+other_parameters.modified_interlock)*(vertical_verticalup-1)).toFixed(0)
                            utilised_width_horizontal = (b + (c+other_parameters.modified_interlock)*(horizontal_horizontalup-1))
                            utilised_width_vertical = ((a+other_parameters.modified_side)*vertical_horizontalup-other_parameters.modified_side).toFixed(0)
                    if (other_parameters.boxstyle === "A001A"|| other_parameters.boxstyle === "A002CX"|| other_parameters.boxstyle === "A002E"|| other_parameters.boxstyle === "A002EX"|| other_parameters.boxstyle === "A001AX" || other_parameters.boxstyle === "A001E"|| other_parameters.boxstyle === "A001I"){
                        vertical_cutting_length += ((parameters[2]/2 - 18) * 2 + (parameters[0]/2 - 18)* 2 + 63)*vertical_verticalup*vertical_horizontalup
                        horizontal_cutting_length += ((parameters[2]/2 - 18) * 2 + (parameters[0]/2 - 18)* 2 + 63

                        )*horizontal_horizontalup*horizontal_verticalup
                        
                    }
                }
                    res.json({'vertical': svg_vertical,'horizontal':svg_horizontal,
                    'vertical_ups':[vertical_verticalup,vertical_horizontalup],
                    'horizontal_ups':[horizontal_verticalup,horizontal_horizontalup],area:area,
                    'vertical_creasing_length': vertical_creasing_length.toFixed(2),
        'horizontal_creasing_length':horizontal_creasing_length.toFixed(2),
        'vertical_cutting_length':vertical_cutting_length.toFixed(2),
        'horizontal_cutting_length':horizontal_cutting_length.toFixed(2),
        'utilised_length_vertical': utilised_length_vertical,
        'utilised_width_vertical' : utilised_width_vertical,
        'utilised_length_horizontal' : utilised_length_horizontal,
        'utilised_width_horizontal' : utilised_width_horizontal
                })
            }
            catch(err){
                console.log(err)
                res.send("Error").status(400)
            }
}

const generateNesting =  (req,res) =>  {
    try{
        req.body.vertical*=2.834
        req.body.horizontal*=2.834

   
                let svg = req.body.image1.replace(/style="stroke:#000;stroke-width:0.25mm;fill:none"/g,'style="stroke:#000;stroke-width:0.1mm;fill:none"')
                const svg1 = svg.split('"')
    svg1[1] = (parseInt(svg1[1].slice(0,svg1[1].length-2))+2).toString() + 'mm'
    svg1[3] = (parseInt(svg1[3].slice(0,svg1[3].length-2))+2).toString() + 'mm'
    svg1[5] = svg1[5].split(' ')
    svg1[5][1] = '-1'
    svg1[5][0] = '-1'
    svg1[5][2] = (parseInt(svg1[5][2])+2).toString() 
    svg1[5][3] = (parseInt(svg1[5][3])+2).toString()
    svg1[5] = svg1[5].join(' ')
    svg = svg1.join('"')
    const doc = new PDFDocument({size:[req.body.horizontal,req.body.vertical]});
                svgtopdf(doc,svg,parseFloat(req.body.left),parseFloat(req.body.top))
              
                if(req.body.style === "vertical"){
                doc.pipe(fs.createWriteStream(`${req.body.modified_parameters}_GF${req.body.modified_glueflap}_TF${req.body.modified_tuckflap}_${req.body.boxstyle}_Vert.pdf`))
                }
                else{
                    doc.pipe(fs.createWriteStream(`${req.body.modified_parameters}_GF${req.body.modified_glueflap}_TF${req.body.modified_tuckflap}_${req.body.boxstyle}_Horz.pdf`))
                }
                doc.end()
        res.send('Success')}
    catch(err){
       
        res.send("Error").status(400)
    }}



module.exports = {dieline,nesting,generatekeylinepdf,generateNesting}
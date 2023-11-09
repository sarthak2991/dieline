

const maker = require('makerjs')



function rectangle1(length,width)  {
    this.paths =  {
        'a' : new maker.paths.Line([0,0],[0,length]),
        'b' : new maker.paths.Line([0,length],[width-0.5,length]),
        'c' : new maker.paths.Line([width,length-1],[width,0]),
        'd' : new maker.paths.Line([width,0],[0,0])
    }
}

function rectangle2 (length,width) {
    this.paths = {
        'a' : new maker.paths.Line([0,0],[0,length-1]),
        'b' : new maker.paths.Line([0.5,length],[width,length]),
        'c' : new maker.paths.Line([width,length],[width,1]),
        'd' : new maker.paths.Line([width-0.5,0],[0,0])
    }
}

function rectangle3 (length,width) {
    this.paths = {
        'a' : new maker.paths.Line([0,1],[0,length]),
        'b' : new maker.paths.Line([0,length],[width,length]),
        'c' : new maker.paths.Line([width,length],[width,1]),
        'd' : new maker.paths.Line([width-0.5,0],[0.5,0])
    }
}
function rectangle6 (length,width) {
    this.paths = {
        'a' : new maker.paths.Line([0,1],[0,length-1]),
        'b' : new maker.paths.Line([0.5,length],[width-0.5,length]),
        'c' : new maker.paths.Line([width,length-1],[width,1]),
        'd' : new maker.paths.Line([width-0.5,0],[0.5,0])
    }
}
function rectangle4 (length,width) {
    this.paths = {
        'a' : new maker.paths.Line([0,1],[0,length]),
        'b' : new maker.paths.Line([0,length],[width-0.5,length]),
        'c' : new maker.paths.Line([width,length-1],[width,0]),
        'd' : new maker.paths.Line([width,0],[0.5,0])
    }
}

function rectangle5 (length,width) {
    this.paths = {
        'a' : new maker.paths.Line([0,1],[0,length-1]),
        'b' : new maker.paths.Line([0.5,length],[width,length]),
        'c' : new maker.paths.Line([width,length],[width,0]),
        'd' : new maker.paths.Line([width,0],[0.5,0])
    }
}

function glueflap(glueflap,height){
    this.paths = {
        'a' : new maker.paths.Line([0,0],[-glueflap,15]),
        'b' : new maker.paths.Line([-glueflap,15],[-glueflap,height-15]),
        'c' : new maker.paths.Line([-glueflap,height-15],[0,height])
        }
}
function tuckflap(width,tuckflap,length){
    this.paths = {
        'a' : new maker.paths.Line([0,0],[0,length]),
        'b' : new maker.paths.Line([0,length],[7.2,length]),
        'c' : new maker.paths.Arc([7.2,length-0.8],0.8,0,90),
        'd' : new maker.paths.Line([8,length-0.8],[8,length-2]),
        'e' : new maker.paths.Line([8,length-0.8],[width-8,length-0.8]),
        'f' : new maker.paths.Arc([width-7.2,length-0.8],0.8,90,180),
        'g' : new maker.paths.Line([width-8,length-0.8],[width-8,length-2]),
        'h' : new maker.paths.Line([width,0],[width,length]),
        'i' : new maker.paths.Line([width-7.2,length],[width,length]),
        'j' : new maker.paths.Line([0.5,length],[0.5,length+tuckflap-7]),
        'k' : new maker.paths.Arc([7.5,length+tuckflap-7],7,90,180),
        'l' : new maker.paths.Line([width-0.5,length],[width-0.5,length+tuckflap-7]),
        'm' : new maker.paths.Arc([width-7.5,length+tuckflap-7],7,0,90),
        'n' : new maker.paths.Line([7.5,length+tuckflap],[width-7.5,length+tuckflap])
    }
}

function tuckflap1(width,tuckflap,length){
    this.paths = {
        'a' : new maker.paths.Line([0,0],[0,length]),
        'b' : new maker.paths.Line([0,length],[0.08*width,length]),
        'c' : new maker.paths.Line([0.08*width,length],[0.08*width,length-0.5]),
        'd' : new maker.paths.Line([0.08*width,length-0.25],[0.37*width,length-0.25]),
        'e' : new maker.paths.Line([0.37*width,length-0.25],[0.63*width,length-0.25]),
        'f' : new maker.paths.Arc([0.5*width,length-0.25],5,180,360),
        'g' : new maker.paths.Line([0.63*width,length-0.25],[0.92*width,length-0.25]),
        'h' : new maker.paths.Line([0.92*width,length],[0.92*width,length-0.5]),
        'i' : new maker.paths.Line([0.92*width,length],[width,length]),
        'j' : new maker.paths.Line([width,length],[width,0]),
        'o' : new maker.paths.Line([0,length],[0,length+tuckflap-10]),
        'k' : new maker.paths.Arc([10,length+tuckflap-10],10,90,180),
        'l' : new maker.paths.Line([width,length],[width,length+tuckflap-10]),
        'm' : new maker.paths.Arc([width-10,length+tuckflap-10],10,0,90),
        'n' : new maker.paths.Line([10,length+tuckflap],[width-10,length+tuckflap])
    }
    this.paths.d.layer = 'green'
    this.paths.g.layer = 'green'
    this.paths.e.layer = 'red'
}

function tuckflap2(width,tuckflap,length){
    this.paths = {
        'a' : new maker.paths.Line([0,0],[0,length]),
        'b' : new maker.paths.Line([0,length],[0.08*width,length]),
        'c' : new maker.paths.Line([0.08*width,length],[0.08*width,length-0.5]),
        'd' : new maker.paths.Line([0.08*width,length-0.25],[0.92*width,length-0.25]),
        'h' : new maker.paths.Line([0.92*width,length],[0.92*width,length-0.5]),
        'i' : new maker.paths.Line([0.92*width,length],[width,length]),
        'j' : new maker.paths.Line([width,length],[width,0]),
        'o' : new maker.paths.Line([0,length],[0,length+tuckflap-10]),
        'k' : new maker.paths.Arc([10,length+tuckflap-10],10,90,180),
        'l' : new maker.paths.Line([width,length],[width,length+tuckflap-10]),
        'm' : new maker.paths.Arc([width-10,length+tuckflap-10],10,0,90),
        'n' : new maker.paths.Line([10,length+tuckflap],[width-10,length+tuckflap])
    }
}

function offset()  {
    this.paths = {
        'a' : new maker.paths.Arc([0.5,0.5],0.5,180,360),
        'b' : new maker.paths.Line([1,0.5],[1,1]),
        'c' : new maker.paths.Line([0,0.5],[0,1])
    }
}
function dustflap(dustflap,width){
    this.paths = {
        'a' : new maker.paths.Line([0,0],[0.06*dustflap,0.06*dustflap]),
        'b' : new maker.paths.Line([0.06*dustflap,0.06*dustflap],[0.06*dustflap,dustflap]),
        'c' : new maker.paths.Line([0.06*dustflap,dustflap],[0.88*width-10,dustflap]),
        'd' : new maker.paths.Arc([0.88*width-10,dustflap-10],10,10,90),
        'e' : new maker.paths.Line([0.88*width-0.15,dustflap-8.26],[0.98*width,0.12*dustflap]),
        'f' : new maker.paths.Line([0.98*width,0.12*dustflap],[width-0.5,0.1*dustflap]),
        'g' : new maker.paths.Line([width-0.5,0.1*dustflap],[width-0.5,0]),
        'h' : new maker.paths.Line([width-0.5,0],[width,0])
    }
}

function dustflap2(dustflap,width){
    this.paths = {
        'a' : new maker.paths.Line([0,0],[0.06*dustflap,0.06*dustflap]),
        'b' : new maker.paths.Line([0.06*dustflap,0.06*dustflap],[0.06*dustflap,dustflap]),
        'c' : new maker.paths.Line([0.06*dustflap,dustflap],[0.88*width-10,dustflap]),
        'd' : new maker.paths.Arc([0.88*width-10,dustflap-10],10,10,90),
        'e' : new maker.paths.Line([0.88*width-0.15,dustflap-8.26],[0.98*width,0.12*dustflap]),
        'f' : new maker.paths.Line([0.98*width,0.12*dustflap],[width-0.5,0.1*dustflap]),
        'g' : new maker.paths.Line([width-0.5,0.1*dustflap],[width-0.5,0]),
        'h' : new maker.paths.Line([width-0.5,0],[width+0.5,0])
    }
}

function dustflap1(dustflap,width){
    this.paths = {
        'a' : new maker.paths.Line([0,0],[0.06*dustflap,0.06*dustflap]),
        'b' : new maker.paths.Line([0.06*dustflap,0.06*dustflap],[0.06*dustflap,dustflap]),
        'c' : new maker.paths.Line([0.06*dustflap,dustflap],[0.88*width-10,dustflap]),
        'd' : new maker.paths.Arc([0.88*width-10,dustflap-10],10,10,90),
        'e' : new maker.paths.Line([0.88*width-0.15,dustflap-8.26],[0.98*width,0.12*dustflap]),
        'f' : new maker.paths.Line([0.98*width,0.12*dustflap],[width-0.5,0.1*dustflap]),
        'g' : new maker.paths.Line([width-0.5,0.1*dustflap],[width-0.5,0]),
 
    }
}

function windowA(parameters,other_parameters){
    this.paths = {
        'a' : new maker.paths.Line([1.25*parameters[0]+parameters[1]-1,0.25*parameters[2]+9],[1.25*parameters[0]+parameters[1]-1,0.75*parameters[2]-9]),
        'b' : new maker.paths.Arc([1.25*parameters[0]+parameters[1]+9,0.75*parameters[2]-9],10,90,180),
        'c' : new maker.paths.Line([1.25*parameters[0]+parameters[1]+9,0.75*parameters[2]+1],[1.75*parameters[0]+parameters[1]-9,0.75*parameters[2]+1]),
        'd' : new maker.paths.Arc([1.75*parameters[0]+parameters[1]-9,0.75*parameters[2]-9],10,0,90),
        'e' : new maker.paths.Line([1.75*parameters[0]+parameters[1]+1,0.75*parameters[2]-9],[1.75*parameters[0]+parameters[1]+1,0.25*parameters[2]+9]),
        'f' : new maker.paths.Arc([1.75*parameters[0]+parameters[1]-9,0.25*parameters[2]+9],10,270,360),
        'g' : new maker.paths.Line([1.75*parameters[0]+parameters[1]-9,0.25*parameters[2]-1],[1.25*parameters[0]+parameters[1]+9,0.25*parameters[2]-1]),
        'h' : new maker.paths.Arc([1.25*parameters[0]+parameters[1]+9,0.25*parameters[2]+9],10,180,270)
  
    }
}

function windowB(parameters,other_parameters)  {
    this.paths = {
        'a' : new maker.paths.Line([0.375*parameters[0],parameters[2]-other_parameters.modified_tuckflap],[0.375*parameters[0],parameters[2]+other_parameters.modified_tuckflap-5]),
        'b' : new maker.paths.Arc([0.375*parameters[0]+5,parameters[2]+other_parameters.modified_tuckflap-5],5,90,180),
        'c' : new maker.paths.Line([0.375*parameters[0]+5,parameters[2]+other_parameters.modified_tuckflap],[0.625*parameters[0]-5,parameters[2]+other_parameters.modified_tuckflap]),
        'd' : new maker.paths.Arc([0.625*parameters[0]-5,parameters[2]+other_parameters.modified_tuckflap-5],5,0,90),
        'e' : new maker.paths.Line([0.625*parameters[0],parameters[2]+other_parameters.modified_tuckflap-5],[0.625*parameters[0],parameters[2]-other_parameters.modified_tuckflap]),
        'f' : new maker.paths.Line([0.625*parameters[0],parameters[2]-other_parameters.modified_tuckflap],[0.375*parameters[0],parameters[2]-other_parameters.modified_tuckflap]),
        
    }
    this.paths.f.layer = 'green'    
}


function windowD(parameters,other_parameters) {
    this.paths = {
        'a' : new maker.paths.Line([0,0],[0,parameters[1]/2 - 10]),
        'b' : new maker.paths.Arc([10,parameters[1]/2 - 10 ],10,90,180),
        'c' : new maker.paths.Line([10,parameters[1]/2],[parameters[0]-10,parameters[1]/2]),
        'd' : new maker.paths.Arc([parameters[0]-10,parameters[1]/2 -10],10,0,90),
        'e' : new maker.paths.Line([parameters[0],parameters[1]/2 - 10],[parameters[0],0]),
        'f' : new maker.paths.Line([0,0],[parameters[0],0]),
        'j' : new maker.paths.Line([parameters[0]/3 + 0.03*parameters[1],0.22*parameters[1]],[2*parameters[0]/3 - 0.03*parameters[1],0.22*parameters[1]]),
        'k' : new maker.paths.Arc([parameters[0]/3 + 0.03*parameters[1],0.25*parameters[1]],0.03*parameters[1],90,270),
        'l' : new maker.paths.Arc([2*parameters[0]/3 - 0.03*parameters[1],0.25*parameters[1]],0.03*parameters[1],270,90),
        'm' : new maker.paths.Line([parameters[0]/3 + 0.03*parameters[1],0.28*parameters[1]],[parameters[0]*0.46 , 0.28*parameters[1] ]),
        'n' : new maker.paths.Line([parameters[0]*0.54,0.28*parameters[1]],[2*parameters[0]/3 - 0.03*parameters[1], 0.28*parameters[1] ]),
        'o' : new maker.paths.Arc([parameters[0]/2 ,0.28*parameters[1]],0.04*parameters[0],0,180)           
    }
    this.paths.c.layer = 'green'
this.paths.f.layer = 'green'

}


function A001(parameters,other_parameters){
    
    this.models = {
        s1 : new rectangle1(parameters[2],parameters[0]),
        s2 : maker.model.move(new rectangle2(parameters[2],parameters[1]),[parameters[0],0]),
        s3 : maker.model.move(new rectangle3(parameters[2],parameters[0]),[parameters[0]+parameters[1],0]),
        s4 : maker.model.move(maker.model.mirror(new rectangle1(parameters[2],parameters[1]-1),true,true),[2*parameters[0]+2*parameters[1]-1,parameters[2]]),
        s5 : new glueflap(other_parameters.modified_glueflap,parameters[2]),
        s6 : maker.model.move(new tuckflap(parameters[0]-0.5,other_parameters.modified_tuckflap,parameters[1]+0.5),[0,parameters[2]]),
        s7 : maker.model.move(maker.model.mirror(new tuckflap(parameters[0]-1,other_parameters.modified_tuckflap,parameters[1]+0.5),false,true),[parameters[0]+parameters[1]+0.5,0]),
        s8 : maker.model.move(new offset(),[parameters[0]-0.5,parameters[2]-1]),
        s9 : maker.model.move(maker.model.mirror(new offset(),true,true),[parameters[0]+parameters[1]+0.5,1]),
        s10 : maker.model.move(maker.model.mirror(new offset(),false,true),[2*parameters[0]+parameters[1]-0.5,1]),
        s11 : maker.model.move(new dustflap(other_parameters.modified_dustflap,parameters[1]-0.5),[parameters[0]+0.5,parameters[2]]),
        s12 : maker.model.move(maker.model.mirror(new dustflap(other_parameters.modified_dustflap,parameters[1]-1),true,false),[2*parameters[0]+2*parameters[1]-1,parameters[2]]),
        s13 : maker.model.move(maker.model.mirror(new dustflap(other_parameters.modified_dustflap,parameters[1]-0.5),true,true),[parameters[0]+parameters[1]-0.5,0]),
        s14 : maker.model.move(maker.model.mirror(new dustflap1(other_parameters.modified_dustflap,parameters[1]-1),false,true),[2*parameters[0]+parameters[1]+0.5,0])
    }   
    this.units = maker.unitType.Millimeter
    this.models.s1.layer = 'green'
    this.models.s1.paths.d.layer = 'red'
    this.models.s2.layer = 'green'
    this.models.s3.layer = 'green'
    this.models.s3.paths.b.layer = 'red'
    this.models.s4.layer = 'green'
    this.models.s4.paths.a.layer = 'red'
    this.models.s5.layer = 'red'
    this.models.s6.layer = 'red'
    this.models.s6.paths.e.layer = 'green'
    this.models.s7.layer = 'red'
    this.models.s7.paths.e.layer = 'green'
    this.models.s8.layer = 'red'
    this.models.s9.layer = 'red'
    this.models.s10.layer = 'red'
    this.models.s11.layer = 'red'
    this.models.s12.layer = 'red'
    this.models.s13.layer = 'red'
    this.models.s14.layer = 'red'
}


function A002(parameters,other_parameters){
    
    this.models = {
        s1 : maker.model.move(maker.model.mirror(new rectangle5(parameters[2],parameters[0]),true,false),[parameters[0],0]),
        s2 : maker.model.move(new rectangle5(parameters[2],parameters[1]),[parameters[0],0]),
        s3 : maker.model.move(new maker.models.Rectangle(parameters[0],parameters[2]),[parameters[0]+parameters[1],0]),
        s4 : maker.model.move(new maker.models.Rectangle(parameters[1]-1,parameters[2]),[2*parameters[0]+parameters[1],0]),
        s5 : new glueflap(other_parameters.modified_glueflap,parameters[2]),
        s6 : maker.model.move(new tuckflap(parameters[0]-0.5,other_parameters.modified_tuckflap,parameters[1]+0.5),[0,parameters[2]]),
        s7 : maker.model.move(maker.model.mirror(new tuckflap(parameters[0]-0.5,other_parameters.modified_tuckflap,parameters[1]+0.5),false,true),[0,0]),
        s8 : maker.model.move(new offset(),[parameters[0]-0.5,parameters[2]-1]),
         s10 : maker.model.move(maker.model.mirror(new offset(),false,true),[parameters[0]-0.5,1]),
        s11 : maker.model.move(new dustflap(other_parameters.modified_dustflap,parameters[1]-0.5),[parameters[0]+0.5,parameters[2]]),
        s12 : maker.model.move(maker.model.mirror(new dustflap(other_parameters.modified_dustflap,parameters[1]-1),true,false),[2*parameters[0]+2*parameters[1]-1,parameters[2]]),
        s13 : maker.model.move(maker.model.mirror(new dustflap(other_parameters.modified_dustflap,parameters[1]-1),true,true),[2*parameters[0]+2*parameters[1]-1,0]),
        s14 : maker.model.move(maker.model.mirror(new dustflap1(other_parameters.modified_dustflap,parameters[1]-1),false,true),[parameters[0]+0.5,0])
    }   
    
    this.units = maker.unitType.Millimeter
    this.models.s1.layer = 'green'
    this.models.s1.paths.d.layer = 'red'
    this.models.s2.layer = 'green'
    this.models.s3.paths.ShapeLine1.layer = 'red'
    this.models.s3.paths.ShapeLine3.layer = 'red'
    this.models.s3.layer = 'green'
    this.models.s4.paths.ShapeLine2.layer = 'red'
    this.models.s4.layer = 'green'
    this.models.s5.layer = 'red'
    this.models.s6.layer = 'red'
    this.models.s6.paths.e.layer = 'green'
    this.models.s7.layer = 'red'
    this.models.s7.paths.e.layer = 'green'
    this.models.s8.layer = 'red'
    
    this.models.s10.layer = 'red'
    this.models.s11.layer = 'red'
    this.models.s12.layer = 'red'
    this.models.s13.layer = 'red'
    this.models.s14.layer = 'red'
}

function A002B(parameters,other_parameters){
    
    this.models = {
        s1 : maker.model.move(maker.model.mirror(new rectangle5(parameters[2],parameters[0]),true,false),[parameters[0],0]),
        s2 : maker.model.move(new rectangle5(parameters[2],parameters[1]),[parameters[0],0]),
        s3 : maker.model.move(new maker.models.Rectangle(parameters[0],parameters[2]),[parameters[0]+parameters[1],0]),
        s4 : maker.model.move(new maker.models.Rectangle(parameters[1]-1,parameters[2]),[2*parameters[0]+parameters[1],0]),
        s5 : new glueflap(other_parameters.modified_glueflap,parameters[2]),
        s6 : maker.model.move(new tuckflap1(parameters[0]-0.5,other_parameters.modified_tuckflap,parameters[1]+0.5),[0,parameters[2]]),
        s7 : maker.model.move(maker.model.mirror(new tuckflap1(parameters[0]-0.5,other_parameters.modified_tuckflap,parameters[1]+0.5),false,true),[0,0]),
        s8 : maker.model.move(new offset(),[parameters[0]-0.5,parameters[2]-1]),
         s10 : maker.model.move(maker.model.mirror(new offset(),false,true),[parameters[0]-0.5,1]),
        s11 : maker.model.move(new dustflap(other_parameters.modified_dustflap,parameters[1]-0.5),[parameters[0]+0.5,parameters[2]]),
        s12 : maker.model.move(maker.model.mirror(new dustflap(other_parameters.modified_dustflap,parameters[1]-1),true,false),[2*parameters[0]+2*parameters[1]-1,parameters[2]]),
        s13 : maker.model.move(maker.model.mirror(new dustflap(other_parameters.modified_dustflap,parameters[1]-1),true,true),[2*parameters[0]+2*parameters[1]-1,0]),
        s14 : maker.model.move(maker.model.mirror(new dustflap1(other_parameters.modified_dustflap,parameters[1]-1),false,true),[parameters[0]+0.5,0]),
        s15 : maker.model.move(new windowB(parameters,other_parameters),[parameters[0]+parameters[1],0]),
        s16 : maker.model.move(maker.model.mirror(new windowB(parameters,other_parameters),false,true),[parameters[0]+parameters[1],parameters[2]]),
        s17 : new maker.models.ConnectTheDots(false,[[parameters[0]+parameters[1],0],[1.375*parameters[0]+parameters[1],0]]),
        s19 : new maker.models.ConnectTheDots(false,[[parameters[1]+1.625*parameters[0],0],[2*parameters[0]+parameters[1],0]]),
        s18 : maker.model.move(new maker.models.ConnectTheDots(false,[[0,0],[0.375*parameters[0],0]]),[parameters[0]+parameters[1],parameters[2]]),
        s20 : maker.model.move(new maker.models.ConnectTheDots(false,[[0.625*parameters[0],0],[parameters[0],0]]),[parameters[0]+parameters[1],parameters[2]])
    }   
    
    this.units = maker.unitType.Millimeter
    this.models.s1.layer = 'green'
  
    this.models.s2.layer = 'green'
    
    
    this.models.s3.layer = 'green'
    this.models.s4.paths.ShapeLine2.layer = 'red'
    this.models.s4.layer = 'green'
    this.models.s5.layer = 'red'
    this.models.s6.layer = 'red'
    this.models.s7.layer = 'red'
   
    this.models.s8.layer = 'red'
    
    this.models.s10.layer = 'red'
    this.models.s11.layer = 'red'
    this.models.s12.layer = 'red'
    this.models.s13.layer = 'red'
    this.models.s14.layer = 'red'
    this.models.s15.layer = 'red'
   
    this.models.s16.layer = 'red'
    this.models.s17.layer = 'red'
    this.models.s18.layer = 'red'
    this.models.s19.layer = 'red'
    this.models.s20.layer = 'red'
}

function A002CXX(parameters,other_parameters){
    
    this.models = {
        s1 : maker.model.move(maker.model.mirror(new rectangle5(parameters[2],parameters[0]),true,false),[parameters[0],0]),
        s2 : maker.model.move(new rectangle5(parameters[2],parameters[1]),[parameters[0],0]),
        s3 : maker.model.move(new maker.models.Rectangle(parameters[0],parameters[2]),[parameters[0]+parameters[1],0]),
        s4 : maker.model.move(new maker.models.Rectangle(parameters[1]-1,parameters[2]),[2*parameters[0]+parameters[1],0]),
        s5 : new glueflap(other_parameters.modified_glueflap,parameters[2]),
        s6 : maker.model.move(new tuckflap1(parameters[0]-0.5,other_parameters.modified_tuckflap,parameters[1]+0.5),[0,parameters[2]]),
        s7 : maker.model.move(maker.model.mirror(new tuckflap1(parameters[0]-1,other_parameters.modified_tuckflap,parameters[1]+0.5),false,true),[0,0]),
        s8 : maker.model.move(new offset(),[parameters[0]-0.5,parameters[2]-1]),
         s10 : maker.model.move(maker.model.mirror(new offset(),false,true),[parameters[0]-0.5,1]),
        s11 : maker.model.move(new dustflap(other_parameters.modified_dustflap,parameters[1]-0.5),[parameters[0]+0.5,parameters[2]]),
        s12 : maker.model.move(maker.model.mirror(new dustflap(other_parameters.modified_dustflap,parameters[1]-1),true,false),[2*parameters[0]+2*parameters[1]-1,parameters[2]]),
        s13 : maker.model.move(maker.model.mirror(new dustflap(other_parameters.modified_dustflap,parameters[1]-1),true,true),[2*parameters[0]+2*parameters[1]-1,0]),
        s14 : maker.model.move(maker.model.mirror(new dustflap1(other_parameters.modified_dustflap,parameters[1]-1),false,true),[parameters[0]+0.5,0]),
        s15 : maker.model.move(new windowB(parameters,other_parameters),[parameters[0]+parameters[1],0]),
        s16 : maker.model.move(maker.model.mirror(new windowB(parameters,other_parameters),false,true),[parameters[0]+parameters[1],parameters[2]]),
        s17 : new maker.models.ConnectTheDots(false,[[parameters[0]+parameters[1],0],[1.375*parameters[0]+parameters[1],0]]),
        s19 : new maker.models.ConnectTheDots(false,[[parameters[1]+1.625*parameters[0],0],[2*parameters[0]+parameters[1],0]]),
        s18 : maker.model.move(new maker.models.ConnectTheDots(false,[[0,0],[0.375*parameters[0],0]]),[parameters[0]+parameters[1],parameters[2]]),
        s20 : maker.model.move(new maker.models.ConnectTheDots(false,[[0.625*parameters[0],0],[parameters[0],0]]),[parameters[0]+parameters[1],parameters[2]]),
        s21 : maker.model.move(new windowA(parameters,other_parameters),[-parameters[0]-parameters[1],0])
    }   
    
    this.units = maker.unitType.Millimeter
    this.models.s1.layer = 'green'
  
    this.models.s2.layer = 'green'
    
    
    this.models.s3.layer = 'green'
    this.models.s4.paths.ShapeLine2.layer = 'red'
    this.models.s4.layer = 'green'
    this.models.s5.layer = 'red'
    this.models.s6.layer = 'red'
    this.models.s7.layer = 'red'
   
    this.models.s8.layer = 'red'
    
    this.models.s10.layer = 'red'
    this.models.s11.layer = 'red'
    this.models.s12.layer = 'red'
    this.models.s13.layer = 'red'
    this.models.s14.layer = 'red'
    this.models.s15.layer = 'red'
   
    this.models.s16.layer = 'red'
    this.models.s17.layer = 'red'
    this.models.s18.layer = 'red'
    this.models.s19.layer = 'red'
    this.models.s20.layer = 'red'
    this.models.s21.layer = 'red'
}


function A002A(parameters,other_parameters){
    
    this.models = {
        s1 : maker.model.move(maker.model.mirror(new rectangle5(parameters[2],parameters[0]),true,false),[parameters[0],0]),
        s2 : maker.model.move(new rectangle5(parameters[2],parameters[1]),[parameters[0],0]),
        s3 : maker.model.move(new maker.models.Rectangle(parameters[0],parameters[2]),[parameters[0]+parameters[1],0]),
        s4 : maker.model.move(new maker.models.Rectangle(parameters[1]-1,parameters[2]),[2*parameters[0]+parameters[1],0]),
        s5 : new glueflap(other_parameters.modified_glueflap,parameters[2]),
        s6 : maker.model.move(new tuckflap(parameters[0]-0.5,other_parameters.modified_tuckflap,parameters[1]+0.5),[0,parameters[2]]),
        s7 : maker.model.move(maker.model.mirror(new tuckflap(parameters[0]-0.5,other_parameters.modified_tuckflap,parameters[1]+0.5),false,true),[0,0]),
        s8 : maker.model.move(new offset(),[parameters[0]-0.5,parameters[2]-1]),
         s10 : maker.model.move(maker.model.mirror(new offset(),false,true),[parameters[0]-0.5,1]),
        s11 : maker.model.move(new dustflap(other_parameters.modified_dustflap,parameters[1]-0.5),[parameters[0]+0.5,parameters[2]]),
        s12 : maker.model.move(maker.model.mirror(new dustflap(other_parameters.modified_dustflap,parameters[1]-1),true,false),[2*parameters[0]+2*parameters[1]-1,parameters[2]]),
        s13 : maker.model.move(maker.model.mirror(new dustflap(other_parameters.modified_dustflap,parameters[1]-1),true,true),[2*parameters[0]+2*parameters[1]-1,0]),
        s14 : maker.model.move(maker.model.mirror(new dustflap1(other_parameters.modified_dustflap,parameters[1]-1),false,true),[parameters[0]+0.5,0]),
        s15 : maker.model.move(new windowA(parameters,other_parameters),[-parameters[0]-parameters[1],0])        
    }   
    
    this.units = maker.unitType.Millimeter
    this.models.s1.layer = 'green'
    this.models.s1.paths.d.layer = 'red'
    this.models.s2.layer = 'green'
    this.models.s3.paths.ShapeLine1.layer = 'red'
    this.models.s3.paths.ShapeLine3.layer = 'red'
    this.models.s3.layer = 'green'
    this.models.s4.paths.ShapeLine2.layer = 'red'
    this.models.s4.layer = 'green'
    this.models.s5.layer = 'red'
    this.models.s6.layer = 'red'
    this.models.s6.paths.e.layer = 'green'
    this.models.s7.layer = 'red'
    this.models.s7.paths.e.layer = 'green'
    this.models.s8.layer = 'red'
    
    this.models.s10.layer = 'red'
    this.models.s11.layer = 'red'
    this.models.s12.layer = 'red'
    this.models.s13.layer = 'red'
    this.models.s14.layer = 'red'
    this.models.s15.layer = 'red'
}


function A002D(parameters,other_parameters){
    
    this.models = {
        s1 : maker.model.move(maker.model.mirror(new rectangle5(parameters[2],parameters[0]),true,false),[parameters[0],0]),
        s2 : maker.model.move(new rectangle5(parameters[2],parameters[1]),[parameters[0],0]),
        s3 : maker.model.move(new maker.models.Rectangle(parameters[0],parameters[2]),[parameters[0]+parameters[1],0]),
        s4 : maker.model.move(new maker.models.Rectangle(parameters[1]-1,parameters[2]),[2*parameters[0]+parameters[1],0]),
        s5 : new glueflap(other_parameters.modified_glueflap,parameters[2]),
        s6 : maker.model.move(new tuckflap(parameters[0]-0.5,other_parameters.modified_tuckflap,parameters[1]+0.5),[0,parameters[2]]),
        s7 : maker.model.move(maker.model.mirror(new tuckflap(parameters[0]-0.5,other_parameters.modified_tuckflap,parameters[1]+0.5),false,true),[0,0]),
        s8 : maker.model.move(new offset(),[parameters[0]-0.5,parameters[2]-1]),
         s10 : maker.model.move(maker.model.mirror(new offset(),false,true),[parameters[0]-0.5,1]),
        s11 : maker.model.move(new dustflap(other_parameters.modified_dustflap,parameters[1]-0.5),[parameters[0]+0.5,parameters[2]]),
        s12 : maker.model.move(maker.model.mirror(new dustflap(other_parameters.modified_dustflap,parameters[1]-1),true,false),[2*parameters[0]+2*parameters[1]-1,parameters[2]]),
        s13 : maker.model.move(maker.model.mirror(new dustflap(other_parameters.modified_dustflap,parameters[1]-1),true,true),[2*parameters[0]+2*parameters[1]-1,0]),
        s14 : maker.model.move(maker.model.mirror(new dustflap1(other_parameters.modified_dustflap,parameters[1]-1),false,true),[parameters[0]+0.5,0]),
        s15 : maker.model.move(new windowD(parameters,other_parameters),[parameters[0]+parameters[1],parameters[2]]),
        s16 : maker.model.move(maker.model.mirror(new windowD(parameters,other_parameters),false,true),[parameters[0]+parameters[1],parameters[2]+parameters[1]]),
        s17 : maker.model.move(new maker.models.ConnectTheDots(false,[[0,0],[10,0.6*other_parameters.modified_tuckflap],[parameters[0]-10,0.6*other_parameters.modified_tuckflap],[parameters[0],0]]),[parameters[0]+parameters[1],parameters[2]+parameters[1]])
  }   
    
    this.units = maker.unitType.Millimeter
    this.models.s1.layer = 'green'
    this.models.s1.paths.d.layer = 'red'
    this.models.s2.layer = 'green'
    this.models.s3.paths.ShapeLine1.layer = 'red'
    
    this.models.s3.layer = 'green'
    this.models.s4.paths.ShapeLine2.layer = 'red'
    this.models.s4.layer = 'green'
    this.models.s5.layer = 'red'
    this.models.s6.layer = 'red'
    this.models.s6.paths.e.layer = 'green'
    this.models.s7.layer = 'red'
    this.models.s7.paths.e.layer = 'green'
    this.models.s8.layer = 'red'
    
    this.models.s10.layer = 'red'
    this.models.s11.layer = 'red'
    this.models.s12.layer = 'red'
    this.models.s13.layer = 'red'
    this.models.s14.layer = 'red'
    this.models.s15.layer = 'red'
    this.models.s16.layer = 'red'
    this.models.s17.layer = 'red'
}

function A002F(parameters,other_parameters){
    
    this.models = {
        s1 : maker.model.move(maker.model.mirror(new rectangle5(parameters[2],parameters[0]),true,false),[parameters[0],0]),
        s2 : maker.model.move(new rectangle5(parameters[2],parameters[1]),[parameters[0],0]),
        s3 : maker.model.move(new maker.models.Rectangle(parameters[0],parameters[2]),[parameters[0]+parameters[1],0]),
        s4 : maker.model.move(new maker.models.Rectangle(parameters[1]-1,parameters[2]),[2*parameters[0]+parameters[1],0]),
        s5 : new glueflap(other_parameters.modified_glueflap,parameters[2]),
        s6 : maker.model.move(new tuckflap(parameters[0]-0.5,other_parameters.modified_tuckflap,parameters[1]+0.5),[0,parameters[2]]),
        s7 : maker.model.move(maker.model.mirror(new tuckflap1(parameters[0]-1,other_parameters.modified_tuckflap,parameters[1]+0.5),false,true),[0,0]),
        s8 : maker.model.move(new offset(),[parameters[0]-0.5,parameters[2]-1]),
         s10 : maker.model.move(maker.model.mirror(new offset(),false,true),[parameters[0]-0.5,1]),
        s11 : maker.model.move(new dustflap(other_parameters.modified_dustflap,parameters[1]-0.5),[parameters[0]+0.5,parameters[2]]),
        s12 : maker.model.move(maker.model.mirror(new dustflap(other_parameters.modified_dustflap,parameters[1]-1),true,false),[2*parameters[0]+2*parameters[1]-1,parameters[2]]),
        s13 : maker.model.move(maker.model.mirror(new dustflap(other_parameters.modified_dustflap,parameters[1]-1),true,true),[2*parameters[0]+2*parameters[1]-1,0]),
        s14 : maker.model.move(maker.model.mirror(new dustflap1(other_parameters.modified_dustflap,parameters[1]-1),false,true),[parameters[0]+0.5,0]),
        s15 : maker.model.move(new windowD(parameters,other_parameters),[parameters[0]+parameters[1],parameters[2]]),
        s16 : maker.model.move(maker.model.mirror(new windowD(parameters,other_parameters),false,true),[parameters[0]+parameters[1],parameters[2]+parameters[1]]),
        s17 : maker.model.move(new maker.models.ConnectTheDots(false,[[0,0],[10,0.6*other_parameters.modified_tuckflap],[parameters[0]-10,0.6*other_parameters.modified_tuckflap],[parameters[0],0]]),[parameters[0]+parameters[1],parameters[2]+parameters[1]]),
        s18 : maker.model.move(maker.model.mirror(new windowB(parameters,other_parameters),false,true),[parameters[0]+parameters[1],parameters[2]]),
          s20 : new maker.models.ConnectTheDots(false,[[parameters[0]+parameters[1],0],[1.375*parameters[0]+parameters[1],0]]),
        s19 : new maker.models.ConnectTheDots(false,[[parameters[1]+1.625*parameters[0],0],[parameters[1]+2*parameters[0],0]])
  
    }   
    
    this.units = maker.unitType.Millimeter
    this.models.s1.layer = 'green'
    
    this.models.s2.layer = 'green'
   
    
    this.models.s3.layer = 'green'
    this.models.s4.paths.ShapeLine2.layer = 'red'
    this.models.s4.layer = 'green'
    this.models.s5.layer = 'red'
    this.models.s6.layer = 'red'
    this.models.s6.paths.e.layer = 'green'
    this.models.s7.layer = 'red'
    
    this.models.s8.layer = 'red'
    
    this.models.s10.layer = 'red'
    this.models.s11.layer = 'red'
    this.models.s12.layer = 'red'
    this.models.s13.layer = 'red'
    this.models.s14.layer = 'red'
    this.models.s15.layer = 'red'
    this.models.s16.layer = 'red'
    this.models.s17.layer = 'red'
    this.models.s18.layer = 'red'
    this.models.s19.layer = 'red'
    this.models.s20.layer = 'red'
}


function A002E(parameters,other_parameters){
    
    this.models = {
        s1 : maker.model.move(maker.model.mirror(new rectangle5(parameters[2],parameters[0]),true,false),[parameters[0],0]),
        s2 : maker.model.move(new rectangle5(parameters[2],parameters[1]),[parameters[0],0]),
        s3 : maker.model.move(new maker.models.Rectangle(parameters[0],parameters[2]),[parameters[0]+parameters[1],0]),
        s4 : maker.model.move(new maker.models.Rectangle(parameters[1]-1,parameters[2]),[2*parameters[0]+parameters[1],0]),
        s5 : new glueflap(other_parameters.modified_glueflap,parameters[2]),
        s6 : maker.model.move(new tuckflap(parameters[0]-0.5,other_parameters.modified_tuckflap,parameters[1]+0.5),[0,parameters[2]]),
        s7 : maker.model.move(maker.model.mirror(new tuckflap(parameters[0]-0.5,other_parameters.modified_tuckflap,parameters[1]+0.5),false,true),[0,0]),
        s8 : maker.model.move(new offset(),[parameters[0]-0.5,parameters[2]-1]),
         s10 : maker.model.move(maker.model.mirror(new offset(),false,true),[parameters[0]-0.5,1]),
        s11 : maker.model.move(new dustflap(other_parameters.modified_dustflap,parameters[1]-0.5),[parameters[0]+0.5,parameters[2]]),
        s12 : maker.model.move(maker.model.mirror(new dustflap(other_parameters.modified_dustflap,parameters[1]-1),true,false),[2*parameters[0]+2*parameters[1]-1,parameters[2]]),
        s13 : maker.model.move(maker.model.mirror(new dustflap(other_parameters.modified_dustflap,parameters[1]-1),true,true),[2*parameters[0]+2*parameters[1]-1,0]),
        s14 : maker.model.move(maker.model.mirror(new dustflap1(other_parameters.modified_dustflap,parameters[1]-1),false,true),[parameters[0]+0.5,0]),
        s15 : maker.model.move(new windowD(parameters,other_parameters),[parameters[0]+parameters[1],parameters[2]]),
        s16 : maker.model.move(maker.model.mirror(new windowD(parameters,other_parameters),false,true),[parameters[0]+parameters[1],parameters[2]+parameters[1]]),
        s17 : maker.model.move(new maker.models.ConnectTheDots(false,[[0,0],[10,0.6*other_parameters.modified_tuckflap],[parameters[0]-10,0.6*other_parameters.modified_tuckflap],[parameters[0],0]]),[parameters[0]+parameters[1],parameters[2]+parameters[1]]),
        s18 : maker.model.move(new windowA(parameters,other_parameters),[-parameters[0]-parameters[1],0])
        
    }   
    
    this.units = maker.unitType.Millimeter
    this.models.s1.layer = 'green'
    this.models.s1.paths.d.layer = 'red'
    this.models.s2.layer = 'green'
    this.models.s3.paths.ShapeLine1.layer = 'red'
   
    this.models.s3.layer = 'green'
    this.models.s4.paths.ShapeLine2.layer = 'red'
    this.models.s4.layer = 'green'
    this.models.s5.layer = 'red'
    this.models.s6.layer = 'red'
    this.models.s6.paths.e.layer = 'green'
    this.models.s7.layer = 'red'
    this.models.s7.paths.e.layer = 'green'
    this.models.s8.layer = 'red'
    
    this.models.s10.layer = 'red'
    this.models.s11.layer = 'red'
    this.models.s12.layer = 'red'
    this.models.s13.layer = 'red'
    this.models.s14.layer = 'red'
    this.models.s15.layer = 'red'
    this.models.s16.layer = 'red'
    this.models.s17.layer = 'red'
    this.models.s18.layer = 'red'
}


function A002AX(parameters,other_parameters){
    
    this.models = {
        s1 : new maker.models.Rectangle(parameters[0],parameters[2]),
        s2 : maker.model.move(maker.model.mirror(new rectangle5(parameters[2],parameters[1]),true,false),[parameters[0]+parameters[1],0]),
        s3 : maker.model.move(new rectangle6(parameters[2],parameters[0]),[parameters[0]+parameters[1],0]),
        s4 : maker.model.move(new rectangle5(parameters[2],parameters[1]-1),[2*parameters[0]+parameters[1],0]),
        s5 : new glueflap(other_parameters.modified_glueflap,parameters[2]),
        s6 : maker.model.move(new tuckflap(parameters[0]-1,other_parameters.modified_tuckflap,parameters[1]+0.5),[parameters[0]+parameters[1]+0.5,parameters[2]]),
        s7 : maker.model.move(maker.model.mirror(new tuckflap(parameters[0]-1,other_parameters.modified_tuckflap,parameters[1]+0.5),false,true),[parameters[0]+parameters[1]+0.5,0]),
        s8 : maker.model.move(new offset(),[parameters[0]+parameters[1]-0.5,parameters[2]-1]),
        s9 : maker.model.move(maker.model.mirror(new offset(),true,true),[parameters[0]+parameters[1]+0.5,1]),
        s10 : maker.model.move(maker.model.mirror(new offset(),false,true),[2*parameters[0]+parameters[1]-0.5,1]),
        s11 : maker.model.move(new dustflap1(other_parameters.modified_dustflap,parameters[1]-1),[2*parameters[0]+parameters[1]+0.5,parameters[2]]),
        s12 : maker.model.move(maker.model.mirror(new dustflap2(other_parameters.modified_dustflap,parameters[1]-1),true,false),[parameters[0]+parameters[1]-0.5,parameters[2]]),
        s13 : maker.model.move(maker.model.mirror(new dustflap(other_parameters.modified_dustflap,parameters[1]-0.5),true,true),[parameters[0]+parameters[1]-0.5,0]),
        s14 : maker.model.move(maker.model.mirror(new dustflap1(other_parameters.modified_dustflap,parameters[1]-1),false,true),[2*parameters[0]+parameters[1]+0.5,0]),
        s15 : new windowA(parameters,other_parameters),
        s16 : maker.model.move(new offset(),[2*parameters[0]+parameters[1]-0.5,parameters[2]-1])
    }   
    this.units = maker.unitType.Millimeter
    this.models.s1.layer = 'green'
    this.models.s1.paths.ShapeLine1.layer = 'red'
    this.models.s1.paths.ShapeLine3.layer = 'red'
    this.models.s2.layer = 'green'
    this.models.s3.layer = 'green'
    
    this.models.s4.layer = 'green'
    this.models.s4.paths.c.layer = 'red'
    this.models.s5.layer = 'red'
    this.models.s6.layer = 'red'
    this.models.s6.paths.e.layer = 'green'
    this.models.s7.layer = 'red'
    this.models.s7.paths.e.layer = 'green'
    this.models.s8.layer = 'red'
    this.models.s9.layer = 'red'
    this.models.s10.layer = 'red'
    this.models.s11.layer = 'red'
    this.models.s12.layer = 'red'
    this.models.s13.layer = 'red'
    this.models.s14.layer = 'red'
    this.models.s15.layer = 'red'
    this.models.s16.layer = 'red'
}

function A002DX(parameters,other_parameters){
    
    this.models = {
        s1 : new maker.models.Rectangle(parameters[0],parameters[2]),
        s2 : maker.model.move(maker.model.mirror(new rectangle5(parameters[2],parameters[1]),true,false),[parameters[0]+parameters[1],0]),
        s3 : maker.model.move(new rectangle6(parameters[2],parameters[0]),[parameters[0]+parameters[1],0]),
        s4 : maker.model.move(new rectangle5(parameters[2],parameters[1]-1),[2*parameters[0]+parameters[1],0]),
        s5 : new glueflap(other_parameters.modified_glueflap,parameters[2]),
        s6 : maker.model.move(new tuckflap(parameters[0]-1,other_parameters.modified_tuckflap,parameters[1]+0.5),[parameters[0]+parameters[1]+0.5,parameters[2]]),
        s7 : maker.model.move(maker.model.mirror(new tuckflap(parameters[0]-1,other_parameters.modified_tuckflap,parameters[1]+0.5),false,true),[parameters[0]+parameters[1]+0.5,0]),
        s8 : maker.model.move(new offset(),[parameters[0]+parameters[1]-0.5,parameters[2]-1]),
        s9 : maker.model.move(maker.model.mirror(new offset(),true,true),[parameters[0]+parameters[1]+0.5,1]),
        s10 : maker.model.move(maker.model.mirror(new offset(),false,true),[2*parameters[0]+parameters[1]-0.5,1]),
        s11 : maker.model.move(new dustflap1(other_parameters.modified_dustflap,parameters[1]-1),[2*parameters[0]+parameters[1]+0.5,parameters[2]]),
        s12 : maker.model.move(maker.model.mirror(new dustflap2(other_parameters.modified_dustflap,parameters[1]-1),true,false),[parameters[0]+parameters[1]-0.5,parameters[2]]),
        s13 : maker.model.move(maker.model.mirror(new dustflap(other_parameters.modified_dustflap,parameters[1]-0.5),true,true),[parameters[0]+parameters[1]-0.5,0]),
        s14 : maker.model.move(maker.model.mirror(new dustflap1(other_parameters.modified_dustflap,parameters[1]-1),false,true),[2*parameters[0]+parameters[1]+0.5,0]),
    
        s18 : maker.model.move(new offset(),[2*parameters[0]+parameters[1]-0.5,parameters[2]-1]),
        s15 : maker.model.move(new windowD(parameters,other_parameters),[0,parameters[2]]),
        s16 : maker.model.move(maker.model.mirror(new windowD(parameters,other_parameters),false,true),[0,parameters[2]+parameters[1]]),
        s17 : maker.model.move(new maker.models.ConnectTheDots(false,[[0,0],[10,0.6*other_parameters.modified_tuckflap],[parameters[0]-10,0.6*other_parameters.modified_tuckflap],[parameters[0],0]]),[0,parameters[2]+parameters[1]])

    }   
    this.units = maker.unitType.Millimeter
    this.models.s1.layer = 'green'
    this.models.s1.paths.ShapeLine1.layer = 'red'

    this.models.s2.layer = 'green'
    this.models.s3.layer = 'green'
    
    this.models.s4.layer = 'green'
    this.models.s4.paths.c.layer = 'red'
    this.models.s5.layer = 'red'
    this.models.s6.layer = 'red'
    this.models.s6.paths.e.layer = 'green'
    this.models.s7.layer = 'red'
    this.models.s7.paths.e.layer = 'green'
    this.models.s8.layer = 'red'
    this.models.s9.layer = 'red'
    this.models.s10.layer = 'red'
    this.models.s11.layer = 'red'
    this.models.s12.layer = 'red'
    this.models.s13.layer = 'red'
    this.models.s14.layer = 'red'
    this.models.s15.layer = 'red'
    this.models.s16.layer = 'red'
    this.models.s17.layer = 'red'
    this.models.s18.layer = 'red'
}

function A002FX(parameters,other_parameters){
    
    this.models = {
        s1 : new maker.models.Rectangle(parameters[0],parameters[2]),
        s2 : maker.model.move(maker.model.mirror(new rectangle5(parameters[2],parameters[1]),true,false),[parameters[0]+parameters[1],0]),
        s3 : maker.model.move(new rectangle6(parameters[2],parameters[0]),[parameters[0]+parameters[1],0]),
        s4 : maker.model.move(new rectangle5(parameters[2],parameters[1]-1),[2*parameters[0]+parameters[1],0]),
        s5 : new glueflap(other_parameters.modified_glueflap,parameters[2]),
        s6 : maker.model.move(new tuckflap(parameters[0]-1,other_parameters.modified_tuckflap,parameters[1]+0.5),[parameters[0]+parameters[1]+0.5,parameters[2]]),
        s7 : maker.model.move(maker.model.mirror(new tuckflap1(parameters[0]-1,other_parameters.modified_tuckflap,parameters[1]+0.5),false,true),[parameters[0]+parameters[1]+0.5,0]),
        s8 : maker.model.move(new offset(),[parameters[0]+parameters[1]-0.5,parameters[2]-1]),
        s9 : maker.model.move(maker.model.mirror(new offset(),true,true),[parameters[0]+parameters[1]+0.5,1]),
        s10 : maker.model.move(maker.model.mirror(new offset(),false,true),[2*parameters[0]+parameters[1]-0.5,1]),
        s11 : maker.model.move(new dustflap1(other_parameters.modified_dustflap,parameters[1]-1),[2*parameters[0]+parameters[1]+0.5,parameters[2]]),
        s12 : maker.model.move(maker.model.mirror(new dustflap2(other_parameters.modified_dustflap,parameters[1]-1),true,false),[parameters[0]+parameters[1]-0.5,parameters[2]]),
        s13 : maker.model.move(maker.model.mirror(new dustflap(other_parameters.modified_dustflap,parameters[1]-0.5),true,true),[parameters[0]+parameters[1]-0.5,0]),
        s14 : maker.model.move(maker.model.mirror(new dustflap1(other_parameters.modified_dustflap,parameters[1]-1),false,true),[2*parameters[0]+parameters[1]+0.5,0]),
    
        s18 : maker.model.move(new offset(),[2*parameters[0]+parameters[1]-0.5,parameters[2]-1]),
        s15 : maker.model.move(new windowD(parameters,other_parameters),[0,parameters[2]]),
        s16 : maker.model.move(maker.model.mirror(new windowD(parameters,other_parameters),false,true),[0,parameters[2]+parameters[1]]),
        s17 : maker.model.move(new maker.models.ConnectTheDots(false,[[0,0],[10,0.6*other_parameters.modified_tuckflap],[parameters[0]-10,0.6*other_parameters.modified_tuckflap],[parameters[0],0]]),[0,parameters[2]+parameters[1]]),
        s19 : maker.model.move(maker.model.mirror(new windowB(parameters,other_parameters),false,true ),[0,parameters[2]])
    }   
    this.units = maker.unitType.Millimeter
    this.models.s1.layer = 'green'
    this.models.s1.paths.ShapeLine1.layer = 'red'

    this.models.s2.layer = 'green'
    this.models.s3.layer = 'green'
    
    this.models.s4.layer = 'green'
    this.models.s4.paths.c.layer = 'red'
    this.models.s5.layer = 'red'
    this.models.s6.layer = 'red'
    this.models.s6.paths.e.layer = 'green'
    this.models.s7.layer = 'red'
    
    this.models.s8.layer = 'red'
    this.models.s9.layer = 'red'
    this.models.s10.layer = 'red'
    this.models.s11.layer = 'red'
    this.models.s12.layer = 'red'
    this.models.s13.layer = 'red'
    this.models.s14.layer = 'red'
    this.models.s15.layer = 'red'
    this.models.s16.layer = 'red'
    this.models.s17.layer = 'red'
    this.models.s18.layer = 'red'
    this.models.s19.layer = 'red'
}

function A002X(parameters,other_parameters){
    
    this.models = {
        s1 : new maker.models.Rectangle(parameters[0],parameters[2]),
        s2 : maker.model.move(maker.model.mirror(new rectangle5(parameters[2],parameters[1]),true,false),[parameters[0]+parameters[1],0]),
        s3 : maker.model.move(new rectangle6(parameters[2],parameters[0]),[parameters[0]+parameters[1],0]),
        s4 : maker.model.move(new rectangle5(parameters[2],parameters[1]-1),[2*parameters[0]+parameters[1],0]),
        s5 : new glueflap(other_parameters.modified_glueflap,parameters[2]),
        s6 : maker.model.move(new tuckflap(parameters[0]-1,other_parameters.modified_tuckflap,parameters[1]+0.5),[parameters[0]+parameters[1]+0.5,parameters[2]]),
        s7 : maker.model.move(maker.model.mirror(new tuckflap(parameters[0]-1,other_parameters.modified_tuckflap,parameters[1]+0.5),false,true),[parameters[0]+parameters[1]+0.5,0]),
        s8 : maker.model.move(new offset(),[parameters[0]+parameters[1]-0.5,parameters[2]-1]),
        s9 : maker.model.move(maker.model.mirror(new offset(),true,true),[parameters[0]+parameters[1]+0.5,1]),
        s10 : maker.model.move(maker.model.mirror(new offset(),false,true),[2*parameters[0]+parameters[1]-0.5,1]),
        s11 : maker.model.move(new dustflap1(other_parameters.modified_dustflap,parameters[1]-1),[2*parameters[0]+parameters[1]+0.5,parameters[2]]),
        s12 : maker.model.move(maker.model.mirror(new dustflap2(other_parameters.modified_dustflap,parameters[1]-1),true,false),[parameters[0]+parameters[1]-0.5,parameters[2]]),
        s13 : maker.model.move(maker.model.mirror(new dustflap(other_parameters.modified_dustflap,parameters[1]-0.5),true,true),[parameters[0]+parameters[1]-0.5,0]),
        s14 : maker.model.move(maker.model.mirror(new dustflap1(other_parameters.modified_dustflap,parameters[1]-1),false,true),[2*parameters[0]+parameters[1]+0.5,0]),
    
        s18 : maker.model.move(new offset(),[2*parameters[0]+parameters[1]-0.5,parameters[2]-1]),
           }   
    this.units = maker.unitType.Millimeter
    this.models.s1.layer = 'green'
    this.models.s1.paths.ShapeLine1.layer = 'red'
    this.models.s1.paths.ShapeLine3.layer = 'red'
    this.models.s2.layer = 'green'
    this.models.s3.layer = 'green'
    
    this.models.s4.layer = 'green'
    this.models.s4.paths.c.layer = 'red'
    this.models.s5.layer = 'red'
    this.models.s6.layer = 'red'
    this.models.s6.paths.e.layer = 'green'
    this.models.s7.layer = 'red'
    
    this.models.s8.layer = 'red'
    this.models.s9.layer = 'red'
    this.models.s10.layer = 'red'
    this.models.s11.layer = 'red'
    this.models.s12.layer = 'red'
    this.models.s13.layer = 'red'
    this.models.s14.layer = 'red'
    
    this.models.s18.layer = 'red'
    
}
function A002EX(parameters,other_parameters){
    
    this.models = {
        s1 : new maker.models.Rectangle(parameters[0],parameters[2]),
        s2 : maker.model.move(maker.model.mirror(new rectangle5(parameters[2],parameters[1]),true,false),[parameters[0]+parameters[1],0]),
        s3 : maker.model.move(new rectangle6(parameters[2],parameters[0]),[parameters[0]+parameters[1],0]),
        s4 : maker.model.move(new rectangle5(parameters[2],parameters[1]-1),[2*parameters[0]+parameters[1],0]),
        s5 : new glueflap(other_parameters.modified_glueflap,parameters[2]),
        s6 : maker.model.move(new tuckflap(parameters[0]-1,other_parameters.modified_tuckflap,parameters[1]+0.5),[parameters[0]+parameters[1]+0.5,parameters[2]]),
        s7 : maker.model.move(maker.model.mirror(new tuckflap(parameters[0]-1,other_parameters.modified_tuckflap,parameters[1]+0.5),false,true),[parameters[0]+parameters[1]+0.5,0]),
        s8 : maker.model.move(new offset(),[parameters[0]+parameters[1]-0.5,parameters[2]-1]),
        s9 : maker.model.move(maker.model.mirror(new offset(),true,true),[parameters[0]+parameters[1]+0.5,1]),
        s10 : maker.model.move(maker.model.mirror(new offset(),false,true),[2*parameters[0]+parameters[1]-0.5,1]),
        s11 : maker.model.move(new dustflap1(other_parameters.modified_dustflap,parameters[1]-1),[2*parameters[0]+parameters[1]+0.5,parameters[2]]),
        s12 : maker.model.move(maker.model.mirror(new dustflap2(other_parameters.modified_dustflap,parameters[1]-1),true,false),[parameters[0]+parameters[1]-0.5,parameters[2]]),
        s13 : maker.model.move(maker.model.mirror(new dustflap(other_parameters.modified_dustflap,parameters[1]-0.5),true,true),[parameters[0]+parameters[1]-0.5,0]),
        s14 : maker.model.move(maker.model.mirror(new dustflap1(other_parameters.modified_dustflap,parameters[1]-1),false,true),[2*parameters[0]+parameters[1]+0.5,0]),
        s19 : new windowA(parameters,other_parameters),
        s18 : maker.model.move(new offset(),[2*parameters[0]+parameters[1]-0.5,parameters[2]-1]),
        s15 : maker.model.move(new windowD(parameters,other_parameters),[0,parameters[2]]),
        s16 : maker.model.move(maker.model.mirror(new windowD(parameters,other_parameters),false,true),[0,parameters[2]+parameters[1]]),
        s17 : maker.model.move(new maker.models.ConnectTheDots(false,[[0,0],[10,0.6*other_parameters.modified_tuckflap],[parameters[0]-10,0.6*other_parameters.modified_tuckflap],[parameters[0],0]]),[0,parameters[2]+parameters[1]])

    }   
    this.units = maker.unitType.Millimeter
    this.models.s1.layer = 'green'
    this.models.s1.paths.ShapeLine1.layer = 'red'
    
    this.models.s2.layer = 'green'
    this.models.s3.layer = 'green'
    
    this.models.s4.layer = 'green'
    this.models.s4.paths.c.layer = 'red'
    this.models.s5.layer = 'red'
    this.models.s6.layer = 'red'
    this.models.s6.paths.e.layer = 'green'
    this.models.s7.layer = 'red'
    this.models.s7.paths.e.layer = 'green'
    this.models.s8.layer = 'red'
    this.models.s9.layer = 'red'
    this.models.s10.layer = 'red'
    this.models.s11.layer = 'red'
    this.models.s12.layer = 'red'
    this.models.s13.layer = 'red'
    this.models.s14.layer = 'red'
    this.models.s15.layer = 'red'
    this.models.s16.layer = 'red'
    this.models.s17.layer = 'red'
    this.models.s18.layer = 'red'
    this.models.s19.layer = 'red'
}

function A002BX(parameters,other_parameters){
    
    this.models = {
        s1 : new maker.models.Rectangle(parameters[0],parameters[2]),
        s2 : maker.model.move(maker.model.mirror(new rectangle5(parameters[2],parameters[1]),true,false),[parameters[0]+parameters[1],0]),
        s3 : maker.model.move(new rectangle6(parameters[2],parameters[0]),[parameters[0]+parameters[1],0]),
        s4 : maker.model.move(new rectangle5(parameters[2],parameters[1]-1),[2*parameters[0]+parameters[1],0]),
        s5 : new glueflap(other_parameters.modified_glueflap,parameters[2]),
        s6 : maker.model.move(new tuckflap1(parameters[0]-1,other_parameters.modified_tuckflap,parameters[1]+0.5),[parameters[0]+parameters[1]+0.5,parameters[2]]),
        s7 : maker.model.move(maker.model.mirror(new tuckflap1(parameters[0]-1,other_parameters.modified_tuckflap,parameters[1]+0.5),false,true),[parameters[0]+parameters[1]+0.5,0]),
        s8 : maker.model.move(new offset(),[parameters[0]+parameters[1]-0.5,parameters[2]-1]),
        s9 : maker.model.move(maker.model.mirror(new offset(),true,true),[parameters[0]+parameters[1]+0.5,1]),
        s10 : maker.model.move(maker.model.mirror(new offset(),false,true),[2*parameters[0]+parameters[1]-0.5,1]),
        s11 : maker.model.move(new dustflap1(other_parameters.modified_dustflap,parameters[1]-1),[2*parameters[0]+parameters[1]+0.5,parameters[2]]),
        s12 : maker.model.move(maker.model.mirror(new dustflap2(other_parameters.modified_dustflap,parameters[1]-1),true,false),[parameters[0]+parameters[1]-0.5,parameters[2]]),
        s13 : maker.model.move(maker.model.mirror(new dustflap(other_parameters.modified_dustflap,parameters[1]-0.5),true,true),[parameters[0]+parameters[1]-0.5,0]),
        s14 : maker.model.move(maker.model.mirror(new dustflap1(other_parameters.modified_dustflap,parameters[1]-1),false,true),[2*parameters[0]+parameters[1]+0.5,0]),
       
        s15 : maker.model.move(new offset(),[2*parameters[0]+parameters[1]-0.5,parameters[2]-1]),
        s21 : maker.model.move(new windowB(parameters,other_parameters),[0,0]),
        s16 : maker.model.move(maker.model.mirror(new windowB(parameters,other_parameters),false,true),[0,parameters[2]]),
        s17 : new maker.models.ConnectTheDots(false,[[0,0],[0.375*parameters[0],0]]),
        s19 : new maker.models.ConnectTheDots(false,[[0.625*parameters[0],0],[parameters[0],0]]),
        s18 : maker.model.move(new maker.models.ConnectTheDots(false,[[0,0],[0.375*parameters[0],0]]),[0,parameters[2]]),
        s20 : maker.model.move(new maker.models.ConnectTheDots(false,[[0.625*parameters[0],0],[parameters[0],0]]),[0,parameters[2]])
 
    }   
    this.units = maker.unitType.Millimeter
    this.models.s1.layer = 'green'
   
    this.models.s2.layer = 'green'
    this.models.s3.layer = 'green'
    
    this.models.s4.layer = 'green'
    this.models.s4.paths.c.layer = 'red'
    this.models.s5.layer = 'red'
    this.models.s6.layer = 'red'
    
    this.models.s7.layer = 'red'
    
    this.models.s8.layer = 'red'
    this.models.s9.layer = 'red'
    this.models.s10.layer = 'red'
    this.models.s11.layer = 'red'
    this.models.s12.layer = 'red'
    this.models.s13.layer = 'red'
    this.models.s14.layer = 'red'
   
    this.models.s15.layer = 'red'
    this.models.s16.layer = 'red'
    this.models.s17.layer = 'red'
    this.models.s18.layer = 'red'
    this.models.s19.layer = 'red'
    this.models.s20.layer = 'red'
    this.models.s21.layer = 'red'
}

function A002CX(parameters,other_parameters){
    
    this.models = {
        s1 : new maker.models.Rectangle(parameters[0],parameters[2]),
        s2 : maker.model.move(maker.model.mirror(new rectangle5(parameters[2],parameters[1]),true,false),[parameters[0]+parameters[1],0]),
        s3 : maker.model.move(new rectangle6(parameters[2],parameters[0]),[parameters[0]+parameters[1],0]),
        s4 : maker.model.move(new rectangle5(parameters[2],parameters[1]-1),[2*parameters[0]+parameters[1],0]),
        s5 : new glueflap(other_parameters.modified_glueflap,parameters[2]),
        s6 : maker.model.move(new tuckflap1(parameters[0]-1,other_parameters.modified_tuckflap,parameters[1]+0.5),[parameters[0]+parameters[1]+0.5,parameters[2]]),
        s7 : maker.model.move(maker.model.mirror(new tuckflap1(parameters[0]-1,other_parameters.modified_tuckflap,parameters[1]+0.5),false,true),[parameters[0]+parameters[1]+0.5,0]),
        s8 : maker.model.move(new offset(),[parameters[0]+parameters[1]-0.5,parameters[2]-1]),
        s9 : maker.model.move(maker.model.mirror(new offset(),true,true),[parameters[0]+parameters[1]+0.5,1]),
        s10 : maker.model.move(maker.model.mirror(new offset(),false,true),[2*parameters[0]+parameters[1]-0.5,1]),
        s11 : maker.model.move(new dustflap1(other_parameters.modified_dustflap,parameters[1]-1),[2*parameters[0]+parameters[1]+0.5,parameters[2]]),
        s12 : maker.model.move(maker.model.mirror(new dustflap2(other_parameters.modified_dustflap,parameters[1]-1),true,false),[parameters[0]+parameters[1]-0.5,parameters[2]]),
        s13 : maker.model.move(maker.model.mirror(new dustflap(other_parameters.modified_dustflap,parameters[1]-0.5),true,true),[parameters[0]+parameters[1]-0.5,0]),
        s14 : maker.model.move(maker.model.mirror(new dustflap1(other_parameters.modified_dustflap,parameters[1]-1),false,true),[2*parameters[0]+parameters[1]+0.5,0]),
       
        s15 : maker.model.move(new offset(),[2*parameters[0]+parameters[1]-0.5,parameters[2]-1]),
        s21 : maker.model.move(new windowB(parameters,other_parameters),[0,0]),
        s16 : maker.model.move(maker.model.mirror(new windowB(parameters,other_parameters),false,true),[0,parameters[2]]),
        s17 : new maker.models.ConnectTheDots(false,[[0,0],[0.375*parameters[0],0]]),
        s19 : new maker.models.ConnectTheDots(false,[[0.625*parameters[0],0],[parameters[0],0]]),
        s18 : maker.model.move(new maker.models.ConnectTheDots(false,[[0,0],[0.375*parameters[0],0]]),[0,parameters[2]]),
        s20 : maker.model.move(new maker.models.ConnectTheDots(false,[[0.625*parameters[0],0],[parameters[0],0]]),[0,parameters[2]]),
        s22 : new windowA(parameters,other_parameters)
 
    }   
    this.units = maker.unitType.Millimeter
    this.models.s1.layer = 'green'
   
    this.models.s2.layer = 'green'
    this.models.s3.layer = 'green'
    
    this.models.s4.layer = 'green'
    this.models.s4.paths.c.layer = 'red'
    this.models.s5.layer = 'red'
    this.models.s6.layer = 'red'
    
    this.models.s7.layer = 'red'
    
    this.models.s8.layer = 'red'
    this.models.s9.layer = 'red'
    this.models.s10.layer = 'red'
    this.models.s11.layer = 'red'
    this.models.s12.layer = 'red'
    this.models.s13.layer = 'red'
    this.models.s14.layer = 'red'
   
    this.models.s15.layer = 'red'
    this.models.s16.layer = 'red'
    this.models.s17.layer = 'red'
    this.models.s18.layer = 'red'
    this.models.s19.layer = 'red'
    this.models.s20.layer = 'red'
    this.models.s21.layer = 'red'
    this.models.s22.layer = 'red'
}


function A001A(parameters,other_parameters){
    
    this.models = {
        s1 : new rectangle1(parameters[2],parameters[0]),
        s2 : maker.model.move(new rectangle2(parameters[2],parameters[1]),[parameters[0],0]),
        s3 : maker.model.move(new rectangle3(parameters[2],parameters[0]),[parameters[0]+parameters[1],0]),
        s4 : maker.model.move(maker.model.mirror(new rectangle1(parameters[2],parameters[1]-1),true,true),[2*parameters[0]+2*parameters[1]-1,parameters[2]]),
        s5 : new glueflap(other_parameters.modified_glueflap,parameters[2]),
        s6 : maker.model.move(new tuckflap(parameters[0]-0.5,other_parameters.modified_tuckflap,parameters[1]+0.5),[0,parameters[2]]),
        s7 : maker.model.move(maker.model.mirror(new tuckflap(parameters[0]-1,other_parameters.modified_tuckflap,parameters[1]+0.5),false,true),[parameters[0]+parameters[1]+0.5,0]),
        s8 : maker.model.move(new offset(),[parameters[0]-0.5,parameters[2]-1]),
        s9 : maker.model.move(maker.model.mirror(new offset(),true,true),[parameters[0]+parameters[1]+0.5,1]),
        s10 : maker.model.move(maker.model.mirror(new offset(),false,true),[2*parameters[0]+parameters[1]-0.5,1]),
        s11 : maker.model.move(new dustflap(other_parameters.modified_dustflap,parameters[1]-0.5),[parameters[0]+0.5,parameters[2]]),
        s12 : maker.model.move(maker.model.mirror(new dustflap(other_parameters.modified_dustflap,parameters[1]-1),true,false),[2*parameters[0]+2*parameters[1]-1,parameters[2]]),
        s13 : maker.model.move(maker.model.mirror(new dustflap(other_parameters.modified_dustflap,parameters[1]-0.5),true,true),[parameters[0]+parameters[1]-0.5,0]),
        s14 : maker.model.move(maker.model.mirror(new dustflap1(other_parameters.modified_dustflap,parameters[1]-1),false,true),[2*parameters[0]+parameters[1]+0.5,0]),
        s15 : new windowA(parameters,other_parameters)
    }   
    this.units = maker.unitType.Millimeter
    this.models.s1.layer = 'green'
    this.models.s1.paths.d.layer = 'red'
    this.models.s2.layer = 'green'
    this.models.s3.layer = 'green'
    this.models.s3.paths.b.layer = 'red'
    this.models.s4.layer = 'green'
    this.models.s4.paths.a.layer = 'red'
    this.models.s5.layer = 'red'
    this.models.s6.layer = 'red'
    this.models.s6.paths.e.layer = 'green'
    this.models.s7.layer = 'red'
    this.models.s7.paths.e.layer = 'green'
    this.models.s8.layer = 'red'
    this.models.s9.layer = 'red'
    this.models.s10.layer = 'red'
    this.models.s11.layer = 'red'
    this.models.s12.layer = 'red'
    this.models.s13.layer = 'red'
    this.models.s14.layer = 'red'
    this.models.s15.layer = 'red'
}

function A001B(parameters,other_parameters){
    
    
    this.models = {
        s1 : new rectangle1(parameters[2],parameters[0]),
        s2 : maker.model.move(new rectangle2(parameters[2],parameters[1]),[parameters[0],0]),
        s3 : maker.model.move(new rectangle3(parameters[2],parameters[0]),[parameters[0]+parameters[1],0]),
        s4 : maker.model.move(maker.model.mirror(new rectangle1(parameters[2],parameters[1]-1),true,true),[2*parameters[0]+2*parameters[1]-1,parameters[2]]),
        s5 : new glueflap(other_parameters.modified_glueflap,parameters[2]),
        s6 : maker.model.move(new tuckflap1(parameters[0]-0.5,other_parameters.modified_tuckflap,parameters[1]+0.5),[0,parameters[2]]),
        s7 : maker.model.move(maker.model.mirror(new tuckflap1(parameters[0]-1,other_parameters.modified_tuckflap,parameters[1]+0.5),false,true),[parameters[0]+parameters[1]+0.5,0]),
        s8 : maker.model.move(new offset(),[parameters[0]-0.5,parameters[2]-1]),
        s9 : maker.model.move(maker.model.mirror(new offset(),true,true),[parameters[0]+parameters[1]+0.5,1]),
        s10 : maker.model.move(maker.model.mirror(new offset(),false,true),[2*parameters[0]+parameters[1]-0.5,1]),
        s11 : maker.model.move(new dustflap(other_parameters.modified_dustflap,parameters[1]-0.5),[parameters[0]+0.5,parameters[2]]),
        s12 : maker.model.move(maker.model.mirror(new dustflap(other_parameters.modified_dustflap,parameters[1]-1),true,false),[2*parameters[0]+2*parameters[1]-1,parameters[2]]),
        s13 : maker.model.move(maker.model.mirror(new dustflap(other_parameters.modified_dustflap,parameters[1]-0.5),true,true),[parameters[0]+parameters[1]-0.5,0]),
        s14 : maker.model.move(maker.model.mirror(new dustflap1(other_parameters.modified_dustflap,parameters[1]-1),false,true),[2*parameters[0]+parameters[1]+0.5,0]),
        s15 : maker.model.move(new windowB(parameters,other_parameters),[parameters[0]+parameters[1],0]),
        s16 : maker.model.move(maker.model.mirror(new windowB(parameters,other_parameters),false,true),[0,parameters[2]]),
        s17 : new maker.models.ConnectTheDots(false,[[0,0],[0.375*parameters[0],0]]),
        s19 : new maker.models.ConnectTheDots(false,[[0.625*parameters[0],0],[parameters[0],0]]),
        s18 : maker.model.move(new maker.models.ConnectTheDots(false,[[0,0],[0.375*parameters[0],0]]),[parameters[0]+parameters[1],parameters[2]]),
        s20 : maker.model.move(new maker.models.ConnectTheDots(false,[[0.625*parameters[0],0],[parameters[0],0]]),[parameters[0]+parameters[1],parameters[2]])
    }   
    this.units = maker.unitType.Millimeter
    this.models.s1.layer = 'green'
    
    this.models.s2.layer = 'green'
    this.models.s3.layer = 'green'
    this.models.s4.layer = 'green'
    this.models.s4.paths.a.layer = 'red'
    this.models.s5.layer = 'red'
    this.models.s6.layer = 'red'
    this.models.s6.paths.d.layer = 'green'
    this.models.s6.paths.g.layer = 'green'
    this.models.s7.layer = 'red'
    this.models.s7.paths.d.layer = 'green'
    this.models.s7.paths.g.layer = 'green'
    this.models.s8.layer = 'red'
    this.models.s9.layer = 'red'
    this.models.s10.layer = 'red'
    this.models.s11.layer = 'red'
    this.models.s12.layer = 'red'
    this.models.s13.layer = 'red'
    this.models.s14.layer = 'red'
    this.models.s15.layer = 'red'
   
    this.models.s16.layer = 'red'
    this.models.s17.layer = 'red'
    this.models.s18.layer = 'red'
    this.models.s19.layer = 'red'
    this.models.s20.layer = 'red'
}


function A001D(parameters,other_parameters){
    

    
    this.models = {
        s1 : new rectangle1(parameters[2],parameters[0]),
        s2 : maker.model.move(new rectangle2(parameters[2],parameters[1]),[parameters[0],0]),
        s3 : maker.model.move(new rectangle3(parameters[2],parameters[0]),[parameters[0]+parameters[1],0]),
        s4 : maker.model.move(maker.model.mirror(new rectangle1(parameters[2],parameters[1]-1),true,true),[2*parameters[0]+2*parameters[1]-1,parameters[2]]),
        s5 : new glueflap(other_parameters.modified_glueflap,parameters[2]),
        s6 : maker.model.move(new tuckflap2(parameters[0]-0.5,other_parameters.modified_tuckflap,parameters[1]+0.5),[0,parameters[2]]),
        s7 : maker.model.move(maker.model.mirror(new tuckflap2(parameters[0]-1,other_parameters.modified_tuckflap,parameters[1]+0.5),false,true),[parameters[0]+parameters[1]+0.5,0]),
        s8 : maker.model.move(new offset(),[parameters[0]-0.5,parameters[2]-1]),
        s9 : maker.model.move(maker.model.mirror(new offset(),true,true),[parameters[0]+parameters[1]+0.5,1]),
        s10 : maker.model.move(maker.model.mirror(new offset(),false,true),[2*parameters[0]+parameters[1]-0.5,1]),
        s11 : maker.model.move(new dustflap(other_parameters.modified_dustflap,parameters[1]-0.5),[parameters[0]+0.5,parameters[2]]),
        s12 : maker.model.move(maker.model.mirror(new dustflap(other_parameters.modified_dustflap,parameters[1]-1),true,false),[2*parameters[0]+2*parameters[1]-1,parameters[2]]),
        s13 : maker.model.move(maker.model.mirror(new dustflap(other_parameters.modified_dustflap,parameters[1]-0.5),true,true),[parameters[0]+parameters[1]-0.5,0]),
        s14 : maker.model.move(maker.model.mirror(new dustflap1(other_parameters.modified_dustflap,parameters[1]-1),false,true),[2*parameters[0]+parameters[1]+0.5,0]),
        s15 : maker.model.move(new windowD(parameters,other_parameters),[parameters[0]+parameters[1],parameters[2]]),
        s16 : maker.model.move(maker.model.mirror(new windowD(parameters,other_parameters),false,true),[parameters[0]+parameters[1],parameters[2]+parameters[1]]),
        s17 : maker.model.move(new maker.models.ConnectTheDots(false,[[0,0],[10,0.6*other_parameters.modified_tuckflap],[parameters[0]-10,0.6*other_parameters.modified_tuckflap],[parameters[0],0]]),[parameters[0]+parameters[1],parameters[2]+parameters[1]])
     }   
    this.units = maker.unitType.Millimeter
    this.models.s1.layer = 'green'
    
    this.models.s2.layer = 'green'
    this.models.s3.layer = 'green'
    this.models.s4.layer = 'green'
    this.models.s4.paths.a.layer = 'red'
    this.models.s5.layer = 'red'
    this.models.s6.layer = 'red'
    this.models.s6.paths.d.layer = 'green'
    
    this.models.s7.layer = 'red'
    this.models.s7.paths.d.layer = 'green'
    
    this.models.s8.layer = 'red'
    this.models.s9.layer = 'red'
    this.models.s10.layer = 'red'
    this.models.s11.layer = 'red'
    this.models.s12.layer = 'red'
    this.models.s13.layer = 'red'
    this.models.s14.layer = 'red'
    this.models.s15.layer = 'red'
    this.models.s16.layer = 'red'
    this.models.s17.layer = 'red'
   }

   function A001E(parameters,other_parameters){
     this.models = {
        s1 : new rectangle1(parameters[2],parameters[0]),
        s2 : maker.model.move(new rectangle2(parameters[2],parameters[1]),[parameters[0],0]),
        s3 : maker.model.move(new rectangle3(parameters[2],parameters[0]),[parameters[0]+parameters[1],0]),
        s4 : maker.model.move(maker.model.mirror(new rectangle1(parameters[2],parameters[1]-1),true,true),[2*parameters[0]+2*parameters[1]-1,parameters[2]]),
        s5 : new glueflap(other_parameters.modified_glueflap,parameters[2]),
        s6 : maker.model.move(new tuckflap(parameters[0]-0.5,other_parameters.modified_tuckflap,parameters[1]+0.5),[0,parameters[2]]),
        s7 : maker.model.move(maker.model.mirror(new tuckflap(parameters[0]-1,other_parameters.modified_tuckflap,parameters[1]+0.5),false,true),[parameters[0]+parameters[1]+0.5,0]),
        s8 : maker.model.move(new offset(),[parameters[0]-0.5,parameters[2]-1]),
        s9 : maker.model.move(maker.model.mirror(new offset(),true,true),[parameters[0]+parameters[1]+0.5,1]),
        s10 : maker.model.move(maker.model.mirror(new offset(),false,true),[2*parameters[0]+parameters[1]-0.5,1]),
        s11 : maker.model.move(new dustflap(other_parameters.modified_dustflap,parameters[1]-0.5),[parameters[0]+0.5,parameters[2]]),
        s12 : maker.model.move(maker.model.mirror(new dustflap(other_parameters.modified_dustflap,parameters[1]-1),true,false),[2*parameters[0]+2*parameters[1]-1,parameters[2]]),
        s13 : maker.model.move(maker.model.mirror(new dustflap(other_parameters.modified_dustflap,parameters[1]-0.5),true,true),[parameters[0]+parameters[1]-0.5,0]),
        s14 : maker.model.move(maker.model.mirror(new dustflap1(other_parameters.modified_dustflap,parameters[1]-1),false,true),[2*parameters[0]+parameters[1]+0.5,0]),
       
        s15 : maker.model.move(new windowD(parameters,other_parameters),[parameters[0]+parameters[1],parameters[2]]),
        s16 : maker.model.move(maker.model.mirror(new windowD(parameters,other_parameters),false,true),[parameters[0]+parameters[1],parameters[2]+parameters[1]]),
        s17 : maker.model.move(new maker.models.ConnectTheDots(false,[[0,0],[10,0.6*other_parameters.modified_tuckflap],[parameters[0]-10,0.6*other_parameters.modified_tuckflap],[parameters[0],0]]),[parameters[0]+parameters[1],parameters[2]+parameters[1]]),
        s18 : maker.model.move(new windowA(parameters,other_parameters),[-parameters[0]-parameters[1],0])
    }   
    this.units = maker.unitType.Millimeter
    this.models.s1.layer = 'green'
    this.models.s1.paths.d.layer = 'red'
    this.models.s2.layer = 'green'
    this.models.s3.layer = 'green'

    this.models.s4.layer = 'green'
    this.models.s4.paths.a.layer = 'red'
    this.models.s5.layer = 'red'
    this.models.s6.layer = 'red'
    this.models.s6.paths.e.layer = 'green'
    this.models.s7.layer = 'red'
    this.models.s7.paths.e.layer = 'green'
    this.models.s8.layer = 'red'
    this.models.s9.layer = 'red'
    this.models.s10.layer = 'red'
    this.models.s11.layer = 'red'
    this.models.s12.layer = 'red'
    this.models.s13.layer = 'red'
    this.models.s14.layer = 'red'
    this.models.s15.layer = 'red'
    this.models.s16.layer = 'red'
    this.models.s17.layer = 'red'
    this.models.s18.layer = 'red'
}



function A001F(parameters,other_parameters){

    this.models = {
        s1 : new rectangle1(parameters[2],parameters[0]),
        s2 : maker.model.move(new rectangle2(parameters[2],parameters[1]),[parameters[0],0]),
        s3 : maker.model.move(new rectangle3(parameters[2],parameters[0]),[parameters[0]+parameters[1],0]),
        s4 : maker.model.move(maker.model.mirror(new rectangle1(parameters[2],parameters[1]-1),true,true),[2*parameters[0]+2*parameters[1]-1,parameters[2]]),
        s5 : new glueflap(other_parameters.modified_glueflap,parameters[2]),
        s6 : maker.model.move(new tuckflap2(parameters[0]-0.5,other_parameters.modified_tuckflap,parameters[1]+0.5),[0,parameters[2]]),
        s7 : maker.model.move(maker.model.mirror(new tuckflap1(parameters[0]-1,other_parameters.modified_tuckflap,parameters[1]+0.5),false,true),[parameters[0]+parameters[1]+0.5,0]),
        s8 : maker.model.move(new offset(),[parameters[0]-0.5,parameters[2]-1]),
        s9 : maker.model.move(maker.model.mirror(new offset(),true,true),[parameters[0]+parameters[1]+0.5,1]),
        s10 : maker.model.move(maker.model.mirror(new offset(),false,true),[2*parameters[0]+parameters[1]-0.5,1]),
        s11 : maker.model.move(new dustflap(other_parameters.modified_dustflap,parameters[1]-0.5),[parameters[0]+0.5,parameters[2]]),
        s12 : maker.model.move(maker.model.mirror(new dustflap(other_parameters.modified_dustflap,parameters[1]-1),true,false),[2*parameters[0]+2*parameters[1]-1,parameters[2]]),
        s13 : maker.model.move(maker.model.mirror(new dustflap(other_parameters.modified_dustflap,parameters[1]-0.5),true,true),[parameters[0]+parameters[1]-0.5,0]),
        s14 : maker.model.move(maker.model.mirror(new dustflap1(other_parameters.modified_dustflap,parameters[1]-1),false,true),[2*parameters[0]+parameters[1]+0.5,0]),
       
        s18 : maker.model.move(maker.model.mirror(new windowB(parameters,other_parameters),false,true),[0,parameters[2]]),
        s15 : maker.model.move(new windowD(parameters,other_parameters),[parameters[0]+parameters[1],parameters[2]]),
        s16 : maker.model.move(maker.model.mirror(new windowD(parameters,other_parameters),false,true),[parameters[0]+parameters[1],parameters[2]+parameters[1]]),
        s17 : maker.model.move(new maker.models.ConnectTheDots(false,[[0,0],[10,0.6*other_parameters.modified_tuckflap],[parameters[0]-10,0.6*other_parameters.modified_tuckflap],[parameters[0],0]]),[parameters[0]+parameters[1],parameters[2]+parameters[1]]),
        s20 : new maker.models.ConnectTheDots(false,[[0,0],[0.375*parameters[0],0]]),
        s19 : new maker.models.ConnectTheDots(false,[[0.625*parameters[0],0],[parameters[0],0]])
           }   
    this.units = maker.unitType.Millimeter
    this.models.s1.layer = 'green'
    
    this.models.s2.layer = 'green'
    this.models.s3.layer = 'green'
    this.models.s4.layer = 'green'
    this.models.s4.paths.a.layer = 'red'
    this.models.s5.layer = 'red'
    this.models.s6.layer = 'red'
    this.models.s6.paths.d.layer = 'green'
    
    this.models.s7.layer = 'red'
    this.models.s7.paths.d.layer = 'green'
    
    this.models.s8.layer = 'red'
    this.models.s9.layer = 'red'
    this.models.s10.layer = 'red'
    this.models.s11.layer = 'red'
    this.models.s12.layer = 'red'
    this.models.s13.layer = 'red'
    this.models.s14.layer = 'red'
    this.models.s15.layer = 'red'
    this.models.s18.layer = 'red'
    this.models.s17.layer = 'red'
    this.models.s19.layer = 'red'
    this.models.s20.layer = 'red'
    this.models.s16.layer = 'red'
   
}


function A001H(parameters,other_parameters){

    
    this.models = {
        s1 : maker.model.move(maker.model.mirror(new rectangle1(parameters[2],parameters[0]),false,true),[0,parameters[2]]),
        s2 : maker.model.move(new rectangle4(parameters[2],parameters[1]),[parameters[0],0]),
        s3 : maker.model.move(maker.model.mirror(new rectangle3(parameters[2],parameters[0]),false,true),[parameters[0]+parameters[1],parameters[2]]),
        s4 : maker.model.move(maker.model.mirror(new rectangle1(parameters[2],parameters[1]-1),true,false),[2*parameters[0]+2*parameters[1]-1,0]),
        s5 : new glueflap(other_parameters.modified_glueflap,parameters[2]),
        s6 : maker.model.move(new tuckflap2(parameters[0]-1,other_parameters.modified_tuckflap,parameters[1]+0.5),[parameters[0]+parameters[1]+0.5,parameters[2]]),
        s7 : maker.model.move(maker.model.mirror(new tuckflap2(parameters[0]-0.5,other_parameters.modified_tuckflap,parameters[1]+0.5),false,true),[0,0]),
        s8 : maker.model.move(new offset(),[2*parameters[0]+parameters[1]-0.5,parameters[2]-1]),
        s9 : maker.model.move(maker.model.mirror(new offset(),true,true),[parameters[0]+0.5,1]),
        s10 : maker.model.move(new offset(),[parameters[0]+parameters[1]-0.5,parameters[2]-1]),
        s11 : maker.model.move(new dustflap1(other_parameters.modified_dustflap,parameters[1]-1),[2*parameters[0]+parameters[1]+0.5,parameters[2]]),
        s12 : maker.model.move(maker.model.mirror(new dustflap2(other_parameters.modified_dustflap,parameters[1]-1),true,false),[parameters[0]+parameters[1]-0.5,parameters[2]]),
        s13 : maker.model.move(maker.model.mirror(new dustflap1(other_parameters.modified_dustflap,parameters[1]-1),true,true),[2*parameters[0]+2*parameters[1]-1,0]),
        s14 : maker.model.move(maker.model.mirror(new dustflap(other_parameters.modified_dustflap,parameters[1]-1),false,true),[parameters[0]+0.5,0]),
        s15 : maker.model.move(new windowD(parameters,other_parameters),[0,parameters[2]]),
        s16 : maker.model.move(maker.model.mirror(new windowD(parameters,other_parameters),false,true),[0,parameters[2]+parameters[1]]),
        s17 : maker.model.move(new maker.models.ConnectTheDots(false,[[0,0],[10,0.6*other_parameters.modified_tuckflap],[parameters[0]-10,0.6*other_parameters.modified_tuckflap],[parameters[0],0]]),[0,parameters[2]+parameters[1]])
     }   
    this.units = maker.unitType.Millimeter
    this.models.s1.layer = 'green'
    
    this.models.s2.layer = 'green'
    this.models.s3.layer = 'green'
    this.models.s3.paths.b.layer = 'red'
    this.models.s4.layer = 'green'
    this.models.s4.paths.a.layer = 'red'
    this.models.s5.layer = 'red'
    this.models.s6.layer = 'red'
    this.models.s6.paths.d.layer = 'green'
    
    this.models.s7.layer = 'red'
    this.models.s7.paths.d.layer = 'green'
    
    this.models.s8.layer = 'red'
    this.models.s9.layer = 'red'
    this.models.s10.layer = 'red'
    this.models.s11.layer = 'red'
    this.models.s12.layer = 'red'
    this.models.s13.layer = 'red'
    this.models.s14.layer = 'red'
    this.models.s15.layer = 'red'
    this.models.s16.layer = 'red'
    this.models.s17.layer = 'red'
   }

   function A001I(parameters,other_parameters){
    
    this.models = {
        s1 : maker.model.move(maker.model.mirror(new rectangle1(parameters[2],parameters[0]),false,true),[0,parameters[2]]),
        s2 : maker.model.move(new rectangle4(parameters[2],parameters[1]),[parameters[0],0]),
        s3 : maker.model.move(maker.model.mirror(new rectangle3(parameters[2],parameters[0]),false,true),[parameters[0]+parameters[1],parameters[2]]),
        s4 : maker.model.move(maker.model.mirror(new rectangle1(parameters[2],parameters[1]-1),true,false),[2*parameters[0]+2*parameters[1]-1,0]),
        s5 : new glueflap(other_parameters.modified_glueflap,parameters[2]),
        s6 : maker.model.move(new tuckflap2(parameters[0]-1,other_parameters.modified_tuckflap,parameters[1]+0.5),[parameters[0]+parameters[1]+0.5,parameters[2]]),
        s7 : maker.model.move(maker.model.mirror(new tuckflap2(parameters[0]-0.5,other_parameters.modified_tuckflap,parameters[1]+0.5),false,true),[0,0]),
        s8 : maker.model.move(new offset(),[2*parameters[0]+parameters[1]-0.5,parameters[2]-1]),
        s9 : maker.model.move(maker.model.mirror(new offset(),true,true),[parameters[0]+0.5,1]),
        s10 : maker.model.move(new offset(),[parameters[0]+parameters[1]-0.5,parameters[2]-1]),
        s11 : maker.model.move(new dustflap1(other_parameters.modified_dustflap,parameters[1]-1),[2*parameters[0]+parameters[1]+0.5,parameters[2]]),
        s12 : maker.model.move(maker.model.mirror(new dustflap2(other_parameters.modified_dustflap,parameters[1]-1),true,false),[parameters[0]+parameters[1]-0.5,parameters[2]]),
        s13 : maker.model.move(maker.model.mirror(new dustflap1(other_parameters.modified_dustflap,parameters[1]-1),true,true),[2*parameters[0]+2*parameters[1]-1,0]),
        s14 : maker.model.move(maker.model.mirror(new dustflap(other_parameters.modified_dustflap,parameters[1]-1),false,true),[parameters[0]+0.5,0]),
        s15 : maker.model.move(new windowD(parameters,other_parameters),[0,parameters[2]]),
        s16 : maker.model.move(maker.model.mirror(new windowD(parameters,other_parameters),false,true),[0,parameters[2]+parameters[1]]),
        s17 : maker.model.move(new maker.models.ConnectTheDots(false,[[0,0],[10,0.6*other_parameters.modified_tuckflap],[parameters[0]-10,0.6*other_parameters.modified_tuckflap],[parameters[0],0]]),[0,parameters[2]+parameters[1]]),
        s18 : new windowA(parameters,other_parameters)
     }   
    this.units = maker.unitType.Millimeter
    this.models.s1.layer = 'green'
    
    this.models.s2.layer = 'green'
    this.models.s3.layer = 'green'
    this.models.s3.paths.b.layer = 'red'
    this.models.s4.layer = 'green'
    this.models.s4.paths.a.layer = 'red'
    this.models.s5.layer = 'red'
    this.models.s6.layer = 'red'
    this.models.s6.paths.d.layer = 'green'
    
    this.models.s7.layer = 'red'
    this.models.s7.paths.d.layer = 'green'
    
    this.models.s8.layer = 'red'
    this.models.s9.layer = 'red'
    this.models.s10.layer = 'red'
    this.models.s11.layer = 'red'
    this.models.s12.layer = 'red'
    this.models.s13.layer = 'red'
    this.models.s14.layer = 'red'
    this.models.s15.layer = 'red'
    this.models.s16.layer = 'red'
    this.models.s17.layer = 'red'
    this.models.s18.layer = 'red'
   }

   function A001J(parameters,other_parameters){

    this.models = {
        s1 : maker.model.move(maker.model.mirror(new rectangle1(parameters[2],parameters[0]),false,true),[0,parameters[2]]),
        s2 : maker.model.move(new rectangle4(parameters[2],parameters[1]),[parameters[0],0]),
        s3 : maker.model.move(maker.model.mirror(new rectangle3(parameters[2],parameters[0]),false,true),[parameters[0]+parameters[1],parameters[2]]),
        s4 : maker.model.move(maker.model.mirror(new rectangle1(parameters[2],parameters[1]-1),true,false),[2*parameters[0]+2*parameters[1]-1,0]),
        s5 : new glueflap(other_parameters.modified_glueflap,parameters[2]),
        s6 : maker.model.move(new tuckflap2(parameters[0]-1,other_parameters.modified_tuckflap,parameters[1]+0.5),[parameters[0]+parameters[1]+0.5,parameters[2]]),
        s7 : maker.model.move(maker.model.mirror(new tuckflap1(parameters[0]-0.5,other_parameters.modified_tuckflap,parameters[1]+0.5),false,true),[0,0]),
        s8 : maker.model.move(new offset(),[2*parameters[0]+parameters[1]-0.5,parameters[2]-1]),
        s9 : maker.model.move(maker.model.mirror(new offset(),true,true),[parameters[0]+0.5,1]),
        s10 : maker.model.move(new offset(),[parameters[0]+parameters[1]-0.5,parameters[2]-1]),
        s11 : maker.model.move(new dustflap1(other_parameters.modified_dustflap,parameters[1]-1),[2*parameters[0]+parameters[1]+0.5,parameters[2]]),
        s12 : maker.model.move(maker.model.mirror(new dustflap2(other_parameters.modified_dustflap,parameters[1]-1),true,false),[parameters[0]+parameters[1]-0.5,parameters[2]]),
        s13 : maker.model.move(maker.model.mirror(new dustflap1(other_parameters.modified_dustflap,parameters[1]-1),true,true),[2*parameters[0]+2*parameters[1]-1,0]),
        s14 : maker.model.move(maker.model.mirror(new dustflap(other_parameters.modified_dustflap,parameters[1]-1),false,true),[parameters[0]+0.5,0]),
        s15 : maker.model.move(new windowD(parameters,other_parameters),[0,parameters[2]]),
        s16 : maker.model.move(maker.model.mirror(new windowD(parameters,other_parameters),false,true),[0,parameters[2]+parameters[1]]),
        s17 : maker.model.move(new maker.models.ConnectTheDots(false,[[0,0],[10,0.6*other_parameters.modified_tuckflap],[parameters[0]-10,0.6*other_parameters.modified_tuckflap],[parameters[0],0]]),[0,parameters[2]+parameters[1]]),
        s18 : maker.model.move(maker.model.mirror(new windowB(parameters,other_parameters),false,true),[parameters[0]+parameters[1],parameters[2]]),
        s20 : new maker.models.ConnectTheDots(false,[[parameters[0]+parameters[1],0],[1.375*parameters[0]+parameters[1],0]]),
        s19 : new maker.models.ConnectTheDots(false,[[1.625*parameters[0]+parameters[1],0],[2*parameters[0]+parameters[1],0]])
        
     }   
    this.units = maker.unitType.Millimeter
    this.models.s1.layer = 'green'
    
    this.models.s2.layer = 'green'
    this.models.s3.layer = 'green'
    this.models.s4.layer = 'green'
    this.models.s4.paths.a.layer = 'red'
    this.models.s5.layer = 'red'
    this.models.s6.layer = 'red'
    this.models.s6.paths.d.layer = 'green'
    
    this.models.s7.layer = 'red'
    this.models.s7.paths.d.layer = 'green'
    
    this.models.s8.layer = 'red'
    this.models.s9.layer = 'red'
    this.models.s10.layer = 'red'
    this.models.s11.layer = 'red'
    this.models.s12.layer = 'red'
    this.models.s13.layer = 'red'
    this.models.s14.layer = 'red'
    this.models.s15.layer = 'red'
    this.models.s16.layer = 'red'
    this.models.s17.layer = 'red'
    this.models.s18.layer = 'red'
    this.models.s19.layer = 'red'
    this.models.s20.layer = 'red'
   }


   function A001AX(parameters,other_parameters){

    
    this.models = {
        s1 : maker.model.move(maker.model.mirror(new rectangle1(parameters[2],parameters[0]),false,true),[0,parameters[2]]),
        s2 : maker.model.move(new rectangle4(parameters[2],parameters[1]),[parameters[0],0]),
        s3 : maker.model.move(maker.model.mirror(new rectangle3(parameters[2],parameters[0]),false,true),[parameters[0]+parameters[1],parameters[2]]),
        s4 : maker.model.move(maker.model.mirror(new rectangle1(parameters[2],parameters[1]-1),true,false),[2*parameters[0]+2*parameters[1]-1,0]),
        s5 : new glueflap(other_parameters.modified_glueflap,parameters[2]),
        s6 : maker.model.move(new tuckflap2(parameters[0]-1,other_parameters.modified_tuckflap,parameters[1]+0.5),[parameters[0]+parameters[1]+0.5,parameters[2]]),
        s7 : maker.model.move(maker.model.mirror(new tuckflap2(parameters[0]-0.5,other_parameters.modified_tuckflap,parameters[1]+0.5),false,true),[0,0]),
        s8 : maker.model.move(new offset(),[2*parameters[0]+parameters[1]-0.5,parameters[2]-1]),
        s9 : maker.model.move(maker.model.mirror(new offset(),true,true),[parameters[0]+0.5,1]),
        s10 : maker.model.move(new offset(),[parameters[0]+parameters[1]-0.5,parameters[2]-1]),
        s11 : maker.model.move(new dustflap1(other_parameters.modified_dustflap,parameters[1]-1),[2*parameters[0]+parameters[1]+0.5,parameters[2]]),
        s12 : maker.model.move(maker.model.mirror(new dustflap2(other_parameters.modified_dustflap,parameters[1]-1),true,false),[parameters[0]+parameters[1]-0.5,parameters[2]]),
        s13 : maker.model.move(maker.model.mirror(new dustflap1(other_parameters.modified_dustflap,parameters[1]-1),true,true),[2*parameters[0]+2*parameters[1]-1,0]),
        s14 : maker.model.move(maker.model.mirror(new dustflap(other_parameters.modified_dustflap,parameters[1]-1),false,true),[parameters[0]+0.5,0]),
      
        s16 : maker.model.move(new windowA(parameters,other_parameters),[-parameters[0]-parameters[1],0])    
    }   
    this.units = maker.unitType.Millimeter
    this.models.s1.layer = 'green'
    this.models.s1.paths.d.layer = 'red'
    this.models.s2.layer = 'green'
    this.models.s3.layer = 'green'
    this.models.s3.paths.b.layer = 'red'
    this.models.s4.layer = 'green'
    this.models.s4.paths.a.layer = 'red'
    this.models.s5.layer = 'red'
    this.models.s6.layer = 'red'
    this.models.s6.paths.d.layer = 'green'
    
    this.models.s7.layer = 'red'
    this.models.s7.paths.d.layer = 'green'
    
    this.models.s8.layer = 'red'
    this.models.s9.layer = 'red'
    this.models.s10.layer = 'red'
    this.models.s11.layer = 'red'
    this.models.s12.layer = 'red'
    this.models.s13.layer = 'red'
    this.models.s14.layer = 'red'
   
    this.models.s16.layer = 'red'
   
   }

module.exports = {A001AX,A001J,A001I,A001,A001A,A001B,A002CXX,A001D,A002FX,A001E,A001F,A002X,A001H,A002,A002EX,A002BX,A002E,A002F,A002DX,A002D,A002A,A002B,A002AX,A002CX}
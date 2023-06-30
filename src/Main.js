import React from 'react'
//import Input from './converter/Input'
import Output from './converter/Output'
import Select from './converter/Select'
import { useState } from 'react'

function Main() {
    const [inValue, setInvalue] =useState();
    const [unit,setUnit] = useState("Km");
    const [select,setSelect] = useState("Km")
    //const [sign,setSign] = useState()

    const selectIn = (e)=>{
        setSelect(e);
    }

    const inputOne=(e)=>{
        setInvalue(e)
        setUnit(select);
    }

    const inputTwo = (e)=>{
        setInvalue(e)
        if(select==="Km"){setUnit("mph")}
        if(select==="Cm"){setUnit("Inch")}
        if(select==="Cel"){setUnit("feh")}
        if(select==="Feet"){setUnit("Meters")}
        if(select==="Sfoot"){setUnit("Acre")}
    }


    let out1;
    let out2;
    let sign1;
    let sign2;
   
if(select === "Km"){
    sign1="Km";
    sign2="Miles";
    if(unit==="Km"){
        out1=inValue;
        out2= inValue/1.6;
    }
    else{
        out2=inValue;
    out1= inValue*1.6;
    }
    
}
else if(select==="Cm"){
    sign1="Cm";
    sign2="Inch";
    if(unit==="Cm"){
        out1=inValue;
        out2= inValue/2.54;
    }
    else{
        out2=inValue;
    out1= inValue*2.54;
    }
}
else if(select==="Cel"){
    sign1="C";
    sign2="F";
    if(unit==="Cel"){
        out1=inValue;
        out2= (inValue*1.8)+32;
    }
    else{
        out2=inValue;
    out1= (inValue-32)/1.8;
    }
}
else if(select==="Feet"){
    sign1="Feet";
    sign2="Meter";
    if(unit==="Feet"){
        out1=inValue;
        out2= inValue/3.5;
    }
    else{
        out2=inValue;
    out1= inValue*3.5;
    }
}
else if(select==="Sfoot"){
    sign1="Sq.Feet";
    sign2="Acre";
    if(unit==="Sfoot"){
        out1=inValue;
        out2= inValue/43560;
    }
    else{
        out2=inValue;
    out1= inValue*43560;
    }
}
else{
    sign1="Km";
    sign2="Mph";
    if(unit==="Km"){
        out1=inValue;
        out2= inValue/1.6;
    }
    else{
        out2=inValue;
    out1= inValue*1.6;
    }
}
  return (
    <div>
        <div className='container'>
            <div className='row mt-4 gx-5'>
                <div className='col-5 mt-4'>
                    <Select selectIn={selectIn} />
                </div>
                <div className='col-7 mt-4 py-5'
                style={{background:"#99ccff",borderRadius:"10px",height:"300px"}}>
                    <div><Output  inputOne={inputOne} output={out1} sign={sign1}/></div><br/>
                    <div> <Output  inputOne={inputTwo} output={out2} sign={sign2} /></div>
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default Main;

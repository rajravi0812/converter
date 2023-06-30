import React from 'react'

function Output(props) {
    const {inputOne,output,sign} = props;
  return (
    
     
    <div className='container'> 
        <div className='text-center'>
            <h4>Unit in {sign} </h4>
            <input type="number" placeholder='Enter some value'
            value={output} onChange={(e)=>inputOne(e.target.value)} style={{width:"40%",border:"0px",borderRadius:"5px",height:"35px"}}/> 
            <span style={{color:"#b30000",fontSize:"19px"}}> {sign}</span>
            
        </div>
        </div>
  )
}

export default Output

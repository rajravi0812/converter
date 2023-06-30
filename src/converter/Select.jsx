import React from 'react'


function Select(props) {
    const {selectIn} = props
  return (
    <div>
        <select class="form-select" aria-label="Default select example" onChange={(e)=>selectIn(e.target.value)}>
                    <option defaultValue="Km">Km To Mph
                    </option>
                    <option value="Cm">Cm to Inch
                    </option>
                    <option value="Cel">Deg to Feh</option>
                    <option value="Feet">Feet to Meters</option>
                    <option value="Sfoot">Square Foot To Acre</option>
        </select>
    </div>
  )
}

export default Select

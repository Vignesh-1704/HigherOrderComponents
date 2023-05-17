import React from 'react'
import { useState } from 'react'

function Counter(WrapperComponent) {
    function Counter(props) {
        const[count,setCount] = useState(0)
        function handleClick() {
            setCount(count+1)
        }
      return (
        <div>
            <WrapperComponent count ={count} handleClick = {handleClick} name= {props.name}/>
        </div>
      )
    }
    return Counter
}

export default Counter
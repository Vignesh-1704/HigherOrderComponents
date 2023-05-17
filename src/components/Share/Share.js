import React from 'react'
import Counter from '../Counter/Counter'

function Share({count,handleClick}) {

  return (
    <>
    <h1>{count}</h1>
    <button onClick={handleClick}>Share</button>
    </>
  )
}

export default Counter(Share)
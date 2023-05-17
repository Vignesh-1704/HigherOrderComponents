import Counter from '../Counter/Counter'

function Like({count,handleClick,name}) {
    console.log(name)
  return (
    <>
    <h1>{count}</h1>
    <button onClick={handleClick}>Like</button>
    </>
  )
}

export default Counter(Like)
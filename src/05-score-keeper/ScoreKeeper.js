import { useEffect, useState } from 'react'

//Notice localStorage.getItem and localStorage.setItem
export default function ScoreKeeper () {
  const [score, setScore] = useState(parseInt(localStorage.getItem('score')) || 0)
  useEffect(() => {
    localStorage.setItem('score', score)
  }, [score]) //This is the dependency array. It's an array of values that the useEffect hook will watch for changes. 
  //If any of the values in the array change, the useEffect hook will run again. 
  //If the array is empty, the useEffect hook will only run once, when the component is first rendered. 
  //If the array is not provided, the useEffect hook will run every time the component is rendered.

  return (
    <div>
      <h1>Your score is: {score}</h1>
      <button onClick={() => setScore(prevScore => prevScore + 1)}>+</button>
      <button onClick={() => setScore(prevScore => prevScore - 1)}>-</button>
    </div>
  )
}

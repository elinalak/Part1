import React, { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Display = (props) => {
  return (
    <h1>{props.header}</h1>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  const randomAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length))
 
  const increasePoint = () => {
    points[selected] = points[selected] + 1
    setPoints(points.map(function(n) { return n;}))
  }

  console.log(anecdotes[selected])
  console.log(selected)
  console.log(points[selected])
console.log(Math.max(...points))



  return (
    <div>
      <Display header='Anecdote of the day'/>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} voices</p>
      <Button handleClick={increasePoint} text='vote'/>
      <Button handleClick={randomAnecdote} text='next anecdote'/>
      <Display header='Anecdote with the most vote'/>
      <p>{anecdotes[points.indexOf(Math.max(...points))]}</p>
      <p>has {Math.max(...points)} votes</p>
    </div>
  )
}
export default App
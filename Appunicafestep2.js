import React, { useState } from 'react'

const Display = props => <div>{props.name} {props.value} {props.percent}</div>

const Header = props => <h1>{props.header}</h1>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>)


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = (newGood) => () => {
    setGood(newGood)
  }

  const setToNeutral = (newNeutral) => () => {
    setNeutral(newNeutral)
  }

  const setToBad = (newBad) => () => {
    setBad(newBad)
  }

  

  return (
  <div>
    <Header header='give feedback'/>
        <Button handleClick={setToGood(good+1)} text='good'/>
        <Button handleClick={setToNeutral(neutral+1)} text='neutral'/>
        <Button handleClick={setToBad(bad + 1)} text='bad'/>
    <Header header='statistics'/>
        <Display name='good' value={good} />
        <Display name='neutral' value={neutral} /> 
        <Display name='bad' value={bad} />
        <Display name='all' value={good+neutral+bad}/>
        <Display name='avarage' value={(good*1+neutral*0+bad*(-1))/(good+neutral+bad)}/>
        <Display name='positive' value={good/(good+neutral+bad)*100} percent='%' />
        </div>
  )
}

export default App
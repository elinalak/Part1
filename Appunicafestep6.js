import React, { useState } from 'react'

const Statistics = props => <tr>{props.name} <td>{props.value}</td> {props.percent}</tr>

const Header = props => <h1>{props.header}</h1>

const PushButton = (props) => (
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

  const Screen = () => {
    if (good+bad+neutral>0) {
    return (
      <table>
    <Statistics name='good' value={good} />
            <Statistics name='neutral' value={neutral} /> 
            <Statistics name='bad' value={bad} />
            <Statistics name='all' value={good+neutral+bad}/>
            <Statistics name='avarage' value={(good*1+neutral*0+bad*(-1))/(good+neutral+bad)}/>
            <Statistics name='positive' value={good/(good+neutral+bad)*100} percent='%' />
      </table>
  )};
    return (
      <div>
        <p>No feedback given</p>
      </div>)
  }  

  const Button = ()=> {
    return (
      <div>
          <PushButton handleClick={setToGood(good+1)} text='good'/>
          <PushButton handleClick={setToNeutral(neutral+1)} text='neutral'/>
          <PushButton handleClick={setToBad(bad + 1)} text='bad'/> 
          </div>
    )
  }

  return (
  <div>
    <Header header='give feedback'/>
    <Button/>
    <Header header='statistics'/>
    <Screen/>
        </div>
  )
}

export default App
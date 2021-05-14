import React from 'react'


const Header = 'Half stack application development' 
console.log (Header)

const Content = (props) => {
  return (
  <div>
    <p>{props.text} {props.numbers}</p>
  </div>
  )
}
console.log (Content)


const App = () => {

  return (
    <div>
      <h1>{Header}</h1>
      <Content text = 'Fundamentals of React' numbers = {10} />
      <Content text ='Using props to pass data' numbers = {7} />
      <Content text ='State of a component' numbers = {14}/>
      <p>Number of exercises {10+7+14}</p>
      </div>
  )
  }

export default App
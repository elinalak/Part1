import React from 'react'

const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}

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
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header course={course}/>
      <Content text={parts[0].name} numbers={parts[0].exercises}/>
      <Content text={parts[1].name} numbers={parts[1].exercises}/>
      <Content text={parts[2].name} numbers={parts[2].exercises}/>
      <p>Total parts {10+7+14}</p>
      
      </div>
  )
  }

export default App
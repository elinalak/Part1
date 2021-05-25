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

const Sum = (p1,p2,p3) => {
  console.log(p1)
  console.log(p2)
  console.log(p3)
  return p1+p2+p3
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
      <Header course={course}/>
      <Content text={part1.name} numbers={part1.exercises}/>
      <Content text={part2.name} numbers={part2.exercises}/>
      <Content text={part3.name} numbers={part3.exercises}/>
      
      </div>
  )
  }

export default App
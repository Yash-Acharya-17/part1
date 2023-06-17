//import logo from './logo.svg';
//import './App.css';
function Part(content){
  return (
    <div>
      <p>{content.name} {content.exercise}</p>
    </div>
  )
}
function Header(header){
  return(
    <div>
      <h1>{header.courseName}</h1>
    </div>
  )
}
function Content(content){
  return(
    <div>
      <Part part={content.parts[0].partName} exercise={content.parts[0].exercises}/>
      <Part part={content.parts[1].partName} exercise={content.parts[1].exercises}/>
      <Part part={content.parts[2].partName} exercise={content.parts[2].exercises}/>
    </div>
  )
}


function Total(total){
  
  return (
    <div>
      <p>Number of exercises {total.parts[0].exercises + total.parts[1].exercises + total.parts[2].exercises}</p>
    </div>
  )
}
function App() {
  const course={
    courseName:'Half stack app development',
    parts:[
      {
        partName:'Fundamentals of React',
        exercises:10,
      },
      {
        partName:'Using props to pass data',
        exercises:7,
      },
      {
        partName:'State of a component',
        exercises:14
      }],
  }

  return (
    <div>
      <Header course={course.courseName}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  );
}

export default App;

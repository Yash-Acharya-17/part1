//import logo from './logo.svg';
//import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
import {useState} from 'react'

function Button(props){
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}
function StatisticLine({text,value}){
  return (
  <div>
    <td>{text}</td>
    <td>{value}</td>
  </div>
  )
}
function Statistics({good,neutral,bad}){
  const total = good+neutral+bad
  const average = (good-bad)/total
  const perc = (good/total)*100
  
  if (total===0){
    return (
      <div>No feedback given</div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
        <StatisticLine text='good' value={good}/>
        <StatisticLine text='neutral' value={neutral}/>
        <StatisticLine text='bad' value={bad}/>
        <StatisticLine text='all' value={total}/>
        <StatisticLine text='average' value={average}/>
        <StatisticLine text='percentage' value={perc}/>
        </tbody>
      </table>
    </div>
    
  )
}
function App(){
  const [good,setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad,setBad] = useState(0)


  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={()=>setGood(good+1)} text='good'/>
      <Button handleClick={()=>setNeutral(neutral+1)} text='neutral'/>
      <Button handleClick={()=>setBad(bad+1)} text='bad'/>
      <p>statistics</p>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}


export default App;

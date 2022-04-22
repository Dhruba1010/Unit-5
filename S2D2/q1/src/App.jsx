// import logo from './logo.svg';
import './App.css';
import {Timer} from './components/timer'
import {useState, useEffect} from 'react';

function App() {

  const [startTime, setStartTime] = useState(false);
  const [timer, setTimer] = useState({
    start:0,
    stop:0
  });

  const updateTimer = (e) => {
    setTimer({
      ...timer,
      [e.target.name] : [e.target.value]
    })
  }

  return (
    <div className="App">
      <label>Start</label>
      <input type='number' name = 'start' onChange={(e) => {updateTimer(e)}}/>
      <label>Stop</label>
      <input type="number" name='stop' onChange={(e) => {updateTimer(e)}}/>

      <button onClick={() => {setStartTime(!startTime)}}>{startTime ? 'Stop' : 'Start'}</button>

      {startTime ? <Timer {...timer}/> : null}
    </div>
  );
}

export default App;

import { useEffect, useRef } from 'react';
import './App.css';
import Counter from './components/Counter';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons';
import {faPause} from '@fortawesome/free-solid-svg-icons';
import {faStop} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const six = Math.floor(count/100000);
  const five = Math.floor(count/10000);
  const four = Math.floor(count/1000);
  const three = Math.floor(count/100);
  const two = Math.floor(count/10);
  const one = Math.floor(count/1);
  const currentTimer = useRef();

  useEffect(() => {
    play()
    return () => clearInterval(currentTimer.current);
  }, []);

  const play = () => {
    currentTimer.current = setInterval(() => {
        setCount((prev) => prev + 1);
    }, 1000);
  };
  const pause = () => {
    clearInterval(currentTimer.current);
  };
  const stop = () => {
    clearInterval(currentTimer.current);
    setCount(0);
  };

  return (
    <div>
      <Counter
        digitOne={one % 10}
        digitTwo={two % 10}
        digitThree={three % 10}
        digitFour={four % 10}
        digitFive={five % 10}
        digitSixt={six % 10}
      />
      <div className='d-flex justify-content-center m-0 text-white'>
        <button type="button" className="btn btn-dark m-2" onClick={() => play()}>
          <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
        </button>
        <button type="button" className="btn btn-dark m-2" onClick={() => pause()}>
          <FontAwesomeIcon icon={faPause}></FontAwesomeIcon>
        </button>
        <button type="button" className="btn btn-dark m-2" onClick={() => stop()}>
          <FontAwesomeIcon icon={faStop}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default App;

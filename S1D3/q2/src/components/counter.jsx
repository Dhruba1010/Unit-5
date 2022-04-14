import { useState } from 'react';
import './counter.css'

export const Counter =() => {
    const [counter, setCounter] = useState(0);

    const AddCounter = () => {
        setCounter(counter+1);
    }

    const SubCounter = () => {
        counter>0 ? setCounter(counter-1) : setCounter(0);
    }

    const DoubleCounter = () => {
        setCounter(counter*2);
    }

    const ClearCounter = () => {
        setCounter(0);
    }

    return (
        <div>
            <div><h1 className={counter%2 ? 'red' : 'green'}>Counter: {counter}</h1></div>
            <div className='button'>
                <button onClick={AddCounter}>Increase</button>
                <button onClick={SubCounter}>Decrease</button>
                <button onClick={DoubleCounter}>Increase Double</button>
            </div>
            <div className='clearButton'>
                <button onClick={ClearCounter}>Clear</button>
            </div>
        </div>
        
    )
};
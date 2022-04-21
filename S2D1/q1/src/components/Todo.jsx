import { useState } from 'react';
import './Todo.css'

 export const TodoInput = ({getInputText}) => {
    const [inputTxt, setInputTxt] = useState('');

    return (
        <div className='AddTask'>
            <input className='AddTaskInput' onChange={(e) => { setInputTxt(e.target.value); }} type='text' placeholder='Write Something' />
            <button className='AddTaskButton' onClick={() =>{getInputText(inputTxt)}}>+</button>
        </div>
    );
};



import { useState } from 'react';

 export const TodoIn = ({getInputText}) => {
    const [inputTxt, setInputTxt] = useState('');

    return (
        <div className='AddTask'>
            <input onChange={(e) => { setInputTxt(e.target.value); }} type='text' placeholder='Write Something' />
            <button onClick={() =>{getInputText(inputTxt)}}>+</button>
        </div>
    );
};



import { useEffect, useState } from 'react';

export const Timer = () =>{
    const [timer, setTimer] = useState(0);

    // const addCounter =() =>{
    //     setTimer(timer+1);
    // };

    const addCounter = useEffect(() =>{
        const increase = setInterval(()=>{
            setTimer(timer+1)
        },1000)

        return(
            clearInterval(increase)
        );
    },[]);

    return (
        <div className='App'>
            <h2>Counter: {timer}</h2>
            <button onClick={addCounter}>Start</button>
        </div>
    );
};
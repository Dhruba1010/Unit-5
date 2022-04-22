import { useEffect, useState } from 'react';

export const Timer = ({start, stop}) =>{
    const [timer, setTimer] = useState(+start);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimer((t) => {
                if(t=== +stop){
                    clearInterval(timer);
                    return t;
                } else {
                    return t+1;
                }
            })
        },1000)

        return () => {
            clearInterval(timer);
        }
    },[])

    return (
        <div className='App'>
            <h3>Timer: {timer}</h3>
        </div>
    );
};
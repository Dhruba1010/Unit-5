import {TodoIn} from './Todo';
import {useState} from 'react';
import './Todo.css'



export const Todo = () => {
    const [Todo, setTodo] = useState([]);

    const getInputText = (Text) => {
        console.log('got the text', Text);
        setTodo([...Todo,Text])
    };

    return (
        <div>
            <TodoIn getInputText={getInputText}/>
                {Todo.map((e) => {
                    return (
                        <div>
                            <h2>{e}</h2>
                        </div>
                    )
                })}
        </div>
    );
};
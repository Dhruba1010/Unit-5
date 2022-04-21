import {TodoInput} from './Todo';
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
            <TodoInput getInputText={getInputText}/>
                {Todo.map((e) => {
                    return (
                        <div className='todolist'>
                            <h5>{e}</h5>
                        </div>
                    )
                })}
        </div>
    );
};
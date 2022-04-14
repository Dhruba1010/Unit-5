import {TodoIn} from './Todo';
import {ShowTodo} from './TodoItem';
import {useState} from 'react';

const getInputText = (Text) => {
    console.log('got the text', Text);
};

export const Todo = () => {
    const [Todo, setTodo] = useState([]);
    return (
        <div>
            <TodoIn getInputText={getInputText}/>
                {Todo.map((List) => {
                    return <ShowTodo Todo={List}/>;
                })}
        </div>
    );
};
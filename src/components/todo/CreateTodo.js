import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/state/todoSlice/TodoSlice';

const CreateTodo = () => {
    const getTodoValue = useRef();
    const dispatch = useDispatch();
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-10">
                    <input ref={getTodoValue} type="text" className='form-control' placeholder='Create todo' />
                </div>
                <div className="col-md-2">
                    <button onClick={()=> dispatch(addTodo(getTodoValue.current.value))} className='btn btn-outline-info'>Add Todo</button>
                </div>
            </div>
        </div>
    );
};

export default CreateTodo;
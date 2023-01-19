import React from 'react';
import CreateTodo from '../components/todo/CreateTodo';
import TodoList from '../components/todo/TodoList';

const TodoPage = () => {
    return (
        <div className='container mt-4 todo-main'>
            <div className="row padding-x">
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            <h4 className='text-center'>My Todo App</h4>
                        </div>
                        <div className="card-body">
                            <CreateTodo></CreateTodo>
                            <TodoList></TodoList>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoPage;
import React from "react";
import { useSelector } from "react-redux";
import deleteTodo from "./todoDelete";
import { editTodoAlert } from "./editTodoAlert";

const TodoList = () => {
  const todoLists = useSelector((state) => (state.addTodo.value));
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <table className="table table-dark border table-striped table-hover">
            <thead>
              <tr>
                <th>Index No.</th>
                <th>Task Name</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {todoLists.map((item, index) => {
                return (
                  <tr key={index.toString()}>
                    <td>{index}</td>
                    <td>{item}</td>
                    <td>
                      <button onClick={() => editTodoAlert(item, index)} className="btn btn-outline-warning">Edit</button>
                    </td>
                    <td>
                      <button onClick={() => deleteTodo(index)} className="btn btn-outline-danger">Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TodoList;

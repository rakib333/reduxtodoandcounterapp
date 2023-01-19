import Swal from "sweetalert2";
import store from "../../redux/store/store";
import { editTodo } from "../../redux/state/todoSlice/TodoSlice";

export const editTodoAlert = (item, index) => {
    console.log(item, index)
    Swal.fire({
        title: "Update your task",
        input: 'text',
        inputValue: item,
        inputValidator: (value) => {
            console.log(value)
            if (value) {
                store.dispatch(editTodo({ index: index, task: value }))
            }
        }
    })
}



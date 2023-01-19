import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../state/counterSlice/CounterSlice";
import TodoReducer from "../state/todoSlice/TodoSlice";


// creating store
export default configureStore({

    // inside reducer we connect all the app component
    reducer: {
        counter_app: counterReducer,
        addTodo: TodoReducer
    }
});
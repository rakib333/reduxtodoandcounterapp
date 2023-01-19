import Swal from "sweetalert2";
import { removeTodo } from "../../redux/state/todoSlice/TodoSlice";
import store from '../../redux/store/store'

const deleteTodo = (index) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
          if (result.isConfirmed) {
            store.dispatch(removeTodo(index))
            Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          } else if(result.isDismissed) {
            Swal.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
            )}
      })
}

export default deleteTodo;
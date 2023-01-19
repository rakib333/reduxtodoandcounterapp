import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, DivideBy2, increment, multiplyBy2, reset, setCustom } from '../../redux/state/counterSlice/CounterSlice';

const Counter = () => {
    
    const count = useSelector(state => (state.counter_app.value));
    const dispatch = useDispatch();
    const customValue = useRef();
    return (
        <div className='card mt-5 bg-light bg-gradient shadow-lg p-4'>
            <div className="card-body rounded bg-secondary text-center mb-2">
                <h2 className='mt-2 mb-4 text-light card-title1'>This is a simple counter app by react redux</h2>
                <h3 className='d-inline bg-dark p-2 text-white rounded'>{count}</h3>
                { console.log(count)}
            </div>
            <div className="cord-body d-flex justify-content-center mt-3">
                <button onClick={()=>dispatch(increment())} className='btn btn-success me-4'>Increase</button>
                <button onClick={()=>dispatch(decrement())} className='btn btn-primary me-4'>Decrease</button>
                <button onClick={()=>dispatch(DivideBy2())} className='btn btn-warning me-4'>Make it half</button>
                <button onClick={()=>dispatch(multiplyBy2(2))} className='btn btn-danger me-4'>Double it</button>
                <button onClick={()=>dispatch(reset())} className='btn btn-danger'>Reset</button>
                
            </div>
            <div className="card-body mt-3">
                <input ref={customValue} type="number" className='w-25 form-control' placeholder='Set value'/> <br />
                <button onClick={()=> dispatch(setCustom(customValue.current.valueAsNumber))} className='btn btn-dark'>Set your fav number</button>
            </div>
        </div>
    );
};

export default Counter;
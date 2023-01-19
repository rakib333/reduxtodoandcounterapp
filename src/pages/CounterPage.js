import React from 'react';
import Counter from '../components/counter/Counter';

const CounterPage = () => {
    return (
        <div className='container'>
            <div className="row d-flex justify-content-center">
                <div className="col">
                    <Counter/>
                </div>
            </div>
        </div>
    );
};

export default CounterPage;
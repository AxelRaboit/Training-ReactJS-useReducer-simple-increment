import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        
        default:
            return state
    }
}

function Count() {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div className='mt-5 bg-dark w-20 rounded d-flex justify-content-center align-items-center flex-column p-5'>
            <div className='text-light' style={{fontSize: '10em'}}>{count}</div>
            <div className='container__buttons'>
                <button onClick={() => dispatch('decrement')} className='btn btn-danger m-3 p-3 text-light'>-</button>
                <button onClick={() => dispatch('increment')} className='btn btn-success m-3 p-3 text-light'>+</button>
                <button onClick={() => dispatch('reset')} className='btn btn-warning m-3 p-3 text-light'>Reset</button>
            </div>
        </div>
    )
}

export default Count;

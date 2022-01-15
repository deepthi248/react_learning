import React, { useReducer } from 'react'

const initialState = {
    counter_1: 0,
    counter_2: 10
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment': {
            return { ...state, counter_1: state.counter_1 + action.value }
        }
        case 'decrement_1':
            return { ...state, counter_1: state.counter_1 - action.value }
        case 'increment_2':
            return { ...state, counter_2: state.counter_2 + action.value }
        case 'decrement_2':
            return { ...state, counter_2: state.counter_2 - action.value }
        case 'reset':
            return initialState;
        default:
            return initialState;
    }

}

function Counter_Object() {
    const [new_state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>
                <p> Counter 1: {new_state.counter_1}</p>
                <button onClick={() =>
                    dispatch({
                        type: 'increment',
                        value: 1
                    })
                }>Increment by 1</button>

                <button onClick={() =>
                    dispatch({ type: 'decrement_1', value: 1 })
                }>Decrement</button>

                <button onClick={() => {
                    console.log("in the button")
                    return (dispatch('reset'))
                }}>Reset</button>
            </div >
            <div>
                <p> Counter 2: {new_state.counter_2}</p>
                <button onClick={() => {
                    dispatch({ type: 'increment_2', value: 5 })
                }}>Increment</button>

                <button onClick={() => {
                    dispatch({ type: 'decrement_2', value: 5 })
                }}>Decrement</button>

                <button onClick={() => {
                    dispatch({ type: 'reset' })
                }}>Reset</button>
            </div>


        </div >
    )
}

export default Counter_Object

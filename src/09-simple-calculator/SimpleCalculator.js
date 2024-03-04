import { useReducer } from "react"

const initialState = {
  num1: 0,
  num2: 0,
  result: null
}

function reducer (state, action) {
  switch (action.type) {
    case 'add_to_state': {
      if (action.digit === 1) return {...state, num1: action.number, result: null}
      if (action.digit === 2) return {...state, num2: action.number, result: null}
      return state;
    }
    case 'sum': {
        return {
            ...state,
            result: state.num1 + state.num2
        }
    }
    case 'subtract': {
      return {
        ...state,
        result: state.num1 - state.num2
    }
}
    case 'clear': {
        return initialState;
    }
    default: {
        throw Error('Unknown action: ' + action.type);
    }
  }
}

export default function SimpleCalculator () {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleNumberSelect(digit, selectedNumber) {
    dispatch({
      type: 'add_to_state',
      digit: digit,
      number: selectedNumber
    })
  }

  function handleSum() {
    dispatch({
      type: 'sum'
    })
  }

  function handleSubtract() {
    dispatch({
      type: 'subtract'
    })
  }

  function handleClear() {
    dispatch({
      type: 'clear'
    })
  }
  
  return (
    <div>
      <div>
        <h2>Number 1</h2>
        {numbers.map(number => (
          <button key={number} onClick={() => handleNumberSelect(1, number)}>
            {number}
          </button>))}
      </div>
      <div>
        <h2>Number 2</h2>
        {numbers.map(number => (
          <button key={number} onClick={() => handleNumberSelect(2, number)}>
            {number}
          </button>))}
      </div>
      <div>
        <h2>Selected:</h2>
        <h3>{state.num1}&nbsp;&nbsp;{state.num2}</h3>
      </div>
      <div>
        <h2>Actions</h2>
        <button onClick={() => handleSum()}>+</button>
        <button onClick={() => handleSubtract()}>-</button>
        <button onClick={() => handleClear()}>c</button>
      </div>
      <div><h2>Result: {state.result ?? ''}</h2></div>
    </div>
  )
}

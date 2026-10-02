import { useReducer, createContext, useContext } from 'react'
import IncrementButton from './IncrementButton'
import DecrementButton from './DecrementButton'
import ResetButton from './ResetButton'
import Display from './Display'
import './App.css'

const initialState = {
  value: 0
}

function reducer(state, action) {
  switch(action.type) {
    case 'INCREMENT':
      return { ...state, value: state.value + 1}
    case 'DECREMENT':
      return { ...state, value: state.value - 1}
    case 'RESET':
      return initialState
    default:
      throw new Error('Unknown action: ' + action.type)
  }
}

const ValueContext = createContext()

function ValueProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
 
  return (
    <ValueContext.Provider value={{ state, dispatch }}>
      {children}
    </ValueContext.Provider>
  );
}

function App() {

  return (
    <ValueProvider>
      <MainContent />
    </ValueProvider>
  );
}

function MainContent() {
  const { state } = useContext(ValueContext);
 
  return (
    <div>
      <Display value={state.value}/>
      <IncrementButton ValueContext={ValueContext}/>
      <DecrementButton ValueContext={ValueContext}/>
      <ResetButton ValueContext={ValueContext}/>
    </div>
  );
}

export default App

import { useContext } from "react";

function DecrementButton({ ValueContext }) {
  const { dispatch } = useContext(ValueContext);
 
  return (
    <button onClick={() => dispatch({ type: 'DECREMENT' })}>
      Decrement
    </button>
  );
}

export default DecrementButton
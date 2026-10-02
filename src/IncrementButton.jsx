import { useContext } from "react";

function IncrementButton({ ValueContext }) {
  const { dispatch } = useContext(ValueContext);
 
  return (
    <button onClick={() => dispatch({ type: 'INCREMENT' })}>
      Increment
    </button>
  );
}

export default IncrementButton
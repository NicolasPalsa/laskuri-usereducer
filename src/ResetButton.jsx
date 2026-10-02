import { useContext } from "react";

function ResetButton({ ValueContext }) {
  const { dispatch } = useContext(ValueContext);
 
  return (
    <button onClick={() => dispatch({ type: 'RESET' })}>
      Reset
    </button>
  );
}

export default ResetButton
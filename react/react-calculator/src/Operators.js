import { ACTIONS } from "./App";

const Operators = ({ operation, dispatch }) => {
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.OPERATION_CHOICE, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
};
export default Operators;

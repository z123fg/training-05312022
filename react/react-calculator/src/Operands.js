import { ACTIONS } from "./App";

const Operands = ({ dispatch, int }) => {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_INT, payload: { int } })}
    >
      {int}
    </button>
  );
};
export default Operands;

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./Slice";

export default function index() {
  const count = useSelector((state) => state.slice.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="incrementByValue"
          onClick={() => dispatch(incrementByAmount(25))}
        >
          value
        </button>
      </div>
    </div>
  );
}

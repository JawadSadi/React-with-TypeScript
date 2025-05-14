import { useContext } from "react";
import { myContext } from "../Context";

const Counter = () => {
  // const [count, setCount] = useState<number>(0);
  // return (
  //   <div>
  //     <h1>Counter App</h1>
  //     <h2>Count : {count}</h2>

  //     <button onClick={() => setCount(count + 1)}>Increment</button>
  //     <button onClick={() => setCount(count - 1)}>decrement</button>
  //   </div>
  // );

  const { count, increament, decreament } = useContext(myContext);

  return (
    <div>
      <p>{count}</p>
      <button onClick={increament}>Increament</button>
      <button onClick={decreament}>Decreament</button>
    </div>
  );
};

export default Counter;

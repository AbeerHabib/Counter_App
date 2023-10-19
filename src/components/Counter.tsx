import { useDispatch, useSelector } from "react-redux";

import {decrement, increment, reset} from './counterSlice';
import { RootState } from "../store";

const Counter = () => {
    const count = useSelector((state: RootState) => state.counterR.count);
    const dispatch = useDispatch();

    const handleIncrementBy1 = () => {
        dispatch(increment());
    };

    const handleReset = () => {
        dispatch(reset());
    };

    const handleDecrementBy1 = () => {
        dispatch(decrement());
    };
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={handleIncrementBy1}>+</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrementBy1}>-</button>
        </div>
    );
};

export default Counter;
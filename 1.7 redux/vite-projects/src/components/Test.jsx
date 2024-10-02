import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increAmount, increment, reset } from '../features/counter/counterSlice'

const Test = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0);
    function handleIncre(){dispatch(increment())}
    function handleDecre(){dispatch(decrement())}
    function handleReset(){dispatch(reset())}
    function handleIncAmt(){dispatch(increAmount(amount))}
  return (
<>
<div>Test</div>
count: {count}
<div>
    <button onClick={handleIncre}>+</button>
    <button onClick={handleDecre}>-</button>
    <button onClick={handleReset}>reset</button>
    <input type='number' placeholder='enter no' value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
    <button onClick={handleIncAmt}>amount</button>
</div>
</>    
  )
}

export default Test
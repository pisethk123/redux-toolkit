import {useDispatch, useSelector} from "react-redux"
import { decrement, increment, incrementByValue } from "../app/features/counter/counterSlice"
import { useState } from "react"

function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [value, setValue] = useState()

  const incrementHandler = () => {
    dispatch(increment())
  }

  const decrementHandler = () => {
    dispatch(decrement())
  }

  const incrementByValueHander = () => {
    dispatch(incrementByValue(value))
  }

  const inputChangeHandler = (e) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <input type="number" onChange={inputChangeHandler}/>
      <button onClick={incrementHandler}>Increment by </button>
      <button onClick={decrementHandler}>Decrement by 1</button>
      <button onClick={incrementByValueHander}>Increment By ({value})</button>
    </div>
  )
}

export default Counter

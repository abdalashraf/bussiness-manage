"use client";
import { decrement, increment, reset } from "../redux/features/counterSlice";
import { useAppSelector,useAppDispatch } from "../redux/hooks";
import {  toast,ToastContainer } from 'react-toast'

export default function Home() {
  // Use the useAppSelector hook to select the count value from the Redux store
  const count = useAppSelector((state) => state.counterReducer.value);

  // Use the useAppDispatch hook to get the Redux store's dispatch function
  const dispatch = useAppDispatch();

  // The component renders a main element with buttons for increment, decrement, and reset
  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      <div style={{ marginBottom: "4rem", textAlign: "center" }}>
        <h4 style={{ marginBottom: 16 }}>{count}</h4>
        {/* When the increment button is clicked, it dispatches the increment action */}
        <button onClick={() => dispatch(increment())}>increment</button>
        {/* When the decrement button is clicked, it dispatches the decrement action */}
        <button
          onClick={() => dispatch(decrement())}
          style={{ marginInline: 16 }}
        >
          decrement
        </button>
        {/* When the reset button is clicked, it dispatches the reset action */}
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
<ToastContainer position='top-center' delay={3000} />

    </main>
  );
}


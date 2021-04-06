import React, { useState, useMemo, useEffect, useLayoutEffect } from "react";

// useEffect是在DOM渲染完成之后执行的(所以叫副作用)，useMemo是在渲染期间执行的
export function ExampleMemo() {
  let memoMsg = "memo 1 ";
  let [count, setCount] = useState(0);
  useMemo(() => {
    // setCount(2); //不要在useMemo里执行与渲染无关的操作
    memoMsg = "memo 2" + Date.now() + Math.random();
    console.info(memoMsg);
  });
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount(2); //可以的
  //   }, 2000);
  // });
  useLayoutEffect(() => {
    setTimeout(() => {
      setCount(2); //可以的
    }, 2000);
  });
  return (
    <div>
      <p>{memoMsg}</p>
      <button
        onClick={() => {
          setCount(++count);
        }}
      >
        {count}
      </button>
    </div>
  );
}

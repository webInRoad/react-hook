import React, { useState, useMemo, useEffect } from "react";

// useEffect是在DOM渲染完成之后执行的(所以叫副作用)，useMemo是在渲染期间执行的
export function ExampleMemo() {
  let effectMsg = "effect 1";
  let memoMsg = "memo 1 ";
  let [count, setCount] = useState(0);
  useEffect(() => {
    console.info("useEffect");
    effectMsg = "effect 2" + Date.now();
  });
  useMemo(() => {
    memoMsg = "memo 2" + Date.now() + Math.random();
    console.info(memoMsg);
  });
  return (
    <div>
      <p>{effectMsg}</p>
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

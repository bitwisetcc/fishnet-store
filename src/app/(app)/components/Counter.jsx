import { useEffect, useState } from "react";

export default ({ state, max = -1 }) => {
  let [count, setCount] = state || useState(0);
  const increment = () => (max == -1 || count < max) && setCount(count + 1);
  const decrement = () => count > 1 && setCount(count - 1);

  return (
    <div className="inline-flex w-fit items-center justify-center overflow-hidden rounded-md border border-stone-300 outline-none shadow-md bg-slate-100 text-stone-800 text-sm gap-x-1.5 px-3 pr-2 py-1.5">
      <span className="border-0 border-r border-r-stone-300 pr-2 font-mono">
        {count}
      </span>
      <button
        onClick={() => increment()}
        className="transition-all rounded hover:bg-slate-200 active:bg-slate-200 focus:bg-slate-200 px-1 hover:shadow-sm shadow-slate-200"
      >
        +
      </button>
      <button
        onClick={() => decrement()}
        className="transition-all rounded hover:bg-slate-200 active:bg-slate-200 focus:bg-slate-200 px-1 hover:shadow-sm shadow-slate-200"
      >
        -
      </button>
    </div>
  );
};

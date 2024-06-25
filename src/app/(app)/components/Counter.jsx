import { useEffect, useState } from "react";

export default ({ state, max = -1 }) => {
  let [count, setCount] = state || useState(0);
  const increment = () => (max == -1 || count < max) && setCount(count + 1);
  const decrement = () => count > 1 && setCount(count - 1);

  return (
    <div className="inline-flex w-fit items-center justify-center gap-x-1.5 overflow-hidden rounded-md border border-stone-300 bg-slate-100 px-3 py-1.5 pr-2 text-sm text-stone-800 shadow-md outline-none">
      <span className="border-0 border-r border-r-stone-300 pr-2 font-mono">
        {count}
      </span>
      <button
        onClick={() => increment()}
        className="rounded px-1 shadow-slate-200 transition-all hover:bg-slate-200 hover:shadow-sm focus:bg-slate-200 active:bg-slate-200"
      >
        +
      </button>
      <button
        onClick={() => decrement()}
        className="rounded px-1 shadow-slate-200 transition-all hover:bg-slate-200 hover:shadow-sm focus:bg-slate-200 active:bg-slate-200"
      >
        -
      </button>
    </div>
  );
};

import { useState } from "react";

export default ({ options, state }) => {
  let [pick, setPick] = state || useState(0);
  return (
    <ul className="flex gap-3">
      {options.map((option, idx) => (
        <CounterItem
          key={idx}
          idx={idx}
          pick={pick}
          onClick={() => setPick(idx)}
        >
          {option}
        </CounterItem>
      ))}
    </ul>
  );
};

function CounterItem({ idx, pick, children, onClick }) {
  return (
    <li>
      <button
        className={`rounded-lg border-2 bg-slate-200 px-4 py-1 text-stone-700 shadow-sm ${pick == idx && "border-accent-middle"}`}
        onClick={onClick}
      >
        {children}
      </button>
    </li>
  );
}

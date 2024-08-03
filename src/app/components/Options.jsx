import { useState } from "react";

export default ({ options, state }) => {
  let [pick, setPick] = state || useState(0);
  return (
    <ul className="flex gap-4">
      {options.map((option, idx) => (
        <li key={idx}>
          <button
            className={`${
              pick === idx
                ? "bg-slate-500 text-slate-50"
                : "bg-slate-300 text-stone-700"
            } rounded-lg px-4 py-2 shadow-sm`}
            onClick={() => setPick(idx)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

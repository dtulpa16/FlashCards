import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
export default function CardCollection({ cardId }) {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);
  const { loading, data, error } = useFetch(
    `http://127.0.0.1:8000/api/collections/${cardId}/cards/`
  );
  const handleNext = () => {
    count < data.length - 1 ? setCount((count) => count + 1) : setCount(0);
    setToggle(true)
  };
  return (
    <div className="flex flex-col items-center">
      {console.log(data)}
      {data && (
        <div class="pt-28 text-xl font-bold cursor-pointer" onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <h3>{data[count].word}</h3>
          ) : (
            <h3>{data[count]?.definition}</h3>
          )}
        </div>
      )}
      <button class="font-semibold absolute bottom-2 rounded-sm border border-2 bg-slate-200 w-1/5 pl-4 pr-4 pt-0.5 pb-0.5 hover:bg-slate-50 transition ease-in-out delay-50 text-lg hover:border-black " onClick={() => handleNext()}>Next</button>
    </div>
  );
}

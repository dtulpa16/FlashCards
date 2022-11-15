import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import DeleteBtn from "../CustonBtns/DeleteBtn";
import EditBtn from "../CustonBtns/EditBtn";
export default function CardCollection({ cardId }) {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);
  const { loading, data, error } = useFetch(
    `http://127.0.0.1:8000/api/collections/${cardId}/cards/`
  );
  const handleNext = () => {
    count < data.length - 1 ? setCount((count) => count + 1) : setCount(0);
    setToggle(true);
  };
  return (
    <div>
      <div class="flex flex-row pt-2 text-center">
        <div class="basis-1/3">
          <EditBtn />
        </div>
        <div class="basis-1/3">
          {count + 1} / {data?.length}
        </div>
        <div class="basis-1/3">
          <DeleteBtn />
        </div>
      </div>
      <div className="flex flex-col items-center text-center">
        {console.log(data)}
        {data && (
          <div
            class="text-xl font-bold cursor-pointer pl-2 pr-2"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              <h3 class="pt-24">{data[count].word}</h3>
            ) : (
              <h3 class="pt-20">{data[count]?.definition}</h3>
            )}
          </div>
        )}
        <button
          class="drop-shadow-md hover:drop-shadow-xl font-semibold absolute bottom-3 rounded-sm border bg-slate-200 w-1/5 pl-4 pr-4 pt-0.5 pb-0.5 hover:bg-slate-50 transition ease-in-out delay-50 text-lg hover:border-black "
          onClick={() => handleNext()}
        >
          Next
        </button>
      </div>
    </div>
  );
}

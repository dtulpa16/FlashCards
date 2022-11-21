import React from "react";
import useFetch from "../../hooks/useFetch";
export default function SideBar({setTopicId}) {
  const { loading, data, error, refetch } = useFetch(
    "http://127.0.0.1:8000/api/collections/"
  );
  return (
    <div>
      <div class="flex flex-col ">
        {data &&
          data.map((el) => {
            return (
              <div onClick={()=>setTopicId(el.id)}class="p-5 hover:bg-slate-50 transition delay-55 duration-200 ease-in-out">
                <h3 class="pl-8 font-semibold text-xl font-mono">{el.title}</h3>
              </div>
            );
          })}
      </div>
    </div>
  );
}

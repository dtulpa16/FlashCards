import React from "react";
import useFetch from "../../hooks/useFetch";
export default function SideBar(props) {
  const { loading, data, error } = useFetch(
    "http://127.0.0.1:8000/api/collections/"
  );
  return (
    <div>
      <div class="flex flex-col ">
        {data &&
          data.map((el) => {
            return (
              <div class="p-5 hover:bg-slate-50 transition delay-75 duration-300 ease-in-out">
                <h3 class="pl-4 text-lg font-mono">{el.title}</h3>
              </div>
            );
          })}
      </div>
    </div>
  );
}

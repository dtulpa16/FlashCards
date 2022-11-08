import React from "react";
import useFetch from "../../hooks/useFetch";
export default function SideBar(props) {
  const { loading, data, error } = useFetch(
    "http://127.0.0.1:8000/api/collections/"
  );
  return (
    <div>
      {data &&
        data.map((el) => {
          return (
            <ul>
              <li>{el.title}</li>
            </ul>
          );
        })}
    </div>
  );
}

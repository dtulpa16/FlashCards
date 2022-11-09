import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
export default function CardCollection({ cardId }) {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);
  const { loading, data, error } = useFetch(
    `http://127.0.0.1:8000/api/collections/${cardId}/cards/`
  );
  return (
    <div>
    {console.log(data)}
      {data && 
        <>
          {toggle ? (
            <h3>{data[count].word}</h3>
          ) : (
            <h3>{data[count]?.definition}</h3>
          )}
          <button onClick={() => setCount((count) => count + 1)}>Next</button>
        </>
      }
    </div>
  );
}

import React, { useEffect } from "react";
import requestHandler from "../helpers/requestHandler";
export default function DeleteBtn({card, collectionId, refetch}) {
  useEffect(()=>{
    console.log("CARD ID: ", card, "\nCOLLECTION ID: ", collectionId)
  })
  const handleDelete = () =>{
    requestHandler(
      `http://127.0.0.1:8000/api/collections/${collectionId}/cards/${card}/`,
      "delete"
    );
    refetch()
  }
  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

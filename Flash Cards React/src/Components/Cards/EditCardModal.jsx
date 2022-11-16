import React, { useEffect } from "react";
import Modal from "react-modal";
import { useState } from "react";
import requestHandler from "../helpers/requestHandler";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "40%",
  },
};

export default function EditCardModal(props) {
  const { card, collectionId, title, def, refetch, open,setOpen } = props;
  const [word, setWord] = useState(title);
  const [definition, setDefinition] = useState(def);

  const closeModal = () => setOpen(false);
  const handleUpdate = async (e) => {
    e.preventDefault()
    debugger;
    requestHandler(
      `http://127.0.0.1:8000/api/collections/${collectionId}/cards/${card}/`,
      "put",
      { word: word, definition: definition }
    );
    refetch();
  };
  useEffect(()=>{
    console.log(props)
  },[])
  return (
    <>
      
      <div>
        <Modal
          isOpen={open}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div>
            <form onSubmit={handleUpdate} class="flex flex-row gap-5 pt-28">
              <input
                value={word && word}
                defaultValue={word && word}
                onChange={(e) => setWord(e.target.value)}
                class="basis-1/2 text-center border-none focus:outline-none"
              />
              <div class="border border-solid border-zinc-600 pb-20 " />

              <input
                value={definition && definition}
                defaultValue={definition && definition}
                onChange={(e) => setDefinition(e.target.value)}
                class="basis-1/2 text-center border-none focus:outline-none"
              />
              <button
                class="drop-shadow-md hover:drop-shadow-xl font-semibold rounded-sm border bg-slate-200 hover:bg-slate-50 transition ease-in-out delay-50 text-lg hover:border-black "
                type="submit"
              >
                Update
              </button>
            </form>
            <button
              class="drop-shadow-md hover:drop-shadow-xl font-semibold rounded-sm border bg-slate-200 hover:bg-slate-50 transition ease-in-out delay-50 text-lg hover:border-black "
              type="button"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
}

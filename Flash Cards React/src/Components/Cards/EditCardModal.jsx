import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { useState } from "react";
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

export default function EditCardModal() {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  return (
    <>
      <button onClick={openModal}>Edit</button>

      <div>
        <Modal
          isOpen={open}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div>
            <form class="flex flex-row gap-5 pt-28">
              <input
                class="basis-1/2 text-center border-none focus:outline-none"
                placeholder="Hello!"
              />
              <div class="border border-solid border-zinc-600 pb-20 " />

              <input class="basis-1/2 text-center border-none focus:outline-none" placeholder="World" />
            </form>
            <button type="button" onClick={closeModal}>Cancel</button>
            <button >Update</button>
          </div>
        </Modal>
      </div>
    </>
  );
}

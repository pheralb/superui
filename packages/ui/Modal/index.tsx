import React from "react";
import ReactDOM from "react-dom";

const Modal = () => {
  return ReactDOM.createPortal(
    <div
      className="fixed top-0 left-0 h-screen w-full flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.8)" }}
    >
      <div className="bg-white relative p-5 shadow-lg rounded flex flex-col items-start text-lg text-gray-800">
        <button
          className="absolute top-0 right-0 -mt-12 font-bold self-end rounded-full bg-red-200 mb-3 text-red-700 w-8 h-8"
          onClick={() => {}}
        >
          &times;
        </button>
        <p>I am the Modal</p>
      </div>
    </div>,
    document.querySelector("#modals") as HTMLElement
  );
};

export default Modal;

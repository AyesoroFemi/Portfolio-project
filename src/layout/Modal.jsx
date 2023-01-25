import React from "react";

function Modal({children}) {
  return (
    <div className="container border-4 border-red-900">
      <div className="modal-body">{children}</div>
    </div>
  );
}

export default Modal;

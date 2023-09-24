import React from "react";

const Modal = ({ id, content, onClose, isOpen }) => {
  const modalStyle = {
    display: isOpen ? "block" : "none",
  };

  return (
    <div id={id} className="modal" style={modalStyle}>
      <div className="modal-content">
        <span className="close" onClick={() => onClose(id)}>
          &times;
        </span>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Modal;
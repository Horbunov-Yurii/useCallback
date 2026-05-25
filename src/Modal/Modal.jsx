import React, { useEffect } from "react";
import style from "./Modal.module.css";

export default function Modal({ selectedImage, closeModal }) {
  
  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      closeModal(null);
    }
  };

  useEffect(() => {

    const handleEscClose = (evt) => {
      if (evt.code === "Escape") {
        closeModal(null);
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };

  }, [closeModal, selectedImage]);

  return (
    <div className={style.overlay} onClick={handleOverlayClick}>
      <div className={style.modal}>
        <img className={style.image} src={selectedImage} alt="Images" />
      </div>
    </div>
  );
}

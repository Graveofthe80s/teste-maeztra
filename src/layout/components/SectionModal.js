import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { HiOutlineMail } from "react-icons/hi";
import { FiSend } from "react-icons/fi";
import modalImg from "../assets/modal.jpg";
import "../css/SectionModal.styles.css";

const SectionModal = () => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      padding: "0px",
      transform: "translate(-50%, -50%)",
    },
  };

  Modal.setAppElement("#root");

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    openModal();
  }, []);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal">
          <div className="modal-left">
            <img src={modalImg} alt="" />
          </div>
          <div className="modal-right">
            <div className="modal-content">
              <HiOutlineMail />
              <span className="welcome-txt">Bem vindo a maeztra</span>
              <p>
                Receba em Primeira mão
                <br />
                <span className="promo">desconto e ofertas exclusivas</span>
              </p>
              <input type="text" placeholder="Digite seu e-mail" />
              <button>
                <span>Enviar</span>
                <FiSend />
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SectionModal;

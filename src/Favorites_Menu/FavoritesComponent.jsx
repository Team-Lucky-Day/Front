import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import Swal from "sweetalert2";
const customStyles = {
  overlay: {
    backgroundColor: " rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100vh",
    zIndex: "10",
    position: "fixed",
    top: "0",
    left: "0",
  },
  content: {
    width: "35%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");
const FavoritesComponent = ({
  favoritesImg,
  favoritesAlt,
  favoritesTitle,
  favoritesTitleEng,
}) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#4D4D4D";
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handleButtonClick = () => {
    Swal.fire({
      icon: "success",
      title: "",
      text: "결제되셨습니다.",
      customClass: {
        confirmButton: "btn-color",
      },
    });
  };
  return (
    <div className="favorites-component">
      <img
        className="favorites-img"
        src={`/img/${favoritesImg}`}
        alt={favoritesAlt}
        onClick={openModal}
      />
      <div className="favorites-title">{favoritesTitle}</div>
      <hr />
      <div className="favorites-titleEng">{favoritesTitleEng}</div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={false}
      >
        <h2 className="favorites-modal-h2" ref={(_subtitle) => (subtitle = _subtitle)}>
          결제창
        </h2>
        <button className="favorites-modal-btn" onClick={closeModal}>
          <FontAwesomeIcon icon={faXmark} size="2x" />
        </button>
        <div className="favorites-modal-payment">
          <button
            className="btn swal2-confirm swal2-styled"
            onClick={handleButtonClick}
          >
            결제하기
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default FavoritesComponent;

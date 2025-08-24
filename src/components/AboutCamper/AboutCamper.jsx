import React, { useState } from "react";
import Modal from "react-modal";
import Icon from "../Icon/Icon";
import css from "./AboutCamper.module.css";

Modal.setAppElement("#root");

const AboutCamper = ({ camper }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!camper) return <p>Loading...</p>;

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? camper.gallery.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === camper.gallery.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className={css.mainWrapper}>
      <h2 className={css.model}>{camper.name}</h2>
      <div className={css.wrapperTop}>
        <p className={css.rating}>
          <Icon
            className={css.star}
            id="icon-star"
            size={16}
          />
          {camper.rating} ({camper.reviews.length} Reviews)
        </p>
        <p className={css.location}>
          <Icon id="icon-Map" size={16} />
          {camper.location}
        </p>
      </div>
      <p className={css.price}>&#8364;{camper.price}.00</p>

      <div className={css.gallery}>
        {camper.gallery.map((image, i) => (
          <img
            key={i}
            className={css.image}
            src={image.thumb}
            alt={image.thumb}
            width="292"
            height="312"
            onClick={() => openModal(i)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>

      <p className={css.description}>
        {camper.description}
      </p>

      {camper.gallery && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Gallery Modal"
          overlayClassName={css.modalOverlay}
          className={css.modalContent}
        >
          <button
            onClick={prevImage}
            className={css.navButton}
          >
            ‹
          </button>
          <img
            src={camper.gallery[currentIndex].thumb}
            alt={camper.gallery[currentIndex].thumb}
            className={css.modalImage}
          />
          <button
            onClick={nextImage}
            className={css.navButton}
          >
            ›
          </button>
          <button
            onClick={closeModal}
            className={css.closeButton}
          >
            ×
          </button>
        </Modal>
      )}
    </div>
  );
};

export default AboutCamper;

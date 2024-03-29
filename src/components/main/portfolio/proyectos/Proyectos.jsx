import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import DetailProyects from "../proyectosDetail/DetailProyects";

const Proyectos = ({ proyect, toggler, lenguage }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = (breakpoint) => {
    setShow(true);
  };

  return (
    <div
      key={proyect.id}
      className={`${
        ["En progreso", "In progress"].includes(proyect.name)
          ? "inProgres"
          : "cards_proyects"
      }`}
    >
      <img src={proyect.image} alt="" />
      {!["En progreso", "In progress"].includes(proyect.name) && (
        <div className="portfolio-info" onClick={handleShow}>
          <h4 className="proyect-name">{proyect.name}</h4>
          <div className="portfolio-links"></div>
        </div>
      )}
      <Modal
        size="xl"
        dialogClassName={"modalSize"}
        show={show}
        onHide={handleClose}
      >
        <div className="container_detail">
          <Modal.Header closeButton bsPrefix={"closeModal"}></Modal.Header>
          <DetailProyects proyect={proyect} lenguage={lenguage} />
        </div>
      </Modal>
    </div>
  );
};

export default Proyectos;

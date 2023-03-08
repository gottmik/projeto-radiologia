import React from "react";
//// CSS
import "../../index.css";
import { useState } from "react";
import { Button, Modal, Box, Typography } from "@mui/material";


function Tomografia(props) {
  const [isOpen, setIsOpen] = useState(false);
  // dados.map(dado => {
  //   setIsOpen({...isOpen, [dado.id]: false})
  // })

  const onClickHeader = () => {
    setIsOpen(!isOpen);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  let [currentIndex, setCurrentIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentIndex(
      (currentIndex + 1) % props.dado.corte.length &&
        (currentIndex + 1) % props.dado.img.length
    );
  };

  return (
    <>
      <div className="anatomyComponent" key={props.dado.id}>
        <div className="anatomyHeader" onClick={onClickHeader}>
          <Button className="anatomyHeader" onClick={handleOpen}>
            {props.dado.name}
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            overflow-y="scroll"
          >
            <Box className="modaloverflow" sx={style}>
              <div className="botaoPlanoDiv">
                <button className="botaoPlano" onClick={handleNextImage}>
                  {props.dado.corte[currentIndex]}
                </button>
              </div>
              <div></div>
              <div className="img-modal">
                <img src={props.dado.img[currentIndex]} alt="Alguma imagem" />
              </div>
              <Typography
                className="propsname"
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                <b>{props.dado.name}</b>
              </Typography>
              <Typography
                alignJustify
                id="modal-modal-description"
                sx={{ mt: 2 }}
              >
                <b>Sobre: </b> {props.dado.texto}
              </Typography>
            </Box>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default Tomografia;

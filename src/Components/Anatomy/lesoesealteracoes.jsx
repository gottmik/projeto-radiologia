import React from "react";
//// CSS
import "../../index.css"
import { useState } from "react";
import { Button, Modal, Box, Typography } from "@mui/material";
import { PropaneSharp } from "@mui/icons-material";

function LesoeseAlteracoes(props) {
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
              <div className="img-modal">
                <img src={props.dado.img} alt="Alguma imagem" />
              </div>
              <Typography className="propsname" id="modal-modal-title" variant="h6" component="h2">
               <b>{props.dado.name}</b> 
              </Typography>
              
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <b>Caracteristicas Imaginológicas:</b> <br></br><br></br>Lesão radiolúcida/hipodensa, unilocular, de margem regular, bem definida, com borda corticalizada 
              </Typography>

              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
               <b> Sobre:<br></br><br></br>O ameloblastoma unicístico é um tipo de tumor odontogênico benigno que se forma a partir do tecido dental e se apresenta como uma cavidade única na mandíbula ou maxila. Ele é formado a partir de células ameloblastos, que normalmente formam o esmalte dentário. Embora seja geralmente benigno, pode ser invasivo e causar destruição do osso ao redor. O tratamento envolve a remoção cirúrgica do tumor e acompanhamento a longo prazo.</b>
              </Typography>

              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <b>Diagnóstico Diferencial:</b> <br></br><br></br> {props.dado.diagdif}
              </Typography>
              
             
             
            </Box>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default LesoeseAlteracoes;

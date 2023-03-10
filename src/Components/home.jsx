import React from "react";
//// CSS
import "../index.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button, Grid, Header, Icon } from "semantic-ui-react";
import MessageExampleWarning from "./message";

function Home() {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 2 
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }


  return (
    <Grid verticalAlign="middle">
      <Grid.Row columns={2}>
        <Grid.Column width={10}>
          <div className="desenvolvidopor">
            <h1 style={{ fontSize: "0.8rem" }}>
              Em desenvolvimento por Marcela Fróes, dentista implantodontista, quase radiologista e aspirante a programadora. Com o auxilio dos colegas da turma 12 da INCO25.
            </h1>
          </div>
        </Grid.Column>
        <Grid.Column width={6} verticalAlign="middle" textAlign="right">
          <a href="https://www.instagram.com/radiohelpapp/">
            <Icon style={{ fontSize: "2.9rem", marginRight:"9%"}}  name="instagram" size="huge" />
          </a>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={2}>
        <Grid.Column width={9}></Grid.Column>
        <Grid.Column width={7}>
          <motion.div
           variants={container}
           initial="hidden"
           animate="show"
           transition={{
            delay: 4.5,
            x: { duration: 1 },
            default: { ease: "linear" }
          }}
           
          >
            <MessageExampleWarning />
          </motion.div>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={1} centered verticalAlign="middle">
        <Grid.Column verticalAlign="middle" style={{ height: "50vh" }}>
          <div className="radiohelp">
            <Header
              style={{ fontSize: "2.5rem", color: "rgba(195, 132, 32, 0.9)" }}
              size="huge"
              dividing
              textAlign="center"
            >
              ¡RadioHelp!
            </Header>
            <Header.Subheader style={{margin:"0% 6% 0 6%"}}>
              Esse é o primeiro Web App gratuito voltado para Dentistas e
              Radiologistas. Aproveitem!{" "}
            </Header.Subheader>
          </div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={16}>
          <div className="botaodohome">
            <Link to="/escolha">
              <Button size="big">Começar!</Button>
            </Link>
          </div>
        </Grid.Column>
      </Grid.Row>

      {/* <div className="F2">
            <h1</h1>
            <h6>
              Esse é o primeiro Web App gratuito voltado para Dentistas e
              Radiologistas. Aproveitem!{" "}
            </h6>
          </div>

          <div className="F3">
            
              <button className="firstPageButton">COMEÇAR</button>
            
            </div> */}
    </Grid>
  );
}

export default Home;

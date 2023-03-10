import React from "react";
//// CSS
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button, Label, Grid, Header, Icon, Image } from "semantic-ui-react";
import pano1 from "../Img/pano1.jpg";
import pano2 from "../Img/pano2.jpg";
import pano3 from "../Img/pano3.jpg";
import lesoesealt from "../Img/lesoesealt.png";

export default function Modelidades() {
  return (
    <div className="principaldamodalidade">
      <Grid centered>
        <Grid.Row style={{ marginTop: "10px" }} columns={3}>
          <Grid.Column as={Link} to="/" verticalAlign="middle" width={4}>
            <Icon name="angle left" size="big" />
          </Grid.Column>
          <Grid.Column verticalAlign="middle" width={6}>
            <Header className="radiohelpcolor" size="huge">
              ¡RadioHelp!
            </Header>
          </Grid.Column>
          <Grid.Column width={5} verticalAlign="middle" textAlign="right">
            <Button as="div" labelPosition="right">
              <a
                style={{ margin: "0", padding: "0" }}
                href="https://www.instagram.com/radiohelpapp/"
              >
                <Button className="botaodecoracao" icon>
                  <Icon name="heart" color="red" />
                  Like
                </Button>
              </a>

              <Label as="a" basic pointing="left">
                57 views
              </Label>
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      
      <Grid style={{backgroundColor:"white", margin:"20px", borderRadius:"1.2rem"}} as={Link} to="/lesoesealteracoes" centered>
        <Grid.Row verticalAlign="bottom" columns={2}>
          <Grid.Column centered width={10}>
            <Header
              style={{
                color: "rgba(195, 132, 32, 0.9)",
                fontSize: "1.4rem",
              }}
            >
              Lesões e Alterações<br></br>
              Anatômicas.
            </Header>
          </Grid.Column>
          <Grid.Column  width={3}>
            <div className="iteml">
              <Image
                centered
                style={{ marginBottom: "10px" }}
                src={lesoesealt}
                alt=""
              />
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered style={{paddingTop:"0"}} columns={1}>
          <Grid.Column textAlign="left" width={13} >
            <Header.Subheader>
              Aqui você encontrará as alterações mais comuns e seus respectivos{" "}
              <b>diagnosticos diferenciais.</b>
            </Header.Subheader>
          </Grid.Column>
        </Grid.Row>
      </Grid>
     
      <Header style={{ fontSize: "1.2rem", marginTop: "3%", color:"rgb(41, 40, 40,0.6)" }}>
        {" "}
        Estruturas Anatômicas
      </Header>
      <Grid>
        <Grid.Row className="carouselpai" columns={1}>
          <Grid.Column>
            <motion.div className="carousel" whileTap={{ cursor: "grabbing" }}>
              <motion.div
                className="inner"
                drag="x"
                dragConstraints={{ right: 0, left: -140 }}
              >
                <motion.div className="item">
                  <Link to="/panoramica">
                    <Image
                      centered
                      style={{ marginBottom: "10px" }}
                      src={pano1}
                      alt=""
                    />
                    Panoramica
                  </Link>
                </motion.div>

                <motion.div className="item">
                  <Link to="/periapical">
                    <Image
                      centered
                      style={{ marginBottom: "10px" }}
                      src={pano3}
                      alt=""
                    />
                    Periapical
                  </Link>
                </motion.div>

                <motion.div className="item2">
                  <Link to="/tomografia">
                    <Image
                      centered
                      style={{ marginBottom: "10px" }}
                      src={pano2}
                      alt=""
                    />
                    Tomografia
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div className="partelaudadormod">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "8px",
          }}
        >
          <div style={{ marginTop: "18px" }} className="separacaomod"></div>
        </div>
        <h4
          style={{
            height: "40px",
            marginTop: "20px",
            marginLeft: "30px",
            paddingBottom: "10px",
            marginBottom: "10px",
            color: "rgba(195, 132, 32, 0.9)",
            fontSize: "1.2rem",
          }}
        >
          Área do Laudador
        </h4>
        <Grid>
          <Grid.Row
            as={Link}
            to="/legenda"
            className="rowdolaudador"
            columns={2}
          >
            <Grid.Column verticalAlign="middle" width={2}></Grid.Column>
            <Grid.Column verticalAlign="middle" width={11}>
              Guia de Legendas
            </Grid.Column>
            <Grid.Column verticalAlign="middle" width={3}>
              <Icon name="print" size="large" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row
            as={Link}
            to="/descricao"
            className="rowdolaudador"
            columns={2}
          >
            <Grid.Column verticalAlign="middle" width={2}></Grid.Column>
            <Grid.Column verticalAlign="middle" width={11}>
              Guia de Descrição
            </Grid.Column>
            <Grid.Column verticalAlign="middle" width={3}>
              <Icon name="write" size="large" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
}

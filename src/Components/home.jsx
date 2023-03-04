import React from "react";
//// CSS
import "../index.css";
import { Link } from "react-router-dom";
import {
  Button,
 
  Grid,
  Header,
  Icon,

} from "semantic-ui-react";

function Home() {
  return (
    <Grid verticalAlign="middle">
      <Grid.Row columns={2}>
        <Grid.Column width={10}>
          <div className="desenvolvidopor">
            <p>
              Desenvolvido por Marcela Fróes Dentista Implantodontista,
              Radiologista e Aspirante a Programadora.
            </p>
          </div>
        </Grid.Column>
        <Grid.Column width={6} verticalAlign="middle" textAlign="center">
          <Icon name="instagram" size="huge" />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={1} centered verticalAlign="middle">
        <Grid.Column verticalAlign="middle" style={{ height: "60vh" }}>
          <div className="radiohelp">
            <Header size="huge" dividing textAlign="center">
              ¡RadioHelp!
            </Header>
            <Header.Subheader>
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

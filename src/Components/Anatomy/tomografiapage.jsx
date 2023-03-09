import React, { useState } from "react";
//// CSS
import { Tomografias } from "../../data-panoramica";

import Tomografia from "./tomografia";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { Grid, Header, Icon } from "semantic-ui-react";


const TomografiaPage = () => {
  const datas = Tomografias ?? []; // PUXANDO O ARRAY DO DATABASE
  // const [busca, setBusca] = useState('');

  const [dados, setDados] = useState(datas);

  const filterOnChange = (event) => {
    let updatedList = [...datas];
    let busca = event.target.value;
    updatedList = updatedList.filter((item) => {
      return item.name.toLowerCase().indexOf(busca.toLowerCase()) !== -1;
    });
    setDados(updatedList);
  };

  return (
    <div className="principaldalesoesealt">
      <Grid centered style={{ margin: "1px" }}>
        <Grid.Row columns={3}>
          <Grid.Column as={Link} to="/escolha" verticalAlign="middle" width={2}>
            <Icon name="angle left" size="big" />
          </Grid.Column>
          <Grid.Column verticalAlign="middle" width={12}>
            <Header className="radiohelpcolor" size="large">
              ¡RadioHelp!
            </Header>
          </Grid.Column>
          <Grid.Column
            width={2}
            verticalAlign="middle"
            textAlign="right"
          ></Grid.Column>
        </Grid.Row>
      </Grid>
      <div className="lesoesealtpesquisa">
        
          <TextField
            onChange={filterOnChange}
            className="textfield"
            id="filled-basic"
            label="Pesquise aqui"
            variant="filled"
            size="large"
          />
        </div>

        <div className="lesoesealtrespostas">
          {dados.map((dado) => (
            <Tomografia dado={dado} key={dado.id} />
          ))}
        </div>
        
      </div>
    
  );
};

export default TomografiaPage;

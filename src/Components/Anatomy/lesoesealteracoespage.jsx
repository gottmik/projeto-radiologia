import { useState } from "react";
//// CSS
import "../../../src/index.css";
import { Les } from "../../data-panoramica";
import LesoeseAlteracoes from "./lesoesealteracoes";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { Button, Grid, Header, Icon, Label, Message } from "semantic-ui-react";


const LesoeseAlteracoesPage = () => {
  const datas = Les ?? []; // PUXANDO O ARRAY DO DATABASE
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
          color="secondary"
        />
        <div>
                
                <Message
                  size="tiny"
                  color="red"
                  as={"div"}
                  style={{ margin: "5px" }}
                >
                  Pagina em manutenção.
                </Message>
              
            </div>
      </div>

      <div className="lesoesealtrespostas">
        {dados.map((dado) => (
          <LesoeseAlteracoes dado={dado} key={dado.id} />
        ))}
      </div>
     
    </div>
  );
};

export default LesoeseAlteracoesPage;

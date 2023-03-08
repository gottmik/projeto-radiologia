import { useState } from "react";
//// CSS
import "../../../src/index.css";
import { Les } from "../../data-panoramica";
import LesoeseAlteracoes from "./lesoesealteracoes";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { Message } from "semantic-ui-react";


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
      <div style={{ width: "100%" }}>
        <Link to="/escolha">
          <button className="lesoesvoltarbot">
            <KeyboardBackspaceIcon fontSize="large" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LesoeseAlteracoesPage;

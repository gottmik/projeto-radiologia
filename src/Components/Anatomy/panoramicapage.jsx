import { useState } from "react";
//// CSS
import "../../../src/index.css"
import { PanoramicaDados } from "../../data-panoramica";
import Panoramica from "./panoramica";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { Message } from "semantic-ui-react";

const PanoramicaPage = () => {
  const datas = PanoramicaDados ?? []; // PUXANDO O ARRAY DO DATABASE
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
        />
      </div>
      

      <div className="lesoesealtrespostas">
        {dados.map((dado) => (
          <Panoramica dado={dado} key={dado.id} />
        ))}
      </div>
      <div style={{width:"100%"}}>
        <Link to="/escolha">
          <button className="lesoesvoltarbot">
            <KeyboardBackspaceIcon fontSize="large" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PanoramicaPage;

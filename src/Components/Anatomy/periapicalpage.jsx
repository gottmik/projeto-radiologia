import React, { useState, useEffect, useRef } from "react";
//// CSS
import "../../index.css"
import { PeriapicalDados } from "../../data-panoramica";
import Periapical from "./periapical";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import { Box } from "@mui/material";
import { Message } from "semantic-ui-react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const PeriapicalPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const datas = PeriapicalDados ?? []; // PUXANDO O ARRAY DO DATABASE
  // const [busca, setBusca] = useState('');

  const [dados, setDados] = useState(datas);

  const filterOnChange = (event) => {
  let updatedList = [...datas];
  let busca = event.target.value;
  busca = busca.replace(/[^\w\s]/gi, '');
  updatedList = updatedList.filter((item) => {
    return item.name.toLowerCase().indexOf(busca.toLowerCase()) !== -1;
  });
  setDados(updatedList);
};

  const [visible, setVisible] = useState(true);

  const handleDismiss = () => {
    setVisible(false);

   
  };



  return (
    
      <div className="principaldaperiapical">
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
        <div>

          {visible ? <Message onDismiss={handleDismiss} color="brown" as={"div"} style={{ marginTop: "0px" }}> 
            Nesta sessão iremos evidênciar as sobreposições das estruturas
            anatômicas nas radiografias periapicais.
           
          </Message>: <></>}

        </div>

        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="Incisivos" {...a11yProps(0)} />
              <Tab label="Caninos" {...a11yProps(1)} />
              <Tab label="Pré-Molares" {...a11yProps(2)} />
              <Tab label="Molares" {...a11yProps(3)} />
              <Tab label="Interproximais" {...a11yProps(4)} />
            </Tabs>
          </Box>

          <div className="periapicalrespostas">
            <TabPanel className="corrigirwidth" value={value} index={0}>
              {dados
                .filter((dado) => {
                  return dado.tomada === "Incisivos";
                })
                .map((dado) => (
                  <Periapical dado={dado} key={dado.id} />
                ))}
            </TabPanel>
            <TabPanel className="corrigirwidth" value={value} index={1}>
              {dados
                .filter((dado) => {
                  return dado.tomada === "Caninos";
                })
                .map((dado) => (
                  <Periapical dado={dado} />
                ))}
            </TabPanel>
            <TabPanel className="corrigirwidth" value={value} index={2}>
              {dados
                .filter((dado) => {
                  return dado.tomada === "Pre-Molares";
                })
                .map((dado) => (
                  <Periapical dado={dado} />
                ))}
            </TabPanel>
            <TabPanel className="corrigirwidth" value={value} index={3}>
              {dados
                .filter((dado) => {
                  return dado.tomada === "Molares";
                })
                .map((dado) => (
                  <Periapical dado={dado} />
                ))}
            </TabPanel>
          </div>
          <div className="periapicalbotdiv">
            <Link to="/escolha">
              <button className="voltarbuttonperi">
                <KeyboardBackspaceIcon fontSize="large" />
              </button>
            </Link>
          </div>
        </Box>
      </div>
    
  );
};

export default PeriapicalPage;

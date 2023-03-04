import React, { useState } from "react";
//// CSS
import { PeriapicalDados } from "../../data-panoramica";
import Periapical from "./periapical";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import { Box } from "@mui/material";

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
    updatedList = updatedList.filter((item) => {
      return item.name.toLowerCase().indexOf(busca.toLowerCase()) !== -1;
    });
    setDados(updatedList);
  };

  return (
    <div className="dBody">
      <div className="Container">
        <div className="panoramicapesquisar">
          <TextField
            onChange={filterOnChange}
            className="textfield"
            id="filled-basic"
            label="Pesquise aqui"
            variant="filled"
            size="large"
          />
        </div>

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
        <div className="panoramica">
          <TabPanel value={value} index={0}>
            {dados
              .filter((dado) => {
                return dado.tomada === "Incisivos";
              })
              .map((dado) => (
                <Periapical dado={dado} key={dado.id} />
              ))}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {dados
              .filter((dado) => {
                return dado.tomada === "Caninos";
              })
              .map((dado) => (
                <Periapical dado={dado} />
              ))}
          </TabPanel>
          <TabPanel value={value} index={2}>
            {dados
              .filter((dado) => {
                return dado.tomada === "Pre-Molares";
              })
              .map((dado) => (
                <Periapical dado={dado} />
              ))}
          </TabPanel>
          <TabPanel value={value} index={3}>
            {dados
              .filter((dado) => {
                return dado.tomada === "Molares";
              })
              .map((dado) => (
                <Periapical dado={dado} />
              ))}
          </TabPanel>
          <TabPanel value={value} index={4}>
            {dados
              .filter((dado) => {
                return dado.tomada === "Interproximais";
              })
              .map((dado) => (
                <Periapical dado={dado} />
              ))}
          </TabPanel>
        </div>

        {/* <div className="panoramica">
          {dados.map((dado) => (
            <Periapical dado={dado} key={dado.id}/>
          ))}
        </div> */}
        <div className="PanoramicaVoltar">
          <Link to="/escolha">
            <button className="voltarbutton">
              <KeyboardBackspaceIcon fontSize="large" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PeriapicalPage;

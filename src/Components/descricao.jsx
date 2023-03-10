import React, { useState } from "react";
//// CSS
import CopyToClipBoard from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { Les } from "../data-panoramica";
import { Grid, Header, Icon, Message } from "semantic-ui-react";

export default function Descricao() {
  const datas = Les ?? []; // PUXANDO O ARRAY DO DATABASE

  const radiolucida = "radiolucida";
  const radiopaca = "radiopaca";
  const bemdelimitada = "bem delimitada";
  const maldelimitada = "difusa";
  const regular = "de margem regular";
  const irregular = "de margem irregular";
  const corticalizada = "com borda corticalizada";
  const parcialcortical = "parcialmente corticalizada";
  const hipodenso = "hipodensa";
  const hiperdenso = "hiperdensa";
  const unilocular = "unilocular";
  const multilocular = "multilocular";
  const misto = "mista";
  const expansaocortical = "causando expansão das corticais";
  const expansaoeadelgcortical = "causando expansão e adelgaçamento das corticais";
  const desloc = "deslocamento dentário";
  const reabs = "promovendo reabsorção das raízes dos elementos";

  let [valor, setValor] = useState("");

  function HandleOnChange(e) {
    setValor((valor += e.target.value + ", "));
    handleBusca()
    
   
  }

  function Zerar() {
    setValor("");
    setResultados("");
  }

  function Formatar(frase) {
    let result = frase.slice(0, -2) + ".";
    let resultUppercase = result.charAt(0).toUpperCase() + result.slice(1);
    return resultUppercase;
  }

  function stringParaArray(texto) {
    // Usando a função split() para dividir a string em um array
    // usando a vírgula como separador
    let array = texto.split(",");

    // Usando a função map() para remover espaços em branco antes e depois de cada elemento do array
    array = array.map((elemento) => elemento.trim());

    return array;
  }

  const array = stringParaArray(valor);
  console.log(array)

  const [resultados, setResultados] = useState([]);

  function compararArrayComObjetos(array, objetos) {
    const objetosEncontrados = [];
  
    // Cria um conjunto com todas as propriedades dos objetos
    const propriedades = new Set();
    objetos.forEach((objeto) => {
      Object.keys(objeto).forEach((propriedade) => {
        propriedades.add(propriedade);
      });
    });
  
    objetos.forEach((objeto) => {
      let encontrou = true;
  
      array.forEach((elemento) => {
        let elementoEncontrado = false;
  
        // Verifica se o valor do elemento está presente em alguma propriedade do objeto
        propriedades.forEach((propriedade) => {
          if (String(objeto[propriedade]).toLowerCase().includes(elemento.toLowerCase())) {
            elementoEncontrado = true;
          }
        });
  
        if (!elementoEncontrado) {
          encontrou = false;
        }
      });
  
      if (encontrou) {
        objetosEncontrados.push(objeto.name);
      }
    });
  
    return objetosEncontrados;
  }
  

  function handleBusca() {
    const objetos = Les;
    
    const encontrados = compararArrayComObjetos(array, objetos);

    setResultados(encontrados);
  }

  return (
    <div className="primeirasectiondesc">
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
      <div className="containerdesc">
        <div className="paragrafodesc">
          <div
            style={{
              marginRight: "10px",
              padding: "1%",
              color: "rgba(49, 24, 100, 0.761)",
            }}
          >
            <b>Imagem: </b>
          </div>
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#a3a3a41d",
              padding: "1%",
            }}
          >
            <p value={valor}>{valor}</p>
          </div>
        </div>
        <div style={{ width: "80%", height: "100px", overflowY: "scroll" }}>
          <p style={{ fontSize: ".8rem" }}>Possíveis diagnósticos:</p>
          {resultados.length > 0 ? (
            <h6>{resultados.join(", ")}</h6>
          ) : (
            <span></span>
          )}
        </div>
        <Message className="mensagemdesc" size="tiny">
          Atenção! Essa ferramenta serve para apenas auxiliar e não fechar diagnóstico.
        </Message>
        <div className="Container-botoes">
          <div className="Botoes-pai">
            <div className="buttonn ">
              <button
                className="buttonnn "
                onClick={HandleOnChange}
                value={radiolucida}
              >
                Radiolucida
              </button>
            </div>

            <div className="buttonn ">
              <button
                className="buttonnn"
                onClick={HandleOnChange}
                value={radiopaca}
              >
                Radiopaca
              </button>
            </div>
            <div className="buttonn">
              <button
                className="buttonnn"
                onClick={HandleOnChange}
                value={misto}
              >
                Mista
              </button>
            </div>
          </div>
          <div className="Botoes-pai">
            <div className="buttonn btn1">
              <button
                className="buttonnn"
                onClick={HandleOnChange}
                value={hipodenso}
              >
                Hipodenso
              </button>
            </div>
            <div className="buttonn btn2">
              <button
                className="buttonnn"
                onClick={HandleOnChange}
                value={hiperdenso}
              >
                Hiperdenso
              </button>
            </div>
          </div>

          <div className="Botoes-pai">
            <div className="buttonn btn1">
              <button
                className="buttonnn"
                onClick={HandleOnChange}
                value={unilocular}
              >
                Unilocular
              </button>
            </div>
            <div className="buttonn btn2">
              <button
                className="buttonnn"
                onClick={HandleOnChange}
                value={multilocular}
              >
                Multilocular
              </button>
            </div>
          </div>

          <div className="Botoes-pai">
            <div className="buttonn btn1">
              <button
                className="buttonnn"
                onClick={HandleOnChange}
                value={bemdelimitada}
              >
                Bem delimitada
              </button>
            </div>
            <div className="buttonn btn2">
              <button
                className="buttonnn"
                onClick={HandleOnChange}
                value={maldelimitada}
              >
                Difusa
              </button>
            </div>
          </div>

          <div className="Botoes-pai">
            <div className="buttonn btn1">
              <button
                className="buttonnn"
                onClick={HandleOnChange}
                value={regular}
              >
                Regular
              </button>
            </div>
            <div className="buttonn btn2">
              <button
                className="buttonnn"
                onClick={HandleOnChange}
                value={irregular}
              >
                Irregular
              </button>
            </div>
          </div>

          <div className="Botoes-pai">
            <div className="buttonn btn1">
              <button
                className="buttonnn"
                onClick={HandleOnChange}
                value={corticalizada}
              >
                Corticalizada
              </button>
            </div>
            <div className="buttonn btn2">
              <button
                className="buttonnn"
                onClick={HandleOnChange}
                value={parcialcortical}
              >
                Parcialmente corticalizada
              </button>
            </div>
          </div>

          <div className="Botoes-pai">
            <div className="buttonn btn1">
              <button
                className="buttonnn"
                onClick={HandleOnChange}
                value={expansaocortical}
              >
                Expansão da cortical
              </button>
            </div>
            <div className="buttonn btn2">
              <button
                className="buttonnn"
                onClick={HandleOnChange}
                value={expansaoeadelgcortical}
              >
                Expansão e adelgaçamento
              </button>
            </div>
          </div>
          <div className="Botoes-pai">
            <div className="buttonn btn1">
              <button
                className="buttonnn"
                onClick={HandleOnChange}
                value={desloc}
              >
                Com deslocamento dentário
              </button>
            </div>
            <div className="buttonn btn2">
              <button
                className="buttonnn"
                onClick={HandleOnChange}
                value={reabs}
              >
                Reabsorção raízes
              </button>
            </div>
          </div>
        </div>
        <div className="Botoex">
          <div className="botoess">
            <button className="copiar" onClick={Zerar}>
              ZERAR
            </button>
          </div>
          <div className="botoess">
            <CopyToClipBoard text={"Imagem: " + Formatar(valor)}>
              <button className="copiar">COPIAR</button>
            </CopyToClipBoard>
          </div>
        </div>
      </div>
    </div>
  );
}

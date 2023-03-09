import React, { useState } from "react";
//// CSS
import CopyToClipBoard from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { Les } from "../data-panoramica";
import { Grid, Header, Icon, Message } from "semantic-ui-react";


export default function Descricao() {
  const datas = Les ?? []; // PUXANDO O ARRAY DO DATABASE

  let radiolucida = "radiolucida";
  let radiopaca = "radiopaca";
  let bemdelimitada = "bem delimitada";
  let maldelimitada = "difusa";
  let regular = "de margem regular";
  let irregular = "de margem irregular";
  let corticalizada = "com borda corticalizada";
  let parcialcortical = "parcialmente corticalizada";

  let hipodenso = "hipodensa";
  let hiperdenso = "hiperdensa";
  let unilocular = "unilocular";
  let multilocular = "multilocular";
  let misto = "mista";
  let expansaocortical = "causando expansão das corticais";
  let expansaoeadelgcortical =
    "causando expansão e adelgaçamento das corticais";
  let desloc = "deslocamento dentário";
  let reabs = "promovendo reabsorção da(s) raíz(es) do(s) elemento(s)";
  let irromp = "associado ao elemento irrompido"
  let bemdef = "bem definida"

  let [valor, setValor] = useState("");

  function HandleOnChange(e) {
    setValor((valor += e.target.value + ", "));
    handleBusca();
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

  console.log(array, datas);

  const [resultados, setResultados] = useState([]);

  function compararArrayComObjetos(array, objetos) {
    const objetosEncontrados = [];

    // Itera sobre cada objeto no array de objetos
    objetos.forEach((objeto) => {
      let encontrou = true;

      // Itera sobre cada elemento do array de busca
      array.forEach((elemento) => {
        // Verifica se o valor do elemento está presente em alguma propriedade do objeto
        if (!Object.values(objeto).includes(elemento)) {
          encontrou = false;
        }
      });

      // Se o objeto contém todos os valores do array de busca, adiciona o nome do objeto ao array de resultados
      if (encontrou) {
        objetosEncontrados.push(objeto.name);
      }
    });

    return objetosEncontrados;
  }

  function handleBusca() {
    const objetos = Les;

    const arrayBusca = array;

    const encontrados = compararArrayComObjetos(arrayBusca, objetos);
    console.log(arrayBusca);

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
        <div style={{ width: "80%", height: "100px", overflowY:"scroll" }}>
          <p style={{fontSize:".8rem"}}>Possíveis diagnósticos:</p>
          {resultados.length > 0 ? (
            <h6>{resultados.join(", ")}</h6>
          ) : (
            <span></span>
          )}
        </div>
        <Message className="mensagemdesc" size="tiny">
          Atenção! Essa ferramenta serve para apenas auxiliar o conhecimento do radiologista e não dar diagnóstico.
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

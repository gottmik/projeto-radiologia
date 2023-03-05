import React, { useState } from "react";
//// CSS
import CopyToClipBoard from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
// import { Lesoes } from "../data-panoramica";

export default function Descricao() {

  // const datas = Lesoes ?? []; // PUXANDO O ARRAY DO DATABASE
  // // const [busca, setBusca] = useState('');

  // const [dados, setDados] = useState(datas);

  let radiolucida = "radiolucida";
  let radiopaca = "radiopaca";
  let bemdelimitada = "bem delimitada";
  let maldelimitada = "difusa";
  let regular = "de margem regular";
  let irregular = "de mergem irregular";
  let corticalizada = "com borda corticalizada";
  let parcialcortical = "parcialmente corticalizada";
  let semcortical = "sem borda corticalizada";
  let hipodenso = "hipodensa";
  let hiperdenso = "hiperdensa";
  let unilocular = "unilocular";
  let multilocular = "multilocular";
  let misto = "mista"
  let expansaocortical = "causando expansão das corticais"
  let expansaoeadelgcortical = "causando expansão e adelgaçamento das corticais"
  let desloc ="deslocamento dentário"
  let estendese= "estende-se do(a) ___ até o(a) ___ "

  let [valor, setValor] = useState("");

  function HandleOnChange(e) {
    setValor((valor += e.target.value + ", "));
    console.log(setValor);
  }

  function Zerar() {
    setValor("");
  }

  function Formatar(frase) {
    let result = frase.slice(0, -2) + ".";
    let resultUppercase = result.charAt(0).toUpperCase() + result.slice(1);
    return resultUppercase;
  }

  return (
    
      <div className="primeirasectiondesc">
        <div className="containerdesc">
          <div className="paragrafodesc">
            <p value={valor}>{valor}</p>
          </div>
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
                  Mal delimitada
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
                  Com borda corticalizada
                </button>
              </div>
              <div className="buttonn btn2">
                <button
                  className="buttonnn"
                  onClick={HandleOnChange}
                  value={semcortical}
                >
                  Sem borda corticalizada
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
                  value={hipodenso}
                >
                  Expansão
                </button>
              </div>
              <div className="buttonn btn2">
                <button
                  className="buttonnn"
                  onClick={HandleOnChange}
                  value={hiperdenso}
                >
                  Sem Expansão
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
                  Com deslocamento dentário
                </button>
              </div>
              <div className="buttonn btn2">
                <button
                  className="buttonnn"
                  onClick={HandleOnChange}
                  value={hiperdenso}
                >
                  Sem deslocamento dentpario
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
                  Expansão
                </button>
              </div>
              <div className="buttonn btn2">
                <button
                  className="buttonnn"
                  onClick={HandleOnChange}
                  value={hiperdenso}
                >
                  Sem Expansão
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
                  Causando reabsorção radicular
                </button>
              </div>
              <div className="buttonn btn2">
                <button
                  className="buttonnn"
                  onClick={HandleOnChange}
                  value={hiperdenso}
                >
                  Sem causar Reabsorção Radicular
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
        <div className="">
          <Link to="/escolha">
            <button className="lesoesvoltarbot">
              <KeyboardBackspaceIcon fontSize="large" />
            </button>
          </Link>
         
        </div>
      </div>
    
  );
}

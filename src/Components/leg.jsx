import React, { useState } from "react";
//// CSS
import CopyToClipBoard from "react-copy-to-clipboard";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function Leg(props) {
  const text = props.dado.frase;

  const [userText, setUserText] = useState("")

  const handleUserTextChange = (e) => {
    setUserText(text.replace("__", e.target.value))
  }



  return (
    <div className="componentleg">
      <div className="C1">
        <input type="text" onChange={handleUserTextChange} />
      </div>
      <div className="component2leg">
        <div className="C2" value={text}>
          {props.dado.frase}
        </div>
        <div className="C3">
          <CopyToClipBoard text={userText ? userText : props.dado.frase}>
            <ContentCopyIcon className="botao"/>
          </CopyToClipBoard>
        </div>
        
      </div>
    </div>
  );
}

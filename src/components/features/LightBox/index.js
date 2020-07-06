import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const LightBox = (props) => {
  const {
    link = "link",
    children = "Texto da lightBox",
    btnText = "Texto do botão",
  } = props;

  const [open, setOpen] = useState({ display: "none" });
  const [scrollBox, setScrollBox] = useState(true);
  
  const on_scroll = (s) => {
    const target = s.target;

    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
        setScrollBox(false)
    } else if (target.scrollHeight - target.scrollTop !== target.clientHeight) {
        setScrollBox(true)
    }
}

  const abrir = () => setOpen({ display: "block" });
  const fechar = () => setOpen({ display: "none" });

  return (
    <>
      <div className="link" onClick={abrir}>
        <p className="linkStyle">{link}</p>
      </div>
      <div style={open} className="opacity"></div>
      <div style={open} className="box">
        <div className={`${scrollBox ? "text" : "textScroll" }`} onScroll={on_scroll}>{children}</div>
        <button className="btn" onClick={fechar}>
          {btnText}
        </button>
      </div>
    </>
  );
};

LightBox.propTypes = {
  link: PropTypes.string.isRequired,
  btnText: PropTypes.string,
};

export default LightBox;

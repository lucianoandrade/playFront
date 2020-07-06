import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const BtnMenu = props => {
  
  let BtnMenuClass = "btnMenu";

  if (props.isOpen) {
    BtnMenuClass += " xHamburguer";
  } 
  
  return(
    <div className={ BtnMenuClass } onClick={ () => { props.onClick() } }>
      <span className="btnLine"></span>
      <span className="btnLine"></span>
      <span className="btnLine"></span>
    </div>
  );
};

  BtnMenu.propTypes = {
  onClick: PropTypes.func.isRequired
  }

export default BtnMenu;
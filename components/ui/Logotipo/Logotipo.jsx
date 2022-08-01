import React from 'react';
// import logotipo from '../../../images/img1.jpg';
import logoHacker from "../../images/logoHacker.png";

export const Logotipo = ({textoAlternativo,estilo='imgNav'}) => {
  return (
      <img className={estilo} src={logoHacker} alt={textoAlternativo}/>
  )
}

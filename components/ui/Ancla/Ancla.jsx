import React from 'react';

export const Ancla = ({textoAncla,estilo="ancla"}) => {
  return(
    <a href='#' className={estilo}>{textoAncla}</a>
  )
}
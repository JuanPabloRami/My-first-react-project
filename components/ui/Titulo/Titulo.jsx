import React  from "react";



export const Titulo = ({texto,estilo}) => {
    return (
        
        <h1 className={estilo}>{texto}</h1>
        
        
      );
};
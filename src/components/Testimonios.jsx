import React from "react";
import '../styles/Testimonio.css'

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img className="img-testimonio"
        src={props.imagen}
        alt={`imagen de ${props.name}`}  />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-pais-testimonio"><strong>{props.name}</strong> en {props.country}</p>
        <p className="cargo-empresa-testimonio">{props.charge} en <strong>{props.workplace}</strong></p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
    
  );

}


export default Testimonio;
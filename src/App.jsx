import React from "react";
import style from "@emotion/styled";
import Formulario from "./components/Formulario";
import ImagenCripto from "./img/imagen-criptos.png";

const Contenedor = style.div`
  max-width:900px;
  margin: 0 auto;
  width:90%;
  @media(min-width:992px){
    display:grid;
    grid-template-columns:repeat(2,1fr);
    column-gap:2rem;
  }
`;

const Imagen = style.img`
  max-width:400px;
  width:80%;
  margin:100px auto 0 auto;
  display:block
`;

const Heding = style.h1`
 font-family: 'Lato', sans-serif;
 color:#fff;
 text-align: center;
 font-weight: 700;
 margin-top: 80px;
 margin-bottom: 50px;
 font-size: 34px;


 &::after {
  content: "";
  width: 100px;
  height: 6px;
  background-color: #66a2fe;
  display: block;
  margin: 10px auto auto;
}
`;

function App() {
  return (
    <Contenedor>
      <Imagen src={ImagenCripto} alt="fondo" />
      <div>
        <Heding>Cotiza Criptomonedas al Instante</Heding>
        <Formulario />
      </div>
    </Contenedor>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas";

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  margin-top: 30px;

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

const Formulario = () => {
  const [criptos, setCriptos] = useState([]);

  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu moneda", monedas);
  const [criptoMoneda, SelectCriptoMonedas] = useSelectMonedas("Elige tu criptomoneda", criptos);

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      const arrayCriptos = resultado.Data.map((data) => ({
        id: data.CoinInfo.Name,
        nombre: data.CoinInfo.FullName,
      }));

      setCriptos(arrayCriptos);
    };
    consultarAPI();
  }, []);

  return (
    <form>
      <SelectMonedas />
      <SelectCriptoMonedas />
      <InputSubmit type="submit" value={"Cotizar"} />
    </form>
  );
};

export default Formulario;

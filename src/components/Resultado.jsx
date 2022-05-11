import styled from "@emotion/styled";

const Result = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 25px;
`;

const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

const Precio = styled.p`
  font-size: 25px;
  span {
    font-weight: 700;
  }
`;

const Imagen = styled.img`
  display: block;
  width: 120px;
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <Result>
      <Imagen src={`https://cryptocompare.com${IMAGEURL}`} alt="img" />
      <div>
        <Precio>
          El precio es de: <span>{PRICE}</span>
        </Precio>

        <Texto>
          El precio más alto del dia: <span>{HIGHDAY}</span>
        </Texto>

        <Texto>
          El precio más bajo del dia: <span>{LOWDAY}</span>
        </Texto>

        <Texto>
          Variación ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
        </Texto>

        <Texto>
          Ultima actualizacion: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Result>
  );
};

export default Resultado;

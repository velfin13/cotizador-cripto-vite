import React from "react";
import styled from "@emotion/styled";

const Texto = styled.div`
  background-color: #db4840;
  color: #fff;
  padding: 15px;
  font-size: 17px;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  text-align: center;
  border-radius: 15px;
  margin: 28px;
`;

const Error = ({ children }) => {
  return <Texto>{children}</Texto>;
};

export default Error;

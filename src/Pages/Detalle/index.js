import React from "react";
import styled from "styled-components";

import Header from "../Header/index";
import { Tabs } from "../../Components/Tabs/index";

import mockDetalle from "../../mocks/detalleProduct.json";
import DetalleProducto from "../../Components/DetalleProducto";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`;

const ContainerDetails = styled.div`
  grid-column: 2 / 12;
  background-color: #ffffff;
`;

const Detalle = (props) => {
  return (
    <>
      <Header />
      <Tabs tags={props.location.state.data} />
      <Container>
        <ContainerDetails>
          <DetalleProducto product={mockDetalle} />
        </ContainerDetails>
      </Container>
    </>
  );
};

export default Detalle;

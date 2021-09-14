import React from "react";
import styled from "styled-components";

import MockDescripcion from "../../mocks/descripcion.json";

const ContainerDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`;

const ContainerImg = styled.div`
  grid-column: 1 / 8;
`;

const Details = styled.div`
  grid-column: 8 / 11;
`;

const Sellers = styled.h5`
  font-size: 14px;
  color: #999999;
  padding: 0;
  margin: 0;
  padding-top: 32px;
  font-weight: normal;
`;
const Price = styled.h3`
  font-size: 46px;
  color: #333333;
  padding: 0;
  margin: 0;
  font-weight: 500;
  padding-top: 16px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  border-radius: 4px;
  background-color: #3483fa;
  font-size: 18px;
  margin-top: 32px;
  margin-right: 32px;
  padding: 12px 8px;
  color: white;
  cursor: pointer;
`;

const ContainerDescription = styled.div`
  grid-column: 1 / 12;
`;
const Title = styled.div`
  font-size: 28px;
  color: #333333;
  margin: 0;
  padding: 0;
  padding-left: 32px;
  padding-bottom: 32px;
`;
const Description = styled.div`
  font-size: 16px;
  color: #999999;
  padding: 0;
  margin: 0;
  padding-left: 32px;
  padding-bottom: 32px;
`;

const DetalleProducto = (props) => {
  const { price, sold_quantity, pictures, attributes } = props.product;
  const { plain_text } = MockDescripcion;
  console.log(props.product);
  return (
    <ContainerDetails>
      <ContainerImg>
        <img
          //   src={ props.product.thumbnail}
          src={pictures[0].secure_url}
          alt="Foto producto"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </ContainerImg>
      <Details>
        <Sellers>
          {attributes.find((attr) => attr.id === "ITEM_CONDITION").value_name} -{" "}
          {sold_quantity} vendidos
        </Sellers>
        <Price>${price.toLocaleString()}</Price>
        <Button>Comprar</Button>
      </Details>
      <ContainerDescription>
        <Title>Descripción del producto</Title>
        <Description>{plain_text}</Description>
      </ContainerDescription>
    </ContainerDetails>
  );
};

export default DetalleProducto;

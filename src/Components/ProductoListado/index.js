import React from "react";
import styled from "styled-components";
import LogoEnvio from "../../Assets/ic_shipping.png";

const ContainerDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 10px;
  grid-auto-rows: auto;
  cursor: pointer;
`;

const Img = styled.img`
  width: 180px;
  height: 180px;
  padding: 16px;
  border-radius: 4px;
  grid-column: 0 / 3;
`;

const PriceText = styled.p`
  font-size: 24px;
  color: #333333;
  margin: 32px 0;
  padding: 0;
`;

const Description = styled.p`
  font-size: 18px;
  color: #333333;
  margin: 0;
  padding: 0;
`;

const City = styled.p`
  font-size: 12px;
  color: #999999;
  margin: 46px 0;
  grid-column: 10 / 12;
`;

const Hr = styled.hr`
  width: 80%;
  margin: auto;
  border: none;
  border-top: 1px solid lightgrey;
`;

const ProductoListado = (props) => {
  const { thumbnail, title, price, shipping, address } = props.product;
  return (
    <>
      <ContainerDetails>
        <Img src={thumbnail} alt="product" />
        <div style={{ gridColumn: "2 / 9" }}>
          <PriceText>
            ${price.toLocaleString()}{" "}
            {shipping.free_shipping && (
              <img src={LogoEnvio} alt="Envío gratis" />
            )}
          </PriceText>
          <Description>{title}</Description>
        </div>
        <City>{address.state_name}</City>
      </ContainerDetails>
      <Hr />
    </>
  );
};

export default ProductoListado;

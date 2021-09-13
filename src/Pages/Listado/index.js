import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Header from "../Header";

import { Tabs } from "../../Components/Tabs";
import ProductoListado from "../../Components/ProductoListado/index";

import MockProduct from "../../mocks/listResult.json";

const ContainerList = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 10px 0px 0px 0px;
  grid-auto-rows: minmax(60px, auto);
`;

const ContainerProduct = styled.div`
  background-color: white;
  border-radius: 4px;
  grid-column: 2 / 12;
  border-bottom: 1px solid #999999;
`;

const Listado = () => {
  let history = useHistory();
  // console.log(MockProduct);

  const goToDetails = (productId) => {
    if (productId !== "") {
      history.push("/items/" + productId);
    }
  };

  return (
    <>
      <Header />
      <Tabs tags={MockProduct.filters} />
      <ContainerList>
        <ContainerProduct>
          {MockProduct.results.map((product) => (
            <div key={product.id} onClick={() => goToDetails(product.id)}>
              <ProductoListado product={product} />
            </div>
          ))}
        </ContainerProduct>
      </ContainerList>
    </>
  );
};

export default Listado;

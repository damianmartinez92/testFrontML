import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../Assets/Logo_ML.png";
import iconSearch from "../../Assets/ic_Search.png";

const ContainerHeader = styled.header`
  width: 100%;
  background-color: #ffe600;
`;

const ContainerNav = styled.nav`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(60px, auto);
`;

const ContainerLogo = styled.div`
  margin-top: 12px;
  grid-column: 2 / 3;
  grid-row: 1;
`;

const ContainerSearch = styled.div`
  width: 100%;
  height: 33px;
  margin-left: -10px;
  display: inline-flex;
  grid-column: 3 / 12;
  grid-row: 1;
`;

const InputSearch = styled.input`
  width: 95%;
  height: 100%;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  padding-left: 12px;
  margin-top: 12px;
  ::placeholder {
    font-size: 18px;
  }
  :focus {
    outline: none;
  }
  z-index: 1;
`;
const ContainerButtonSearch = styled.button`
  width: 5%;
  min-width: 33px;
  height: 35px;
  margin-top: 12px;
  margin-left: -4px;
  margin-bottom: 4px;
  background-color: #eeeeee;
  border: none;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  z-index: 2;
  cursor: pointer;
`;

const Header = () => {
  let history = useHistory();
  const [inputValue, setInputValue] = useState("");

  const searchProduct = (value) => {
    if (value !== "") {
      history.push("/items/search/" + value);
    }
  };

  return (
    <ContainerHeader>
      <ContainerNav>
        <ContainerLogo>
          <img
            src={Logo}
            alt="MercadoLibre"
            onClick={() => history.push("/")}
            style={{ cursor: "pointer" }}
          />
        </ContainerLogo>
        <ContainerSearch>
          <InputSearch
            value={inputValue}
            placeholder="Nunca dejes de buscar"
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={(e) => searchProduct(e.target.value)}
          />
          <ContainerButtonSearch onClick={() => searchProduct(inputValue)}>
            <img src={iconSearch} alt="Buscar" style={{ paddingTop: "6px" }} />
          </ContainerButtonSearch>
        </ContainerSearch>
      </ContainerNav>
    </ContainerHeader>
  );
};

export default Header;

import React from "react";
import styled from "styled-components";

const ContainerTabs = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 10px;
  /* grid-auto-rows: minmax(10px, auto); */
`;

const ContainerTag = styled.div`
  width: 100%;
  display: inline-flex;
  grid-column: 2 / 11;
  grid-row: 1;
`;

const P = styled.p`
  font-size: 14px;
  color: #999999;
  ::after {
    content: ">";
    margin-right: 2px;
  }
  :last-child::after {
    content: "";
  }
  :last-child {
    font-weight: bold;
  }
`;

export const Tabs = (props) => {
  const { tags } = props;
  return (
    <ContainerTabs>
      <ContainerTag>
        {tags.map((tag) =>
          tag.values.map((category) => (
            <P key={category.id}>{category.name} </P>
          ))
        )}
      </ContainerTag>
    </ContainerTabs>
  );
};

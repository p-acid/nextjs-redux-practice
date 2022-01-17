import { useSelector } from "react-redux";
import styled from "styled-components";

import { Item } from "./Item";

export const List = (props) => {
  const { allRooms } = useSelector((state) => state.allRooms);
  console.log(allRooms);

  return (
    <Wrapper>
      <Title>List</Title>
      {allRooms.map((info, idx) => {
        return <Item key={info.name} info={{ ...info, picNum: idx + 1 }} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid #e6e6e6;
  font-weight: bold;
  font-size: 2.7rem;
  color: #0b1226;
`;

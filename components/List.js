import { useSelector } from "react-redux";
import styled from "styled-components";

import { Item } from "./Item";

export const List = (props) => {
  const { allRooms } = useSelector((state) => state.allRooms);
  console.log(allRooms);

  return (
    <Wrapper>
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

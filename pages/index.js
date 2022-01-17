import styled from "styled-components";
import { Header } from "../components/Header";
import { List } from "../components/List";

import { getRooms } from "../redux/actions/roomActions";
import { wrapper } from "../redux/store";

const index = (props) => {
  return (
    <Wrapper>
      <Header />
      <List />
    </Wrapper>
  );
};

export default index;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(getRooms(req));
    }
);

const Wrapper = styled.div`
  padding: 1rem;
`;

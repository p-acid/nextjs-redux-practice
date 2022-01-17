import styled from "styled-components";

export const Header = (props) => {
  return (
    <Wrapper>
      <Title>HotelGo!</Title>
      <Discription>Make your best trip with our service.</Discription>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  margin-bottom: 0.2rem;
  font-weight: bold;
  font-size: 5rem;
`;

const Discription = styled.p`
  font-size: 2rem;
`;

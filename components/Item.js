import Image from "next/image";
import styled from "styled-components";

export const Item = ({ info }) => {
  const { name, rating, price, picNum } = info;

  const isSale = info.sale_percent;
  const salePrice = isSale && price * (1 - info.sale_percent / 100);

  return (
    <Box>
      <Img
        src={`/images/hotel${picNum}.jpg`}
        alt={picNum}
        width={180}
        height={130}
      />
      <SubBox>
        <Name>{name}</Name>
        <SubInfo>
          <Price isSale={isSale}>{`${price.toLocaleString()}$`}</Price>
          {isSale && (
            <Price isSale={!isSale}>{`${salePrice.toLocaleString()}$`}</Price>
          )}
          <Rating>{"★".repeat(rating)}</Rating>
        </SubInfo>
      </SubBox>
    </Box>
  );
};

const Box = styled.li`
  display: flex;
  gap: 1rem;
`;

const Img = styled(Image)`
  border-radius: 0.2rem;
`;

const SubBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0.3rem;
`;

const SubInfo = styled.div``;

const Name = styled.p`
  font-weight: bold;
  font-size: 1.8rem;
`;

const Price = styled.span`
  margin-right: ${({ isSale }) => isSale && "0.5rem"};
  font-size: 1.3rem;
  color: ${({ isSale }) => (isSale ? "#fc3003" : "#078a14")};
  text-decoration-line: ${({ isSale }) => isSale && "line-through"};
`;

const Rating = styled.p`
  margin-top: 0.4rem;
  font-size: 1.3rem;
  color: #f5db14;
`;

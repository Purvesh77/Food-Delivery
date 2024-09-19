import React from 'react';
import { assets } from '../../assets/assets';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  height: 34vw;
  margin: 30px auto;
  background: url('${assets.header_img}') no-repeat;
  background-size: contain;
  position: relative;
`;

const HeaderContents = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.5vw;
  max-width: 50%;
  bottom: 10%;
  left: 6vw;
  animation: fadeIn 3s;

  @media (max-width: 1050px) {
    max-width: 45%;
  }

  @media (max-width: 750px) {
    max-width: 65%;
  }
`;

const HeaderTitle = styled.h2`
  font-weight: 500;
  color: white;
  font-size: max(4.5vw, 22px);
`;

const HeaderDescription = styled.p`
  color: white;
  font-size: 1vw;

  @media (max-width: 750px) {
    display: none;
  }
`;

const HeaderButton = styled.button`
  border: none;
  color: #747474;
  font-weight: 500;
  padding: 1vw 2.3vw;
  background-color: white;
  font-size: max(1vw, 13px);
  border-radius: 50px;

  @media (max-width: 750px) {
    padding: 2vw 4vw;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContents>
        <HeaderTitle>Order your favourite food here</HeaderTitle>
        <HeaderDescription>
          Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
        </HeaderDescription>
        <HeaderButton>View Menu</HeaderButton>
      </HeaderContents>
    </HeaderContainer>
  );
};

export default Header;

import React from "react";
import styled from "styled-components";
import Image from "./Image";
const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
`;
const Center = styled.div`
  flex: 2;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  align-items: center;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const SearchContainer = styled.div`
  display: flex;
  border: 0.5px solid gray;
  height: 1.5rem;
  border-radius: 20px;
  width: 90%;
  padding: 5px;
  align-items: center;
`;
const Icon = styled.img`
  object-fit: cover;
  height: ${(props) => props.$height || "100%"};
  aspect-ratio: 1/1;
`;
const Input = styled.input`
  width: 93%;
  border: none;
  margin-left: 10px;

  &:focus {
    outline: none;
  }
`;
const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
`;
const Badge = styled.div`
  border-radius: 40px;
  height: 15px;
  width: 15px;
  background-color: #0048fd;
  color: white;
  position: absolute;
  top: 0px;
  right: -3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>LMS</Logo>
        </Left>
        <Center>
          <SearchContainer>
            <Icon src="/img/search.png" />
            <Input placeholder="Search anything" />
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem>Sign in</MenuItem>
          <MenuItem>Login</MenuItem>
          <MenuItem>
            <Icon src="/img/shopping_cart.png" $height="30px" />
            <Badge>4</Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

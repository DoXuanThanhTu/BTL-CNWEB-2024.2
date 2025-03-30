import React, { useState } from "react";
import { assets } from "../../assets/assets";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
const Container = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  margin-top: 10px;
  width: 100%;
  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 800px) {
    margin-left: 20px;
    margin-right: 20px;
    min-width: 80%;
  }
  @media (max-width: 800px) {
    width: calc(100% - 20px);
  }
`;
const Menu = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 430px) {
    display: none;
  }
`;
const SideMenu = styled.div`
  display: none;
  @media (max-width: 430px) {
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
  }
  width: 200px;
`;
const SideMenuContainer = styled.div`
  width: 100px;
  height: 0px;
  display: ${(props) => (props.$open ? "flex" : "none")};
  height: ${(props) => props.$open && "100px"};
  position: fixed;
  right: 5px;
  top: 51px;
  flex-direction: column;
  gap: 10px;
  padding-top: 10px;
  background-color: #fafafa;
`;
const Button = styled.button`
  background-color: #3738e2;
  color: white;
  padding: 5px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
`;
const Button2 = styled.button`
  width: 100%;
  border: none;
  padding: 10px;
  background-color: transparent;
  cursor: pointer;
`;
const Hr = styled.hr`
  margin-top: 10px;
  width: 100%;
  border: 0.5px solid #dfe3e6;
`;
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
    console.log(open);
  };
  const path = useLocation().pathname;
  console.log(path);
  return (
    <Container>
      <Wrapper>
        <Link to={"/"}>
          <img src={assets.logo} alt="Logo" />
        </Link>
        {path != "/login" ? (
          <>
            <Menu>
              <Link to={"/login"}>
                <Button>Sign in</Button>
              </Link>
              <Link to={"/login"}>
                <Button>Register</Button>
              </Link>
            </Menu>
            <SideMenu>
              <img
                src={open ? assets.close : assets.menu}
                alt="Menu icon"
                onClick={() => handleOpen()}
              />
              <SideMenuContainer $open={open}>
                <Link to={"/login"}>
                  <Button2>Sign in</Button2>
                </Link>
                <Link to={"/login"}>
                  <Button2>Register</Button2>
                </Link>
              </SideMenuContainer>
            </SideMenu>
          </>
        ) : (
          <></>
        )}
      </Wrapper>
      <Hr />
    </Container>
  );
};

export default Navbar;

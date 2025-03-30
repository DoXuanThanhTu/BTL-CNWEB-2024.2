import React, { useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
  height: calc(100vh - 50px);
  font-size: 20px;
`;
const Wrapper = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 800px) {
    margin-left: 20px;
    margin-right: 20px;
    min-width: 90%;
  }
  @media (max-width: 800px) {
    width: calc(100% - 20px);
  }
`;
const Main = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 400px;
  @media (max-width: 430px) {
    width: 300px;
  }
  @media (min-width: 800px) {
    width: 500px;
  }
`;
const Button = styled.button`
  width: 100%;
  height: 45px;
  border: 1px solid #d4d4d4;
  border-radius: 10px;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    border-color: #3738e2;
    color: #3738e2;
  }
`;
const Input = styled.input`
  margin-top: 10px;
  width: 100%;
  font-size: 18px;
  height: 35px;
  border: 1px solid #d4d4d4;
  border-radius: 10px;
  padding-left: 10px;
  &:focus {
    outline: none;
    box-shadow: 0px 1px 10px 0px rgba(124, 134, 203, 0.75);
  }
  &:hover {
    cursor: text;
  }
  cursor: pointer;
`;
const ButtonSubmit = styled.button`
  background-color: #3738e2;
  color: white;
  padding: 5px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  height: 45px;
  &:hover {
    background-color: #0b40de;
  }
`;
const ButtonToggle = styled.button`
  background-color: #ededfc;
  color: #3738e2;
  padding: 5px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  height: 45px;
  &:hover {
    background-color: #dadae2ab;
  }
`;
const Hr = styled.hr`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 400px;
  @media (max-width: 430px) {
    width: 300px;
  }
  @media (min-width: 800px) {
    width: 500px;
  }
  border: 0.5px solid #dfe3e6;
`;
const Login = () => {
  const [login, setLogin] = useState(true);
  return (
    <Container>
      <Wrapper>
        {login ? (
          <Main>
            <h1>Sign in</h1>
            <Section>
              <Button>Sign in with Google</Button>
            </Section>
            <div
              style={{
                margin: "20px 10px 20px 10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Hr />
              <span
                style={{
                  backgroundColor: "white",
                  zIndex: 1,
                  marginTop: "-28px",
                }}
              >
                or sign in with
              </span>
            </div>
            <Section>
              <form>
                <div>
                  <label htmlFor="email">Email</label>
                  <Input type="email" name="email" />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <Input type="password" name="password" />
                </div>
                <span
                  style={{
                    color: "blue",
                    fontSize: "16px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                    margin: "10px 0 10px 0",
                  }}
                >
                  Forget password?
                </span>
                <ButtonSubmit type="submit">
                  {login ? "Sign in" : "Create Account"}
                </ButtonSubmit>
              </form>
            </Section>
            <Hr />
            <Section
              style={{
                alignItems: "center",
                fontSize: "14px",
                color: "gray",
              }}
            >
              <span style={{ marginBottom: "5px" }}>First time here?</span>
              <ButtonToggle onClick={() => setLogin(false)}>
                Create an Account
              </ButtonToggle>
            </Section>
          </Main>
        ) : (
          <Main>
            <h1>Create an account using</h1>
            <Section>
              <Button>Google</Button>
            </Section>
            <div
              style={{
                margin: "20px 10px 20px 10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Hr />
              <span
                style={{
                  backgroundColor: "white",
                  zIndex: 1,
                  marginTop: "-28px",
                }}
              >
                or create a new one here
              </span>
            </div>
            <Section>
              <form>
                <div>
                  <label htmlFor="email">Email</label>
                  <Input type="email" name="email" />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <Input type="password" name="password" />
                </div>
                <span
                  style={{
                    color: "blue",
                    fontSize: "16px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                    margin: "10px 0 10px 0",
                  }}
                >
                  Forget password?
                </span>
                <ButtonSubmit type="submit">
                  {login ? "Sign in" : "Create Account"}
                </ButtonSubmit>
              </form>
            </Section>
            <Hr />
            <Section
              style={{
                alignItems: "center",
                fontSize: "14px",
                color: "gray",
              }}
            >
              <span style={{ marginBottom: "5px" }}>First time here?</span>
              <ButtonToggle onClick={() => setLogin(false)}>
                Create an Account
              </ButtonToggle>
            </Section>
          </Main>
        )}
      </Wrapper>
    </Container>
  );
};

export default Login;

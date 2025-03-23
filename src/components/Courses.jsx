import styled from "styled-components";
import Course from "./Course";
import { popularCourses } from "../testdata";
import { categories } from "../testdata";
import { useState } from "react";
const Container = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const KeysContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Keys = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-end;
`;

const Line = styled.div`
  width: 90vw;
  height: 5px;
  background-color: #e8eef7;
  margin-top: -5px;
  z-index: -999;
  margin-bottom: 20px;
`;
const KeyItem = styled.button`
  min-width: 170px;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border: none;
  padding-bottom: 10px;
  border-bottom: ${(props) =>
    props.$active === "false" ? "none" : "5px solid #0e87f1"};
  font-weight: ${(props) => (props.$active === "false" ? "300" : "bold")};
  transition: all ease-in-out 100ms;
  background-color: transparent;
  &:hover {
    background-color: #f0f6ff;
  }
  cursor: pointer;
`;
const Categories = styled.div`
  width: 90vw;
  height: 40px;
  display: flex;
  gap: 20px;
  overflow-x: scroll;
`;
const CategoryItem = styled.div`
  min-width: 200px;
  border-radius: 10px;
  height: 35px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  margin-top: 100px;
  margin-left: 100px;
  font-size: 40px;
  margin-bottom: 20px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;
const Courses = () => {
  const [active, setActive] = useState(0);

  const clickActive = (item) => {
    setActive(item);
  };

  return (
    <Container>
      <Title>All Course</Title>
      <KeysContainer>
        <Keys>
          <KeyItem
            onClick={() => clickActive(1)}
            $active={active === 1 ? "true" : "false"}
          >
            Data Science
          </KeyItem>
          <KeyItem
            onClick={() => clickActive(2)}
            $active={active === 2 ? "true" : "false"}
          >
            Web Developer
          </KeyItem>
          <KeyItem
            onClick={() => clickActive(3)}
            $active={active == 3 ? "true" : "false"}
          >
            AI Skills
          </KeyItem>
          <KeyItem
            onClick={() => clickActive(4)}
            $active={active == 4 ? "true" : "false"}
          >
            Business Analytics
          </KeyItem>
          <KeyItem
            onClick={() => clickActive(5)}
            $active={active == 5 ? "true" : "false"}
          >
            Certification
          </KeyItem>
          <KeyItem
            onClick={() => clickActive(6)}
            $active={active == 6 ? "true" : "false"}
          >
            Soft Skills
          </KeyItem>
        </Keys>
        <Line></Line>
      </KeysContainer>
      {/* <Categories>
        {categories.map((index) => (
          <CategoryItem>{index.title}</CategoryItem>
        ))}
      </Categories> */}
      <Wrapper>
        {popularCourses.map((item) => (
          <Course item={item} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Courses;

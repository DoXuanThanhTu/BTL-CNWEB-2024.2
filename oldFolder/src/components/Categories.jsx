import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { categories } from "../testdata";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CategoriesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
const Title = styled.h1`
  margin-top: 100px;
  margin-left: 100px;
  font-size: 40px;
  margin-bottom: 20px;
`;
const Categories = () => {
  return (
    <Container>
      <Title>Explore Course</Title>
      <CategoriesList>
        {categories.map((item) => (
          <CategoryItem item={item} />
        ))}
      </CategoriesList>
    </Container>
  );
};

export default Categories;

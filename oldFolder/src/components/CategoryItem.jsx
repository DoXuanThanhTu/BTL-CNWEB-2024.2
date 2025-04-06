import styled from "styled-components";

const Container = styled.div`
  width: 20%;
  min-width: 300px;
  aspect-ratio: 2/1;
  max-height: 100px;
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 10px;
  background-color: #f9f8f6;
  cursor: pointer;
  &:hover {
    box-shadow: -1px 4px 12px 1px rgba(0, 0, 0, 0.7);
    -webkit-box-shadow: -1px 4px 12px 1px rgba(0, 0, 0, 0.7);
    -moz-box-shadow: -1px 4px 12px 1px rgba(0, 0, 0, 0.7);
  }
`;
const Image = styled.img`
  height: 50%;
  aspect-ratio: 1/1;
  min-width: 50px;
  margin-left: 10px;
`;
const Info = styled.div`
  height: 100%;
  width: 100%;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
`;
const Title = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
`;
const Desc = styled.div``;
const More = styled.div`
  color: #3e4444;
  font-size: 12px;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img || "/img/categories/computer_science.png"} />
      <Info>
        <Title>{item.title}</Title>
        <Desc>{item.desc}</Desc>
        <More>12 Courses</More>
      </Info>
    </Container>
  );
};

export default CategoryItem;

import styled from "styled-components";

const Container = styled.div`
  width: 21%;
  min-width: 320px;
  max-width: 400px;
  border: 0.25px solid #d1d2e0;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  &:hover {
    background-color: #ecececd1;
  }
  cursor: pointer;
`;
const ImgContainer = styled.div`
  width: 100%;
  max-height: 60%;
  display: flex;
  justify-content: center;
  border-radius: 10px;
`;
const Image = styled.img`
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  border-radius: 10px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 94%;
  height: 40%;
  justify-content: space-between;
  margin: 3%;
  gap: 5px;
`;
const Title = styled.div`
  text-transform: uppercase;
  font-weight: bold;
`;
const Desc = styled.div`
  font-size: 14px;
  color: #595c73;
`;
const Rating = styled.div`
  font-size: 14px;
  display: flex;
  gap: 10px;
  align-items: center;
`;
const Star = styled.div`
  display: flex;
  height: 100%;
`;
const StarIcon = styled.img`
  height: 30px;
  aspect-ratio: 1/1;
`;
const Price = styled.div``;
const Popular = styled.div`
  visibility: ${(props) => (props.$popular ? "visible" : "hidden")};
  background-color: #c2e9eb;
  color: #0186fb;
  width: 70px;
  padding: 5px;
  display: flex;
  border-radius: 10px;
  font-weight: bold;
  justify-content: center;
`;

const Course = ({ item }) => {
  const rate = item.rating;
  let percent = Math.round(rate * 20);
  const stars = [];
  let n = 5;
  while (n > 0) {
    if (percent >= 20) {
      stars.push("star_full");
    } else if (0 < percent && percent < 20) {
      stars.push("star_half");
    } else {
      stars.push("star_empty");
    }
    percent -= 20;
    n -= 1;
  }
  return (
    <Container>
      <ImgContainer>
        <Image src={item.img || "/img/courses/default.png"} />
      </ImgContainer>
      <Info>
        <Title>{item.title}</Title>
        <Desc>{item.desc}</Desc>
        <Rating>
          {item.rating}
          <Star>
            {stars.map((star) => (
              <StarIcon src={`/img/${star}.png`} />
            ))}
          </Star>
        </Rating>
        <Price>${item.price}</Price>
        <Popular $popular={item.popular}>Popular</Popular>
      </Info>
    </Container>
  );
};

export default Course;

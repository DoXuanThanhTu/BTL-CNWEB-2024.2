import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
const SliderContainer = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all ease 1s;
`;
const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 50px;
  background-color: ${(props) => props.bg};
`;
const ImgFrame = styled.div`
  height: 90%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: #e4dfdf;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10rem;
`;
const Image = styled.img`
  height: 90%;
  width: 90%;
  border-radius: 50%;
  object-fit: cover;
`;
const ImgContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 50px;
`;
const ImgInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin-top: 50px;
  margin-right: 10rem;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 3px;
  text-transform: uppercase;
`;
const Button = styled.button`
  margin-top: 30px;
  padding: 10px;
  font-size: 20px;
  background-color: #0370dd;
  color: white;
  width: 150px;
  border: none;
  border-radius: 10px;
`;
// const
const Arrow = styled.img`
  width: 100px;
  height: 100px;
  cursor: pointer;
  position: absolute;
  z-index: 2;
  top: 0;
  bottom: 0;
  margin: auto;
  margin-left: 1rem;
  left: ${(props) => props.direction === "left" && "0"};
  right: ${(props) => props.direction === "right" && "0"};
  opacity: 0.8;
`;
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow
        src="/img/arrow_back.png"
        direction="left"
        onClick={() => handleClick("left")}
      />
      <SliderContainer>
        <Wrapper slideIndex={slideIndex}>
          <Slide>
            <ImgContainer>
              <ImgFrame>
                <Image src="/img/slider_1.jpg" />
              </ImgFrame>
            </ImgContainer>
            <ImgInfoContainer>
              <Title>MEETING SKILLS</Title>
              <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Desc>
              <Button>SHOW MORE</Button>
            </ImgInfoContainer>
          </Slide>
          <Slide bg="">
            <ImgContainer>
              <ImgFrame>
                <Image src="/img/slider_2.jpg" />
              </ImgFrame>
            </ImgContainer>
            <ImgInfoContainer>
              <Title>MEETING SKILLS</Title>
              <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Desc>
              <Button>SHOW MORE</Button>
            </ImgInfoContainer>
          </Slide>
          <Slide>
            <ImgContainer>
              <ImgFrame>
                <Image src="/img/slider_3.jpg" />
              </ImgFrame>
            </ImgContainer>
            <ImgInfoContainer>
              <Title>MEETING SKILLS</Title>
              <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Desc>
              <Button>SHOW MORE</Button>
            </ImgInfoContainer>
          </Slide>
        </Wrapper>
      </SliderContainer>
      <Arrow
        src="/img/arrow_forward.png"
        direction="right"
        onClick={() => handleClick("right")}
      />
    </Container>
  );
};

export default Slider;

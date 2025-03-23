import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useState } from "react";

const Container = styled.div``;
const CourseContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Wrapper = styled.div`
  width: 84vw;
  position: relative;
  min-height: 400px;
  background-color: ${(props) => props.$bg};
  color: ${(props) => props.$txt};
`;
const Add = styled.div`
  background-color: #f8f8f8;
  position: absolute;
  height: 80vh;
  top: 40px;
  right: 40px;
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
const Preview = styled.div`
  background-image: url("img/courses/full_stack.png");
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
`;
const Image = styled.img`
  width: ${(props) => (props.$width ? props.$width : "50px")};
  aspect-ratio: 1/1;
  cursor: pointer;
`;
const AddWrapper = styled.div`
  width: 100%;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const AddButton = styled.button`
  width: 40%;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
  border: 0.5px solid #d1d2e0;
  background-color: ${(props) => props.$bg};
  color: ${(props) => props.$txt};
  z-index: 1;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 50px;
  gap: 10px;
  min-height: 280px;
  justify-content: space-around;
  min-width: 500px;
`;
const Title = styled.div`
  font-size: 40px;
  text-transform: uppercase;
  font-weight: bold;
`;
const Desc = styled.div`
  font-size: 14px;
  color: #ffffff;
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
  /* visibility: ${(props) => (props.$popular ? "visible" : "hidden")}; */
  background-color: #c2e9eb;
  color: #0186fb;
  width: 70px;
  padding: 5px;
  display: flex;
  border-radius: 10px;
  font-weight: bold;
  justify-content: center;
`;
const About = styled.div`
  margin-top: 20px;
  width: 60%;
  margin-left: 20px;
  min-width: 400px;
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 0.5px solid #d1d2e0;
  font-size: 14px;
`;
const AboutTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-left: 20px;
`;
const AboutTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
`;
const AboutTableLeft = styled.ul`
  grid-column: 1/2;
  list-style: none;
`;
const AboutTableRight = styled.ul`
  grid-column: 2/3;
  list-style: none;
`;
const AboutItem = styled.li`
  margin: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const CourseContent = styled.ul`
  width: 60%;
  margin-top: 20px;
  margin-left: 20px;
  min-width: 400px;
  list-style: none;
`;
const Head = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
const CourseItem = styled.li`
  min-height: 50px;
  width: 100%;
  background-color: #f6f7f9;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  border: 0.5px solid #d1d2e0;
`;
const Content = styled.button`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  border: none;
  font-weight: bold;
  cursor: pointer;
  background-color: #f6f7f9;
`;
const ArrowButton = styled.button`
  width: ${(props) => props.$width || "50px"};
  aspect-ratio: 1/1;
  cursor: pointer;
  transform: rotate(${(props) => (props.$dropStatus ? "180deg" : "0deg")});
  transition: transform 0.2s ease-in-out;
  border: none;
  background-color: transparent;
`;
const ArrowDrop = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const SubContent = styled.ul`
  visibility: ${(props) => (props.$dropStatus ? "visible" : "hidden")};
  height: ${(props) => (props.$dropStatus ? "" : "0px")};
  list-style: none;
  border: ${(props) => (props.$dropStatus ? "0.5px solid #d1d2e0;" : "none")};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const SubContentItem = styled.li`
  margin-top: 5px;
  height: 40px;
  width: 95%;
  font-size: 14px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
const SubContentDetail = styled.div`
  height: 40px;
  width: 30%;
  align-items: center;
  display: flex;
`;
const CourseDetail = () => {
  const [indexDrop, setIndexDrop] = useState(null);
  const [drop, setDrop] = useState(false);
  const dropDown = (index) => {
    if (drop == false) {
      // alert("false");
    } else {
      // alert("true");
    }
    setDrop(!drop);
    if (drop == true) {
      setIndexDrop(index);
    } else {
      setIndexDrop(null);
    }
  };
  return (
    <Container>
      <Navbar />
      <CourseContainer>
        <Wrapper $bg="#1D1E27" $txt="white">
          <Add>
            <Preview>
              <Image src="img/play_circle.png" />
            </Preview>
            <AddWrapper>
              <AddButton $bg="#0f53a0" $txt="white">
                Add to Cart
              </AddButton>
              <AddButton>Buy</AddButton>
            </AddWrapper>
          </Add>
          <Info>
            <Title>Full Stack Web Development</Title>
            <Desc>Master frontend and backend development.</Desc>
            <Rating>
              4.9
              <Star>
                <StarIcon src="img/star_full.png"></StarIcon>
                <StarIcon src="img/star_full.png"></StarIcon>
                <StarIcon src="img/star_full.png"></StarIcon>
                <StarIcon src="img/star_full.png"></StarIcon>
                <StarIcon src="img/star_half.png"></StarIcon>
              </Star>
            </Rating>{" "}
            <Price>$99.99</Price>
            <Popular>Popular</Popular>
          </Info>
        </Wrapper>
        <Wrapper>
          <About>
            <AboutTitle>What do you learn</AboutTitle>
            <AboutTable>
              <AboutTableLeft>
                <AboutItem>
                  <Image $width="16px" src="img/check.png" />
                  Build 16 web development projects for your portfolio, ready to
                  apply for junior developer jobs.
                </AboutItem>
                <AboutItem>
                  <Image $width="16px" src="img/check.png" />
                  After the course you will be able to build ANY website you
                  want.
                </AboutItem>
                <AboutItem>
                  <Image $width="16px" src="img/check.png" />
                  Work as a freelance web developer.
                </AboutItem>
              </AboutTableLeft>
              <AboutTableRight>
                <AboutItem>
                  <Image $width="16px" src="img/check.png" />
                  Learn the latest technologies, including Javascript, React,
                  Node and even Web3 development.
                </AboutItem>
                <AboutItem>
                  <Image $width="16px" src="img/check.png" />
                  Master frontend development with React
                </AboutItem>
                <AboutItem>
                  <Image $width="16px" src="img/check.png" />
                  Build fully-fledged websites and web apps for your startup or
                  business.
                </AboutItem>
              </AboutTableRight>
            </AboutTable>
          </About>
        </Wrapper>
        <Wrapper>
          <AboutTitle> Course Content</AboutTitle>
          <CourseContent>
            <CourseItem>
              <Head>
                <ArrowButton
                  $width="24px"
                  $dropStatus={indexDrop == 1 ? true : false}
                >
                  <ArrowDrop
                    src="img/arrow_drop.png"
                    onClick={() => dropDown(1)}
                  />
                </ArrowButton>
                <Content>Front-End Web Development</Content>
              </Head>
            </CourseItem>
            <SubContent $dropStatus={indexDrop == 1 ? true : false}>
              <SubContentItem>
                How does Website work?{" "}
                <SubContentDetail>
                  <a href="">Preview</a>
                </SubContentDetail>
              </SubContentItem>
              <SubContentItem>How does Website work?</SubContentItem>
              <SubContentItem>How does Website work?</SubContentItem>
            </SubContent>
            <CourseItem>
              <Head>
                <ArrowButton
                  $width="24px"
                  $dropStatus={indexDrop == 2 ? true : false}
                >
                  <ArrowDrop
                    src="img/arrow_drop.png"
                    onClick={() => dropDown(2)}
                  />
                </ArrowButton>
                <Content>Back-End Development</Content>
              </Head>
            </CourseItem>
            <CourseItem>
              <Head>
                <ArrowButton
                  $width="24px"
                  $dropStatus={indexDrop == 3 ? true : false}
                >
                  <ArrowDrop
                    src="img/arrow_drop.png"
                    onClick={() => dropDown(3)}
                  />
                </ArrowButton>
                <Content>Full-stack Development</Content>
              </Head>
            </CourseItem>
          </CourseContent>
        </Wrapper>
      </CourseContainer>
    </Container>
  );
};

export default CourseDetail;

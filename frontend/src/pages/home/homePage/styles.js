import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
`;

export const ProjectsContainer = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  width: 90vw;
  align-self: center;
  background-color: #f5f0f0;
  border-radius: 10px !important;
`;

export const FilterContainer = styled.div`
  margin: 30px 20px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  justify-content: center;
  align-items: center;
  gap: 70px;
  width: 90%;
  background-color: #ece9e9;
`;

export const CardsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  margin-bottom: 30px;
  width: 90%;
  align-self: center;
  // background-color: #ece9e9;
  justify-content: center;
  gap: 40px;
`;

export const IntroContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: #f5f0f0;
`;

export const ArrowContainer = styled.div`
  display: flex;
  padding: 10px;
  background-color: #ece9e9;
  border-bottom-left-radius: 10px !important;
  border-bottom-right-radius: 10px !important;
  align-items: center;
  justify-content: center;
`;

export const IntroTitle = styled.h2`
  color: #1f2b50 !important;
  font-weight: 700;
  font-size: 1.3rem !important;
`;

export const IntroParagraph = styled.p`
  font-size: 1.2rem !important;
  color: #1f2b50 !important;
  margin-bottom: 10px !important;
  text-align: justify;
`;

export const IntroSession = styled.div`
  margin: 10px 55px;
  display: flex;
  flex-direction: column;
  max-width: 700px;
`;

export const IntroIgm = styled.img`
  margin: 10px 110px 10px 0;
  max-width: 380px;
  width: auto;
  height: auto;
`;

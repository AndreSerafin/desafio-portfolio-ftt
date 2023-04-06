import styled from "styled-components";

export const Body = styled.div`
  background-color: #1a2c4e;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  color: #ffffff !important;
`;

export const ImgLogo = styled.img``;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SessionLinks = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-between;
`;

export const Link = styled.a`
  font: bold;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

export const TitleContainer = styled.div`
  border-bottom: 2px #ffffff solid;
  padding-bottom: 10px;

  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
`;

export const Children = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  background-color: #d9d9d9 !important;
  max-width: 1280px;
  width: 90%;
  margin: 20px 40px;
  border-radius: 5px !important;
`;

export const MainTitle = styled.h2`
  color: #132d4c !important;
  margin: 10px 30px 0;
  padding-left: 10px;
  font-size: 1.4rem !important;
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
  border-left: #132d4c 3px solid !important;
`;

export const SubTitle = styled.h3`
  font-weight: bolder;
  color: gray !important;
  margin: 0 44px 0 !important;
  padding-left: 10px;
  font-size: 0.8rem !important;
`;

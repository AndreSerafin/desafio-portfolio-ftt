import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  background-color: #1a2c4e;
  align-items: center;
`;

export const SocialMediaSession = styled.div`
  margin-right: 30px;
  gap: 20px;
  display: flex;
`;
export const ImgLogo = styled.img`
  margin-left: 20px;
  max-width: 200px;
  width: auto;
  height: auto;
`;

export const NavSession = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0;
  padding: 20px 0;
  height: max-content;
  align-items: center;
  justify-content: space-between;
  background-color: #f5f0f0;
`;

export const NavLinksSession = styled.div`
  font-weight: 500;
  color: #1f2b50 !important;
  margin-right: 80px;
  width: max-content;
  gap: 25px;
  justify-content: space-between;
  display: flex;
`;

export const Children = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px 10px 0 0 !important;
  height: 60px;
  width: 100%;
  color: gray !important;
  background-color: #f5f0f0;
`;

import styled from "styled-components";

export const CardContainer = styled.div`
  margin-bottom: 20px;
  width: 200px;
  height: 230px;
  background: #d9d9d9;
  transition: 0.5s;
  overflow: hidden;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const CardTitle = styled.div`
  font-weight: 600;
  color: #221e50 !important;
  line-height: 15px;
  margin: 6px 20px !important;
  font-size: 0.9rem !important;
`;

export const CardSubtitle = styled.div`
  font-size: 0.8rem !important;
  font-weight: 400;
  color: #221e50 !important;
  margin: 2px 20px !important;
`;
export const CardImage = styled.img`
  width: 200px;
  height: 150px;
  border-radius: 10px 10px 0 0 !important;
`;

export const CardDescription = styled.div``;

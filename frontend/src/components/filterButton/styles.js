import styled from "styled-components";

export const FilterButton = styled.button`
  background-color: #d9d9d9;
  font-size: 1.5rem !important ;
  height: max-content;
  color: #1f2b50 !important;
  font-weight: 600;
  padding: 10px 30px;
  border: none;
  border-radius: 10px;
  transition: 0.5s;

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;

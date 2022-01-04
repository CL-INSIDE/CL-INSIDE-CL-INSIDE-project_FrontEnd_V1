import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background-color: #4527a0;
`;

export const HeaderTextBox = styled.div`
  width: 471.1px;
  height: 40px;
  margin-left: 10%;
  display: flex;
  justify-content: space-between;
  // align-items: center;
`;

export const HeaderText = styled.p`
  color: white;
  cursor: pointer;
  height: 40px;
  padding: 9px 16px;
  font-family: "Noto Sans CJK KR";
  font-size: 14px;
  font-weight: 500;
  :hover {
    color: #4527a0;
    background-color: white;
  }
`;

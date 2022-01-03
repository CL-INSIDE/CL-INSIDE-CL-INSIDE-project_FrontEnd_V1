import styled from "styled-components";

export const LoginWrapper = styled.div`
  width: 253.6px;
  //height: 169.4px;
  border: none;
  border: 1px solid #4527a0;
  text-align: center;
  padding-top: 12px;
`;

export const LoginInput = styled.input`
  width: 215.2px;
  height: 36px;
  outline: none;
  border: none;
  border: 1px solid #707070;
  margin-top: 8px;
  font-family: "Noto Sans CJK KR";
`;

export const LoginButton = styled.button`
  border: none;
  width: 220px;
  height: 38px;
  background-color: #4527a0;
  color: white;
  font-family: "Noto Sans CJK KR";
  font-weight: 500;
  cursor: pointer;
  margin-top: 12px;
`;

export const SignupTextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px 0px;
`;

export const HelperText = styled.p`
  font-family: "Noto Sans CJK KR";
  color: #707070;
  font-size: 12px;
`;

export const SignupText = styled.p`
  font-family: "Noto Sans CJK KR";
  font-size: 12px;
  font-weight: 500;
  color: #4527a0;
  text-decoration: underline;
  cursor: pointer;
  margin-left: 4px;
`;

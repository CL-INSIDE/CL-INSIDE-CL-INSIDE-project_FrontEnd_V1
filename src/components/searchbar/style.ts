import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/searchbar/search.svg";

export const SearchBarWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  margin: 19.2px 50% 19.2px 32%;
`;

export const SearchBar = styled.input`
  width: 532.7px;
  outline: none;
  border: none;
  border: 1px solid #4527a0;
  border-radius: 0;
  padding: 16px;
  font-family: "Noto Sans CJK KR";
  font-size: 14px;
`;

export const SearchIconBox = styled(SearchIcon)`
  height: 40px;
  width: 40px;
  cursor: pointer;
`;

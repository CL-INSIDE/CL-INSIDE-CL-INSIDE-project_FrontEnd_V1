import * as S from "./style";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderTextBox>
        <Link to="/game">
          <S.HeaderText>GAME</S.HeaderText>
        </Link>
        <Link to="/sport">
          <S.HeaderText>SPORT</S.HeaderText>
        </Link>
        <Link to="/it">
          <S.HeaderText>IT</S.HeaderText>
        </Link>
        <Link to="/trip">
          <S.HeaderText>TRIP</S.HeaderText>
        </Link>
        <Link to="/boardcast">
          <S.HeaderText>BOARDCAST</S.HeaderText>
        </Link>
        <Link to="/hobby">
          <S.HeaderText>HOBBY</S.HeaderText>
        </Link>
      </S.HeaderTextBox>
    </S.HeaderWrapper>
  );
};

export default Header;

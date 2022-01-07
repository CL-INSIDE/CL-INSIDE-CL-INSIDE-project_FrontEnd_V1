import * as S from "./style";
import Login from "../login";
import Recommend from "../recommend";
import PopularPost from "../popularpost";

const MainPage = () => {
  return (
    <>
      <S.MainPageWrapper>
        <S.PostBox>
          <Recommend></Recommend>
          <PopularPost></PopularPost>
        </S.PostBox>
        <Login></Login>
      </S.MainPageWrapper>
    </>
  );
};

export default MainPage;

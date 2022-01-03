import * as S from "./style";
import RecommendPost from "../recommendPost";

const Recommend = () => {
  return (
    <>
      <S.RecommendText>추천 게시물</S.RecommendText>
      <S.RecommendPostWrapper>
        <RecommendPost></RecommendPost>
        <RecommendPost></RecommendPost>
        <RecommendPost></RecommendPost>
      </S.RecommendPostWrapper>
    </>
  );
};

export default Recommend;

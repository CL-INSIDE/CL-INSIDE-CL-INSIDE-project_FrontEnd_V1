import * as S from "./style";
import PostFeed from "../postfeed";

export const PopularPost = () => {
  return (
    <>
      <S.PopualarText>인기 게시물</S.PopualarText>
      <PostFeed></PostFeed>
      <PostFeed></PostFeed>
      <PostFeed></PostFeed>
      <PostFeed></PostFeed>
      <PostFeed></PostFeed>
    </>
  );
};

export default PopularPost;

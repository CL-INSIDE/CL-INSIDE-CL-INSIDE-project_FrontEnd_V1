import * as S from "./style";
import PostFeed from "../postfeed";
import Login from "../login";
import Pagination from "./Pagination";

const CategoryPage = () => {
  return (
    <>
      <S.PageWrapper>
        <S.CategoryWrapper>
          <S.CategoryText>GAME</S.CategoryText>
          <PostFeed></PostFeed>
          <PostFeed></PostFeed>
          <PostFeed></PostFeed>
          <PostFeed></PostFeed>
          <PostFeed></PostFeed>
          <PostFeed></PostFeed>
          <PostFeed></PostFeed>
          <PostFeed></PostFeed>
          <PostFeed></PostFeed>
          <PostFeed></PostFeed>
          <PostFeed></PostFeed>
          <PostFeed></PostFeed>
          <PostFeed></PostFeed>
          <PostFeed></PostFeed>
          <PostFeed></PostFeed>
        </S.CategoryWrapper>
        <Login></Login>
      </S.PageWrapper>
      <Pagination></Pagination>
    </>
  );
};

export default CategoryPage;

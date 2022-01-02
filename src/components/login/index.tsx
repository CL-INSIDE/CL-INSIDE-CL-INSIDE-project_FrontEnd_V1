import * as S from "./style";

const Login = () => {
  return (
    <S.LoginWrapper>
      <S.LoginInput placeholder="ID"></S.LoginInput>
      <S.LoginInput placeholder="PASSWORD"></S.LoginInput>
      <S.LoginButton>로그인</S.LoginButton>
      <S.SignupTextBox>
        <S.HelperText>계정이 없으신가요?</S.HelperText>
        <S.SignupText>회원가입</S.SignupText>
      </S.SignupTextBox>
    </S.LoginWrapper>
  );
};

export default Login;

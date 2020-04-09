import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #fff;
  padding: 0 30px;
`;

export const LogoContent = styled.View`
  margin-top: 60px;
  align-items: center;
  justify-content: center;
`;

export const LogoText = styled.Text`
  margin-top: 10px;
  font-size: 22px;
  font-weight: 500;
`;

export const ButtonContent = styled.View`
  margin-top: 40px;
  flex-direction: row;
  justify-content: center;
`;

export const SocialButton = styled.TouchableOpacity`
  flex-direction: row;
  margin: 0 5px;
  padding: 12px 30px;
  border-width: 1px;
  border-color: rgba(171, 180, 189, 0.65);
  border-radius: 4px;
  background-color: #fff;
  shadow-offset: 0 10px;
  shadow-opacity: 1;
  shadow-radius: 20px;
  elevation: 5;
`;

export const SocialLogo = styled.Image`
  width: 16px;
  margin-right: 8px;
`;

export const TextDivisor = styled.Text`
  color: #abb4bd;
  font-size: 15px;
  text-align: center;
  margin: 20px 0;
`;

export const Link = styled.Text`
  color: #ff1654;
  font-size: 14px;
  font-weight: 500;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  margin-top: 32px;
  font-size: 16px;
  border-radius: 4px;
  background-color: #ff1654;
  shadow-offset: 0 10px;
  shadow-opacity: 1;
  shadow-radius: 20px;
  elevation: 5;
`;

export const SubmitText = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: 16px;
`;

export const ForgotPassword = styled.Text`
  font-size: 14px;
  color: #abb4bd;
  text-align: center;
  margin-top: 24px;
`;

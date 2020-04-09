import React from "react";
import { Text, View, Image } from "react-native";
import styled from "styled-components/native";
import InputTextField from "./components/Input";

import logo from "./assets/logo.png";
import facebook from "./assets/facebook.png";
import google from "./assets/google.png";

export default function App() {
  return (
    <Container behavior="padding">
      <View>
        <LogoContent>
          <Image source={logo} />
          <LogoText>Vermo</LogoText>
        </LogoContent>

        <ButtonContent>
          <SocialButton>
            <SocialLogo source={facebook} />
            <Text>Facebook</Text>
          </SocialButton>

          <SocialButton>
            <SocialLogo source={google} />
            <Text>Google</Text>
          </SocialButton>
        </ButtonContent>

        <TextDivisor>or</TextDivisor>

        <InputTextField title="Email" />
        <InputTextField
          title="Password"
          isSecure={true}
          style={{ marginTop: 32, marginBottom: 8 }}
        />

        <Link style={{ textAlign: "right" }}>Forgot Password?</Link>

        <ButtonSubmit>
          <SubmitText>Login</SubmitText>
        </ButtonSubmit>

        <ForgotPassword>
          Don't have an account? <Link>Register Now</Link>
        </ForgotPassword>
      </View>
    </Container>
  );
}

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #fff;
  padding: 0 30px;
`;

const LogoContent = styled.View`
  margin-top: 60px;
  align-items: center;
  justify-content: center;
`;

const LogoText = styled.Text`
  margin-top: 10px;
  font-size: 22px;
  font-weight: 500;
`;

const ButtonContent = styled.View`
  margin-top: 40px;
  flex-direction: row;
  justify-content: center;
`;

const SocialButton = styled.TouchableOpacity`
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

const SocialLogo = styled.Image`
  width: 16px;
  margin-right: 8px;
`;

const TextDivisor = styled.Text`
  color: #abb4bd;
  font-size: 15px;
  text-align: center;
  margin: 20px 0;
`;

const Link = styled.Text`
  color: #ff1654;
  font-size: 14px;
  font-weight: 500;
`;

const ButtonSubmit = styled.TouchableOpacity`
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

const SubmitText = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: 16px;
`;

const ForgotPassword = styled.Text`
  font-size: 14px;
  color: #abb4bd;
  text-align: center;
  margin-top: 24px;
`;

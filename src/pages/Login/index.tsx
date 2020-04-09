import React from "react";
import { Text, View, Image } from "react-native";
import {
  Container,
  ForgotPassword,
  SubmitText,
  ButtonSubmit,
  Link,
  TextDivisor,
  SocialLogo,
  SocialButton,
  ButtonContent,
  LogoContent,
  LogoText,
} from "./style";

import InputTextField from "../../components/Input";

import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google.png";

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

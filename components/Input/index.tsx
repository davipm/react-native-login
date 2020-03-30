import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

type Input = {
  style?: any;
  title: string;
  placeholderText?: string;
  isSecure?: boolean;
};

export default function InputTextField({
  style,
  title,
  placeholderText,
  isSecure,
}: Input) {
  return (
    <View style={style}>
      <InputTitle>{title}</InputTitle>
      <InputWrapper placeholder={placeholderText} secureTextEntry={isSecure} />
      <Divisor />
    </View>
  );
}

const InputTitle = styled.Text`
  color: #abb4bd;
  font-size: 14px;
`;

const InputWrapper = styled.TextInput`
  padding: 12px 0;
  color: #1d2029;
  font-size: 14px;
`;

const Divisor = styled.View`
  border-bottom-color: #d8d8d8;
  border-bottom-width: 1px;
`;

import React from "react";
import { View } from "react-native";
import { InputWrapper, Divisor, InputTitle } from "./style";

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

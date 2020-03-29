import React from 'react';
import { View, Text, StyleSheet, TextInput } from "react-native";

type Input = {
  style?: any;
  title: string;
  placeholderText?: string;
  isSecure?: boolean;
};

export default function InputTextField({ style, title, placeholderText, isSecure  }: Input) {
  return (
    <View style={style}>
      <Text style={styles.inputTitle}>{title}</Text>
      <TextInput
        placeholder={placeholderText}
        secureTextEntry={isSecure}
        style={styles.input}
      />
      <View style={styles.divisor} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputTitle: {
    color: '#ABB4BD',
    fontSize: 14
  },

  input: {
    paddingVertical: 12,
    color: '#1D2029',
    fontSize: 14
  },

  divisor: {
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 1
  }
});

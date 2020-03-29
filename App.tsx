import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import InputTextField from "./components/Input";

import logo from './assets/logo.png';
import facebook from './assets/facebook.png';
import google from './assets/google.png';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.logoContent}>
          <Image source={logo} />
          <Text style={[styles.text, styles.logoText]}>Vermo</Text>
        </View>

        <View style={styles.buttonContent}>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={facebook} style={styles.socialLogo} />
            <Text style={styles.text}>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Image source={google} style={styles.socialLogo} />
            <Text style={styles.text}>Google</Text>
          </TouchableOpacity>
        </View>

        <Text style={[styles.text, styles.textDivisor]}>or</Text>

        <InputTextField title="Email" />
        <InputTextField title="Password" isSecure={true} style={{ marginTop: 32, marginBottom: 8}} />

        <Text style={[styles.text, styles.link, { textAlign: 'right' }]}>Forgot Password?</Text>

        <TouchableOpacity style={styles.buttonSubmit}>
          <Text style={[styles.text, styles.submitText]}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.forgotPassword}>Don't have an account? <Text style={[styles.text, styles.link]}>Register Now</Text></Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30
  },

  logoContent: {
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },

  logoText: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: '500'
  },

  text: {
    //fontFamily: 'Avenir Next'
    color: '#1D2029'
  },

  buttonContent: {
    marginTop: 48,
    flexDirection: 'row',
    justifyContent: 'center'
  },

  socialButton: {
    flexDirection: 'row',
    marginHorizontal: 12,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(171, 180, 189, 0.65)',
    borderRadius: 4,
    backgroundColor: '#fff',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5
  },

  socialLogo: {
    width: 16,
    fontSize: 14,
    marginRight: 8
  },

  textDivisor: {
    color: '#ABB4BD',
    fontSize: 15,
    textAlign: 'center',
    marginVertical: 20
  },

  link: {
    color: '#FF1654',
    fontSize: 14,
    fontWeight: '500'
  },

  buttonSubmit: {
    backgroundColor: '#FF1654',
    fontSize: 16,
    borderRadius: 4,
    paddingVertical: 12,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "rgba(255, 22, 84, 0.24)",
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5
  },

  submitText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16
  },

  forgotPassword: {
    fontSize: 14,
    color: "#ABB4BD",
    textAlign: 'center',
    marginTop: 24
  }
});

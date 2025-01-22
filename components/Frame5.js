import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Frame5 = () => {
  const navigation = useNavigation();

  // States for inputs
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleContinue = () => {
    if (!email || !fullName || !phoneNumber) {
      alert("Please fill out all fields.");
      return;
    }
    // Navigate or process the data here
    navigation.navigate("Otp");
  };

  return (
    <View style={styles.frame}>
      {/* Email Input */}
      <View style={[styles.inputContainer, styles.framePosition]}>
        <TextInput
          style={[styles.input, styles.inputText]}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor={Color.colorDimgray_600}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Name Input */}
      <View style={[styles.inputContainer, styles.framePosition]}>
        <TextInput
          style={[styles.input, styles.inputText]}
          placeholder="Full Name"
          autoCapitalize="words"
          placeholderTextColor={Color.colorDimgray_600}
          value={fullName}
          onChangeText={setFullName}
        />
      </View>

      {/* Phone Number Input */}
      <View style={[styles.inputContainer, styles.framePosition]}>
        <TextInput
          style={[styles.input, styles.inputText]}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          placeholderTextColor={Color.colorDimgray_600}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>

      {/* Terms and Conditions */}
      <View style={[styles.termsContainer, styles.framePosition]}>
        <Text style={[styles.termsText, styles.inputText]}>
          By signing up, you are agree to our{" "}
          <Text style={styles.linkText}>Terms & Conditions</Text> and{" "}
          <Text style={styles.linkText}>Policies</Text>
        </Text>
      </View>

      {/* Continue Button */}
      <View style={[styles.buttonContainer, styles.framePosition]}>
        <Pressable style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>
      </View>

      {/* Login Redirect */}
      <View style={[styles.loginContainer, styles.framePosition]}>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginText}>
            Already have an account? <Text style={styles.linkText}>Log in</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    width: "100%",
    alignItems: "center",
    marginBottom: 16,
  },
  inputContainer: {
    marginTop: 8,
  },
  input: {
    width: "90%",
    height: 50,
    borderRadius: Border.br_6xs,
    borderColor: Color.colorDimgray_400,
    borderWidth: 1,
    paddingHorizontal: 16,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
  },
  inputText: {
    textAlign: "left",
    letterSpacing: -0.2,
  },
  termsContainer: {
    marginTop: 16,
    width: "90%",
  },
  termsText: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    color: Color.colorDimgray_600,
    textAlign: "center",
  },
  linkText: {
    color: Color.colorPrimary,
    textDecorationLine: "underline",
  },
  buttonContainer: {
    marginTop: 16,
  },
  button: {
    width: "90%",
    height: 50,
    backgroundColor: Color.colorDimgray_600,
    borderRadius: Border.br_6xs,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interMedium,
  },
  loginContainer: {
    marginTop: 16,
  },
  loginText: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    color: Color.colorDimgray_600,
    textAlign: "center",
  },
  frame: {
    alignSelf: "stretch",
    paddingVertical: 16,
    alignItems: "center",
  },
});

export default Frame5;

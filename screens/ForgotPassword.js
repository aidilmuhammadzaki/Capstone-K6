import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Pressable, Alert } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FrameIcon from "../components/FrameIcon";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState(""); // State to store email input

  const handleSubmit = () => {
    if (!email) {
      Alert.alert("Error", "Please enter your email address.");
      return;
    }
    // Handle forgot password logic here
    Alert.alert("Success", `Password reset instructions sent to ${email}`);
    navigation.navigate("Login"); // Redirect to login after submitting
  };

  return (
    <View style={styles.forgotPassword}>
      <View style={[styles.frame, styles.framePosition]}>
        <Text style={styles.forgotYourPassword}>{`Forgot your Password?`}</Text>
      </View>
      <View style={[styles.inputContainer, styles.framePosition]}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email address"
          placeholderTextColor={Color.colorDimgray_600}
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={[styles.frame2, styles.framePosition]}>
        <Text style={[styles.pleaseEnterThe, styles.pleaseEnterTheTypo]}>
          Please enter the email address you’d like your password reset
          information sent to
        </Text>
      </View>
      <Image
        style={[styles.forgotPasswordChild, styles.submitPosition]}
        contentFit="cover"
        source={require("../assets/line-3.png")}
      />
      <Pressable style={[styles.submit, styles.submitPosition]} onPress={handleSubmit}>
        <Text style={styles.submit1}>Submit</Text>
      </Pressable>
      <FrameIcon
        frame={require("../assets/frame.png")}
        onBackPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    justifyContent: "center",
    width: 382,
    left: 24,
    position: "absolute",
    overflow: "hidden",
  },
  pleaseEnterTheTypo: {
    color: Color.colorGray_700,
    fontSize: FontSize.size_sm,
    letterSpacing: -0.2,
    textAlign: "left",
  },
  submitPosition: {
    width: 382,
    left: 24,
    position: "absolute",
  },
  forgotYourPassword: {
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.4,
    color: Color.colorGray_400,
    width: 331,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  inputContainer: {
    top: 660,
  },
  input: {
    width: "100%",
    height: 50,
    borderRadius: Border.br_6xs,
    borderColor: Color.colorDimgray_400,
    borderWidth: 1,
    paddingHorizontal: 16,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    backgroundColor: Color.colorWhite,
  },
  frame2: {
    top: 710,
  },
  pleaseEnterThe: {
    fontFamily: FontFamily.interRegular,
    width: 377,
  },
  forgotPasswordChild: {
    top: 755,
    height: 1,
  },
  submit1: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorWhite,
    letterSpacing: -0.2,
    textAlign: "center",
  },
  submit: {
    top: 804,
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorDimgray_600,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  forgotPassword: {
    borderRadius: Border.br_26xl,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorDimgray_400,
    borderWidth: 6,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default ForgotPassword;

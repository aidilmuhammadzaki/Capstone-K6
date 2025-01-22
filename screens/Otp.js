import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import FrameIcon1 from "../components/FrameIcon1";
import Frame12 from "../components/Frame12";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Otp = () => {
  const navigation = useNavigation(); // Initialize navigation

  return (
    <View style={styles.otp}>
      <View style={[styles.frame, styles.framePosition]}>
        <Text style={styles.enterOtp}>Enter OTP</Text>
      </View>
      <Text style={[styles.enter4Digit, styles.enter4DigitTypo]}>
        Enter 4 digit verification code sent to your registered mobile number.
      </Text>
      <Text style={[styles.resendCodeIn, styles.enter4DigitTypo]}>
        resend code in 00:23sec
      </Text>
      {/* Submit Button */}
      <Pressable
        style={[styles.submit, styles.framePosition]}
        onPress={() => navigation.navigate("HomePage")} // Navigate to HomePage
      >
        <Text style={styles.submit1}>Submit</Text>
      </Pressable>
      <FrameIcon1 />
      <Frame12 />
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    width: 382,
    left: 24,
    position: "absolute",
  },
  enter4DigitTypo: {
    color: Color.colorGray_700,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    letterSpacing: -0.2,
    textAlign: "left",
    width: 382,
    left: 24,
    position: "absolute",
  },
  enterOtp: {
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.4,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorGray_400,
    width: 152,
    textAlign: "left",
  },
  frame: {
    top: 494,
    justifyContent: "center",
    overflow: "hidden",
  },
  enter4Digit: {
    top: 554,
  },
  resendCodeIn: {
    top: 739,
  },
  submit1: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorWhite,
    letterSpacing: -0.2,
    textAlign: "left",
  },
  submit: {
    top: 804,
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorDimgray_600,
    height: 48,
    alignItems: "center",
    justifyContent: "center", // Center the text inside the button
    paddingHorizontal: Padding.p_124xl,
  },
  otp: {
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

export default Otp;

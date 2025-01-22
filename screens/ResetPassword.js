import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FrameIcon from "../components/FrameIcon";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const ResetPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.resetPassword}>
      <Text style={styles.resetPassword1}>{`Reset
Password?`}</Text>
      <View style={[styles.submit, styles.framePosition]}>
        <Text style={[styles.submit1, styles.submit1FlexBox]}>Submit</Text>
      </View>
      <Text style={[styles.text, styles.textTypo]}>***********</Text>
      <Image
        style={[styles.resetPasswordChild, styles.resetLayout]}
        contentFit="cover"
        source={require("../assets/line-3.png")}
      />
      <Image
        style={[styles.resetPasswordItem, styles.resetLayout]}
        contentFit="cover"
        source={require("../assets/line-3.png")}
      />
      <FrameIcon
        frame={require("../assets/frame10.png")}
        frameIconHeight={542}
        onBackPress={() => navigation.navigate("ForgotPassword")}
      />
      <View style={[styles.frame, styles.framePosition]}>
        <Text style={styles.textTypo}>***********</Text>
        <Text style={[styles.showPassword, styles.submit1FlexBox]}>
          Show Password
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    width: 382,
    left: 24,
    position: "absolute",
  },
  submit1FlexBox: {
    letterSpacing: -0.2,
    textAlign: "left",
  },
  textTypo: {
    color: Color.colorGray_700,
    fontSize: FontSize.size_sm,
    letterSpacing: -0.2,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  resetLayout: {
    height: 1,
    width: 382,
    left: 24,
    position: "absolute",
  },
  resetPassword1: {
    top: 572,
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.4,
    color: Color.colorGray_400,
    width: 181,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: 24,
    position: "absolute",
  },
  submit1: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorWhite,
  },
  submit: {
    top: 804,
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorDimgray_600,
    height: 48,
    alignItems: "flex-end",
    paddingHorizontal: Padding.p_124xl,
    paddingVertical: Padding.p_sm,
  },
  text: {
    top: 728,
    left: 24,
    position: "absolute",
    color: Color.colorGray_700,
    fontSize: FontSize.size_sm,
  },
  resetPasswordChild: {
    top: 699,
  },
  resetPasswordItem: {
    top: 755,
  },
  showPassword: {
    fontSize: FontSize.size_xs,
    color: "rgba(114, 114, 114, 0.5)",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: -0.2,
  },
  frame: {
    top: 672,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  resetPassword: {
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

export default ResetPassword;

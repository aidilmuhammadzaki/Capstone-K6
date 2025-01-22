import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Gap } from "../GlobalStyles";

const Frame11 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frame}>
      <Text style={styles.or}>or</Text>
      <View style={styles.frame1}>
        <View style={styles.frame2}>
          <Pressable
            style={styles.frameChild}
            onPress={() => navigation.navigate("HomePage")}
          />
          <Text style={styles.continueWithGoogle}>Continue with Google</Text>
        </View>
        <Pressable
          style={styles.donHaveAnContainer}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.text}>
            <Text style={styles.donHaveAn}>Don’ have an account?</Text>
            <Text style={styles.signUp}> Sign up</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  or: {
    position: "relative",
    fontSize: FontSize.size_base,
    letterSpacing: -0.2,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
    textAlign: "left",
  },
  frameChild: {
    position: "relative",
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorGainsboro_200,
    width: 382,
    height: 48,
  },
  continueWithGoogle: {
    position: "relative",
    fontSize: FontSize.size_base,
    letterSpacing: -0.2,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
    textAlign: "left",
    marginTop: -34,
  },
  frame2: {
    width: 382,
    height: 48,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  donHaveAn: {
    color: Color.colorGray_700,
  },
  signUp: {
    color: Color.colorBlack,
  },
  text: {
    fontSize: FontSize.size_base,
    letterSpacing: -0.2,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    textAlign: "left",
  },
  donHaveAnContainer: {
    height: 19,
    marginLeft: 12,
  },
  frame1: {
    width: 382,
    height: 105,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_md,
  },
  frame: {
    width: 382,
    height: 136,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: Gap.gap_10xs,
  },
});

export default Frame11;

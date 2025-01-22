import * as React from "react";
import { StyleSheet, View } from "react-native";
import Frame4 from "../components/Frame4";
import Frame5 from "../components/Frame5";
import { Border, Color, Padding, Gap } from "../GlobalStyles";

const SignUp = () => {
  return (
    <View style={styles.signUp}>
      <Frame4 />
      <Frame5 />
    </View>
  );
};

const styles = StyleSheet.create({
  signUp: {
    borderRadius: Border.br_26xl,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorDimgray_400,
    borderWidth: 6,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    alignItems: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_7xs,
    gap: Gap.gap_4xs,
  },
});

export default SignUp;

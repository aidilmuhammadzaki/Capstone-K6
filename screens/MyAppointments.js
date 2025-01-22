import * as React from "react";
import { StyleSheet, View } from "react-native";
import Frame6 from "../components/Frame6";
import Frame8 from "../components/Frame8";
import Frame7 from "../components/Frame7";
import { Border, Color } from "../GlobalStyles";

const MyAppointments = () => {
  return (
    <View style={[styles.myAppointments, styles.frameFlexBox]}>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <Frame6 />
        <Frame8 />
      </View>
      <Frame7 />
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  frame: {
    width: 390,
    height: 583,
    gap: 37,
  },
  myAppointments: {
    borderRadius: Border.br_26xl,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorDimgray_400,
    borderWidth: 6,
    flex: 1,
    width: "100%",
    gap: 272,
  },
});

export default MyAppointments;

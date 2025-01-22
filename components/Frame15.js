import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Gap } from "../GlobalStyles";

const Frame15 = () => {
  return (
    <View style={styles.frame}>
      <Text style={styles.availableTimeSlots}>Available time slots</Text>
      <View style={styles.frame1}>
        <View style={styles.frameChild} />
        <View style={styles.frameItem} />
        <View style={styles.frameInner} />
        <Text style={styles.pm}>10:00 PM</Text>
        <Text style={styles.pm1}>12:00 PM</Text>
        <Text style={styles.am}>05:00 AM</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  availableTimeSlots: {
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.4,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
    textAlign: "left",
    height: 29,
    marginRight: 168,
  },
  frameChild: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro_100,
    width: 96,
    height: 48,
  },
  frameItem: {
    position: "absolute",
    top: 0,
    left: 143,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro_100,
    width: 96,
    height: 48,
  },
  frameInner: {
    position: "absolute",
    top: 0,
    left: 286,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro_100,
    width: 96,
    height: 48,
  },
  pm: {
    position: "absolute",
    top: 15,
    left: 17,
    fontSize: FontSize.size_sm,
    letterSpacing: -0.2,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorDarkslategray,
    textAlign: "left",
  },
  pm1: {
    position: "absolute",
    top: 15,
    left: 160,
    fontSize: FontSize.size_sm,
    letterSpacing: -0.2,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorDarkslategray,
    textAlign: "left",
  },
  am: {
    position: "absolute",
    top: 15,
    left: 302,
    fontSize: FontSize.size_sm,
    letterSpacing: -0.2,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorDarkslategray,
    textAlign: "left",
  },
  frame1: {
    position: "relative",
    width: 382,
    height: 48,
    overflow: "hidden",
  },
  frame: {
    alignSelf: "stretch",
    height: 109,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_3xs,
  },
});

export default Frame15;

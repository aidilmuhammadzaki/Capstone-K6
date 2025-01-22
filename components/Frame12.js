import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Frame12 = () => {
  return (
    <View style={styles.frame}>
      <View style={styles.frame1}>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={[styles.frameInner, styles.frameLayout]} />
        <View style={[styles.rectangleView, styles.frameLayout]} />
        <Text style={[styles.text, styles.textTypo]}>8</Text>
        <Text style={[styles.text1, styles.textTypo]}>2</Text>
        <Text style={[styles.text2, styles.textTypo]}>6</Text>
        <Text style={[styles.text3, styles.textTypo]}>4</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    width: 48,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_8xs,
    top: 0,
    height: 75,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    color: Color.colorGray_400,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: -0.4,
    fontSize: FontSize.size_11xl,
    top: 20,
    position: "absolute",
  },
  frameChild: {
    left: 0,
  },
  frameItem: {
    left: 60,
  },
  frameInner: {
    left: 120,
  },
  rectangleView: {
    left: 180,
  },
  text: {
    left: 14,
  },
  text1: {
    left: 74,
  },
  text2: {
    left: 134,
  },
  text3: {
    left: 194,
  },
  frame1: {
    width: 228,
    height: 75,
    overflow: "hidden",
  },
  frame: {
    top: 626,
    left: 24,
    width: 382,
    justifyContent: "center",
    overflow: "hidden",
    position: "absolute",
  },
});

export default Frame12;

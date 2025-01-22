import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Color, Border, Padding, Gap } from "../GlobalStyles";

const FrameComponent = () => {
  return (
    <View style={styles.icbaselineMicParent}>
      <Image
        style={styles.icbaselineMicIcon}
        contentFit="cover"
        source={require("../assets/icbaselinemic1.png")}
      />
      <View style={[styles.frameChild, styles.frameChildLayout]} />
      <View style={[styles.frameItem, styles.frameChildLayout]} />
      <View style={[styles.frameChild, styles.frameChildLayout]} />
      <View style={[styles.rectangleView, styles.frameChildLayout]} />
      <View style={[styles.frameChild1, styles.frameChildLayout]} />
      <View style={[styles.rectangleView, styles.frameChildLayout]} />
      <View style={[styles.rectangleView, styles.frameChildLayout]} />
      <View style={[styles.frameChild4, styles.frameChildLayout]} />
      <View style={[styles.frameChild, styles.frameChildLayout]} />
      <View style={[styles.frameChild, styles.frameChildLayout]} />
      <View style={[styles.frameChild4, styles.frameChildLayout]} />
      <View style={[styles.rectangleView, styles.frameChildLayout]} />
      <View style={[styles.frameChild4, styles.frameChildLayout]} />
      <View style={[styles.frameChild, styles.frameChildLayout]} />
      <View style={[styles.frameItem, styles.frameChildLayout]} />
      <View style={[styles.frameChild, styles.frameChildLayout]} />
      <View style={[styles.rectangleView, styles.frameChildLayout]} />
      <View style={[styles.frameChild1, styles.frameChildLayout]} />
      <View style={[styles.rectangleView, styles.frameChildLayout]} />
      <View style={[styles.rectangleView, styles.frameChildLayout]} />
      <View style={[styles.frameChild4, styles.frameChildLayout]} />
      <View style={[styles.frameChild, styles.frameChildLayout]} />
      <View style={[styles.frameChild, styles.frameChildLayout]} />
      <View style={[styles.frameChild4, styles.frameChildLayout]} />
      <View style={[styles.rectangleView, styles.frameChildLayout]} />
      <View style={[styles.frameChild4, styles.frameChildLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    width: 1,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_9xl,
  },
  icbaselineMicIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  frameChild: {
    height: 20,
  },
  frameItem: {
    height: 30,
  },
  rectangleView: {
    height: 10,
  },
  frameChild1: {
    height: 2,
  },
  frameChild4: {
    height: 16,
  },
  icbaselineMicParent: {
    position: "absolute",
    top: 415,
    left: 253,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDimgray_600,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: Padding.p_smi,
    paddingTop: Padding.p_lg,
    paddingRight: Padding.p_xs,
    paddingBottom: Padding.p_lg,
    gap: Gap.gap_11xs,
    overflow: "hidden",
  },
});

export default FrameComponent;

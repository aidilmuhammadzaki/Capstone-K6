import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Frame1 = ({ aM, drAndrew, dentist }) => {
  return (
    <View style={styles.frame}>
      <Text style={[styles.am, styles.amTypo]}>{aM}</Text>
      <View style={styles.frameChild} />
      <Image
        style={styles.icoutlineImageIcon}
        contentFit="cover"
        source={require("../assets/icoutlineimage1.png")}
      />
      <Text style={[styles.drAndrew, styles.amTypo]}>{drAndrew}</Text>
      <Text style={styles.dentist}>{dentist}</Text>
      <View style={[styles.frameItem, styles.frameLayout]} />
      <Text style={[styles.view, styles.viewTypo]}>View</Text>
      <Text style={[styles.cancel, styles.viewTypo]}>Cancel</Text>
      <View style={[styles.frameInner, styles.frameLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  amTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  frameLayout: {
    height: 30,
    width: 78,
    top: 66,
    position: "absolute",
  },
  viewTypo: {
    top: 72,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: -0.2,
    position: "absolute",
  },
  am: {
    top: 54,
    left: 0,
  },
  frameChild: {
    top: 0,
    left: 100,
    backgroundColor: Color.colorGainsboro_200,
    width: 282,
    position: "absolute",
    height: 107,
  },
  icoutlineImageIcon: {
    top: 25,
    left: 113,
    borderRadius: Border.br_27xl,
    width: 57,
    height: 57,
    position: "absolute",
    overflow: "hidden",
  },
  drAndrew: {
    top: 17,
    left: 199,
  },
  dentist: {
    top: 36,
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    left: 199,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: -0.2,
    position: "absolute",
  },
  frameItem: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGray_500,
    left: 199,
  },
  view: {
    left: 221,
    color: Color.colorWhite,
  },
  cancel: {
    left: 309,
    color: Color.colorGray_500,
  },
  frameInner: {
    left: 293,
    borderRadius: Border.br_9xs,
    borderStyle: "solid",
    borderColor: Color.colorGray_500,
    borderWidth: 1,
  },
  frame: {
    width: 382,
    overflow: "hidden",
    height: 107,
  },
});

export default Frame1;

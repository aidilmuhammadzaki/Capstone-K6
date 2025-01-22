import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Frame = ({ frameTop, frameWidth, dentistLeft }) => {
  const frameStyle = useMemo(() => {
    return {
      ...getStyleValue("top", frameTop),
      ...getStyleValue("width", frameWidth),
    };
  }, [frameTop, frameWidth]);

  const dentistStyle = useMemo(() => {
    return {
      ...getStyleValue("left", dentistLeft),
    };
  }, [dentistLeft]);

  return (
    <View style={[styles.frame, frameStyle]}>
      <View style={styles.famous}>
        <View style={styles.famousChild} />
        <Text style={styles.drAndrew}>Dr. Andrew</Text>
        <Image
          style={[styles.image6Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-6.png")}
        />
        <Text style={[styles.dentist, styles.dentistTypo, dentistStyle]}>
          Dentist
        </Text>
        <Text style={[styles.drAndrewIs, styles.textTypo]}>
          Dr. Andrew is an experienced dentist with over 10 years of practice.
          He specializes in general dentistry and offers a range of services.
        </Text>
        <Image
          style={[styles.ratingIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/rating.png")}
        />
        <Text style={[styles.text, styles.textPosition]}>(128)</Text>
        <Text style={[styles.book, styles.textPosition]}>Book</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: 14,
    position: "absolute",
  },
  dentistTypo: {
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhite,
  },
  textPosition: {
    left: 124,
    top: 131,
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  famousChild: {
    top: 127,
    left: 196,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorWhite,
    width: 73,
    height: 24,
    position: "absolute",
  },
  drAndrew: {
    fontSize: FontSize.size_lg,
    letterSpacing: -0.3,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 67,
    top: 14,
    position: "absolute",
  },
  image6Icon: {
    borderRadius: Border.br_27xl,
    width: 37,
    height: 37,
    top: 14,
    left: 14,
  },
  dentist: {
    top: 36,
    left: 390,
    color: Color.colorLightgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  drAndrewIs: {
    top: 67,
    width: 257,
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
    left: 67,
    fontFamily: FontFamily.interRegular,
  },
  ratingIcon: {
    top: 128,
    width: 98,
    height: 18,
  },
  text: {
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhite,
  },
  book: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  famous: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDimgray_500,
    width: 283,
    height: 165,
  },
  frame: {
    top: 468,
    left: -187,
    width: 793,
    overflow: "hidden",
    alignItems: "flex-end",
    justifyContent: "center",
    position: "absolute",
  },
});

export default Frame;

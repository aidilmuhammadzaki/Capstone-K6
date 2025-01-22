import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Gap } from "../GlobalStyles";

const Frame18 = () => {
  return (
    <View style={styles.frame}>
      <View style={styles.frameParent}>
        <View style={styles.frame1}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/group-75.png")}
          />
          <Text style={styles.text}>9:45</Text>
        </View>
        <View style={styles.frame2}>
          <Image
            style={styles.materialSymbolssignalWifi4Icon}
            contentFit="cover"
            source={require("../assets/materialsymbolssignalwifi4bar.png")}
          />
          <View style={styles.raphaelchargingParent}>
            <Image
              style={styles.raphaelchargingIcon}
              contentFit="cover"
              source={require("../assets/raphaelcharging.png")}
            />
            <View style={styles.frame3}>
              <Text style={styles.text1}>98%</Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.profile}>Profile</Text>
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame12.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameChild: {
    position: "relative",
    width: 54,
    height: 18,
  },
  text: {
    position: "relative",
    fontSize: FontSize.size_base,
    letterSpacing: -0.2,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "left",
  },
  frame1: {
    width: 232,
    height: 21,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: Gap.gap_10xl,
  },
  materialSymbolssignalWifi4Icon: {
    position: "relative",
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  raphaelchargingIcon: {
    position: "absolute",
    top: 0,
    left: 25,
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  text1: {
    position: "relative",
    fontSize: FontSize.size_xs,
    letterSpacing: -0.2,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "left",
  },
  frame3: {
    position: "absolute",
    top: 0,
    left: 330,
    width: 25,
    height: 24,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  raphaelchargingParent: {
    position: "relative",
    width: 57,
    height: 32,
  },
  frame2: {
    width: 89,
    height: 32,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_10xs,
  },
  frameParent: {
    width: 387,
    height: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: Gap.gap_6xl,
  },
  profile: {
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.4,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray_400,
    textAlign: "left",
    height: 29,
    marginLeft: 157,
  },
  frameIcon: {
    position: "relative",
    width: 250,
    height: 115,
    overflow: "hidden",
  },
  frame: {
    width: 387,
    height: 224,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: Gap.gap_5xs,
  },
});

export default Frame18;

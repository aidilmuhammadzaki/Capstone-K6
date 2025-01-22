import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Gap, Padding } from "../GlobalStyles";

const Frame4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frame}>
      <ImageBackground
        style={styles.frameIcon}
        resizeMode="cover"
        source={require("../assets/frame1.png")}
      >
        <View style={styles.frameParent}>
          <View style={styles.frame1}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-71.png")}
            />
            <Text style={styles.text}>9:45</Text>
          </View>
          <View style={styles.frame2}>
            <Image
              style={styles.materialSymbolssignalWifi4Icon}
              contentFit="cover"
              source={require("../assets/materialsymbolssignalwifi4bar1.png")}
            />
            <View style={styles.raphaelchargingParent}>
              <Image
                style={styles.raphaelchargingIcon}
                contentFit="cover"
                source={require("../assets/raphaelcharging1.png")}
              />
              <Text style={styles.text1}>98%</Text>
            </View>
          </View>
        </View>
        <View style={styles.frame3}>
          <Image
            style={styles.frameItem}
            contentFit="cover"
            source={require("../assets/arrow-11.png")}
          />
          <Pressable
            style={styles.back}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.back1}>Back</Text>
          </Pressable>
        </View>
      </ImageBackground>
      <Text style={styles.signUp}>Sign up</Text>
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
    position: "absolute",
    top: 9,
    left: 330,
    fontSize: FontSize.size_xs,
    letterSpacing: -0.2,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "left",
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
  frameItem: {
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    height: 15,
  },
  back1: {
    fontSize: FontSize.size_base,
    letterSpacing: -0.2,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorGray_400,
    textAlign: "left",
  },
  back: {
    position: "relative",
  },
  frame3: {
    width: 62,
    height: 19,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_6xs,
  },
  frameIcon: {
    width: 430,
    height: 429,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_8xs,
    gap: Gap.gap_sm,
  },
  signUp: {
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.4,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorGray_400,
    textAlign: "left",
    height: 36,
    marginRight: 275,
  },
  frame: {
    alignSelf: "stretch",
    height: 489,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_5xs,
  },
});

export default Frame4;

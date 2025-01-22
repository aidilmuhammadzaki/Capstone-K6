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
import { FontSize, Color, FontFamily, Gap, Padding } from "../GlobalStyles";

const FrameIcon1 = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={[styles.frameIcon, styles.framePosition]}
      resizeMode="cover"
      source={require("../assets/frame11.png")}
    >
      <View style={styles.frameParent}>
        <View style={styles.raphaelchargingParent}>
          <Image
            style={styles.raphaelchargingIcon}
            contentFit="cover"
            source={require("../assets/raphaelcharging.png")}
          />
          <Text style={styles.text}>98%</Text>
        </View>
        <Image
          style={styles.materialSymbolssignalWifi4Icon}
          contentFit="cover"
          source={require("../assets/materialsymbolssignalwifi4bar.png")}
        />
        <Image
          style={[styles.frameChild, styles.framePosition]}
          contentFit="cover"
          source={require("../assets/group-7.png")}
        />
        <Text style={[styles.text1, styles.text1Typo]}>9:45</Text>
      </View>
      <View style={styles.frame}>
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/arrow-12.png")}
        />
        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <Text style={[styles.back1, styles.text1Typo]}>Back</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    left: 0,
    position: "absolute",
  },
  text1Typo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    letterSpacing: -0.2,
  },
  raphaelchargingIcon: {
    left: 25,
    width: 32,
    top: 0,
    height: 32,
    overflow: "hidden",
    position: "absolute",
  },
  text: {
    top: 9,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    letterSpacing: -0.2,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    left: 330,
    position: "absolute",
  },
  raphaelchargingParent: {
    width: 57,
    left: 330,
    top: 0,
    height: 32,
    position: "absolute",
  },
  materialSymbolssignalWifi4Icon: {
    top: 7,
    left: 298,
    width: 20,
    height: 20,
    overflow: "hidden",
    position: "absolute",
  },
  frameChild: {
    top: 8,
    width: 54,
    height: 18,
  },
  text1: {
    top: 10,
    left: 198,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  frameParent: {
    width: 387,
    height: 32,
  },
  frameItem: {
    maxWidth: "100%",
    height: 15,
    overflow: "hidden",
  },
  back1: {
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorGray_400,
  },
  frame: {
    width: 62,
    height: 19,
    flexDirection: "row",
    alignItems: "center",
    gap: Gap.gap_6xs,
    overflow: "hidden",
  },
  frameIcon: {
    top: 6,
    width: 430,
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_8xs,
    gap: Gap.gap_sm,
    overflow: "hidden",
  },
});

export default FrameIcon1;

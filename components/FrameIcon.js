import React, { useMemo } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
  ImageSourcePropType,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameIcon = ({ frame, frameIconHeight, onBackPress }) => {
  const frameIconStyle = useMemo(() => {
    return {
      ...getStyleValue("height", frameIconHeight),
    };
  }, [frameIconHeight]);

  const navigation = useNavigation();

  return (
    <ImageBackground
      style={[styles.frameIcon, styles.frameIconPosition, frameIconStyle]}
      resizeMode="cover"
      source={frame}
    >
      <Image
        style={[styles.frameChild, styles.frameIconPosition]}
        contentFit="cover"
        source={require("../assets/arrow-1.png")}
      />
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
          style={[
            styles.materialSymbolssignalWifi4Icon,
            styles.frameIconPosition,
          ]}
          contentFit="cover"
          source={require("../assets/materialsymbolssignalwifi4bar.png")}
        />
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/group-7.png")}
        />
        <Text style={[styles.text1, styles.text1Typo]}>9:45</Text>
      </View>
      <Pressable style={styles.back} onPress={onBackPress}>
        <Text style={[styles.back1, styles.text1Typo]}>Back</Text>
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  frameIconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  text1Typo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    letterSpacing: -0.2,
  },
  frameChild: {
    top: 82,
    left: 26,
    maxWidth: "100%",
    height: 15,
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
  },
  frameItem: {
    top: 8,
    width: 54,
    height: 18,
    left: 0,
    position: "absolute",
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
    top: 5,
    left: 22,
    width: 387,
    height: 32,
    position: "absolute",
  },
  back1: {
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorGray_400,
  },
  back: {
    left: 50,
    top: 72,
    position: "absolute",
  },
  frameIcon: {
    top: 6,
    width: 430,
    height: 540,
    left: 0,
  },
});

export default FrameIcon;

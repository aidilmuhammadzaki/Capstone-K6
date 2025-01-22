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
import { Color, FontFamily, FontSize, Padding, Gap } from "../GlobalStyles";

const Frame10 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.frame, styles.frameFlexBox]}>
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
              source={require("../assets/group-73.png")}
            />
            <Text style={styles.text}>9:45</Text>
          </View>
          <Image
            style={styles.materialSymbolssignalWifi4Icon}
            contentFit="cover"
            source={require("../assets/materialsymbolssignalwifi4bar1.png")}
          />
        </View>
        <View style={[styles.frame2, styles.frameFlexBox]}>
          <Image
            style={styles.frameItem}
            contentFit="cover"
            source={require("../assets/arrow-11.png")}
          />
          <Pressable onPress={() => navigation.navigate("LogoPage")}>
            <Text style={[styles.back1, styles.back1Typo]}>Back</Text>
          </Pressable>
        </View>
      </ImageBackground>
      <View style={styles.frame3}>
        <Text style={[styles.logIn, styles.back1Typo]}>Log in</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  back1Typo: {
    color: Color.colorGray_400,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  frameChild: {
    height: 18,
    width: 54,
  },
  text: {
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    marginLeft: -54,
    textAlign: "left",
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
  },
  frame1: {
    height: 21,
    width: 54,
    flexDirection: "row",
    overflow: "hidden",
  },
  materialSymbolssignalWifi4Icon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  frameParent: {
    height: 32,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_6xs,
    gap: Gap.gap_11xl,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameItem: {
    maxWidth: "100%",
    height: 15,
    overflow: "hidden",
  },
  back1: {
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
    color: Color.colorGray_400,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  frame2: {
    width: 62,
    height: 19,
    gap: Gap.gap_6xs,
    flexDirection: "row",
  },
  frameIcon: {
    width: "115%",        // Lebar gambar memenuhi layar
    height: 300,          // Tinggi gambar diperbesar (sesuaikan kebutuhan)
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_8xs,
    gap: Gap.gap_sm,
    overflow: "hidden",
    alignSelf: "stretch",
    resizeMode: "cover",  // Tetap menjaga gambar proporsional
  },
  logIn: {
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.4,
  },
  frame3: {
    justifyContent: "center",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  frame: {
    gap: Gap.gap_5xs,
    alignSelf: "stretch",
  },
});

export default Frame10;

import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Gap } from "../GlobalStyles";

const Frame13 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frame}>
      <View style={styles.frameParent}>
        <View style={styles.raphaelchargingParent}>
          <Image
            style={styles.raphaelchargingIcon}
            contentFit="cover"
            source={require("../assets/raphaelcharging2.png")}
          />
          <Text style={styles.text}>98%</Text>
        </View>
        <Image
          style={styles.materialSymbolssignalWifi4Icon}
          contentFit="cover"
          source={require("../assets/materialsymbolssignalwifi4bar2.png")}
        />
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/group-74.png")}
        />
        <Text style={styles.text1}>9:45</Text>
      </View>
      <View style={styles.frame1}>
        <View style={styles.frame2}>
          <Pressable
            style={styles.frameItem}
            onPress={() => navigation.navigate("Appointment")}
          />
          <Image
            style={styles.frameInner}
            contentFit="cover"
            source={require("../assets/arrow-21.png")}
          />
        </View>
        <Text style={styles.selectDateAnd}>Select Date and Time</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  raphaelchargingIcon: {
    position: "absolute",
    top: 0,
    left: 25,
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  text: {
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
    position: "absolute",
    top: 0,
    left: 330,
    width: 57,
    height: 32,
  },
  materialSymbolssignalWifi4Icon: {
    position: "absolute",
    top: 7,
    left: 298,
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  frameChild: {
    position: "absolute",
    top: 8,
    left: 0,
    width: 54,
    height: 18,
  },
  text1: {
    position: "absolute",
    top: 10,
    left: 198,
    fontSize: FontSize.size_base,
    letterSpacing: -0.2,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "left",
  },
  frameParent: {
    width: 387,
    height: 32,
    marginLeft: 1,
  },
  frameItem: {
    position: "relative",
    backgroundColor: Color.colorWhite,
    width: 42,
    height: 44,
    opacity: 0,
  },
  frameInner: {
    position: "relative",
    width: 2,
    height: 0,
    marginLeft: -34,
  },
  frame2: {
    width: 42,
    height: 44,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  selectDateAnd: {
    position: "relative",
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.4,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray_400,
    textAlign: "left",
  },
  frame1: {
    width: 315,
    height: 44,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_xs,
    marginRight: 77,
  },
  frame: {
    width: 392,
    height: 96,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    gap: Gap.gap_7xs,
  },
});

export default Frame13;

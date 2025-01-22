import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Gap } from "../GlobalStyles";

const Frame6 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frame}>
      <View style={styles.frameParent}>
        <View style={styles.frame1}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/group-72.png")}
          />
          <Text style={styles.text}>9:45</Text>
        </View>
        <View style={styles.frame2}>
          <Image
            style={styles.materialSymbolssignalWifi4Icon}
            contentFit="cover"
            source={require("../assets/materialsymbolssignalwifi4bar2.png")}
          />
          <View style={styles.raphaelchargingParent}>
            <Image
              style={styles.raphaelchargingIcon}
              contentFit="cover"
              source={require("../assets/raphaelcharging2.png")}
            />
            <View style={styles.frame3}>
              <Text style={styles.text1}>98%</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.frame4}>
        <View style={styles.frame5}>
          <Pressable
            style={styles.frameItem}
            onPress={() => navigation.navigate("Notifications")}
          />
          <Image
            style={styles.frameInner}
            contentFit="cover"
            source={require("../assets/arrow-21.png")}
          />
        </View>
        <Text style={styles.myAppointment}>My Appointment</Text>
      </View>
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
    marginLeft: -35,
  },
  frame5: {
    width: 42,
    height: 44,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  myAppointment: {
    position: "relative",
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.4,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray_400,
    textAlign: "left",
  },
  frame4: {
    width: 288,
    height: 44,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_4xl,
    marginRight: 102,
  },
  frame: {
    width: 390,
    height: 93,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    gap: Gap.gap_9xs,
  },
});

export default Frame6;

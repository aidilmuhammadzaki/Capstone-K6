import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native"; // Tambahkan Pressable
import { FontSize, FontFamily, Color, Gap } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native"; // Tambahkan useNavigation

const Frame17 = () => {
  const navigation = useNavigation(); // Untuk navigasi

  return (
    <View style={styles.frame}>
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <View style={[styles.frame2, styles.frameFlexBox]}>
          <Image
            style={styles.frameIcon}
            contentFit="cover"
            source={require("../assets/frame13.png")}
          />
          <View style={styles.historyParent}>
            <Text style={styles.history}>History</Text>
            <Pressable onPress={() => navigation.navigate("PersonalDetails")}>
              <Text style={styles.history}>Personal Details</Text>
            </Pressable>
            <Text style={styles.history}>Address</Text>
            <Text style={styles.history}>About</Text>
            <Text style={styles.history}>Help</Text>
            <Text style={styles.history}>Log out</Text>
          </View>
        </View>
        <Image
          style={styles.frameIcon1}
          contentFit="cover"
          source={require("../assets/frame14.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    height: 419,
    overflow: "hidden",
  },
  frameIcon: {
    width: 34,
    height: 419,
    overflow: "hidden",
  },
  history: {
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.4,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
    textAlign: "left",
  },
  historyParent: {
    gap: Gap.gap_2xl,
  },
  frame2: {
    width: 247,
    gap: Gap.gap_2xs,
  },
  frameIcon1: {
    width: 1,
    height: 385,
    overflow: "hidden",
  },
  frame1: {
    width: 363,
    justifyContent: "flex-end",
    gap: Gap.gap_9xl,
  },
  frame: {
    width: 382,
    alignItems: "flex-end",
    justifyContent: "center",
    overflow: "hidden",
  },
});

export default Frame17;

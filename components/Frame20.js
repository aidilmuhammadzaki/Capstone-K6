import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Frame20 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frame}>
      <Image
        style={styles.icoutlineImageIcon}
        contentFit="cover"
        source={require("../assets/icoutlineimage.png")}
      />
      <Pressable
        style={styles.drAndrew}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Text style={styles.drAndrew1}>Dr. Andrew</Text>
      </Pressable>
      <Text style={styles.mbbs}>M.B.B.S</Text>
      <Text style={styles.drAndrewIs}>
        Dr. Andrew is an experienced dentist with over 10 years of practice. He
        specializes in general dentistry and offers a range of services.
      </Text>
      <Pressable
        style={styles.frameChild}
        onPress={() => navigation.navigate("Appointment")}
      />
      <Pressable
        style={styles.frameItem}
        onPress={() => navigation.navigate("Messages")}
      />
      <Text style={styles.book}>Book</Text>
      <Text style={styles.available}>Available</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icoutlineImageIcon: {
    position: "absolute",
    top: 53,
    left: 13,
    borderRadius: Border.br_27xl,
    width: 57,
    height: 57,
    overflow: "hidden",
  },
  drAndrew1: {
    fontSize: FontSize.size_lg,
    letterSpacing: -0.3,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray_400,
    textAlign: "left",
  },
  drAndrew: {
    position: "absolute",
    left: 99,
    top: 12,
  },
  mbbs: {
    position: "absolute",
    top: 34,
    left: 99,
    fontSize: FontSize.size_xs,
    letterSpacing: -0.2,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorDimgray_100,
    textAlign: "left",
  },
  drAndrewIs: {
    position: "absolute",
    top: 61,
    left: 100,
    fontSize: FontSize.size_xs,
    letterSpacing: -0.2,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray_400,
    textAlign: "left",
    width: 257,
  },
  frameChild: {
    position: "absolute",
    top: 121,
    left: 288,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorWhite,
    width: 73,
    height: 30,
  },
  frameItem: {
    position: "absolute",
    top: 121,
    left: 100,
    borderRadius: Border.br_7xl,
    backgroundColor: Color.colorGray_400,
    width: 99,
    height: 30,
  },
  book: {
    position: "absolute",
    top: 128,
    left: 310,
    fontSize: FontSize.size_xs,
    letterSpacing: -0.2,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
    textAlign: "left",
  },
  available: {
    position: "absolute",
    top: 128,
    left: 124,
    fontSize: FontSize.size_xs,
    letterSpacing: -0.2,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorWhite,
    textAlign: "left",
  },
  frame: {
    backgroundColor: Color.colorWhitesmoke_100,
    width: 382,
    height: 163,
    overflow: "hidden",
    marginLeft: 24,
  },
});

export default Frame20;

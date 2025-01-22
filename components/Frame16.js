import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import {
  Border,
  Color,
  FontSize,
  FontFamily,
  Padding,
  Gap,
} from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

const Frame16 = () => {
  const navigation = useNavigation(); // Gunakan useNavigation untuk navigasi

  return (
    <View style={styles.frame}>
      <View style={styles.frame1}>
        <View style={styles.frameChild} />
        <View style={styles.frameItem} />
        <Text style={styles.am}>10:00 AM</Text>
        <Text style={styles.am1}>11:30 AM</Text>
      </View>
      <Pressable
        style={styles.book}
        onPress={() => navigation.navigate("Notifications")} // Navigasi ke halaman Notifications
      >
        <Text style={styles.bookNow}>Book Now</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChild: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro_100,
    width: 96,
    height: 48,
  },
  frameItem: {
    position: "absolute",
    top: 0,
    left: 143,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray,
    width: 96,
    height: 48,
  },
  am: {
    position: "absolute",
    top: 15,
    left: 17,
    fontSize: FontSize.size_sm,
    letterSpacing: -0.2,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorDarkslategray,
    textAlign: "left",
  },
  am1: {
    position: "absolute",
    top: 15,
    left: 160,
    fontSize: FontSize.size_sm,
    letterSpacing: -0.2,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorWhite,
    textAlign: "left",
  },
  frame1: {
    width: 239,
    height: 48,
    overflow: "hidden",
    marginRight: 143,
  },
  bookNow: {
    position: "relative",
    fontSize: FontSize.size_base,
    letterSpacing: -0.2,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorWhite,
    textAlign: "center",
    width: 197,
  },
  book: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorDarkslategray,
    width: 382,
    height: 48,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    paddingHorizontal: 69,
    paddingVertical: Padding.p_sm,
  },
  frame: {
    alignSelf: "stretch",
    height: 188,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_8xl,
  },
});

export default Frame16;

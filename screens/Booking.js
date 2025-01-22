import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Frame13 from "../components/Frame13";
import Frame14 from "../components/Frame14";
import Frame15 from "../components/Frame15";
import Frame16 from "../components/Frame16";
import { Gap, Color, Border } from "../GlobalStyles";

const Booking = () => {
  return (
    <View style={styles.booking}>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <Frame13 />
        <Frame14 />
      </View>
      <Frame15 />
      <Frame16 />
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <View style={styles.materialSymbolshomeOutlineParent}>
          <Image
            style={styles.materialSymbolshomeOutlineIcon}
            contentFit="cover"
            source={require("../assets/materialsymbolshomeoutline1.png")}
          />
          <Image
            style={styles.materialSymbolshomeOutlineIcon}
            contentFit="cover"
            source={require("../assets/tablercategory1.png")}
          />
          <Image
            style={styles.materialSymbolshomeOutlineIcon}
            contentFit="cover"
            source={require("../assets/icoutlineaccesstime1.png")}
          />
          <Image
            style={styles.materialSymbolshomeOutlineIcon}
            contentFit="cover"
            source={require("../assets/ictwotonemarkunreadchatalt1.png")}
          />
          <Image
            style={styles.materialSymbolshomeOutlineIcon}
            contentFit="cover"
            source={require("../assets/mdiaccount1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  frame: {
    height: 488,
    gap: Gap.gap_md,
  },
  materialSymbolshomeOutlineIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  materialSymbolshomeOutlineParent: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: Gap.gap_3xl,
  },
  frame1: {
    backgroundColor: Color.colorGray_100,
    height: 64,
    justifyContent: "center",
  },
  booking: {
    borderRadius: Border.br_26xl,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorDimgray_400,
    borderWidth: 6,
    flex: 1,
    width: "100%",
    paddingHorizontal: 2,
    paddingVertical: 0,
    gap: Gap.gap_5xs,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default Booking;

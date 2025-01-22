import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Gap } from "../GlobalStyles";

const Frame22 = () => {
  return (
    <View style={styles.frame}>
      <View style={styles.frameChild} />
      <Image
        style={styles.icoutlineImageIcon}
        contentFit="cover"
        source={require("../assets/icoutlineimage.png")}
      />
      <Text style={styles.drAndrew}>Dr. Andrew</Text>
      <Text style={[styles.mbbs, styles.mbbsTypo]}>M.B.B.S</Text>
      <Text style={[styles.drAndrewIs, styles.mbbsTypo]}>
        Dr. Andrew is an experienced dentist with over 10 years of practice. He
        specializes in general dentistry and offers a range of services.
      </Text>
      <View style={[styles.frameItem, styles.framePosition]} />
      <View style={[styles.frameInner, styles.framePosition]} />
      <Text style={[styles.book, styles.bookTypo]}>Book</Text>
      <Text style={[styles.available, styles.bookTypo]}>Available</Text>
      <View style={styles.rectangleView} />
      <View style={styles.materialSymbolshomeOutlineParent}>
        <Image
          style={styles.materialSymbolshomeOutlineIcon}
          contentFit="cover"
          source={require("../assets/materialsymbolshomeoutline.png")}
        />
        <Image
          style={styles.materialSymbolshomeOutlineIcon}
          contentFit="cover"
          source={require("../assets/tablercategory.png")}
        />
        <Image
          style={styles.materialSymbolshomeOutlineIcon}
          contentFit="cover"
          source={require("../assets/icoutlineaccesstime.png")}
        />
        <Image
          style={styles.materialSymbolshomeOutlineIcon}
          contentFit="cover"
          source={require("../assets/ictwotonemarkunreadchatalt.png")}
        />
        <Image
          style={styles.materialSymbolshomeOutlineIcon}
          contentFit="cover"
          source={require("../assets/mdiaccount.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mbbsTypo: {
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  framePosition: {
    height: 30,
    top: 121,
    position: "absolute",
  },
  bookTypo: {
    top: 128,
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  frameChild: {
    top: 0,
    left: 22,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 382,
    position: "absolute",
    height: 163,
  },
  icoutlineImageIcon: {
    top: 53,
    left: 35,
    borderRadius: Border.br_27xl,
    width: 57,
    height: 57,
    position: "absolute",
    overflow: "hidden",
  },
  drAndrew: {
    top: 12,
    fontSize: FontSize.size_lg,
    letterSpacing: -0.3,
    textAlign: "left",
    color: Color.colorGray_400,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 121,
    position: "absolute",
  },
  mbbs: {
    top: 34,
    color: Color.colorDimgray_100,
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 121,
  },
  drAndrewIs: {
    top: 61,
    fontFamily: FontFamily.interRegular,
    width: 257,
    left: 122,
    color: Color.colorGray_400,
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
  },
  frameItem: {
    left: 310,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorWhite,
    width: 73,
  },
  frameInner: {
    borderRadius: Border.br_7xl,
    backgroundColor: Color.colorGray_400,
    width: 99,
    left: 122,
  },
  book: {
    left: 332,
    color: Color.colorBlack,
  },
  available: {
    left: 146,
    color: Color.colorWhite,
  },
  rectangleView: {
    top: 68,
    left: 0,
    backgroundColor: Color.colorGray_100,
    height: 64,
    position: "absolute",
    width: 426,
  },
  materialSymbolshomeOutlineIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  materialSymbolshomeOutlineParent: {
    top: 88,
    left: 41,
    flexDirection: "row",
    alignItems: "flex-end",
    gap: Gap.gap_3xl,
    position: "absolute",
  },
  frame: {
    overflow: "hidden",
    height: 163,
    width: 426,
  },
});

export default Frame22;

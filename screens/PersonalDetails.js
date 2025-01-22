import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const PersonalDetails = () => {
  const navigation = useNavigation();  // Menambahkan useNavigation untuk mengakses fungsi navigasi

  return (
    <View style={styles.personalDetails}>
      <View
        style={[
          styles.materialSymbolssignalWifi4Parent,
          styles.rectanglePressablePosition,
        ]}
      >
        <Image
          style={styles.materialSymbolssignalWifi4Icon}
          contentFit="cover"
          source={require("../assets/materialsymbolssignalwifi4bar.png")}
        />
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/group-7.png")}
        />
        <Text style={[styles.text, styles.textFlexBox]}>9:45</Text>
      </View>
      <Text style={[styles.accountInfo, styles.accountInfoTypo]}>
        Account info
      </Text>
      <Image
        style={styles.personalDetailsChild}
        contentFit="cover"
        source={require("../assets/arrow-2.png")}
      />
      <Text style={[styles.name, styles.nameTypo]}>Name</Text>
      <Text style={[styles.email, styles.nameTypo]}>Email</Text>
      <Text style={[styles.phone, styles.nameTypo]}>Phone</Text>
      <Text style={[styles.location, styles.nameTypo]}>Location</Text>
      <Text style={[styles.gender, styles.nameTypo]}>Gender</Text>
      <Image
        style={styles.icoutlineImageIcon}
        contentFit="cover"
        source={require("../assets/icoutlineimage4.png")}
      />
      <View style={[styles.personalDetailsItem, styles.personalChildLayout]} />
      <View style={[styles.personalDetailsInner, styles.personalChildLayout]} />
      <View style={[styles.rectangleView, styles.personalChildLayout]} />
      <View
        style={[styles.personalDetailsChild1, styles.personalChildLayout]}
      />
      <View
        style={[styles.personalDetailsChild2, styles.personalChildLayout]}
      />
      <Text style={[styles.slametKurniawan, styles.maleTypo]}>
        Aidil Muhammad Zaki
      </Text>
      <Text style={[styles.slametkurniawan1gmailcom, styles.maleTypo]}>
        aidilzaki45@gmail.com
      </Text>
      <Text style={[styles.text1, styles.maleTypo]}>081362918685</Text>
      <Text style={[styles.airDinginIndonesia, styles.maleTypo]}>
        Air Dingin, Indonesia
      </Text>
      <Text style={[styles.male, styles.maleTypo]}>Male</Text>

      <View style={styles.book}>
        <Pressable onPress={() => navigation.navigate("Profile")}>
          <Text style={[styles.saveChanges, styles.accountInfoTypo]}>
            Save changes
          </Text>
        </Pressable>
      </View>

      <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressablePosition]}
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectanglePressablePosition: {
    left: 22,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  accountInfoTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  nameTypo: {
    color: Color.colorDimgray_400,
    letterSpacing: -0.3,
    fontSize: FontSize.size_xl,
    left: 27,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  personalChildLayout: {
    height: 40,
    backgroundColor: Color.colorLightcyan_100,
    left: 24,
    width: 382,
    position: "absolute",
  },
  maleTypo: {
    fontSize: FontSize.size_mini,
    left: 40,
    color: Color.colorDimgray_400,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    letterSpacing: -0.2,
    position: "absolute",
  },
  materialSymbolssignalWifi4Icon: {
    top: 7,
    left: 298,
    width: 20,
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    top: 8,
    left: 0,
    width: 54,
    height: 18,
    position: "absolute",
  },
  text: {
    top: 10,
    left: 93,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
  },
  materialSymbolssignalWifi4Parent: {
    top: 11,
    width: 387,
    height: 32,
  },
  accountInfo: {
    top: 67,
    left: 144,
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.4,
    color: Color.colorGray_400,
    textAlign: "left",
    position: "absolute",
  },
  personalDetailsChild: {
    top: 82,
    width: 2,
    height: 0,
    left: 27,
    position: "absolute",
  },
  name: {
    top: 255,
  },
  email: {
    top: 355,
  },
  phone: {
    top: 455,
  },
  location: {
    top: 555,
  },
  gender: {
    top: 655,
  },
  icoutlineImageIcon: {
    top: 118,
    left: 157,
    borderRadius: Border.br_27xl,
    width: 115,
    height: 115,
    position: "absolute",
    overflow: "hidden",
  },
  personalDetailsItem: {
    top: 291,
  },
  personalDetailsInner: {
    top: 391,
  },
  rectangleView: {
    top: 491,
  },
  personalDetailsChild1: {
    top: 591,
  },
  personalDetailsChild2: {
    top: 691,
  },
  slametKurniawan: {
    top: 302,
  },
  slametkurniawan1gmailcom: {
    top: 402,
  },
  text1: {
    top: 502,
  },
  airDinginIndonesia: {
    top: 602,
  },
  male: {
    top: 702,
  },
  saveChanges: {
    color: Color.colorWhite,
    textAlign: "center",
    width: 197,
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
  },
  book: {
    top: 839,
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorDarkslategray,
    height: 48,
    alignItems: "flex-end",
    paddingHorizontal: 66,
    paddingVertical: Padding.p_sm,
    width: 382,
    left: 27,
    position: "absolute",
  },
  rectanglePressable: {
    top: 60,
    width: 42,
    height: 44,
    opacity: 0,
    backgroundColor: Color.colorWhite,
  },
  personalDetails: {
    borderRadius: Border.br_26xl,
    borderStyle: "solid",
    borderColor: Color.colorDimgray_400,
    borderWidth: 6,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default PersonalDetails;

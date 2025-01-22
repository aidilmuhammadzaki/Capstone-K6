import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Gap } from "../GlobalStyles";

const Categories = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.categories}>
      <Pressable
        style={[styles.categoriesChild, styles.rectangleViewLayout]}
        onPress={() => navigation.navigate("Messages")}
      />
      <View style={[styles.categoriesItem, styles.categoriesLayout]} />
      <Image
        style={[styles.icoutlineImageIcon, styles.icoutlineIconLayout1]}
        contentFit="cover"
        source={require("../assets/icoutlineimage3.png")}
      />
      <Text style={[styles.dentists, styles.dentistsTypo]}>Dentists</Text>
      <View style={styles.categoriesInner} />
      <View style={styles.frameParent}>
        <View style={styles.raphaelchargingParent}>
          <Image
            style={[styles.raphaelchargingIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/raphaelcharging.png")}
          />
          <Text style={styles.text}>98%</Text>
        </View>
        <Image
          style={styles.materialSymbolssignalWifi4Icon}
          contentFit="cover"
          source={require("../assets/materialsymbolssignalwifi4bar.png")}
        />
        <Image
          style={[styles.frameChild, styles.frameChildPosition]}
          contentFit="cover"
          source={require("../assets/group-7.png")}
        />
        <Text style={[styles.text1, styles.text1Typo]}>9:45</Text>
      </View>
      <Image
        style={[styles.materialSymbolssearchIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/materialsymbolssearch.png")}
      />
      <Pressable
        style={styles.categories1}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Text style={[styles.categories2, styles.dentistsTypo]}>
          Categories
        </Text>
      </Pressable>
      <Text style={[styles.search, styles.text1Typo]}>Search</Text>
      <Image
        style={[styles.icbaselineMicIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icbaselinemic.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/arrow-2.png")}
        />
      </Pressable>
      <View style={[styles.rectangleView, styles.frameChildPosition]} />
      <View style={styles.materialSymbolshomeOutlineParent}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/materialsymbolshomeoutline2.png")}
        />
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/tablercategory2.png")}
        />
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/icoutlineaccesstime.png")}
        />
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ictwotonemarkunreadchatalt.png")}
        />
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/mdiaccount.png")}
        />
      </View>
      <Pressable
        style={[styles.rectanglePressable, styles.categoriesChildLayout]}
        onPress={() => navigation.navigate("ListOfDoctors")}
      />
      <View style={[styles.categoriesChild1, styles.categoriesChildLayout]} />
      <View style={[styles.categoriesChild2, styles.categoriesChildLayout]} />
      <View style={[styles.categoriesChild3, styles.categoriesLayout]} />
      <View style={[styles.categoriesChild4, styles.categoriesChildPosition]} />
      <View style={[styles.categoriesChild5, styles.categoriesChildPosition]} />
      <Image
        style={[styles.icoutlineImageIcon1, styles.icoutlineIconLayout1]}
        contentFit="cover"
        source={require("../assets/icoutlineimage3.png")}
      />
      <Image
        style={[styles.icoutlineImageIcon2, styles.icoutlineIconLayout]}
        contentFit="cover"
        source={require("../assets/icoutlineimage3.png")}
      />
      <Image
        style={[styles.icoutlineImageIcon3, styles.icoutlineIconLayout]}
        contentFit="cover"
        source={require("../assets/icoutlineimage3.png")}
      />
      <Text style={[styles.doctors, styles.doctorsTypo]}>Doctors</Text>
      <Text style={[styles.dentists1, styles.doctorsTypo]}>Dentists</Text>
      <Text style={[styles.hairdressers, styles.doctorsTypo]}>
        Hairdressers
      </Text>
      <Pressable
        style={styles.categoriesChild6}
        onPress={() => navigation.navigate("HomePage")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewLayout: {
    height: 64,
    top: 868,
  },
  categoriesLayout: {
    height: 53,
    width: 382,
    backgroundColor: Color.colorWhitesmoke_200,
    position: "absolute",
  },
  icoutlineIconLayout1: {
    height: 57,
    width: 57,
    borderRadius: Border.br_27xl,
    position: "absolute",
    overflow: "hidden",
  },
  dentistsTypo: {
    textAlign: "left",
    letterSpacing: -0.4,
    fontSize: FontSize.size_5xl,
  },
  iconLayout1: {
    width: 32,
    height: 32,
    position: "absolute",
    overflow: "hidden",
  },
  frameChildPosition: {
    left: 0,
    position: "absolute",
  },
  text1Typo: {
    fontSize: FontSize.size_base,
    letterSpacing: -0.2,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  categoriesChildLayout: {
    height: 188,
    width: 381,
    backgroundColor: Color.colorDarkgray_100,
    position: "absolute",
  },
  categoriesChildPosition: {
    left: 26,
    height: 53,
    width: 382,
    backgroundColor: Color.colorWhitesmoke_200,
    position: "absolute",
  },
  icoutlineIconLayout: {
    left: 189,
    height: 57,
    width: 57,
    borderRadius: Border.br_27xl,
    position: "absolute",
    overflow: "hidden",
  },
  doctorsTypo: {
    letterSpacing: -0.3,
    fontSize: FontSize.size_lg,
    left: 40,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  categoriesChild: {
    left: 259,
    width: 71,
    backgroundColor: Color.colorDarkgray_100,
    height: 64,
    top: 868,
    position: "absolute",
  },
  categoriesItem: {
    top: 1048,
    left: 22,
    height: 53,
    width: 382,
    backgroundColor: Color.colorWhitesmoke_200,
  },
  icoutlineImageIcon: {
    top: 963,
    left: 185,
  },
  dentists: {
    top: 1060,
    left: 168,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  categoriesInner: {
    top: 120,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro_200,
    height: 49,
    width: 381,
    left: 24,
    position: "absolute",
  },
  raphaelchargingIcon: {
    left: 25,
    top: 0,
    width: 32,
  },
  text: {
    top: 9,
    fontSize: FontSize.size_xs,
    letterSpacing: -0.2,
    left: 330,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  raphaelchargingParent: {
    left: 330,
    top: 0,
    height: 32,
    width: 57,
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
    width: 54,
    height: 18,
  },
  text1: {
    top: 10,
    left: 198,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
  },
  frameParent: {
    top: 11,
    width: 387,
    height: 32,
    left: 22,
    position: "absolute",
  },
  materialSymbolssearchIcon: {
    top: 128,
    left: 37,
  },
  categories2: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray_400,
  },
  categories1: {
    left: 153,
    top: 67,
    position: "absolute",
  },
  search: {
    top: 134,
    left: 85,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorGray_200,
  },
  icbaselineMicIcon: {
    top: 133,
    left: 369,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 82,
    width: 2,
    height: 0,
    left: 27,
    position: "absolute",
  },
  rectangleView: {
    backgroundColor: Color.colorGray_100,
    width: 426,
    height: 64,
    top: 868,
    left: 0,
  },
  materialSymbolshomeOutlineParent: {
    top: 888,
    left: 39,
    flexDirection: "row",
    alignItems: "flex-end",
    gap: Gap.gap_3xl,
    position: "absolute",
    overflow: "hidden",
  },
  rectanglePressable: {
    top: 214,
    left: 24,
  },
  categoriesChild1: {
    top: 447,
    left: 27,
  },
  categoriesChild2: {
    top: 680,
    left: 27,
  },
  categoriesChild3: {
    top: 349,
    left: 24,
  },
  categoriesChild4: {
    top: 582,
  },
  categoriesChild5: {
    top: 815,
  },
  icoutlineImageIcon1: {
    top: 264,
    left: 187,
  },
  icoutlineImageIcon2: {
    top: 497,
  },
  icoutlineImageIcon3: {
    top: 730,
  },
  doctors: {
    top: 365,
  },
  dentists1: {
    top: 598,
  },
  hairdressers: {
    top: 831,
  },
  categoriesChild6: {
    top: 59,
    left: 20,
    width: 38,
    height: 37,
    opacity: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  categories: {
    borderRadius: Border.br_26xl,
    borderStyle: "solid",
    borderColor: Color.colorDimgray_400,
    borderWidth: 6,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Categories;

import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Notifications = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notifications}>
      <View style={styles.frameParent}>
        <View style={styles.raphaelchargingParent}>
          <Image
            style={styles.raphaelchargingIcon}
            contentFit="cover"
            source={require("../assets/raphaelcharging.png")}
          />
          <Text style={[styles.text, styles.textFlexBox]}>98%</Text>
        </View>
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
        <Text style={styles.text1}>9:45</Text>
      </View>
      <Text style={[styles.notifications1, styles.textFlexBox]}>
        Notifications
      </Text>
      <Image
        style={styles.notificationsChild}
        contentFit="cover"
        source={require("../assets/arrow-2.png")}
      />
      <Pressable
        style={[styles.notificationsItem, styles.notificationsLayout]}
        onPress={() => navigation.navigate("MyAppointments")}
      />
      <View style={[styles.notificationsInner, styles.notificationsLayout]} />
      <View style={[styles.rectangleView, styles.notificationsLayout]} />
      <View style={[styles.notificationsChild1, styles.notificationsLayout]} />
      <View
        style={[styles.notificationsChild2, styles.notificationsChildLayout1]}
      />
      <View
        style={[styles.notificationsChild3, styles.notificationsChildLayout1]}
      />
      <View
        style={[styles.notificationsChild4, styles.notificationsChildLayout1]}
      />
      <View
        style={[styles.notificationsChild5, styles.notificationsChildLayout1]}
      />
      <Image
        style={[styles.phbellSimpleRingingBoldIcon, styles.phbellIconLayout]}
        contentFit="cover"
        source={require("../assets/phbellsimpleringingbold.png")}
      />
      <Image
        style={[styles.phbellSimpleRingingBoldIcon1, styles.phbellIconLayout]}
        contentFit="cover"
        source={require("../assets/phbellsimpleringingbold.png")}
      />
      <Image
        style={[styles.phbellSimpleRingingBoldIcon2, styles.phbellIconLayout]}
        contentFit="cover"
        source={require("../assets/phbellsimpleringingbold.png")}
      />
      <Image
        style={[styles.phbellSimpleRingingBoldIcon3, styles.phbellIconLayout]}
        contentFit="cover"
        source={require("../assets/phbellsimpleringingbold.png")}
      />
      <Text
        style={[styles.thJuly2023, styles.julyTypo]}
      >{`8th July, 2023 `}</Text>
      <Text
        style={[styles.ndJuly2023, styles.julyTypo]}
      >{`2nd July, 2023 `}</Text>
      <Text
        style={[styles.ndJuly20231, styles.julyTypo]}
      >{`2nd July, 2023 `}</Text>
      <Text
        style={[styles.ndJuly20232, styles.julyTypo]}
      >{`2nd July, 2023 `}</Text>
      <Text style={[styles.drAndrew, styles.drjessiTypo]}>Dr. Andrew</Text>
      <Text style={[styles.drjessi, styles.drjessiTypo]}>Dr.Jessi</Text>
      <Text style={[styles.drjessi1, styles.drjessiTypo]}>Dr.Jessi</Text>
      <Text style={[styles.drjessi2, styles.drjessiTypo]}>Dr.Jessi</Text>
      <Image
        style={[styles.ellipseIcon, styles.notificationsChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-15.png")}
      />
      <Image
        style={[styles.notificationsChild6, styles.notificationsChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-15.png")}
      />
      <Image
        style={[styles.notificationsChild7, styles.notificationsChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-15.png")}
      />
      <Image
        style={[styles.notificationsChild8, styles.notificationsChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-15.png")}
      />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("Booking")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  notificationsLayout: {
    height: 62,
    width: 382,
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_3xs,
    left: 24,
    position: "absolute",
  },
  notificationsChildLayout1: {
    height: 38,
    width: 38,
    borderRadius: Border.br_7xs,
    left: 36,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  phbellIconLayout: {
    height: 24,
    width: 24,
    left: 43,
    position: "absolute",
    overflow: "hidden",
  },
  julyTypo: {
    color: Color.colorDarkgray_200,
    left: 88,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  drjessiTypo: {
    left: 88,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    letterSpacing: -0.2,
    position: "absolute",
  },
  notificationsChildLayout: {
    height: 12,
    width: 12,
    left: 384,
    position: "absolute",
  },
  raphaelchargingIcon: {
    left: 25,
    width: 32,
    top: 0,
    height: 32,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    top: 9,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    left: 330,
  },
  raphaelchargingParent: {
    width: 57,
    left: 330,
    top: 0,
    height: 32,
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
  text1: {
    top: 10,
    left: 198,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    letterSpacing: -0.2,
    position: "absolute",
  },
  frameParent: {
    top: 11,
    left: 22,
    width: 387,
    height: 32,
    position: "absolute",
  },
  notifications1: {
    top: 67,
    left: 144,
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.4,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray_400,
  },
  notificationsChild: {
    top: 82,
    left: 27,
    width: 2,
    height: 0,
    position: "absolute",
  },
  notificationsItem: {
    top: 136,
  },
  notificationsInner: {
    top: 222,
  },
  rectangleView: {
    top: 308,
  },
  notificationsChild1: {
    top: 394,
  },
  notificationsChild2: {
    top: 148,
  },
  notificationsChild3: {
    top: 234,
  },
  notificationsChild4: {
    top: 320,
  },
  notificationsChild5: {
    top: 406,
  },
  phbellSimpleRingingBoldIcon: {
    top: 155,
  },
  phbellSimpleRingingBoldIcon1: {
    top: 241,
  },
  phbellSimpleRingingBoldIcon2: {
    top: 327,
  },
  phbellSimpleRingingBoldIcon3: {
    top: 413,
  },
  thJuly2023: {
    top: 149,
  },
  ndJuly2023: {
    top: 235,
  },
  ndJuly20231: {
    top: 321,
  },
  ndJuly20232: {
    top: 407,
  },
  drAndrew: {
    top: 166,
  },
  drjessi: {
    top: 252,
  },
  drjessi1: {
    top: 338,
  },
  drjessi2: {
    top: 424,
  },
  ellipseIcon: {
    top: 161,
  },
  notificationsChild6: {
    top: 247,
  },
  notificationsChild7: {
    top: 333,
  },
  notificationsChild8: {
    top: 419,
  },
  rectanglePressable: {
    top: 60,
    left: 20,
    width: 42,
    height: 44,
    opacity: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  notifications: {
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

export default Notifications;

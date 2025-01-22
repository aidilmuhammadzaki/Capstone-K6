import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Appointment = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.appointment}>
      <View style={[styles.frameParent, styles.frameParentLayout]}>
        <View style={styles.raphaelchargingParent}>
          <Image
            style={[styles.raphaelchargingIcon, styles.frameParentLayout]}
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
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/group-7.png")}
        />
        <Text style={[styles.text1, styles.text1Typo]}>9:45</Text>
      </View>
      <Text style={[styles.appointment1, styles.iAmAnClr]}>Appointment</Text>
      <Image
        style={styles.appointmentChild}
        contentFit="cover"
        source={require("../assets/arrow-2.png")}
      />
      <Image
        style={styles.icoutlineImageIcon}
        contentFit="cover"
        source={require("../assets/icoutlineimage2.png")}
      />
      <Text style={[styles.drAndrew, styles.andrewPosition]}>Dr. Andrew</Text>
      <Text style={[styles.biography, styles.iAmAnClr]}>Biography</Text>
      <Text style={[styles.drAndrewIs, styles.andrewPosition]}>
        Dr. Andrew is an experienced dentist with over 10 years of practice. He
        specializes in general dentistry and offers a range of services.
      </Text>
      <Text style={[styles.iAmAn, styles.iAmAnClr]}>
        I am an experienced dentist with over 10 years of practice. I am
        specialized in general dentistry and I will offer a range of services.
      </Text>
      <Image
        style={[styles.appointmentItem, styles.appointmentItemLayout]}
        contentFit="cover"
        source={require("../assets/frame-6.png")}
      />

      {/* Button "Book an Appointment" */}
      <Pressable
        style={[styles.book, styles.bookLayout]}
        onPress={() => navigation.navigate("Booking")} // Navigasi ke halaman Booking
      >
        <Image
          style={[styles.bookChild, styles.bookLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-14.png")}
        />
        <View style={[styles.bookItem, styles.bookLayout]} />
        <Image
          style={[
            styles.mdicardsHeartOutlineIcon,
            styles.appointmentItemLayout,
          ]}
          contentFit="cover"
          source={require("../assets/mdicardsheartoutline.png")}
        />
        <Text style={[styles.bookAnAppointment, styles.appointmentTypo]}>
          Book an Appointment
        </Text>
      </Pressable>

      <Pressable
        style={styles.appointmentInner}
        onPress={() => navigation.navigate("ListOfDoctors")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentLayout: {
    height: 32,
    position: "absolute",
  },
  text1Typo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    letterSpacing: -0.2,
    position: "absolute",
  },
  iAmAnClr: {
    color: Color.colorGray_400,
    textAlign: "left",
    position: "absolute",
  },
  andrewPosition: {
    left: 196,
    color: Color.colorGray_400,
    textAlign: "left",
    position: "absolute",
  },
  appointmentItemLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  bookLayout: {
    height: 48,
    position: "absolute",
  },
  appointmentTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  raphaelchargingIcon: {
    width: 32,
    left: 25,
    top: 0,
    overflow: "hidden",
  },
  text: {
    top: 9,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
    left: 330,
    position: "absolute",
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
    width: 54,
    height: 18,
    left: 0,
    position: "absolute",
  },
  text1: {
    top: 10,
    left: 198,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
  },
  frameParent: {
    top: 11,
    left: 22,
    width: 387,
  },
  appointment1: {
    top: 67,
    left: 142,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: -0.4,
    fontSize: FontSize.size_5xl,
  },
  appointmentChild: {
    top: 82,
    left: 27,
    width: 2,
    height: 0,
    position: "absolute",
  },
  icoutlineImageIcon: {
    top: 120,
    left: 4,
    borderRadius: Border.br_27xl,
    width: 170,
    height: 170,
    position: "absolute",
    overflow: "hidden",
  },
  drAndrew: {
    top: 141,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: -0.4,
    fontSize: FontSize.size_5xl,
  },
  biography: {
    top: 314,
    left: 24,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: -0.4,
    fontSize: FontSize.size_5xl,
  },
  drAndrewIs: {
    top: 182,
    width: 210,
    fontFamily: FontFamily.interRegular,
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
  },
  iAmAn: {
    top: 367,
    width: 297,
    fontFamily: FontFamily.interRegular,
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
    left: 25,
  },
  appointmentItem: {
    top: 254,
    left: 198,
  },
  bookChild: {
    width: 48,
    left: 0,
    top: 0,
  },
  bookItem: {
    left: 69,
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorDarkslategray,
    width: 313,
    top: 0,
  },
  mdicardsHeartOutlineIcon: {
    top: 12,
    left: 12,
    overflow: "hidden",
  },
  bookAnAppointment: {
    top: 14,
    left: 169,
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    textAlign: "left",
    letterSpacing: -0.2,
    position: "absolute",
  },
  book: {
    top: 785,
    width: 382,
    left: 24,
  },
  appointmentInner: {
    top: 60,
    left: 20,
    width: 42,
    height: 44,
    opacity: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  appointment: {
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

export default Appointment;

import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Frame from "../components/Frame";
import { useNavigation } from "@react-navigation/native";
import Famous from "../components/Famous";
import { Color, Border, FontFamily, FontSize, Gap } from "../GlobalStyles";

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.homePage, styles.homeBorder]}>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <View style={[styles.frameParent, styles.frameLayout]}>
          <View style={styles.raphaelchargingParent}>
            <Image
              style={[styles.raphaelchargingIcon, styles.frame15Position]}
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
          <Text style={styles.text1}>9:45</Text>
        </View>
      </View>
      <Text style={[styles.lookingFor, styles.lookingTypo]}>Looking For</Text>
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame2.png")}
      />
      <Image
        style={[styles.frameIcon1, styles.iconLayout3]}
        contentFit="cover"
        source={require("../assets/frame3.png")}
      />
      <Image
        style={[styles.frameIcon2, styles.frameIconPosition]}
        contentFit="cover"
        source={require("../assets/frame4.png")}
      />
      <Image
        style={[styles.frameIcon3, styles.frameIconPosition]}
        contentFit="cover"
        source={require("../assets/frame5.png")}
      />
      <Image
        style={[styles.frameIcon4, styles.framePosition1]}
        contentFit="cover"
        source={require("../assets/frame6.png")}
      />
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <Text style={[styles.doctors, styles.doctorsTypo]}>Doctors</Text>
      </View>
      <View style={[styles.frame2, styles.frameFlexBox]}>
        <Text style={[styles.doctors, styles.doctorsTypo]}>Dentists</Text>
      </View>
      <View style={[styles.frame3, styles.framePosition1]}>
        <Text style={[styles.doctors, styles.doctorsTypo]}>
          Personal Trainers
        </Text>
      </View>
      <View style={[styles.frame4, styles.frameFlexBox]}>
        <Text style={[styles.doctors, styles.doctorsTypo]}>Hairdressers</Text>
      </View>
      <Image
        style={[styles.frameIcon5, styles.iconPosition2]}
        contentFit="cover"
        source={require("../assets/frame7.png")}
      />
      <View style={[styles.frame5, styles.frameFlexBox]}>
        <Text style={styles.slametKurniawanTypo}>Slamet Kurniawan</Text>
      </View>
      <View style={[styles.frame6, styles.frameFlexBox]}>
        <Text style={styles.searchTypo}>Search</Text>
      </View>
      <Image
        style={styles.frameIcon6}
        contentFit="cover"
        source={require("../assets/frame8.png")}
      />
      <Frame />
      <View style={[styles.frame8, styles.frame8Position]}>
  <View style={styles.materialFlexBox}>
    <Image
      style={styles.iconLayout2}
      contentFit="cover"
      source={require("../assets/materialsymbolshomeoutline.png")}
    />
    <Pressable
      style={styles.buttonStyle} // Tambahkan gaya tombol
      onPress={() => navigation.navigate("Categories")}
    >
      <Text style={styles.buttonText}>Go to Categories</Text>
    </Pressable>
    <Image
      style={styles.iconLayout2}
      contentFit="cover"
      source={require("../assets/tablercategory.png")}
    />
          <Image
            style={styles.iconLayout2}
            contentFit="cover"
            source={require("../assets/icoutlineaccesstime.png")}
          />
          <Image
            style={styles.iconLayout2}
            contentFit="cover"
            source={require("../assets/ictwotonemarkunreadchatalt.png")}
          />
          <Image
            style={styles.iconLayout2}
            contentFit="cover"
            source={require("../assets/mdiaccount.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.frameIcon7, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/frame9.png")}
      />
      <View style={[styles.frame9, styles.frameFlexBox]}>
        <Text style={styles.andrewTypo}>
          Dr. Andrew is an experienced dentist with over 10 years of practice.
          He specializes in general dentistry and offers a range of services.
        </Text>
      </View>
      <View style={[styles.frame10, styles.frameFlexBox]}>
        <View style={styles.frameInnerLayout} />
      </View>
      <View style={[styles.frame11, styles.frameFlexBox]}>
        <View style={styles.rectangleViewLayout} />
      {/* Navigasi untuk Book */}
      <Pressable onPress={() => navigation.navigate('Appointment')}>
        <Text style={[styles.book1, styles.bookTypo]}>Book</Text>
      </Pressable>
      {/* Navigasi untuk Available */}
      <Pressable onPress={() => navigation.navigate('Messages')}>
        <Text style={[styles.available1, styles.availableTypo]}>Available</Text>
      </Pressable>
      </View>
      <Frame frameTop={470} frameWidth={495} dentistLeft={92} />
      <View style={[styles.frame14, styles.frameFlexBox]}>
        <View style={styles.childLayout} />
      </View>
      <View style={[styles.frame15, styles.frame15Position]}>
        <View style={[styles.homePage1, styles.homeBorder]}>
          <View style={[styles.homePageChild, styles.iconPosition]} />
          <View style={[styles.frameGroup, styles.frameLayout]}>
            <View style={styles.raphaelchargingParent}>
              <Image
                style={[styles.raphaelchargingIcon, styles.frame15Position]}
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
            <Text style={styles.text1}>9:45</Text>
          </View>
          <Text style={[styles.lookingFor1, styles.iconPosition]}>
            Looking For
          </Text>
          <Text style={[styles.popular, styles.popularTypo]}>Popular</Text>
          <Text style={[styles.listOfDoctors, styles.popularTypo]}>
            List of Doctors
          </Text>
          <Image
            style={[styles.image1Icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/image-1.png")}
          />
          <Image
            style={[styles.profileIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/profile.png")}
          />
          <Image
            style={[styles.image2Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-2.png")}
          />
          <Image
            style={[styles.image3Icon, styles.image3IconPosition]}
            contentFit="cover"
            source={require("../assets/image-3.png")}
          />
          <Image
            style={[styles.image4Icon, styles.image4IconPosition]}
            contentFit="cover"
            source={require("../assets/image-2.png")}
          />
          <Text style={[styles.doctors1, styles.iconPosition]}>Doctors</Text>
          <Text style={[styles.more, styles.doctorsTypo]}>More</Text>
          <Text style={[styles.dentists1, styles.dentists1Position]}>
            Dentists
          </Text>
          <Text style={[styles.personalTrainers1, styles.image4IconPosition]}>
            Personal Trainers
          </Text>
          <Text style={[styles.hairdressers1, styles.image3IconPosition]}>
            Hairdressers
          </Text>
          <Image
            style={[styles.materialSymbolssearchIcon, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/materialsymbolssearch.png")}
          />
          <Text style={[styles.muhammadRafiAgnil, styles.slametKurniawanTypo]}>
            Aidil Muhammad Zaki
          </Text>
          <Text style={[styles.search1, styles.searchTypo]}>Search</Text>
          <Image
            style={[styles.icbaselineMicIcon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/icbaselinemic.png")}
          />
          <Famous />
          <Famous famousLeft={323} dentistLeft={390} />
          <View style={styles.homePageItem} />
          <View
            style={[
              styles.materialSymbolshomeOutlineGroup,
              styles.materialFlexBox,
            ]}
          >
            <Image
              style={styles.iconLayout2}
              contentFit="cover"
              source={require("../assets/materialsymbolshomeoutline.png")}
            />
            <Pressable
      onPress={() => navigation.navigate("Categories")}
    >
      <Image
        style={styles.iconLayout2}
        contentFit="cover"
        source={require("../assets/tablercategory.png")}
      />
    </Pressable>
            <Image
              style={styles.iconLayout2}
              contentFit="cover"
              source={require("../assets/icoutlineaccesstime.png")}
            />
            <Image
              style={styles.iconLayout2}
              contentFit="cover"
              source={require("../assets/ictwotonemarkunreadchatalt.png")}
            />
            <Image
              style={styles.iconLayout2}
              contentFit="cover"
              source={require("../assets/mdiaccount.png")}
            />
          </View>
          <View style={[styles.homePageInner, styles.iconPosition]} />
          <Image
            style={[styles.icoutlineImageIcon, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/icoutlineimage.png")}
          />
          <Text style={[styles.drAndrew, styles.dentistTypo]}>Dr. Andrew</Text>
          <Text style={[styles.dentist, styles.dentistTypo]}>Dentist</Text>
          <Text style={[styles.drAndrewIs1, styles.dentists1Position]}>
            Dr. Andrew is an experienced dentist with over 10 years of practice.
            He specializes in general dentistry and offers a range of services.
          </Text>
          <View style={[styles.homePageChild1, styles.frameInnerLayout]} />
          <View style={[styles.homePageChild2, styles.dentists1Position]} />
          {/* Navigasi untuk Book */}
      <Pressable onPress={() => navigation.navigate('Appointment')}>
        <Text style={[styles.book1, styles.bookTypo]}>Book</Text>
      </Pressable>

      {/* Navigasi untuk Available */}
      <Pressable onPress={() => navigation.navigate('Messages')}>
        <Text style={[styles.available1, styles.availableTypo]}>Available</Text>
      </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeBorder: {
    height: 932,
    borderWidth: 6,
    borderColor: Color.colorDimgray_400,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_26xl,
    overflow: "hidden",
  },
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
  frameLayout: {
    width: 387,
    height: 32,
  },
  frame15Position: {
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  lookingTypo: {
    width: 199,
    color: Color.colorGray_400,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: -0.4,
    fontSize: FontSize.size_11xl,
    textAlign: "left",
  },
  iconLayout3: {
    height: 66,
    top: 67,
  },
  frameIconPosition: {
    top: 693,
    left: -187,
    position: "absolute",
    overflow: "hidden",
  },
  framePosition1: {
    width: 593,
    left: -187,
    position: "absolute",
    overflow: "hidden",
  },
  doctorsTypo: {
    color: Color.colorDimgray_300,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  iconPosition2: {
    top: 165,
    height: 32,
    position: "absolute",
    overflow: "hidden",
  },
  frame8Position: {
    top: 888,
    position: "absolute",
  },
  iconPosition1: {
    height: 57,
    top: 756,
    position: "absolute",
    overflow: "hidden",
  },
  framePosition: {
    top: 831,
    position: "absolute",
  },
  iconPosition: {
    left: 24,
    position: "absolute",
  },
  popularTypo: {
    width: 153,
    letterSpacing: -0.3,
    fontSize: FontSize.size_lg,
    left: 24,
    color: Color.colorGray_400,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  iconLayout1: {
    width: 84,
    height: 84,
  },
  iconLayout: {
    width: 83,
    top: 291,
    height: 83,
  },
  image3IconPosition: {
    left: 223,
    position: "absolute",
  },
  image4IconPosition: {
    left: 323,
    position: "absolute",
  },
  dentists1Position: {
    left: 124,
    position: "absolute",
  },
  slametKurniawanTypo: {
    color: Color.colorGray_600,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textAlign: "left",
    letterSpacing: -0.2,
  },
  searchTypo: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textAlign: "left",
    letterSpacing: -0.2,
  },
  iconLayout2: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  materialFlexBox: {
    gap: Gap.gap_3xl,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  dentistTypo: {
    left: 123,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  frameInnerLayout: {
    height: 30,
    borderRadius: Border.br_9xs,
    width: 73,
    backgroundColor: Color.colorWhite,
  },
  bookTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
  },
  availableTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
  },
  raphaelchargingIcon: {
    left: 25,
    width: 32,
    height: 32,
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
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    letterSpacing: -0.2,
    position: "absolute",
  },
  frameParent: {
    height: 32,
  },
  frame: {
    top: 15,
    width: 596,
    justifyContent: "center",
    alignItems: "flex-end",
    left: -187,
    position: "absolute",
    overflow: "hidden",
  },
  lookingFor: {
    top: 632,
    left: -187,
    position: "absolute",
  },
  frameIcon: {
    width: 295,
    height: 84,
    top: 290,
    left: -187,
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon1: {
    width: 277,
    left: -187,
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon2: {
    width: 183,
    height: 83,
  },
  frameIcon3: {
    width: 283,
    height: 84,
  },
  frameIcon4: {
    top: 291,
    height: 83,
  },
  doctors: {
    letterSpacing: -0.1,
    fontSize: FontSize.size_3xs,
    color: Color.colorDimgray_300,
  },
  frame1: {
    width: 249,
    top: 386,
    left: -187,
    position: "absolute",
    overflow: "hidden",
  },
  frame2: {
    width: 351,
    top: 386,
    left: -187,
    position: "absolute",
    overflow: "hidden",
  },
  frame3: {
    top: 386,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  frame4: {
    width: 471,
    top: 386,
    left: -187,
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon5: {
    width: 256,
    left: -187,
  },
  frame5: {
    top: 91,
    width: 428,
    left: -187,
    position: "absolute",
    overflow: "hidden",
  },
  frame6: {
    top: 573,
    width: 114,
    left: -187,
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon6: {
    width: 580,
    height: 24,
    top: 170,
    left: -187,
    position: "absolute",
    overflow: "hidden",
  },
  frameItem: {
    width: 73,
    backgroundColor: Color.colorGray_100,
    height: 66,
  },
  frame7: {
    top: 866,
    width: 356,
    left: -187,
    position: "absolute",
    overflow: "hidden",
  },
  frame8: {
    width: 576,
    justifyContent: "center",
    alignItems: "flex-end",
    left: -187,
    overflow: "hidden",
  },
  frameIcon7: {
    width: 286,
    left: -187,
  },
  andrewTypo: {
    width: 257,
    color: Color.colorGray_400,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
  },
  frame9: {
    width: 568,
    top: 764,
    left: -187,
    position: "absolute",
    overflow: "hidden",
  },
  frame10: {
    width: 572,
    top: 824,
    left: -187,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleViewLayout: {
    width: 99,
    backgroundColor: Color.colorGray_400,
    borderRadius: Border.br_7xl,
    height: 30,
  },
  frame11: {
    width: 410,
    top: 824,
    left: -187,
    position: "absolute",
    overflow: "hidden",
  },
  frame12: {
    width: 550,
    justifyContent: "center",
    alignItems: "flex-end",
    left: -187,
    overflow: "hidden",
  },
  frame13: {
    width: 385,
    justifyContent: "center",
    alignItems: "flex-end",
    left: -187,
    overflow: "hidden",
  },
  childLayout: {
    height: 49,
    width: 381,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro_200,
  },
  frame14: {
    top: 158,
    width: 596,
    justifyContent: "center",
    alignItems: "flex-end",
    left: -187,
    position: "absolute",
    overflow: "hidden",
  },
  homePageChild: {
    top: 157,
    height: 49,
    width: 381,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro_200,
  },
  frameGroup: {
    top: 11,
    left: 22,
    height: 32,
    position: "absolute",
  },
  lookingFor1: {
    top: 230,
    width: 199,
    color: Color.colorGray_400,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: -0.4,
    fontSize: FontSize.size_11xl,
    textAlign: "left",
  },
  popular: {
    top: 422,
  },
  listOfDoctors: {
    top: 657,
  },
  image1Icon: {
    left: 24,
    position: "absolute",
    top: 290,
  },
  profileIcon: {
    width: 66,
    height: 66,
    top: 67,
  },
  image2Icon: {
    left: 124,
    position: "absolute",
  },
  image3Icon: {
    width: 84,
    height: 84,
    top: 291,
  },
  image4Icon: {
    width: 83,
    top: 291,
    height: 83,
  },
  doctors1: {
    color: Color.colorDimgray_300,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    letterSpacing: -0.1,
    fontSize: FontSize.size_3xs,
    top: 386,
  },
  more: {
    top: 245,
    left: 370,
    fontSize: FontSize.size_sm,
    letterSpacing: -0.2,
    position: "absolute",
  },
  dentists1: {
    color: Color.colorDimgray_300,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    letterSpacing: -0.1,
    fontSize: FontSize.size_3xs,
    top: 386,
  },
  personalTrainers1: {
    color: Color.colorDimgray_300,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    letterSpacing: -0.1,
    fontSize: FontSize.size_3xs,
    top: 386,
  },
  hairdressers1: {
    color: Color.colorDimgray_300,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    letterSpacing: -0.1,
    fontSize: FontSize.size_3xs,
    top: 386,
  },
  materialSymbolssearchIcon: {
    left: 37,
    width: 32,
  },
  muhammadRafiAgnil: {
    top: 90,
    left: 106,
    position: "absolute",
  },
  search1: {
    top: 171,
    left: 85,
    position: "absolute",
  },
  icbaselineMicIcon: {
    left: 369,
    top: 170,
    width: 24,
    position: "absolute",
  },
  homePageItem: {
    top: 868,
    width: 426,
    height: 64,
    backgroundColor: Color.colorGray_100,
    left: 0,
    position: "absolute",
  },
  materialSymbolshomeOutlineGroup: {
    left: 41,
    top: 888,
    position: "absolute",
  },
  homePageInner: {
    top: 703,
    width: 382,
    height: 163,
    backgroundColor: Color.colorGainsboro_200,
    left: 24,
  },
  icoutlineImageIcon: {
    left: 42,
    borderRadius: Border.br_27xl,
    width: 57,
  },
  drAndrew: {
    top: 715,
    letterSpacing: -0.3,
    fontSize: FontSize.size_lg,
    left: 123,
    color: Color.colorGray_400,
  },
  dentist: {
    top: 737,
    color: Color.colorDimgray_100,
    letterSpacing: -0.2,
    left: 123,
    fontSize: FontSize.size_xs,
  },
  drAndrewIs1: {
    width: 257,
    color: Color.colorGray_400,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
    top: 764,
  },
  homePageChild1: {
    left: 312,
    top: 824,
    position: "absolute",
  },
  homePageChild2: {
    width: 99,
    backgroundColor: Color.colorGray_400,
    borderRadius: Border.br_7xl,
    height: 30,
    top: 824,
  },
  book1: {
    left: 334,
    top: 831,
    position: "absolute",
  },
  available1: {
    left: 148,
    top: 831,
    position: "absolute",
  },
  homePage1: {
    width: 430,
    overflow: "hidden",
  },
  frame15: {
    width: 613,
    justifyContent: "center",
    alignItems: "flex-end",
    left: -187,
  },
  homePage: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
  },
});

export default HomePage;

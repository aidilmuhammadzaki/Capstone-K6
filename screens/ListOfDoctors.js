import * as React from "react";
import { StatusBar, StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Frame20 from "../components/Frame20";
import Frame2 from "../components/Frame2";
import Frame22 from "../components/Frame22";
import {
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const ListOfDoctors = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.listOfDoctors}>
      <StatusBar />
      <View style={styles.frame}>
        <Text style={styles.doctors}>Doctors</Text>
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
        <Pressable
          style={styles.frameChild}
          onPress={() => navigation.navigate("HomePage")}
        />
      </View>
      <View style={styles.frame1}>
        <Image
          style={styles.materialSymbolssearchIcon}
          contentFit="cover"
          source={require("../assets/materialsymbolssearch.png")}
        />
        <Text style={styles.search}>Search</Text>
        <Image
          style={styles.icbaselineMicIcon}
          contentFit="cover"
          source={require("../assets/icbaselinemic.png")}
        />
      </View>
      <Text style={styles.listOfDoctors1}>List of Doctors</Text>
      <Frame20 />
      <Frame2 drRahul="Dr. Rahul" />
      <Frame2 drRahul="Dr. Jessi" />
      <Frame22 />
    </View>
  );
};

const styles = StyleSheet.create({
  doctors: {
    position: "absolute",
    top: 0,
    left: 146,
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.4,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray_400,
    textAlign: "left",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  wrapper: {
    position: "absolute",
    left: 3,
    top: 15,
    width: 2,
    height: 0,
  },
  frameChild: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: Color.colorWhite,
    width: 27,
    height: 26,
    opacity: 0,
  },
  frame: {
    width: 235,
    height: 29,
    overflow: "hidden",
    marginLeft: 24,
  },
  materialSymbolssearchIcon: {
    position: "absolute",
    top: 8,
    left: 13,
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  search: {
    position: "absolute",
    top: 14,
    left: 61,
    fontSize: FontSize.size_base,
    letterSpacing: -0.2,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorGray_200,
    textAlign: "left",
  },
  icbaselineMicIcon: {
    position: "absolute",
    top: 13,
    left: 345,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  frame1: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro_200,
    width: 381,
    height: 49,
    overflow: "hidden",
    marginLeft: 24,
  },
  listOfDoctors1: {
    fontSize: FontSize.size_lg,
    letterSpacing: -0.3,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorGray_400,
    textAlign: "left",
    width: 153,
    height: 22,
    marginLeft: 24,
  },
  listOfDoctors: {
    position: "relative",
    borderRadius: Border.br_26xl,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorDimgray_400,
    borderWidth: 6,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: Padding.p_2xs,
    gap: Gap.gap_5xs,
  },
});

export default ListOfDoctors;

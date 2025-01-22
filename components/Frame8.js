import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import Frame1 from "./Frame1";
import {
  Border,
  Color,
  FontSize,
  FontFamily,
  Gap,
  Padding,
} from "../GlobalStyles";

const Frame8 = () => {
  return (
    <View style={styles.frame}>
      <View style={styles.frame1}>
        <View style={styles.frame2}>
          <View style={styles.frame3}>
            <View style={styles.frameChild} />
            <View style={styles.parent}>
              <Text style={styles.text}>8</Text>
              <Text style={styles.text1}>9</Text>
              <Text style={styles.text1}>10</Text>
              <Text style={styles.text1}>11</Text>
            </View>
          </View>
          <View style={styles.frameParent}>
            <View style={styles.frame4}>
              <Text style={styles.tue}>Tue</Text>
              <Text style={styles.mon}>Mon</Text>
            </View>
            <View style={styles.frame5}>
              <Text style={styles.tue}>Wed</Text>
              <Text style={styles.tue}>Thu</Text>
            </View>
          </View>
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.upcomingWrapper}>
            <Text style={styles.upcoming}>Upcoming</Text>
          </View>
          <View style={styles.completedWrapper}>
            <Text style={styles.completed}>Completed</Text>
          </View>
          <View style={styles.completedWrapper}>
            <Text style={styles.cancelled}>Cancelled</Text>
          </View>
        </View>
      </View>
      <View style={styles.frame6}>
        <Frame1 aM="11:30AM" drAndrew="Dr. Andrew" dentist="Dentist" />
        <Frame1 aM="12:30AM" drAndrew="Prof. Jessi" dentist="Business Guide" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChild: {
    position: "relative",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray_500,
    width: 68,
    height: 84,
  },
  text: {
    position: "relative",
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.4,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorWhite,
    textAlign: "left",
  },
  text1: {
    position: "relative",
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.4,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
    textAlign: "left",
  },
  parent: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    gap: Gap.gap_7xl,
    height: 29,
    marginLeft: 26,
    marginTop: -73,
  },
  frame3: {
    width: 342,
    height: 84,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  tue: {
    position: "relative",
    fontSize: FontSize.size_base,
    letterSpacing: -0.2,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorDimgray_200,
    textAlign: "left",
  },
  mon: {
    position: "relative",
    fontSize: FontSize.size_base,
    letterSpacing: -0.2,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorWhite,
    textAlign: "left",
  },
  frame4: {
    width: 82,
    height: 19,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_7xs,
  },
  frame5: {
    width: 125,
    height: 19,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_5xl,
  },
  frameParent: {
    width: 332,
    height: 19,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_8xs,
    marginLeft: 17,
    marginTop: -31,
  },
  frame2: {
    backgroundColor: Color.colorLightcyan_200,
    width: 382,
    height: 106,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingLeft: Padding.p_6xs,
    paddingRight: Padding.p_7xl,
  },
  upcoming: {
    position: "relative",
    fontSize: FontSize.size_sm,
    letterSpacing: -0.2,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorWhite,
    textAlign: "left",
  },
  upcomingWrapper: {
    backgroundColor: Color.colorGray_500,
    width: 100,
    height: 40,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_2xs,
  },
  completed: {
    position: "absolute",
    top: 11,
    left: 141,
    fontSize: FontSize.size_sm,
    letterSpacing: -0.2,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
    textAlign: "left",
  },
  completedWrapper: {
    position: "relative",
    backgroundColor: Color.colorGainsboro_200,
    width: 100,
    height: 40,
  },
  cancelled: {
    position: "absolute",
    top: 11,
    left: 282,
    fontSize: FontSize.size_sm,
    letterSpacing: -0.2,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
    textAlign: "left",
  },
  frameGroup: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: Gap.gap_lg,
  },
  frame1: {
    width: 382,
    height: 170,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_5xs,
  },
  frame6: {
    width: 382,
    height: 238,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_5xs,
  },
  frame: {
    width: 382,
    height: 453,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_xl,
  },
});

export default Frame8;

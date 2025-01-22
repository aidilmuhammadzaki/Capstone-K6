import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Gap, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Frame14 = () => {
  return (
    <View style={styles.frame}>
      <View style={styles.frame1}>
        <Text style={styles.july}>July</Text>
      </View>
      <View style={[styles.frame2, styles.frameFlexBox]}>
        <View style={styles.frame3}>
          <View style={styles.frameChild} />
          <View style={[styles.parent, styles.parentFlexBox]}>
            <Text style={styles.sTypo}>7</Text>
            <Text style={styles.sTypo}>14</Text>
            <Text style={styles.sTypo}>21</Text>
            <Text style={styles.sTypo}>28</Text>
          </View>
          <View style={[styles.group, styles.parentFlexBox]}>
            <Text style={styles.sTypo}>4</Text>
            <Text style={styles.sTypo}>11</Text>
            <Text style={styles.sTypo}>18</Text>
            <Text style={styles.sTypo}>25</Text>
          </View>
          <View style={[styles.container, styles.mPosition]}>
            <Text style={styles.sTypo}>1</Text>
            <Text style={styles.sTypo}>8</Text>
            <Text style={styles.sTypo}>15</Text>
            <Text style={styles.sTypo}>22</Text>
            <Text style={styles.sTypo}>29</Text>
          </View>
          <View style={[styles.frameView, styles.parentFlexBox]}>
            <Text style={styles.sTypo}>5</Text>
            <Text style={styles.sTypo}>12</Text>
            <Text style={styles.sTypo}>19</Text>
            <Text style={styles.sTypo}>26</Text>
          </View>
          <View style={[styles.parent1, styles.parentFlexBox]}>
            <Text style={styles.sTypo}>2</Text>
            <Text style={styles.sTypo}>9</Text>
            <Text style={styles.sTypo}>16</Text>
            <Text style={styles.sTypo}>23</Text>
            <Text style={styles.sTypo}>30</Text>
          </View>
          <View style={[styles.parent2, styles.parentFlexBox]}>
            <Text style={styles.sTypo}>6</Text>
            <Text style={styles.sTypo}>13</Text>
            <Text style={styles.sTypo}>20</Text>
            <Text style={styles.sTypo}>27</Text>
          </View>
          <View style={[styles.parent3, styles.parentFlexBox]}>
            <Text style={styles.sTypo}>3</Text>
            <Text style={styles.sTypo}>10</Text>
            <Text style={styles.sTypo}>17</Text>
            <Text style={styles.sTypo}>24</Text>
            <Text style={styles.sTypo}>31</Text>
          </View>
        </View>
      </View>
      <View style={[styles.frame4, styles.frameFlexBox]}>
        <View style={styles.frame5}>
          <Text style={[styles.s, styles.sTypo]}>S</Text>
          <Text style={[styles.m, styles.mPosition]}>M</Text>
          <Text style={[styles.t, styles.sTypo]}>T</Text>
          <Text style={[styles.w, styles.sTypo]}>W</Text>
          <Text style={[styles.t1, styles.sTypo]}>T</Text>
          <Text style={[styles.f, styles.sTypo]}>F</Text>
          <Text style={[styles.s1, styles.sTypo]}>S</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "flex-end",
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  parentFlexBox: {
    gap: Gap.gap_5xs,
    alignItems: "center",
  },
  mPosition: {
    left: 59,
    top: 0,
    position: "absolute",
  },
  sTypo: {
    color: Color.colorGray_700,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: -0.4,
    fontSize: FontSize.size_5xl,
  },
  july: {
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: -0.4,
    fontSize: FontSize.size_5xl,
  },
  frame1: {
    left: 5,
    width: 378,
    justifyContent: "center",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    top: 45,
    left: 51,
    borderRadius: Border.br_30xl,
    backgroundColor: Color.colorPink,
    width: 290,
    height: 45,
    position: "absolute",
  },
  parent: {
    top: 53,
    left: 0,
    position: "absolute",
  },
  group: {
    left: 244,
    top: 0,
    position: "absolute",
  },
  container: {
    gap: Gap.gap_5xs,
    alignItems: "center",
  },
  frameView: {
    left: 302,
    top: 0,
    position: "absolute",
  },
  parent1: {
    left: 117,
    top: 0,
    position: "absolute",
  },
  parent2: {
    left: 355,
    top: 0,
    position: "absolute",
  },
  parent3: {
    left: 181,
    top: 0,
    position: "absolute",
  },
  frame3: {
    width: 385,
    height: 241,
    overflow: "hidden",
  },
  frame2: {
    top: 113,
    left: 0,
    width: 388,
  },
  s: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  m: {
    color: Color.colorGray_700,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: -0.4,
    fontSize: FontSize.size_5xl,
  },
  t: {
    left: 123,
    top: 0,
    position: "absolute",
  },
  w: {
    left: 182,
    top: 0,
    position: "absolute",
  },
  t1: {
    left: 247,
    top: 0,
    position: "absolute",
  },
  f: {
    left: 307,
    top: 0,
    position: "absolute",
  },
  s1: {
    left: 363,
    top: 0,
    position: "absolute",
  },
  frame5: {
    width: 379,
    height: 29,
    overflow: "hidden",
  },
  frame4: {
    top: 61,
    left: 3,
    width: 382,
  },
  frame: {
    height: 354,
    overflow: "hidden",
    width: 388,
  },
});

export default Frame14;

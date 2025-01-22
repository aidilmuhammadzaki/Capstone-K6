import * as React from "react";
import { StyleSheet, View } from "react-native";
import Frame18 from "../components/Frame18";
import Frame17 from "../components/Frame17";
import Frame19 from "../components/Frame19";
import { Border, Color, Padding } from "../GlobalStyles";

const Profile = () => {
  return (
    <View style={styles.profile}>
      <Frame18 />
      <View style={styles.frame}>
        <Frame17 />
        <Frame19 />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    width: 382,
    height: 675,
    gap: 187,
    overflow: "hidden",
  },
  profile: {
    borderRadius: Border.br_26xl,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorDimgray_400,
    borderWidth: 6,
    flex: 1,
    width: "100%",
    height: 932,
    justifyContent: "center",
    paddingLeft: Padding.p_3xl,
    paddingTop: Padding.p_2xs,
    paddingRight: 21,
    gap: 22,
    overflow: "hidden",
  },
});

export default Profile;

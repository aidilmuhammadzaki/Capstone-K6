import * as React from "react";
import { StyleSheet, View } from "react-native";
import Frame7 from "./Frame7";

const Frame9 = () => {
  return (
    <View style={styles.frame}>
      <Frame7 />
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    width: 430,
    overflow: "hidden",
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

export default Frame9;

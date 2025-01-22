import * as React from "react";
import { StyleSheet, View } from "react-native";
import Frame2 from "./Frame2";

const Frame3 = () => {
  return (
    <View style={styles.frame}>
      <Frame2 drRahul="Dr. Rahul" />
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    width: 404,
    overflow: "hidden",
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

export default Frame3;

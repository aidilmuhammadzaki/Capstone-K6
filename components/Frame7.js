import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Gap, Color } from "../GlobalStyles";

const Frame7 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frame}>
      <View style={styles.materialSymbolshomeOutlineParent}>
        <Image
          style={styles.materialSymbolshomeOutlineIcon}
          contentFit="cover"
          source={require("../assets/materialsymbolshomeoutline1.png")}
        />
        <Image
          style={styles.materialSymbolshomeOutlineIcon}
          contentFit="cover"
          source={require("../assets/tablercategory1.png")}
        />
        <Image
          style={styles.materialSymbolshomeOutlineIcon}
          contentFit="cover"
          source={require("../assets/icoutlineaccesstime1.png")}
        />
        <Image
          style={styles.materialSymbolshomeOutlineIcon}
          contentFit="cover"
          source={require("../assets/ictwotonemarkunreadchatalt1.png")}
        />
        <Image
          style={styles.materialSymbolshomeOutlineIcon}
          contentFit="cover"
          source={require("../assets/mdiaccount1.png")}
        />
      </View>
      <Pressable
        style={styles.frameChild}
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  materialSymbolshomeOutlineIcon: {
    position: "relative",
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  materialSymbolshomeOutlineParent: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    gap: Gap.gap_3xl,
  },
  frameChild: {
    position: "relative",
    backgroundColor: Color.colorGray_100,
    width: 97,
    height: 66,
    marginLeft: -56,
  },
  frame: {
    width: 389,
    height: 66,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginLeft: 41,
  },
});

export default Frame7;

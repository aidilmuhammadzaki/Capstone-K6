import * as React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Gap } from "../GlobalStyles";

const Frame19 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frame}>
      <Pressable
        style={styles.frameChild}
        onPress={() => navigation.navigate("HomePage")}
      />
      <View style={styles.materialSymbolshomeOutlineParent}>
        <Image
          style={styles.materialSymbolshomeOutlineIcon}
          contentFit="cover"
          source={require("../assets/materialsymbolshomeoutline3.png")}
        />
        <Image
          style={styles.materialSymbolshomeOutlineIcon}
          contentFit="cover"
          source={require("../assets/tablercategory3.png")}
        />
        <Image
          style={styles.materialSymbolshomeOutlineIcon}
          contentFit="cover"
          source={require("../assets/icoutlineaccesstime3.png")}
        />
        <Image
          style={styles.materialSymbolshomeOutlineIcon}
          contentFit="cover"
          source={require("../assets/ictwotonemarkunreadchatalt3.png")}
        />
        <Image
          style={styles.materialSymbolshomeOutlineIcon}
          contentFit="cover"
          source={require("../assets/mdiaccount2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChild: {
    backgroundColor: Color.colorGray_100,
    width: 72,
    height: 69,
  },
  materialSymbolshomeOutlineIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  materialSymbolshomeOutlineParent: {
    alignItems: "flex-end",
    gap: Gap.gap_3xl,
    marginLeft: -53,
    flexDirection: "row",
  },
  frame: {
    width: 367,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    height: 69,
  },
});

export default Frame19;

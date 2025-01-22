import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const LogoPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoWrapper}>
        <Image
          style={styles.logoImage}
          contentFit="contain"
          source={require("../assets/images.png")} // Ganti dengan path gambar logo Anda
        />
      </View>

      {/* Title */}
      <Text style={styles.title}>RSUD MANDAU</Text>

      {/* Button */}
      <Pressable
        style={styles.letsGoButton}
        onPress={() => navigation.navigate("Login")} // Navigasi ke halaman Login
      >
        <Text style={styles.letsGoText}>Let’s Go</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
  logoWrapper: {
    width: 200,
    height: 200,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "200%",
    height: "200%",
  },
  title: {
    fontSize: 28,
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    marginBottom: 50,
    letterSpacing: -0.5,
  },
  letsGoButton: {
    position: "absolute",
    bottom: 50,
    backgroundColor: Color.colorDimgray_600,
    borderRadius: Border.br_6xs,
    paddingVertical: 12,
    paddingHorizontal: 40,
  },
  letsGoText: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interMedium,
    color: Color.colorWhite,
    textAlign: "center",
  },
});

export default LogoPage;

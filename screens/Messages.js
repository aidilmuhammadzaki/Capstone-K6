import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Gap, Border } from "../GlobalStyles";

const Messages = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.messages}>
      <View style={styles.frameParent}>
        <View style={styles.raphaelchargingParent}>
          <Image
            style={[styles.raphaelchargingIcon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/raphaelcharging.png")}
          />
          <Text style={[styles.text, styles.textFlexBox]}>98%</Text>
        </View>
        <Image
          style={styles.materialSymbolssignalWifi4Icon}
          contentFit="cover"
          source={require("../assets/materialsymbolssignalwifi4bar.png")}
        />
        <Image
          style={[styles.frameChild, styles.frameChildPosition]}
          contentFit="cover"
          source={require("../assets/group-7.png")}
        />
        <Text style={styles.text1}>9:45</Text>
      </View>
      <Image
        style={[styles.materialSymbolssearchIcon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/materialsymbolssearch.png")}
      />
      <Text style={[styles.messages1, styles.textFlexBox]}>Messages</Text>
      <Text style={[styles.search, styles.brotherTypo]}>Search</Text>
      <Pressable
        style={[styles.hiBrotherSorryContainer, styles.brotherPosition]}
        onPress={() => navigation.navigate("Chat")}
      >
        <Text style={styles.brotherTypo}>Hi brother, sorry for late...</Text>
      </Pressable>
      <Text style={[styles.hiBrotherSorry, styles.brotherPosition]}>
        Hi brother, sorry for late...
      </Text>
      <Text style={[styles.hiBrotherSorry1, styles.drJessiPosition]}>
        Hi brother, sorry for late...
      </Text>
      <Text style={[styles.hiBrotherSorry2, styles.brotherPosition]}>
        Hi brother, sorry for late...
      </Text>
      <Text style={[styles.active, styles.activeTypo]}>Active</Text>
      <Text style={[styles.messages2, styles.activeTypo]}>Messages</Text>
      <Pressable
        style={[styles.drAndrew, styles.brotherPosition]}
        onPress={() => navigation.navigate("Chat")}
      >
        <Text style={styles.activeTypo}>Dr. Andrew</Text>
      </Pressable>
      <Text style={[styles.drSmith, styles.activeTypo]}>Dr. Smith</Text>
      <Text style={[styles.drJessi, styles.activeTypo]}>Dr. Jessi</Text>
      <Text style={[styles.drRahul, styles.activeTypo]}>Dr. Rahul</Text>
      <Image
        style={[styles.icbaselineMicIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/icbaselinemic.png")}
      />
      <Image
        style={styles.messagesChild}
        contentFit="cover"
        source={require("../assets/arrow-2.png")}
      />
      <View style={[styles.messagesItem, styles.frameChildPosition]} />
      <View style={styles.materialSymbolshomeOutlineParent}>
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/materialsymbolshomeoutline1.png")}
        />
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/tablercategory1.png")}
        />
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/icoutlineaccesstime2.png")}
        />
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/ictwotonemarkunreadchatalt2.png")}
        />
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/mdiaccount1.png")}
        />
      </View>
      <Image
        style={[styles.messagesInner, styles.messagesChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.messagesChildLayout]}
        onPress={() => navigation.navigate("Chat")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
      </Pressable>
      <Image
        style={[styles.ellipseIcon, styles.messagesChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.messagesChild1, styles.messagesChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.messagesChild2, styles.messagesChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.messagesChild3, styles.messagesChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.messagesChild4, styles.messagesChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.messagesChild5, styles.messagesChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.messagesChild6, styles.messagesChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Pressable
        style={[styles.materialSymbolsphotoCamera, styles.materialIconPosition]}
        onPress={() => navigation.navigate("Chat")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/materialsymbolsphotocameraoutline.png")}
        />
      </Pressable>
      <Image
        style={[
          styles.materialSymbolsphotoCameraIcon,
          styles.materialIconPosition,
        ]}
        contentFit="cover"
        source={require("../assets/materialsymbolsphotocameraoutline.png")}
      />
      <Image
        style={[
          styles.materialSymbolsphotoCameraIcon1,
          styles.materialIconPosition,
        ]}
        contentFit="cover"
        source={require("../assets/materialsymbolsphotocameraoutline.png")}
      />
      <Image
        style={[
          styles.materialSymbolsphotoCameraIcon2,
          styles.materialIconPosition,
        ]}
        contentFit="cover"
        source={require("../assets/materialsymbolsphotocameraoutline.png")}
      />
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate("Chat")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-11.png")}
        />
      </Pressable>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("Categories")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout2: {
    width: 32,
    height: 32,
    position: "absolute",
    overflow: "hidden",
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  frameChildPosition: {
    left: 0,
    position: "absolute",
  },
  brotherTypo: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textAlign: "left",
    letterSpacing: -0.2,
  },
  brotherPosition: {
    left: 122,
    position: "absolute",
  },
  drJessiPosition: {
    left: 121,
    position: "absolute",
  },
  activeTypo: {
    color: Color.colorDarkslategray,
    letterSpacing: -0.3,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  iconLayout1: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  messagesChildLayout: {
    height: 71,
    width: 71,
    position: "absolute",
  },
  materialIconPosition: {
    left: 375,
    width: 32,
    height: 32,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  raphaelchargingIcon: {
    left: 25,
    top: 0,
    width: 32,
  },
  text: {
    top: 9,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    letterSpacing: -0.2,
    textAlign: "left",
    left: 330,
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
    top: 11,
    left: 22,
    width: 387,
    height: 32,
    position: "absolute",
  },
  materialSymbolssearchIcon: {
    top: 128,
    left: 37,
  },
  messages1: {
    top: 67,
    left: 158,
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.4,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray_400,
  },
  search: {
    top: 134,
    left: 85,
    position: "absolute",
  },
  hiBrotherSorryContainer: {
    top: 422,
  },
  hiBrotherSorry: {
    top: 517,
    color: Color.colorGray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textAlign: "left",
    letterSpacing: -0.2,
  },
  hiBrotherSorry1: {
    top: 612,
    color: Color.colorGray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textAlign: "left",
    letterSpacing: -0.2,
  },
  hiBrotherSorry2: {
    top: 707,
    color: Color.colorGray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textAlign: "left",
    letterSpacing: -0.2,
  },
  active: {
    top: 193,
    left: 29,
    position: "absolute",
  },
  messages2: {
    top: 336,
    left: 24,
    position: "absolute",
  },
  drAndrew: {
    top: 398,
  },
  drSmith: {
    top: 493,
    left: 122,
    position: "absolute",
  },
  drJessi: {
    top: 588,
    left: 121,
    position: "absolute",
  },
  drRahul: {
    top: 683,
    left: 122,
    position: "absolute",
  },
  icbaselineMicIcon: {
    top: 133,
    left: 369,
    position: "absolute",
  },
  messagesChild: {
    top: 82,
    left: 27,
    width: 2,
    height: 0,
    position: "absolute",
  },
  messagesItem: {
    top: 868,
    backgroundColor: Color.colorGray_100,
    width: 426,
    height: 64,
  },
  materialSymbolshomeOutlineParent: {
    top: 888,
    left: 39,
    flexDirection: "row",
    alignItems: "flex-end",
    gap: Gap.gap_3xl,
    position: "absolute",
    overflow: "hidden",
  },
  messagesInner: {
    top: 241,
    width: 71,
    left: 24,
  },
  wrapper: {
    top: 384,
    left: 24,
  },
  ellipseIcon: {
    top: 479,
    left: 24,
  },
  messagesChild1: {
    top: 574,
    left: 24,
  },
  messagesChild2: {
    top: 669,
    left: 24,
  },
  messagesChild3: {
    left: 119,
    top: 241,
    width: 71,
  },
  messagesChild4: {
    left: 214,
    top: 241,
    width: 71,
  },
  messagesChild5: {
    left: 309,
    top: 241,
    width: 71,
  },
  messagesChild6: {
    left: 404,
    top: 241,
    width: 71,
  },
  icon1: {
    overflow: "hidden",
  },
  materialSymbolsphotoCamera: {
    top: 404,
  },
  materialSymbolsphotoCameraIcon: {
    top: 499,
    overflow: "hidden",
  },
  materialSymbolsphotoCameraIcon1: {
    top: 594,
    overflow: "hidden",
  },
  materialSymbolsphotoCameraIcon2: {
    top: 689,
    overflow: "hidden",
  },
  container: {
    left: 339,
    top: 414,
    width: 12,
    height: 12,
    position: "absolute",
  },
  rectanglePressable: {
    top: 63,
    width: 38,
    height: 37,
    opacity: 0,
    left: 24,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  messages: {
    borderRadius: Border.br_26xl,
    borderStyle: "solid",
    borderColor: Color.colorDimgray_400,
    borderWidth: 6,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Messages;

import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView } from "react-native";
import FrameComponent from "../components/FrameComponent";
import { useNavigation } from "@react-navigation/native";
import {
  FontSize,
  FontFamily,
  Border,
  Color,
  Gap,
  Padding,
} from "../GlobalStyles";

const Chat = () => {
  const navigation = useNavigation();
  const [inputText, setInputText] = useState(""); // State untuk input text
  const [messages, setMessages] = useState([
    { text: "Hi Brother, Sorry for the late response", sender: "doctor" },
    { text: "No Problem Doctor, I understand", sender: "user" },
    { text: "So now tell me what’s your problem", sender: "doctor" },
  ]);

  const sendMessage = () => {
    if (inputText.trim() !== "") {
      setMessages([...messages, { text: inputText, sender: "user" }]);
      setInputText(""); // Kosongkan input setelah dikirim
    }
  };

  return (
    <View style={styles.chat}>
      {/* Header */}
      <View style={styles.frameParent}>
        <View style={styles.raphaelchargingParent}>
          <Image
            style={[styles.raphaelchargingIcon, styles.iconLayout]}
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
          style={[styles.frameChild, styles.chatItemPosition]}
          contentFit="cover"
          source={require("../assets/group-7.png")}
        />
        <Text style={[styles.text1, styles.text1Typo]}>9:45</Text>
      </View>
      <Text style={[styles.drAndrew, styles.textFlexBox]}>Dr. Andrew</Text>

      {/* Chat Messages */}
      <ScrollView style={styles.messagesContainer}>
        {messages.map((message, index) => (
          <View
            key={index}
            style={
              message.sender === "user"
                ? styles.userMessageContainer
                : styles.doctorMessageContainer
            }
          >
            <Text
              style={
                message.sender === "user"
                  ? styles.userMessageText
                  : styles.doctorMessageText
              }
            >
              {message.text}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Input Bar */}
      <View style={styles.chatChild1}>
        <TextInput
          style={[styles.typeHere, styles.textInput]}
          placeholder="Type here"
          placeholderTextColor={Color.colorGray_700}
          value={inputText}
          onChangeText={setInputText}
        />
        <Pressable onPress={sendMessage}>
          <Image
            style={[styles.mditickIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/mditick.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chat: {
    flex: 1,
    borderRadius: Border.br_26xl,
    borderStyle: "solid",
    borderColor: Color.colorDimgray_400,
    borderWidth: 6,
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
  frameParent: {
    top: 11,
    left: 22,
    width: 387,
    height: 32,
    position: "absolute",
  },
  raphaelchargingParent: {
    width: 57,
    left: 330,
    top: 0,
    height: 32,
    position: "absolute",
  },
  raphaelchargingIcon: {
    left: 25,
    width: 32,
    top: 0,
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
    color: Color.colorBlack,
    position: "absolute",
  },
  drAndrew: {
    top: 67,
    left: 153,
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.4,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray_400,
    position: "absolute",
  },
  messagesContainer: {
    flex: 1,
    marginTop: 120,
    paddingHorizontal: 20,
  },
  userMessageContainer: {
    alignSelf: "flex-end",
    backgroundColor: Color.colorDimgray_600,
    borderRadius: Border.br_3xs,
    padding: 10,
    marginVertical: 5,
  },
  doctorMessageContainer: {
    alignSelf: "flex-start",
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_3xs,
    padding: 10,
    marginVertical: 5,
  },
  userMessageText: {
    color: Color.colorWhite,
  },
  doctorMessageText: {
    color: Color.colorBlack,
  },
  chatChild1: {
    top: 800,
    borderRadius: 50,
    width: 382,
    height: 64,
    position: "absolute",
    left: 24,
    backgroundColor: Color.colorGainsboro_200,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  typeHere: {
    flex: 1,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray_700,
    marginRight: 10,
  },
  mditickIcon: {
    width: 32,
    height: 32,
  },
});

export default Chat;

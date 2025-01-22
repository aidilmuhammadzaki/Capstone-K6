import * as React from "react";
import { Pressable, Text, StyleSheet, View, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

// Komponen tambahan
import Frame10 from "../components/Frame10";
import Frame11 from "../components/Frame11";

// Global styles
import {
  FontSize,
  FontFamily,
  Color,
  Border,
  Gap,
  Padding,
} from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.container}>
      {/* Header Image or Section */}
      <Frame10 />

      {/* Login Form */}
      <View style={styles.formContainer}>
        <Text style={styles.title}></Text>

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor={Color.colorGray_400}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        {/* Forgot Password */}
        <Pressable
          style={styles.forgotPasswordWrapper}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </Pressable>

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={Color.colorGray_400}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Text style={styles.showPasswordText}>Show Password</Text>

        {/* Continue Button */}
        <Pressable
          style={styles.continueButton}
          onPress={() => navigation.navigate("HomePage")}
        >
          <Text style={styles.continueText}>Continue</Text>
        </Pressable>

        {/* Divider */}
        <Text style={styles.orText}>or</Text>

        {/* Google Sign-In Button */}
        <Pressable style={styles.googleButton}>
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </Pressable>

        {/* Sign Up Link */}
        <Text style={styles.signupText}>
          Don’t have an account?{" "}
          <Pressable onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.signupLink}>Sign up</Text>
          </Pressable>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: FontSize.size_2xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
    marginBottom: 20,
  },
  formContainer: {
    gap: 15,
  },
  input: {
    height: 50,
    borderColor: Color.colorGray_300,
    borderWidth: 1,
    borderRadius: Border.br_6xs,
    paddingHorizontal: 15,
    fontSize: FontSize.size_base,
    color: Color.colorGray_700,
  },
  forgotPasswordWrapper: {
    alignSelf: "flex-end",
  },
  forgotPasswordText: {
    fontSize: FontSize.size_sm,
    color: Color.colorGray_400,
    fontFamily: FontFamily.interSemiBold,
  },
  showPasswordText: {
    alignSelf: "flex-end",
    fontSize: FontSize.size_xs,
    color: Color.colorGray_400,
    marginTop: -10,
  },
  continueButton: {
    backgroundColor: Color.colorDimgray_600,
    borderRadius: Border.br_6xs,
    alignItems: "center",
    justifyContent: "center",
    height: 48,
  },
  continueText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interMedium,
  },
  orText: {
    textAlign: "center",
    fontSize: FontSize.size_base,
    color: Color.colorGray_500,
  },
  googleButton: {
    backgroundColor: Color.colorGray_200,
    borderRadius: Border.br_6xs,
    alignItems: "center",
    justifyContent: "center",
    height: 48,
  },
  googleButtonText: {
    color: Color.colorGray_700,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interMedium,
  },
  signupText: {
    textAlign: "center",
    fontSize: FontSize.size_sm,
    color: Color.colorGray_500,
    marginTop: 20,
  },
  signupLink: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
  },
});

export default Login;

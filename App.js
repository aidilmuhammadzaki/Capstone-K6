const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import HomePage from "./screens/HomePage";
import Notifications from "./screens/Notifications";
import ForgotPassword from "./screens/ForgotPassword";
import LogoPage from "./screens/LogoPage";
import SignUp from "./screens/SignUp";
import MyAppointments from "./screens/MyAppointments";
import Login from "./screens/Login";
import Messages from "./screens/Messages";
import Appointment from "./screens/Appointment";
import ResetPassword from "./screens/ResetPassword";
import Categories from "./screens/Categories";
import Otp from "./screens/Otp";
import Booking from "./screens/Booking";
import PersonalDetails from "./screens/PersonalDetails";
import Profile from "./screens/Profile";
import Chat from "./screens/Chat";
import ListOfDoctors from "./screens/ListOfDoctors";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="LogoPage"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notifications"
              component={Notifications}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LogoPage"
              component={LogoPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyAppointments"
              component={MyAppointments}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Messages"
              component={Messages}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Appointment"
              component={Appointment}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ResetPassword"
              component={ResetPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Categories"
              component={Categories}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Otp"
              component={Otp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Booking"
              component={Booking}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PersonalDetails"
              component={PersonalDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chat"
              component={Chat}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ListOfDoctors"
              component={ListOfDoctors}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <LogoPage />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;

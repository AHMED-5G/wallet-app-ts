//www.youtube.com/watch?v=68l7wyHw97Y

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./screens/Welcome";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import RootStack from "./navigators/RootStack";
export default function App() {
  let [fontsLoaded] = useFonts({
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
  });
  return !fontsLoaded ? <AppLoading /> : <RootStack  />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

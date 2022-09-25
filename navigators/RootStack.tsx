import { StyleSheet, Text, View } from "react-native";
import React, { FunctionComponent } from "react";
import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import Welcome from "../screens/Welcome";
import Home from "../screens/Home";
import { myColors } from "../components/myColors";
import Greeting from "../components/Header/Greeting";
import Profile from "../components/Header/Profile";
import avatar from "../assets/avi/avatar.jpg";
import Balance from "../screens/Balance";
import { CardProps } from "../components/Cards/types";
import { Ionicons } from "@expo/vector-icons";

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Balance: CardProps;
};
const Stack = createStackNavigator<RootStackParamList>();
const RootStack: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Group
          screenOptions={{
            headerStyle: {
              backgroundColor: myColors.grayLight,
              borderBottomWidth: 0,
              shadowColor: "transparent",
              shadowOpacity: 0,
              elevation: 0,
              height: 120,
            },
            headerTintColor: myColors.secondary,
            headerRightContainerStyle: {
              paddingRight: 25,
            },
            headerLeftContainerStyle: {
              paddingLeft: 10,
            },
            headerRight: () => {
              return (
                <Profile
                  img={avatar}
                  imgContainerStyle={{
                    backgroundColor: myColors.tertiary,
                  }}
                />
              );
            },
          }}
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: (props) => (
                <Greeting
                  mainText="Hey coby"
                  subText="welcome back"
                  {...props}
                />
              ),
              headerLeft: () => {
                return <></>;
              },
            }}
          />
          <Stack.Screen
            options={({ route }) => ({
              headerTitle: route?.params?.alias,
              headerTitleAlign: "center",
              headerBackImage: (props) => {
                return (
                  <Ionicons
                    {...props}
                    name="chevron-back"
                    size={25}
                    color={myColors.secondary}
                  />
                );
              },
              headerTitleContainerStyle: {
                paddingLeft: 0,
              },
            })}
            name="Balance"
            component={Balance}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

const styles = StyleSheet.create({});

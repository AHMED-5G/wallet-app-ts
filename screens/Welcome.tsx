import { StyleSheet, Text, View } from "react-native";
import React, { FunctionComponent } from "react";

import styled from "styled-components/native";

import { Container } from "../components/shared";
import { myColors } from "../components/myColors";
import { StatusBar } from "expo-status-bar";
import background from "../assets/bgs/background_v1.jpg";
import BigText from "../components/Texts/BigText";
import SmallText from "../components/Texts/SmallText";
import RegularButton from "../components/Buttons/RegularButton";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../navigators/RootStack";
const WelcomeContainer = styled(Container)`
  background-color: ${myColors.secondary};
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;
const TopSection = styled.View`
  flex: 1;
  width: 100%;
  max-height: 55%;
`;
const BottomSection = styled.View`
  flex: 1;
  width: 100%;
  padding: 25px;
  justify-content: flex-end;
`;
const TopImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: stretch;
`;
type Props = StackScreenProps<RootStackParamList, "Welcome">;

const Welcome: FunctionComponent<Props> = ({ navigation }) => {
  return (
    <>
      <StatusBar style="auto" />
      <WelcomeContainer>
        <TopSection>
          <TopImage source={background} />
        </TopSection>
        <BottomSection>
          <BigText>Best way to track your money</BigText>
          <SmallText>Best way to track your money</SmallText>
          <RegularButton
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            Get Started
          </RegularButton>
        </BottomSection>
      </WelcomeContainer>
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({});

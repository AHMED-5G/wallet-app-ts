import { View, Text } from "react-native";
import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { Container } from "../components/shared";
import { myColors } from "../components/myColors";
import { StatusBar } from "expo-status-bar";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../navigators/RootStack";
import AmountSection from "../components/Balance/AmountSection.tsx/AmountSection";
import BalanceCardSection from "../components/Balance/BalanceCardSection";
import ButtonSection from "../components/Balance/ButtonSection";

type Props = StackScreenProps<RootStackParamList, "Balance">;

const Balance: FunctionComponent<Props> = ({ route }) => {
  const BalanceContainer = styled(Container)`
  background-color: ${myColors.grayLight}
  flex:1;
  padding: 25px ; 
  width: 100%
  `;

  return (
    <BalanceContainer>
      <StatusBar style="dark" />
      <AmountSection balance={route?.params?.balance} />
      <BalanceCardSection {...route?.params} />
      <ButtonSection />
    </BalanceContainer>
  );
};

export default Balance;

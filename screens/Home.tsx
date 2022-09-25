import { StyleSheet, Text, View } from "react-native";
import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { myColors } from "../components/myColors";
import { Container } from "../components/shared";
import { StatusBar } from "expo-status-bar";
import { CardProps } from "../components/Cards/types";
import CardSection from "../components/Cards/CardSection";
import TransactionSection from "../components/Transactions/TransactionSection";
import { TransactionProps } from "../components/Transactions/Types";
import SendMoneySection from "../components/SendMoney/SendMoneySection";
import { SendMoneyProps } from "../components/SendMoney/types";

import profileImg1 from "../assets/profiles/profile1.jpg";
import profileImg2 from "../assets/profiles/profile2.jpg";
import profileImg3 from "../assets/profiles/profile3.jpg";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../navigators/RootStack";

export type Props = StackScreenProps<RootStackParamList, "Home">;

const Home: FunctionComponent<Props> = () => {
  const cardsData: CardProps[] = [
    {
      id: 1,
      accountNo: "334666563444",
      balance: 20000.15,
      alias: "Work debit",
    },
    {
      id: 2,
      accountNo: "433134451212",
      balance: 3432.15,
      alias: "Personal Prepaid",
    },
    {
      id: 3,
      accountNo: "453929094452",
      balance: 4000.25,
      alias: "School Prepaid",
    },
  ];
  const HomeContainer = styled(Container)`
    background-color: ${myColors.grayLight};
    flex: 1
    width: 100%;

  `;
  const transactionData: TransactionProps[] = [
    {
      id: 1,
      amount: "-$68.00",
      date: "14 sep 2021",
      title: "Taxi",
      subtitle: "Uber",
      art: {
        background: myColors.primary,
        icon: "car",
      },
    },
    {
      id: 2,
      amount: "-$168.00",
      date: "15 jun 2021",
      title: "Shopping",
      subtitle: "Ali express",
      art: {
        background: myColors.tertiary,
        icon: "cart",
      },
    },
  ];

  const sendMoneyData: SendMoneyProps[] = [
    {
      id: 1,
      amount: "2550.54",
      name: "Coby Anosh",
      background: myColors.primary,
      img: profileImg1,
    },
    {
      id: 2,
      amount: "250.54",
      name: "Ahmed Salem",
      background: myColors.secondary,
      img: profileImg2,
    },
    {
      id: 3,
      amount: "1550.54",
      name: "Saeed Moh",
      background: myColors.accent,
      img: profileImg3,
    },
  ];
  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <CardSection data={cardsData} />
      <TransactionSection data={transactionData} />
      <SendMoneySection data={sendMoneyData} />
    </HomeContainer>
  );
};

export default Home;

const styles = StyleSheet.create({});

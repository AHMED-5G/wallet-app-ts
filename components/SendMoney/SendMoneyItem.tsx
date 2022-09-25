import { StyleSheet, Text, View } from "react-native";
import React, { FunctionComponent } from "react";
import { SendMoneyProps } from "./types";
import styled from "styled-components/native";
import { ScreenWidth } from "../dimentioins";
import { myColors } from "../myColors";
import Profile from "../Header/Profile";
import SmallText from "../Texts/SmallText";
import RegularText from "../Texts/RegularText";

type Props = SendMoneyProps;

const SendMoneyItemContainer = styled.TouchableHighlight`
  height: 130px;
  width: ${ScreenWidth * 0.27}px;
  padding: 10px;
  border-radius: 15px;
  justify-content: space-around;
  margin: 0px  10px 10px 0px
`;

const SendMoneyItem: FunctionComponent<Props> = (props) => {
  return (
    <SendMoneyItemContainer
      underlayColor={myColors.secondary}
      style={{ backgroundColor: props.background }}
      onPress={() => {
        alert("Send Money");
      }}
    >
      <>
        <Profile
          img={props.img}
          imgContainerStyle={{
            marginBottom: 10,
          }}
        />
        <SmallText
          textStyles={{
            textAlign: "left",
            color: myColors.white,
            fontSize: 12,
          }}
        >
          {props.name}
        </SmallText>
        <RegularText
          textStyles={{
            textAlign: "left",
            color: myColors.white,
            fontSize: 13,
          }}
        >
          {props.amount}
        </RegularText>
      </>
    </SendMoneyItemContainer>
  );
};

export default SendMoneyItem;

const styles = StyleSheet.create({});

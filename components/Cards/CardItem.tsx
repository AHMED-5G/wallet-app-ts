import { StyleSheet, Text, View } from "react-native";
import React, { FunctionComponent } from "react";
import { CardProps } from "./types";
import styled from "styled-components/native";
import { ScreenWidth } from "../dimentioins";
import { myColors } from "../myColors";

import { Props as HomeProps } from "../../screens/Home";

// width: ${ScreenWidth * 0.67}px;
const CardBackGround = styled.ImageBackground`
  height: 75%;
  width: ${ScreenWidth * 0.67}
  resize-mode: cover;
  background-color: ${myColors.accent};
  border-radius: 25px;
  margin-right: 25px
  overflow: hidden;
`;
const CardTouchable = styled.TouchableHighlight`
  height: 100%;
  border-radius: 25px;
`;
const TouchableView = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  flex: 1;
`;
const CardRow = styled.View`
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const Logo = styled.View`
  height: 80%;
  width: 100%;
  resize-mode: contain;
  flex: 1;
`;
import card_bg from "../../assets/bgs/cardBackground.jpg";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import { useNavigation } from "@react-navigation/native";
const CardItem: FunctionComponent<CardProps> = (props) => {
  const navigation = useNavigation<HomeProps["navigation"]>();
  const handelPress = () => {
    navigation.navigate("Balance", { ...props });
  };
  return (
    <CardBackGround source={card_bg}>
      <CardTouchable onPress={handelPress} underlayColor={myColors.secondary}>
        <TouchableView>
          <CardRow>
            <RegularText textStyles={{ color: "white", fontSize: 22 }}>
              ****{props.accountNo.slice(6, 10)}
            </RegularText>
          </CardRow>
          <CardRow>
            <View style={{ marginTop: 80 }}>
              <SmallText textStyles={{ marginBottom: 5, color: "black" }}>
                Total Balance
              </SmallText>
              <RegularText textStyles={{ fontSize: 19, color: "black" }}>
                {props.balance}
              </RegularText>
            </View>
            <Logo source={props.logo} />
          </CardRow>
        </TouchableView>
      </CardTouchable>
    </CardBackGround>
  );
};

export default CardItem;

const styles = StyleSheet.create({});

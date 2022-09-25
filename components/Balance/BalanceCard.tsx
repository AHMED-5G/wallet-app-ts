import { StyleSheet, Text, View } from "react-native";
import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { myColors } from "../myColors";

type Props = {};

// width: ${ScreenWidth * 0.67}px;
const CardBackGround = styled.ImageBackground`
  height: 75%;
  width: 100%
  resize-mode: cover;
  background-color: ${myColors.accent};
  border-radius: 25px;
//   margin-right: 25px
  overflow: hidden;
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
import { BalanceCardProps } from "./types";
const BalanceCard: FunctionComponent<BalanceCardProps> = (props) => {
  return (
    <CardBackGround source={card_bg}>
        <TouchableView>
          <CardRow>
            <RegularText textStyles={{ color: "white" }}>
              ****{props?.accountNo?.slice(6, 10)}
            </RegularText>
          </CardRow>
          <CardRow>
            <View style={{ flex: 3 }}>
              <SmallText
                textStyles={{ marginBottom: 5, color: myColors.grayLight }}
              >
                Total Balance
              </SmallText>
              <RegularText textStyles={{ fontSize: 19 }}>
                {props.balance}
              </RegularText>
            </View>
            <Logo source={props.logo} />
          </CardRow>
        </TouchableView>
    </CardBackGround>
  );
};

export default BalanceCard;

const styles = StyleSheet.create({});

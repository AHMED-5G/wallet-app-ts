import { StyleSheet, Text, View } from "react-native";
import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { TransactionProps } from "./Types";
import TransactionAvi from "./TransactionAvi";
import RegularText from "../Texts/RegularText";
import { myColors } from "../myColors";
import SmallText from "../Texts/SmallText";
import { ScreenWidth } from "../dimentioins";

type Props = TransactionProps;
<View
  style={{
    justifyContent: "space-around",
    alignContent: "space-between",
  }}
></View>;

const TransactionRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 25px;
`;
const LeftView = styled.View`
  height: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex: 2;
`;
const RightView = styled.View`
  flex: 1;
`;
const TransactionItem: FunctionComponent<Props> = (props) => {
  return (
    <TransactionRow>
      <LeftView>
        <TransactionAvi
          background={props.art.background}
          icon={props.art.icon}
        />
        <View style={{ marginLeft: 10 }}>
          <RegularText
            textStyles={{
              textAlign: "left",
              marginBottom: 5,
              color: myColors.secondary,
            }}
          >
            {props.title}
          </RegularText>
          <SmallText
            textStyles={{
              textAlign: "left",
              color: myColors.grayDark,
            }}
          >
            {props.subtitle}
          </SmallText>
        </View>
      </LeftView>
      <RightView>
        <RegularText
          textStyles={{
            textAlign: "right",
            marginBottom: 5,
            color: myColors.secondary,
          }}
        >
          {props.amount}
        </RegularText>
        <SmallText
          textStyles={{
            textAlign: "right",
            color: myColors.grayDark,
          }}
        >
          {props.date}
        </SmallText>
      </RightView>
    </TransactionRow>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({});

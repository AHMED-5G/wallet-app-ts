import { StyleSheet, Text, View } from "react-native";
import React, { FunctionComponent } from "react";
import { AmountProps } from "../types";
import styled from "styled-components/native";
import SmallText from "../../Texts/SmallText";
import { myColors } from "../../myColors";
import RegularText from "../../Texts/RegularText";



const AmountSectionBackground = styled.View`
  flex: 1;
  width: 100%;
  padding-top: 5px;
  align-items: center;
`;

const AmountSection: FunctionComponent<AmountProps> = (props) => {
  return (
    <AmountSectionBackground>
      <SmallText textStyles={{ color: myColors.secondary, marginBottom: 15 }}>
        Total Balance
      </SmallText>
      <RegularText textStyles={{ color: myColors.secondary, marginBottom: 28 }}>
        ${props.balance}
      </RegularText>
    </AmountSectionBackground>
  );
};

export default AmountSection;

const styles = StyleSheet.create({});

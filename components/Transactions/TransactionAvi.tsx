import { StyleSheet, Text, View } from "react-native";
import React, { FunctionComponent } from "react";
import { TransactionAviProps } from "./Types";
import styled from "styled-components/native";

import { Ionicons } from "@expo/vector-icons";
import { myColors } from "../myColors";
type Props = TransactionAviProps;
const StyledView = styled.View`
  height: 45px;
  width: 45;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const TransactionAvi: FunctionComponent<Props> = (props: Props) => {
  return (
    <StyledView style={{ backgroundColor: props.background }}>
      <Ionicons name={props.icon} size={25} color={myColors.white} />
      
    </StyledView>
  );
};

export default TransactionAvi;

const styles = StyleSheet.create({});

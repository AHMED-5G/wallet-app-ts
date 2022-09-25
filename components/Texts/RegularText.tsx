import { StyleSheet, Text, View } from "react-native";
import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { myColors } from "../myColors";

const StyledText = styled.Text`
  font-size: 15px;
  color: ${myColors.white};
  text-align: left;
  font-family: Lato-Bold;
`;
import { TextProps } from "./types";
const RegularText: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children}</StyledText>;
};

export default RegularText;

const styles = StyleSheet.create({});

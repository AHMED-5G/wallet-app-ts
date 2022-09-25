import { StyleSheet, Text, View } from "react-native";
import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { myColors } from "../myColors";

const StyledText = styled.Text`
  font-size: 37px;
  color: ${myColors.white};
  text-align: left;
  font-family: Lato-Bold;
`;
import { TextProps } from "./types";
const BigText: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children}</StyledText>;
};

export default BigText;

const styles = StyleSheet.create({});

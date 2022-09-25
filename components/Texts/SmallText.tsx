import { StyleSheet, Text, View } from "react-native";
import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { myColors } from "../myColors";

const StyledText = styled.Text`
  font-size: 13px;
  color: ${myColors.gray};
  text-align: left;
  font-family: Lato-Regular;
`;
import { TextProps } from "./types";
const SmallText: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children}</StyledText>;
};

export default SmallText;

const styles = StyleSheet.create({});

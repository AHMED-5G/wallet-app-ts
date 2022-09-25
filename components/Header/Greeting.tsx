import { StyleProp, StyleSheet, Text, TextStyle, View } from "react-native";
import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import RegularText from "../Texts/RegularText";
import { myColors } from "../myColors";
import SmallText from "../Texts/SmallText";

interface GreetingProps {
  mainText: string;
  subText: string;
  mainTextStyles?: StyleProp<TextStyle>;
  subTextStyles?: StyleProp<TextStyle>;
}
const StyledView = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

const Greeting: FunctionComponent<GreetingProps> = (props) => {
  return (
    <StyledView>
      <RegularText
        textStyles={[
          {
            color: myColors.secondary,
            fontSize: 22,
          },
          props.mainTextStyles,
        ]}
      >
        {props.mainText}
      </RegularText>
      <SmallText
        textStyles={[
          {
            color: myColors.grayDark,
          },
          props.subTextStyles,
        ]}
      >
        {props.subText}
      </SmallText>
    </StyledView>
  );
};

export default Greeting;

const styles = StyleSheet.create({});

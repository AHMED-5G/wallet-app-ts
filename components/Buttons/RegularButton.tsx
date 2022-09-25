import styled from "styled-components/native";
import React, { FunctionComponent } from "react";
import { myColors } from "../myColors";
import RegularText from "../Texts/RegularText";
import { GestureResponderEvent, StyleProp, ViewStyle } from "react-native";

const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${myColors.primary};
  width: 100%;
  height: 40px;
  border-radius: 20px;
  justify-content: center
`;

interface ButtonProps {
  btnStyles?: StyleProp<ViewStyle>;
  onPress: (event: GestureResponderEvent) => void | undefined;
  children: React.ReactNode;
}

const RegularButton: FunctionComponent<ButtonProps> = (props) => {
  return (
    <ButtonView onPress={props.onPress} style={props.btnStyles}>
      <RegularText>{props.children}</RegularText>
    </ButtonView>
  );
};

export default RegularButton;

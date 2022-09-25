import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FunctionComponent } from "react";
import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { myColors } from "../myColors";
import RegularButton from "../Buttons/RegularButton";

type Props = {};

const ButtonSectionBackground = styled.View`
  width: 100%;
  align-items: center;
  flex: 1;
`;
const ButtonSection: FunctionComponent = (props: Props) => {
  return (
    <ButtonSectionBackground>
      <RegularButton
        btnStyles={{
          width: "50%",
        }}
        onPress={() => {}}
      >
        Cancel <Ionicons name="card" size={17} color={myColors.white} />
      </RegularButton>
    </ButtonSectionBackground>
  );
};

export default ButtonSection;

const styles = StyleSheet.create({});

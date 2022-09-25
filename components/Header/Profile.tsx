import {
  GestureResponderEvent,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

type Props = {};
const StyledView = styled.TouchableOpacity`
  height: 45px;
  width: 45px;
  border-radius: 15px;
  flex-direction: column;
`;
const StyledImage = styled.Image`
  resize-mode: cover;
  height: 100%;
  width: 100%;
  border-radius: 15px;
`;
interface ProfileProps {
  img: ImageSourcePropType;
  imgStyle?: StyleProp<ImageStyle>;
  imgContainerStyle?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void | undefined;
}

const Profile: FunctionComponent<ProfileProps> = (props) => {
  return (
    <StyledView>
      <StyledImage style={props.imgStyle} source={props.img} />
    </StyledView>
  );
};

export default Profile;

const styles = StyleSheet.create({});

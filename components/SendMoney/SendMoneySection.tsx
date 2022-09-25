import { View, Text } from "react-native";
import React, { FunctionComponent, useRef } from "react";
import { sendMoneySectionProps } from "./types";
import BottomSheet from "reanimated-bottom-sheet";
import styled from "styled-components/native";
import { myColors } from "../myColors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import SendMoneyItem from "./SendMoneyItem";
type Props = sendMoneySectionProps;

const SendMoneySectionBackground = styled.View`
  width: 100%;
  padding-top: 15px;
  background-color: ${myColors.white};
`;

const SendMoneyRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 25px;
`;

const SendMoneyList = styled.FlatList`
  width: 100%;
  flex: auto ;
  mix-height: 80%
  padding-horizontal: 25px;
`;

const TextButton = styled.TouchableOpacity``;

const SendMoneySection: FunctionComponent<Props> = (props) => {
  const sheetRef = useRef<BottomSheet>(null);
  const renderContent = () => {
    return (
      <SendMoneySectionBackground>
        <SendMoneyRow
          style={{
            marginBottom: 25,
          }}
        >
          <RegularText
            textStyles={{
              fontSize: 19,
              color: myColors.secondary,
            }}
          >
            Send Money To
          </RegularText>
          <TextButton
            onPress={() => {
              //   alert("Add");

              sheetRef?.current?.snapTo(500);
            }}
          >
            <SmallText
              textStyles={{
                fontWeight: "bold",
                color: myColors.tertiary,
              }}
            >
              +Add
            </SmallText>
          </TextButton>
        </SendMoneyRow>
        <SendMoneyList
          data={props.data}
          contentContainerStyle={{
            alignItems: "flex-start",
          }}
          horizontal={true}
          numberOfColumns={3}
          keyExtractor={({ id }: any) => id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }: any) => {
            return <SendMoneyItem {...item} />;
          }}
        />
      </SendMoneySectionBackground>
    );
  };
  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={[240, 85]}
      borderRadius={25}
      initialSnap={1}
      enabledContentGestureInteraction={false}
      renderContent={renderContent}
    />
  );
};

export default SendMoneySection;

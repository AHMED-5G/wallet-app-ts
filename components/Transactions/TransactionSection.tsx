import { StyleSheet, Text, View } from "react-native";
import React, { FunctionComponent } from "react";
import { TransactionSectionProps } from "./Types";
import styled from "styled-components/native";
import RegularText from "../Texts/RegularText";
import { myColors } from "../myColors";
import SmallText from "../Texts/SmallText";
import { Ionicons } from "@expo/vector-icons";
import TransactionItem from "./TransactionItem";
type Props = TransactionSectionProps;
const TransactionBackground = styled.View`
  width: 100%;
  padding-top: 5px;
  padding-horizontal: 25px;
  flex: 2;
`;
const TransactionRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

// justify-content: space-between;
// align-items: center;
const TransactionList = styled.FlatList`
  width: 100%;
`;
const TransactionSection: FunctionComponent<Props> = (props: Props) => {
  return (
    <TransactionBackground>
      <TransactionRow style={{ marginBottom: 25 }}>
        <RegularText
          textStyles={{
            fontSize: 19,
            color: myColors.secondary,
          }}
        >
          Transaction
        </RegularText>
        <SmallText
          textStyles={{
            color: myColors.secondary,
          }}
        >
          Recent
          <Ionicons name="caret-down" size={24} color="black" />
        </SmallText>
      </TransactionRow>
      <TransactionList
        data={props.data}

        keyExtractor={({ id }: any) => id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingBottom: 25,
        }}
        renderItem={({item}: any)=>
            <TransactionItem 
            {...item}
            />
        }
      />
    </TransactionBackground>
  );
};

export default TransactionSection;

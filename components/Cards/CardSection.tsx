import { StyleSheet, Text, View } from "react-native";
import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { CardSectionProps } from "./types";
import CardItem from "./CardItem";

type Props = {};
const CardList = styled.FlatList`
  flex: 1;
  width: 100%;
  padding-left: 25px;
  padding-bottom: 15px;
`;
const CardSection: FunctionComponent<CardSectionProps> = (props) => {
  return (
    <CardList
      data={props.data}
      showHorizontalScrollIndicator={false}
      horizontal={true}
      contentContainerStyle={{
        paddingRight: 25,
        alignItems: "center",
      }}
      keyExtractor={({ id }: any) => id.toString()}
      renderItem={({ item }: any) => <CardItem {...item} />}
    />
  );
};

export default CardSection;

const styles = StyleSheet.create({});

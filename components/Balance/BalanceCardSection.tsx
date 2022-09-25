import { View, Text } from "react-native";
import React, { FunctionComponent } from "react";
import { BalanceCardProps } from "./types";
import styled from "styled-components/native";
import BalanceCard from "./BalanceCard";

type Props = {};
const BalanceCardSectionBackground = styled.View`
  flex: 2;
  align-items: center;
  width: 100%;
`;
const BalanceCardSection: FunctionComponent<BalanceCardProps> = (
  props
) => {
  return <BalanceCardSectionBackground>
    <BalanceCard {...props}/>
  </BalanceCardSectionBackground>;
};

export default BalanceCardSection;

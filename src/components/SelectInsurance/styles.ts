import styled, { css } from 'styled-components/native'
import { FlatList, View } from 'react-native';
import { Card } from 'react-native-paper';
import { Link } from 'expo-router';

export const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`

export const Text = styled.Text``


export const StyledFlatList = styled(FlatList)`
  display: flex;
  flex-grow: 1;
  row-gap: 15px;
  column-gap: 15px;
`

export const StyledSelectInsuranceContainer = styled(Link)`
`

export const StyledSelectInsuranceCard = styled(Card)`
  ${({ theme }) => css`
    background-color: ${theme.colors.customLight};
    width: 160px;
    height: 120px;
    padding: 5px 15px;
    flex: 1;
  `}
`

export const StyledSelectInsuranceText = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.colors.accent};
    width: 100%;
    font-family: 'Inter';
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
    text-align: left;

    min-width: 125px;

    margin-top: 6px;
    margin-left: -15px;
  `}

`
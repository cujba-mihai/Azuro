import { Text } from 'react-native-paper'
import styled, { css } from 'styled-components/native'

export const CardHeader = styled.Text`
  color: ${({ theme }) => theme.colors.primaryContent};
  text-align: center;

  font-family: 'Inter';
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 38px;
`

export const CardSubheader = styled(Text)`
  color: ${({ theme }) => theme.colors.neutral};

  text-align: center;

  font-family: 'Inter';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`

export const ButtonText = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.colors.accentContent};
    text-align: center;

    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
  `}
`

export const Header = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.colors.primaryContent};
    text-align: center;

    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
  `}
`

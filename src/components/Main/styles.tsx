import styled, { css } from "styled-components/native";
import { Dimensions, Text as RNText } from "react-native";
import { Button, Modal } from "react-native-paper";

export const StyledModal = styled(Modal)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: ${Dimensions.get("window").width}px;
    height: ${Dimensions.get("window").height}px;
    background: ${theme.colors.base100};

    gap: 30px;
  `}
`;

export const Wrapper = styled.View`
  align-items: center;
  justify-content: center;
`;
export const ChildElement = styled.View`
  margin-bottom: 30px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-align: center;
    font-size: 52px;
    font-weight: 700;
    margin-bottom: 24px;
    font-family: ${theme.font.normalText.fontFamily};
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.baseContent};
    font-size: 16px;
    margin-bottom: 8px;
    font-weight: 300;
  `}
`;

export const StyledButton = styled(Button)`
  ${() => css`
    display: flex;
    justify-self: flex-end;
    width: 150px;
  `}
`;

export const ButtonText = styled(RNText)`
  font-family: "Inter";
  font-size: 14px;
  font-weight: 600;
  color: white;
`;

export const TopBarContainer = styled.View``;

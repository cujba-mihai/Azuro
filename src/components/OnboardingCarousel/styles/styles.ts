import {
  InitFirstScreenImg,
  InitSecondScreenImg,
  InitThirdScreenImg,
} from "assets/icons";
import { Link } from "expo-router";
import { View } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  gap: 10px;
  margin-top: 10px;
  padding-bottom: 46.5px;
  height: 100%;
  width: 100%;
`;

export const SkipBtnContainer = styled(View)`
  width: 100%;
`;

export const SkipButton = styled(Link)`
  background-color: transparent;
  border-radius: 8px;
  padding: 8px 12px;

  justify-content: center;
  align-items: center;

  margin-left: auto;
`;

export const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.neutralFocus};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;

  width: 30px;

  justify-content: flex-end;
`;

export const MarginTop30 = styled(View)`
  margin-top: 30px;
`;

export const MarginTop15 = styled(View)`
  margin-top: 15px;
`;

export const FirstScreenImage = styled(InitFirstScreenImg)`
  padding: 10px;
  height: 280px;
  margin: 0px auto;
`;
export const SecondScreenImage = styled(InitSecondScreenImg)`
  padding: 10px;
  height: 280px;
  margin: 0px auto;
`;

export const ThirdScreenImage = styled(InitThirdScreenImg)`
  padding: 10px;
  height: 280px;
  margin: 0px auto;
`;

export const StyledCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.base100};
  gap: 30px;
`;

export const ContinueButton = styled(Button)`
  ${({ theme }) => css`
    background-color: ${theme.colors.base100};
    border-radius: ${theme.borderRadius.md}px;
    border: 1px solid ${theme.colors.neutralContent};
  `}
`;

export const ContinueButtonText = styled(Text)`
  color: ${({ theme }) => theme.colors.customDark};

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
`;

export const BoxShadow = styled(View)`
  shadow-color: #101828;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.05;
  shadow-radius: 2px;
  elevation: 2;

  margin-top: auto;
`;

export const FinishButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.accent};

  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  border: 1px solid ${({ theme }) => theme.colors.accent};

  display: flex;
  padding: 10px 14px;
  justify-content: center;
  align-items: center;
`;

export const CardCoverContainer = styled(View)`
  height: 355px;
`;

export const CircleBackground = styled(View)`
  border-radius: 250px;

  position: absolute;
  top: 20px;
  left: 50px;

  height: 250px;
  width: 250px;

  background-color: ${({ theme }) => theme.colors.customLight};
`;

export const CarouselProgressContainer = styled(View)`
  margin: 0px auto;
  width: 50px;
  height: 10px;
`;

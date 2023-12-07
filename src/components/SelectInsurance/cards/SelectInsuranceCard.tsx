import React from "react";
import i18n from "../../../../i18n";
import {
  BuildingsIcon,
  GarageIcon,
  GrayCarIcon,
  GreenCar,
  InsuranceIcon,
  MoneyBagIcon,
  TravelersIcon,
  ZenIcon,
} from "assets/icons";
import { Card } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";
import {
  StyledSelectInsuranceCard,
  StyledSelectInsuranceContainer,
  StyledSelectInsuranceText,
} from "../styles";

const INSURANCE_OPTIONS = [
  {
    icon: <GrayCarIcon height={65} />,
    label: i18n.t("onboarding.selectInsurance.rca"),
  },
  {
    icon: <TravelersIcon height={65} />,
    label: i18n.t("onboarding.selectInsurance.travelers"),
  },
  {
    icon: <InsuranceIcon height={65} />,
    label: i18n.t("onboarding.selectInsurance.healthInsurance"),
  },
  {
    icon: <GreenCar height={65} />,
    label: i18n.t("onboarding.selectInsurance.greenBook"),
  },
  {
    icon: <GarageIcon height={65} />,
    label: i18n.t("onboarding.selectInsurance.casco"),
  },
  {
    icon: <BuildingsIcon height={65} />,
    label: i18n.t("onboarding.selectInsurance.realEstate"),
  },
  {
    icon: <MoneyBagIcon height={65} />,
    label: i18n.t("onboarding.selectInsurance.insurance"),
  },
  {
    icon: <ZenIcon height={65} />,
    label: i18n.t("onboarding.selectInsurance.financialInsurance"),
  },
];

export const SelectInsuranceCard = () => {
  const renderItem = ({
    item,
    index,
  }: {
    item: (typeof INSURANCE_OPTIONS)[0];
    index: number;
  }) => {
    const numberOfRows = Math.ceil(INSURANCE_OPTIONS.length / 2);

    const currentRow = Math.floor(index / 2);

    return (
      <StyledSelectInsuranceContainer
        href="/select-insurance/modal"
        style={{
          flex: 1,
          marginLeft: index % 2 === 0 ? 6.5 : 15,
          marginRight: index % 2 === 0 ? 0 : 6.5,
          marginTop: currentRow === 0 ? 0 : 15,
          marginBottom: currentRow === numberOfRows - 1 ? 15 : 0,
        }}
      >
        <StyledSelectInsuranceCard mode="contained">
          {item.icon}
          <Card.Content>
            <StyledSelectInsuranceText>{item.label}</StyledSelectInsuranceText>
          </Card.Content>
        </StyledSelectInsuranceCard>
      </StyledSelectInsuranceContainer>
    );
  };

  return (
    <FlatList
      data={INSURANCE_OPTIONS}
      renderItem={renderItem}
      keyExtractor={(item) => item.label}
      numColumns={2}
      contentContainerStyle={{ alignItems: "stretch" }}
    />
  );
};

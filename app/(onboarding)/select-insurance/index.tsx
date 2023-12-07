import { SkipButton } from 'components/Buttons/SkipButton'
import { SelectInsuranceCard } from 'components/SelectInsurance/cards/SelectInsuranceCard'
import { Header } from 'components/Typography'
import React from 'react'
import { Text } from 'react-native-paper'

const SelectInsurangePage = () => {
  return (
    <>
      <SkipButton to="select-insurance" />
      <Header>Selectează tipul de asigurare</Header>
      <SelectInsuranceCard />
    </>
  )
}

export default SelectInsurangePage

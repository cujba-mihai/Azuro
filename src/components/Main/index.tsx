import { OnboardingCarousel } from 'components/OnboardingCarousel';
import React from 'react';
import { StyleSheet, } from 'react-native';

const MyPager = () => {
  return (
    <OnboardingCarousel />
  );
};

export default MyPager;

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
});
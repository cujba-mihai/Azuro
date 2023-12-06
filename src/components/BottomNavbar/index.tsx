import React from 'react';
import styled from 'styled-components/native';
import { View, TouchableOpacity, Text, } from 'react-native';
import { ButtonText, CircleButton, Container, Button } from './styles';

// BottomNavbar component
export const BottomNavbar = () => {
  return (
    <Container>
      <Button><ButtonText>Home</ButtonText></Button>
      <Button><ButtonText>About</ButtonText></Button>
      <CircleButton><ButtonText style={{ color: 'white' }}>+</ButtonText></CircleButton>
      <Button><ButtonText>History</ButtonText></Button>
      <Button><ButtonText>Profile</ButtonText></Button>
    </Container>
  );
};
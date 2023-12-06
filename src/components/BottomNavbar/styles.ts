import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  bottom: 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 100%;
  padding: 10px;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px;
`;

export const CircleButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #007AFF;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 40px;
  left: 50%;
  margin-left: -10px;
`;


export const ButtonText = styled.Text``;
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Dimensions } from "react-native";
  //width deveria ser 100%
export const Container = styled(RectButton) `
  width:325px;
  height:60px;
  background: #ff9000;
  border-radius: 10px;
  margin-top: 8px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text `
  font-family: 'RobotoSlab-Medium';
  color: #312e38;
  font-size:19px;
  
`;
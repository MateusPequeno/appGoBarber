import React, { Children } from 'react';
import {RectButtonProperties} from 'react-native-gesture-handler';
import {Container,ButtonText} from './styles';

interface ButtonProps extends RectButtonProperties{
  children: string;  
}
 //definindo que o conteúdo do botão precisa de ser um texto
const Button: React.FC<ButtonProps> = ({children, ...rest}) => (
  //...rest passando todas as propriedades, se passo onpress ele passa pro container
  <Container {...rest}>
  <ButtonText>
    {children}
  </ButtonText>
 </Container>
); 

export default Button;
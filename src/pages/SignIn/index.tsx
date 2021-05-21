import React from 'react';

import {Image } from 'react-native';

import Input from '../../components/input';
import Button from '../../components/button';

import logoImg from '../../assets/logo.png';

import { Container, Title } from './styles';

const SignIn: React.FC = () => {
  return( 
  <Container>
    <Image source = {logoImg }/>
    <Title>Faça seu Login</Title> 
    <Input name = "E-mail" icon = "mail" placeholder = "E-mail" 
    placeholderTextColor = "#666360" />
    <Input name = "Senha" icon = "lock" placeholder = "Senha" 
    placeholderTextColor = " #666360"/>
    <Button>Entrar</Button>
  </Container>
  );
  }

export default SignIn;


import React from 'react';

import {Image,View,KeyboardAvoidingView,Platform ,ScrollView } from 'react-native';

import Input from '../../components/input';
import Button from '../../components/button';

import Icon from 'react-native-vector-icons/Feather';

import logoImg from '../../assets/logo.png';

import {useNavigation} from '@react-navigation/native'
import { Container,
   Title,ForgotPassword, 
   ForgotPasswordText,
   CreateAccountButton,
   CreateAccountButtonText,} from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  return( 
    <>
<KeyboardAvoidingView
style ={{flex:1}}
enabled
behavior = {Platform.OS =='ios'? 'padding': undefined}>
  <ScrollView 
  keyboardShouldPersistTaps = "handled"
  contentContainerStyle ={{flex:1}}>
  
  <Container>
    <Image source = {logoImg }/>
    <View>
    <Title>Faça seu Login</Title> 
    </View>
    <Input name = "email" icon = "mail" placeholder = "E-mail" />

    <Input name = "senha" icon = "lock" placeholder = "Senha"/>

    <Button>Entrar</Button>
    <ForgotPassword>
      <ForgotPasswordText>
        Esqueci minha senha
      </ForgotPasswordText>
    </ForgotPassword>
  </Container>
  </ScrollView>
  </KeyboardAvoidingView>
  <CreateAccountButton onPress = {() => navigation.navigate('SignUp')}>
    <Icon name = "log-in" size={20} color = "#ff9000"/> 
    <CreateAccountButtonText>    Criar uma conta    </CreateAccountButtonText>
  </CreateAccountButton>
  </>
  );
  }
export default SignIn;


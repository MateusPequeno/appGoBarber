import React, {useCallback , useRef} from 'react';
import {Image
    ,View
    ,KeyboardAvoidingView
    ,Platform
    ,ScrollView
    ,TextInput } from 'react-native';
import Input from '../../components/input';
import Button from '../../components/button';
import Icon from 'react-native-vector-icons/Feather';
import logoImg from '../../assets/logo.png';
import {useNavigation} from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { Container,
   Title,ForgotPassword, 
   ForgotPasswordText,
   CreateAccountButton,
   CreateAccountButtonText,} from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();
  const handleSignIn = useCallback((data: object) => {
    console.log(data);
  },
  []);
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
    <Form ref= {formRef} onSubmit ={handleSignIn}>
      <Input
      autoCorrect = {false} 
      autoCapitalize ="none"
      keyBoardType = "email-address"
      name = "email" 
      icon = "mail" 
      placeholder = "E-mail"
      returnKeyType = "next"
      onSubmitEditing = {() =>  {
        passwordInputRef.current?.focus();
      }}
       />
      <Input 
        ref = {passwordInputRef}
        name = "password" 
        icon = "lock" 
        placeholder = "Senha"
        secureTextEntry
        returnKeyType = "send"
        onSubmitEditing =  {() => {
        formRef.current?.submitForm();
        }}
      />
      <Button onPress = {() => {
        formRef.current?.submitForm();
        }}>
           Entrar
      </Button>
    </Form>
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


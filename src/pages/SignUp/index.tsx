import React, {useRef} from 'react';
import {Image,View,KeyboardAvoidingView,Platform ,ScrollView,TextInput } from 'react-native';
import Input from '../../components/input';
import Button from '../../components/button';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import logoImg from '../../assets/logo.png';

import { Container,
   Title, 
   BackToSignInText,
   BackToSignIn,} from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
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
    <Title>Crie sua conta</Title> 
    </View>
    <Form ref = {formRef} onSubmit ={(data) => {console.log(data)}}>
      <Input 
        autoCapitalize = "words" 
        name = "name"
        icon = "user"
        placeholder = "Nome"
        returnKeyType = "next"
        onSubmitEditing = {() => {
          emailInputRef.current?.focus();
        }}
         />
      <Input
        ref = {emailInputRef}
        keyBoardType = "email-adrress"  
        autoCorrect = {false} 
        autoCapitalize ="none"
        name = "email" 
        icon = "mail"
        placeholder = "E-mail"
        returnKeyType = "next" 
        onSubmitEditing= {() => {
          passwordInputRef.current?.focus();
        }}
        />        
      <Input
       ref = {passwordInputRef }
       secureTextEntry
       name = "senha"
       icon = "lock" 
       placeholder = "Senha"
       returnKeyType = "send"
       onSubmitEditing = {() =>  formRef.current?.submitForm()}
       />
      <Button 
      onPress = {() =>  formRef.current?.submitForm()}>
        Entrar
      </Button>
    </Form>
  </Container>
  </ScrollView>
  </KeyboardAvoidingView>
  <BackToSignIn onPress = {() => navigation.goBack()}>
    <Icon name = "arrow-left" size={20} color = "#fff"/> 
    <BackToSignInText>    Voltar para login    </BackToSignInText>
  </BackToSignIn>
  </>
  );
  }
export default SignUp;


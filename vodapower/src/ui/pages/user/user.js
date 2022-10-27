import React from "react";
import InputBox from "../../../components/input";
import styled from 'styled-components/native';
import { Button } from "../../../components/button";
import { Link } from 'react-router-dom'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const TextContainer = styled.Text`
    color:#A8ACB8;
    font-weight: 400;
`;

const ButtonContainer = styled.TouchableOpacity`
  background-color: #FCFCFC;
  width: 50%;
  height: 50px;
  padding: 12px;
  border: 2px solid transparent;
  border-radius: 10px;
  text-align: center;
  color:#C4C4C4;
  fontSize:18px;
`;

const PrimaryButtonContainer = styled.TouchableOpacity`
  background-color: #E60000;
  width: 50%;
  height: 50px;
  padding: 12px;
  border: 2px solid transparent;
  border-radius: 10px;
  text-align: center;
  color:#ffffff;
  fontSize:18px;
`;

const View = styled.View`
background-color: #141827;
flex: 1;
align-items: center;
`;

const ButtonView = styled.View`
width: 350px;
height: 100px;
`;

const DirectionView  = styled.View`
flex: 1;
`;


export default function UserDetails({ navigation }) {
  return (
   <View>
    <TextContainer
    style={{marginTop:80, marginLeft:6,fontSize:22}}
    >Self-Service Credit Check</TextContainer>
   <DirectionView style={{flexDirection:'column'}}>
    <InputBox
    style={{marginTop:80}}
                placeholder='ID Number'
                name='accountNumber'
                />
                <InputBox
                placeholder='Enter Msisdn'
                name='accountNumber'
                />
    </DirectionView> 
    <ButtonView  style={{flexDirection:'row',margin:'auto'}}>          
    <Button 
    isPrimaryButton={false}
    style={{marginRight:2, marginBottom: 10,width: '50%'}} 
    text='Cancel'
    onPress={() => navigation.navigate("Home")}
    ></Button>
    {/* <Link to={'/HomeScreen'}> */}
    <Button
    style={{marginLeft:2,marginBottom: 10,width: '50%'}} 
    text='Next'
    onPress={() => navigation.navigate("Approved")}
    >
    </Button>
    {/* </Link> */}
    </ButtonView>  
   </View>
  );
};
import React from "react";
import InputBox from "../../../components/input";
import styled from 'styled-components/native';

const View = styled.View`
background-color: #08081B;
flex: 1;
align-items: center;
`;

const TextContainer = styled.Text`
    color:#A8ACB8;
    font-weight: 400;
    font-size:16px;
    margin-top:20px;
`;

const DirectionView  = styled.View`
margin-top:50px;
flex:1;
`;
const ButtonView = styled.View`
width: 350px;
height: 100px;
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

export default function Onboarding() {
    return (
        <View>
            <TextContainer style={{marginTop:50,fontSize:22,fontWeight:600, color:'#ffffff'}}>Make it your own</TextContainer>
             <DirectionView style={{flexDirection:'column'}}>
                <TextContainer>What is your favourite device</TextContainer>
            <InputBox></InputBox>
            <TextContainer>What is your favourite device</TextContainer>
            <InputBox></InputBox>
            <TextContainer>What is your favourite device</TextContainer>
            <InputBox></InputBox>
            <TextContainer>What is your favourite device</TextContainer>
            <InputBox></InputBox>
            </DirectionView>
            <ButtonView style={{flexDirection:'row'}}>
                <ButtonContainer style={{marginRight:2, marginBottom: 10}}>Cancel</ButtonContainer>
                <PrimaryButtonContainer style={{marginLeft:2,marginBottom: 10}}>Next</PrimaryButtonContainer>
            </ButtonView>
        </View>
    );
}
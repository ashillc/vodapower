import React from "react";
import SecondaryButton from "../../../components/secondarybutton";
import PrimaryButton from "../../../components/primarybutton";
import InputBox from "../../../components/input";
import CheckBox from "../../../components/checkbox";
import styled from 'styled-components/native';

const CircularView = styled.View`
width: 150px;
height: 150px;
border-radius: 100px;
background-color: #ffffff;
marginTop: 100px;
`;

const TextContainer = styled.Text`
    color:#ffffff;
    font-size: 12px;
    font-weight: 600;
    color:#828282;
    margin-top: 45px;
    text-align: center;
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


const CardContainerOne = styled.TouchableOpacity`
background-color: #E60000;
border-radius: 10px;
width: 60px;
height: 60px;
margin-right:180px;
`;

const CardContainerTwo = styled.TouchableOpacity`
background-color: #E60000;
border-radius: 10px;
width: 60px;
height: 60px;
margin-left:150px;
margin-top:-60px;
`;

const CardView = styled.View`
background-color: #ffffff;
// margin-top: 100px;
`;
const View = styled.View`
flex:1;
align-items: center;
background-color: #08081B;
`;

export default function Amount() {
    return(
        <View>
        <CircularView>
            <TextContainer>Qualifying Amount</TextContainer>
            <TextContainer style={{marginTop:20}}>R1000</TextContainer>
        </CircularView>
        <TextContainer style={{fontSize:22,color:'#ffffff',fontWeight:600}}>Great News</TextContainer>
        <TextContainer style={{fontSize:18,color:'#ffffff',fontWeight:400}}>You Can Continue</TextContainer>
        <PrimaryButtonContainer>Lets get Started!</PrimaryButtonContainer>
        </View>
    );
}
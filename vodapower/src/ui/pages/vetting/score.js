import React from "react";
import { Button } from "../../../components/button";
import styled from "styled-components/native";
// import { TiTickOutline } from 'react-icons/ti'


const CircularView = styled.View`
width: 150px;
height: 150px;
border-radius: 100px;
background-color: #ffffff;
margin:120px;
`;

const TextContainer = styled.Text`
    color:#ffffff;
    font-size: 18px;
    color:#828282;
    margin-top: 45px;
    text-align: center;
`;

const TextContainerOne = styled.Text`
    color:#ffffff;
    font-size: 26px;
    margin-top: 100px;
    text-align: center;
`;

const TextContainerTwo = styled.Text`
    color:#ffffff;
    font-size: 16px;
    margin-top: 40px;
    text-align: center;
`;

const PrimaryButtonContainer = styled.TouchableOpacity`
  background-color: #E60000;
  width: auto;
  height: 50px;
  padding-bo: 12px;r
  border: 2px solid transparent;
  border-radius: 10px;
  text-align: center;
  color:#ffffff;
  font-size:20px;
  margin-top:80px;
`;

const View = styled.View`
`;

export default function ApprovedUser({ navigation }) {
return(
<View style={{flex:1,backgroundColor:'#141827',flexDirection:'column'}}>
        <CircularView>
           <TextContainer>Approved</TextContainer>
        </CircularView>
        <TextContainerOne>Nice</TextContainerOne>
        <TextContainerTwo>Healthy Score!!!!!</TextContainerTwo>
      <Button onPress={() => navigation.navigate("Vetting")} 
       style={{width: '100%', height:50}} 
      text={'Continue'}
      ></Button>
 </View>
)
}
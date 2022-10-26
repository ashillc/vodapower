import React from "react";
import styled from "styled-components/native";
import { TiCancel } from 'react-icons/ti'

const CircularView = styled.View`
width: 150px;
height: 150px;
border-radius: 100px;
background-color: #ffffff;
`;

const TextContainer = styled.Text`
    color:#ffffff;
    font-size: 16px;
    font-weight: 600;
    color:#828282;
    margin-top: 45px;
    text-align: center;
`;

const TextContainerOne = styled.Text`
    color:#ffffff;
    font-size: 26px;
    font-weight: 600;
    margin-top: 45px;
    text-align: center;
`;

const TextContainerTwo = styled.Text`
    color:#ffffff;
    font-size: 16px;
    font-weight: 400;
    margin-top: 45px;
    text-align: center;
`;

const PrimaryButtonContainer = styled.TouchableOpacity`
  background-color: ${props => props.Endable ? '#C4C4C4' : '#E60000'};
  width: 20%;
  height: 50px;
  padding: 12px;
  border: 2px solid transparent;
  border-radius: 10px;
  text-align: center;
  color:#ffffff;
`;

const View = styled.View`
flex:1;
`;

export default function UserDenied() {
return(
<View>
        <CircularView>
            <TextContainer>Denied</TextContainer>
            <TiCancel 
          style={{
            color:'#828282',  
            marginTop: '0.5em',
            marginLeft: '1.8em',
            fontSize: '2em',
            fontWeight:'1em'
          }}/>
        </CircularView>
        <TextContainerOne>Oops!!!!</TextContainerOne>
        <TextContainerTwo>Did not meet the required score.</TextContainerTwo>
        <PrimaryButtonContainer>Cancel</PrimaryButtonContainer>
        </View>
)
}
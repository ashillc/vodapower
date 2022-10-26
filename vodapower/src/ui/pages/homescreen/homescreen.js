import React from "react";
import styled from 'styled-components/native';
import { SimpleLineIcons } from '@expo/vector-icons'; 

const TextContainer = styled.Text`
    color:#A8ACB8;
    font-weight: 400;
`;

const CardContainerOne = styled.TouchableOpacity`
background-color: #E60000;
border-radius: 10px;
width: 80px;
height: 80px;
margin-right: 80px;
`;

const CardContainerTwo = styled.TouchableOpacity`
background-color: #E60000;
border-radius: 10px;
width: 80px;
height: 80px;
margin-left: 80px;
`;

const CardView = styled.View`
border-radius:10px;
background-color: #ffffff;
`;

const MiddleView = styled.View`
margin-top:20px;
// background-color: #ffffff;
width: 300px;
height: 100px;
border-radius:10px;
`;

const BottomView = styled.View`
margin-bottom: 100px;
height: 100px;
`;

const ImageContainer = styled.Image`
width: 20px;
height: 20px;
margin-top: 10px;
`;

const View = styled.View`
background-color: #141827;
flex: 1;
justify-content: center;
align-items: center;
`;

export default function  HomeScreen({ navigation }) {

  return (
    <View
    style={{flex:1}}
    >
    <CardView style={{flexDirection:'column',flex: 1}}>
    <TextContainer
    style={{marginTop:120, marginLeft:50,fontSize:20}}
    >Self-Service Vodacom</TextContainer>

    <View  style={{flexDirection:'row'}}>
    <View  style={{flexDirection:'column'}}>
      <CardContainerOne
      >
     <SimpleLineIcons name="user-follow" size={30} color="white" 
     style={{marginTop:20, marginLeft:25}} />
      </CardContainerOne>
      <TextContainer
       style={{
        color:'#C9CCD4', 
        fontWeight:'400',
        marginTop: 10,
        marginRight: 80,
        fontSize: 15}}
      >Upgrade</TextContainer>
      </View>

      <View  style={{flexDirection:'column'}}>
      <CardContainerTwo>
      <SimpleLineIcons name="user-following" size={30} color="white" 
      style={{marginTop:20, marginLeft:25}}
      />
      </CardContainerTwo>
      <TextContainer 
       style={{
        color:'#C9CCD4', 
        fontWeight:'400',
        marginTop: 10,
        marginLeft: 80,
        fontSize:15}}
      >New Line</TextContainer>
      </View>

      </View>
      
      <MiddleView>

      </MiddleView>
      <BottomView>
          <ImageContainer 
          style={{width:320,height:50}} 
          source={require('../../../assets/Share.png')}/>
          <ImageContainer style={{width:320,height:50}}  source={require('../../../assets/App2.png')}/>
          {/* <ImageContainer style={{width:300,height:50}}  source={require('../../../assets/Nav.png')}/> */}
          </BottomView>
          </CardView>
    </View>
  );
};




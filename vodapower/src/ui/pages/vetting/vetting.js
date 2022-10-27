import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList
} from 'react-native';

import  { Button } from '../../../components/button';
import { UserInfo } from "../../userdata";

const  Vetting = ({ navigation }) =>   {
    return (
      <View style={{flex:1,backgroundColor: '#141827',flexDirection:'column'}}>
        <View 
        style={{ width: 150,
          height:150,
          margin:'auto',
          borderRadius:100,
          backgroundColor: '#ffffff'}}>
            <Text 
        style={{color:'#C4C4C4',
          fontSize : 16,
          margin:'auto',
          marginBottom:30,
          textAlign: 'center'}}>You may spend:</Text>

          { UserInfo.map((data) => 
          <Text 
        style={{color:'#E60000',
          fontSize : 18,
          marginBottom:10 ,
          textAlign: 'center'}}>{data.ApprovedAmount} </Text>
        )}
        </View>
        <Text 
        style={{color:'#ffffff',
          fontSize : 26,
          marginTop: 10,
          textAlign: 'center'}}>Great News</Text>
        <Text 
        style={{color:'#ffffff',
            fontSize : 26,
            marginTop: 10,
            textAlign: 'center'}}>You Can Continue!</Text>
        <Button
          style={{width: '50%',
          margin: 'auto',
          borderRadius: 24,
          height: 50}}

          text={'Lets get Started!'} 
          onPress={() => navigation.navigate("Deals")}
        />
      </View>
    );
};

export default Vetting;

import React from 'react';
import { View, Text } from 'react-native';

const BusketCard = ({amount}) => {
  const { basketContainerStyle, priceTextStyle } = styles;
  return (
    <View style={basketContainerStyle}>
      <Text style={priceTextStyle}> Wallet:{amount}</Text>
    </View>
  );
};

const styles = {
  basketContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#e2e2e2',
    backgroundColor: '#ffffff',
    height: 100,
  },
  bagsTextStyle: {
    fontSize: 12
  },
  priceTextStyle: {
    fontSize: 22,
    alignText:'center',
    marginTop:20,
  }, 
};

export default BusketCard;


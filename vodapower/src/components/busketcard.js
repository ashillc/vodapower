import React from 'react';
import { View, Text } from 'react-native';
// import  { FiShoppingCart } from 'react-icons/fi';

const BusketCard = ({amount}) => {
  const { basketContainerStyle, priceTextStyle } = styles;
  return (
    <View style={basketContainerStyle}>
        {/* <FiShoppingCart
        style={{
            color:'#828282',  
            marginLeft: '8em',
            fontSize: '2em',
            fontWeight:'1em'
          }} */}
        {/* /> */}
      <Text style={priceTextStyle}>{ amount }</Text>
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
  }, 
};

export default BusketCard;


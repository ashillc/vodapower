import
  React, {
  PureComponent
} from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Button } from './button';

import 
  PropTypes 
from 'prop-types'; 

export class VasCard extends PureComponent {

    static propTypes = {
        description: PropTypes.string,
        data: PropTypes.string,
        voice: PropTypes.number,
        cost: PropTypes.number,
        discount: PropTypes.number,
    }

    static defaultProps = {
        description:'',
        data:'',
        voice: 0,
        cost: 0,
        discount:0,
        navigation: () => {}
    }

    render = () => {
        return (
      <View style={styles.card}>
          <View style={styles.discountCard}> 
          <Text style={styles.discountText}>Save R{this.props.discount}</Text></View>
                <View style={styles.overUseContainer}>
                </View>
                <View style={styles.container}>
                <Text style={styles.boldRightTextTopSpace}>
              {this.props.description} 
            </Text>
            <Text style={styles.boldBigText}>
              R{this.props.cost} PM x 24
            </Text>
          
          </View>
            <Button
              style={styles.button}
              text={'Buy now'}
              isPrimaryButton={true}
              onPress={this.props.navigation}
              disabled={false}
            /> 
    </View>
        );
    }
}
 
const styles = StyleSheet.create({
    greyBar: {
      width: 2,
      height: 60,
      backgroundColor:'#D8D8D8',
      marginTop: 10, 
      marginLeft: 25, 
      marginRight:30
    },
    discountCard: {
      alignItems:'end',
      // backgroundColor:'#E60000',
    },
    boldRightTextTopSpace: {
   //   fontFamily: 'VodafoneRgBd',
      fontSize: 18, 
      padding:2.5,
      color: '#333333',
      flex: 1,
      flexWrap: 'wrap',
      width: 200,
      textAlign: 'center',
      fontWeight: 'bold',
      marginBottom: -10,
      marginTop: 10,
      marginLeft: 7
    },
    discountText: {
      color:'#333333',
      fontSize:14
    },
    dealDetails:{
      paddingTop: 10
    },
    dealDetailsRelativePos:{
      paddingTop: 10,
      position: 'relative'
    },
    dealDetailsDevice: {
      paddingTop: 10,
      marginLeft: -15,
      marginTop: 15
    },
    dealDetailsCentered:{
      paddingTop: 10,
      marginLeft: 40,
      marginTop: 5
    },
    dealDetailsLeft:{
      paddingTop: 10,
      left: 0,
      position: 'relative'
    },
    boldBigText: {
  //    fontFamily: 'VodafoneExB',
      fontSize: 18,
      textAlign: 'center',
      padding:2.5,
      color: '#333333',
      fontWeight: 'bold',
      marginTop: 10,
    },
    rightTextWider: {
  //    fontFamily: 'VodafoneRg',
      fontSize: 16, 
      padding: 5,
      color: '#333333',
      flex: 1,
      flexWrap: 'wrap',
      width: 250,
      textAlign: 'center'
    },
    rightText: {
  //    fontFamily: 'VodafoneRg',
      fontSize: 16, 
      padding:2.5,
      color: '#333333',
      flex: 1,
      flexWrap: 'wrap',
      width: 200,
      textAlign: 'center'
    },
    boldRightText: {
   //   fontFamily: 'VodafoneRgBd',
      fontSize: 18, 
      padding:2.5,
      color: '#333333',
      fontWeight: 'bold',
      flex: 1,
      flexWrap: 'wrap',
      width: 200,
      textAlign: 'center'
    },
    boldRightTextTopSpace: {
 //     fontFamily: 'VodafoneRgBd',
      fontSize: 18, 
      padding:2.5,
      color: '#333333',
      flex: 1,
      flexWrap: 'wrap',
      width: 200,
      textAlign: 'center',
      fontWeight: 'bold',
      marginBottom: -10,
      marginTop: 10,
      marginLeft: 7
    },
    deviceImage: {
      alignSelf: 'flex-start',
      width: 125,
      height: 125,
      maxHeight: 150,
      maxWidth: 100,
      marginLeft: 20,
      marginRight: 10,
      padding: 10
    },
    card: {
      backgroundColor: '#ffffff',
      color: '#E60000',
      paddingHorizontal: 15,
      paddingVertical: 7,
      marginVertical: 7,
      borderRadius: 4
    },
    overUseContainer: {
      flexDirection: 'row',
    },
    button: {
      marginTop: 10,
      padding: 10,
      width:'auto',
    },
    planContainer:{
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: -12.5,
      marginBottom: 2.5
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 2.5,
      marginBottom: 2.5
    },
    detailsTextLightGrey:{
 //     fontFamily: 'VodafoneRg',
      fontSize: 18,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 2,
      color: '#D8D8D8',
      textAlign: 'center'
    },  
  });
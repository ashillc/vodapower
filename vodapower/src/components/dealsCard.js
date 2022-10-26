import
  React, {
  PureComponent
} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import { Button } from './button';

// import {
//   Button,
//   Image,
// } from 'app/core/components';

import 
  PropTypes 
from 'prop-types'; 
import { Devices } from '../ui/devicedeal';

export class DealsCard extends PureComponent{

  static propTypes = {
    image: PropTypes.string,
    device: PropTypes.string,
    size: PropTypes.string,
    colour: PropTypes.string,
    data: PropTypes.string,
    voice: PropTypes.number,
    cost: PropTypes.number,
    cost24:PropTypes.number,
    cost36:PropTypes.number,
    duration: PropTypes.number,
    contract: PropTypes.string,
    navigation: PropTypes.func
  }

  static defaultProps = {
    image: '',
    device: '',
    size: '',
    colour: '',
    data: '',
    voice: 0,
    cost: 0,
    cost24:0,
    cost36:0,
    duration: 0,
    contract: '',
    navigation: ()=> {}
  }

  render = () =>{

    return(

      <View style={styles.card}>

        <View style={styles.overUseContainer}>
                 
          <View style={styles.container}>
          
            <Image
              style={styles.deviceImage}
              source={{uri : this.props.image}}
            />
                    
            <View style={styles.dealDetailsDevice}>
           
              <Text style={styles.boldRightTextTopSpace}>
              {this.props.device}
              </Text>
            </View>

          </View> 
                
        </View> 

        <View style={styles.container}>
        
          <Text style={styles.boldBigText}>
          R{this.props.cost24} PM x 24
          </Text>
          <View style={styles.dealDetails}>

          <View style={styles.greyBar}/>

          </View>
          
          <Text style={styles.boldBigText}>
             R{this.props.cost36} PM x 36
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
//    fontFamily: 'VodafoneRgBd',
    fontSize: 20,
    textAlign: 'center',
    marginTop:35,
    padding:5,
    color: '#333333',
    fontWeight: 'bold',
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
//   fontFamily: 'VodafoneRg',
    fontSize: 16, 
    padding:2.5,
    color: '#333333',
    flex: 1,
    flexWrap: 'wrap',
    width: 200,
    textAlign: 'center'
  },
  boldRightText: {
  //  fontFamily: 'VodafoneRgBd',
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
//   fontFamily: 'VodafoneRg',
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 2,
    color: '#D8D8D8',
    textAlign: 'center'
  },  
});
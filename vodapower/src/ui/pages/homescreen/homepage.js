import
  React, {
  Component,
} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';

// import { GiMailedFist} from 'react-icons/gi'

export const HomePage = ({ navigation }) =>   {
    return (
      <ScrollView style={styles.mainContainer}>
        <View style={styles.mainContainer}> 
        <Image style={{width:'auto',height:300}} source={require('../../../assets/Top_banner.png')}>

        </Image>
          <View style={styles.listContainer}>
            <Text style={styles.textContainer}> My favourites </Text>
            <Image style={{width:350,height:100,paddingTop:30,marginLeft:5,}} source={require('../../../assets/Row_3.png')}></Image>
            <TouchableOpacity
            onPress={() => navigation.navigate("User")}
            >
            <View style={styles.vodapowerCard}>
              
            </View>
            <Text style={styles.vodapowerText}>Vodapower</Text>
            </TouchableOpacity>
          </View>
           <View style={styles.card}>
           <Image style={{width:'auto',height:300}} source={require('../../../assets/Shop.png')}></Image>
           </View>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    backgroundColor: '#08081B',
  },
  card: {
    backgroundColor: '#08081B',
    color: '#E60000',
    paddingHorizontal: 15,
    paddingVertical: 7,
    marginVertical: 7,
    borderRadius: 25
  },
  listContainer: {
    backgroundColor: '#141827',
    width: '100%',
    flex: 1,
    paddingTop: 10,
    height: 300,
    marginLeft:20,
    borderRadius:10,
    marginTop:20,
    paddingBottom:20
  },
  vodapowerCard: {
    width:60,
    height:60,
    backgroundColor: "#E60000",
    borderRadius:10,
    marginTop:10,
    marginLeft:10,
    flexDirection:'column'
  },
  vodapowerText: {
    color:'#C9CCD4',
    fontSize:14,
    marginLeft:10,
  },
  bottomContainer: {
    backgroundColor: '#00FFFF',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
    justifyContent: 'flex-end',
    paddingBottom: 100,
    // height: screenHeight * 0.14,
    flexGrow: 1
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: '3%',
    paddingBottom: 10,
  },
  textContainer: {
    justifyContent: 'center',
    maxHeight: '43%',
    paddingVertical: 0,
    flexGrow: 1,
    color: '#A8ACB8',
    fontSize: 22,
    paddingBottom:20,
    marginLeft:30,
  },
  imageContainer: {
    justifyContent: 'flex-end',
    maxHeight: '55%',
    flexGrow: 2
  },
  skipButton: {
    width: '50%',
    backgroundColor: '#ffffff',
    marginRight: '5%',
    borderRadius: 24,
    height: 50
  },
  skipButtonText: {
    color: '#9C2AA0',
    fontWeight: 'bold',
  },
  nextButton: {
    width: '67%',
    backgroundColor: '#E60000',
    borderWidth: 0,
    borderRadius: 24
  },
  doneButton: {
    width: '100%',
    backgroundColor: '#9C2AA0',
    borderWidth: 0,
    borderRadius: 24
  },
  image: {
    // width: (screenWidth - 80),
    // height: (screenWidth - 80),
  },
  headingSubtext: {
    fontSize: 16,
    textAlign: 'center',
    color: '#5a5a5a',
    paddingHorizontal: 18,
    lineHeight: 24
  },
  purpleHeading: {
    fontSize: 22,
    textAlign: 'center',
    color: '#9C2AA0',
    fontWeight: 'bold',
    paddingVertical: 15,
    paddingHorizontal: 10
  },
  dotStyle: {
    height: 8,
    width: 8,
    backgroundColor: '#696969',
    borderRadius: 4,
    marginHorizontal: 8,
  },
  activeDotStyle: {
    height: 10,
    width: 10,
    borderRadius: 8,
    backgroundColor: '#333333',
    marginHorizontal: 8,
  },
  pagination: {
    paddingBottom: 15
  },
  textBold: {
    fontWeight: 'bold'
  },
  goToLink: {
    fontSize: 16,
    color: '#5a5a5a',
    fontWeight: 'bold',
  },
  goToLinkIcon: {
    paddingLeft: 5
  },
  goToLinkContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 25,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

import
  React, {
  Component
} from 'react';

import {
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator
} from 'react-native';

import {
  Colors
} from '../../../components/styles';

import {
    RebrandSpinner
} from '../../../components/rebrandSpinner';

import {
    HorizontalStepper
} from '../../../components/horizontalStepper';

import {
    UpgradeSteps
  } from '../../../components/constants';

import {
    DealsCard
} from '../../../components/dealsCard';

import {
    FilterItem
} from '../../../components/filterItems';

import {
    FilterButtons
} from '../../../components/filterButton';

import {
    FilterDeviceOptions
} from '../../../components/filterDeviceOptions';

import { DealsTagHelper } from '../../../components/dealsTagHelper';

import { Devices } from '../../devicedeal';

import BusketCard from '../../../components/busketcard';

// import {
//   ModalType
// } from 'app/core/constants';

// import {
//   RecommendedDealsProvider,
//   DealsFilterProvider
// } from 'app/providers';


// import {
//   DealsTagHelper
// } from 'app/ui/sales/upgrades/dealsTagHelper';
import { DeviceDeals } from '../../../components/constants';

// import { FilterDeviceOptions } from '../../../components/filterdevice';

export class Deals extends Component {

  // insight = AppCore.Insight.with('Upgrades', 'RecommendedDeals');

  state = {
    isLoading: true,
    recommendedDeals: [],
    loadingManufacturers: true,
    deviceWithContract: true,
    deviceManufacturer: 'All',
    device: 'All',
    simOnly: null,
    manufacturerItems: [],
    deviceItems: [],
    noDeals: false,
    findDeal: false,
    text:'',
    amount:'R1200'
  };


  renderDeals = ({ item }) => {

    return (
      <DealsCard
        image={item.image_url}
        device={item?.DESCRIPTION || item.DESCRIPTION}
        size={item.deviceMemSize}
        colour={item.deviceColor}
        // data={item.packageDetail.includedData}
        // voice={item.packageDetail.includedMinutes}
        cost={item.PRICE}
        cost24={item.PRICE_MNTLY_24}
        cost36={item.PRICE_MNTLY_36}
        duration={item.paymentTerms}
        // contract={item.dealsheet.pricePlan}
        navigation={() => this.props.navigation.navigate('Vas')}
      />
    );
  }

  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = DeviceDeals.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.DESCRIPTION ;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      // DeviceDeals: newData,
      text: text,
    });
  }

  listEmptyComponent = () => {

    return (
      <View>
        <Text style={styles.noDealErrorText}>
          No deals found.
        </Text>
      </View>
    );
  }

  render = () => {
    return (
        <>
  <ScrollView style={styles.scrollViewStyle}>

            <BusketCard
            amount={this.state.amount}
            >
          </BusketCard>
            <HorizontalStepper
              currentStep={1}
              steps={UpgradeSteps}
              hasRightComponent={false} />
            <View
              accessible={true}
              accessibiltyLabel={'Deals screen'}
              style={styles.detailsTextContainer}>

              <View style={styles.Headcontainer}>

                <Text
                  accessibilityRole={'header'}
                  accessibilityLabel={'Deals'}
                  style={styles.topHeaderText}>

                    Deals
                </Text>
                <View style={styles.viewStyle}>
           
          </View>

              </View>

              <View style={styles.detailsContainer}>

                <Text
                  accessibilityRole={'text'}
                  accessibilityLabel={'These deals are perfect for you'}
                  style={styles.detailsText}>

                   These deals are perfect for you!
                </Text>

              </View>
              <TextInput
                  style={styles.textInputStyle}
                  onChangeText={text => this.SearchFilterFunction(text)}
                  value={this.state.text}
                  underlineColorAndroid="transparent"
                  placeholder="Filter"
        />
                 <FlatList
                  data={DeviceDeals}
                  keyExtractor={(item) => item.id}
                  renderItem={this.renderDeals}
                  ListEmptyComponent={this.listEmptyComponent} />
                 

            </View>
          </ScrollView>
</>
    );
  }
}

const styles = StyleSheet.create({
  subLoaderContainer: {
    paddingVertical: '35%',
    alignItems: 'center',
    width: '100%',
    height: 400
  },
  Headcontainer: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'stretch',
    padding: 20,
  },
  Busketcontainer: {
    flexDirection: 'row',
    padding: 50,
    height:100,
    backgroundColor:'#08081b',
  },
  topHeaderText: {
 //   fontFamily: 'VodafoneRgBd',
    fontSize: 22,
    alignItems: 'flex-start',
    color: Colors.Black,
    width: '100%'
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
    fontSize:15,
    borderRadius:10,
  },
  redRightText: {
 //   fontFamily: 'VodafoneRg',
    fontSize: 18,
    textAlign: 'right',
    color: Colors.Red,
    width: '50%',
    alignItems: 'flex-end'
  },
  detailsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: 'column',
    alignContent: 'stretch',
    paddingBottom: 5
  },
  scrollViewStyle: {
    backgroundColor: Colors.OffWhite
  },
  detailsTextContainer: {
    backgroundColor: Colors.LighterGrey
  },
  detailsText: {
 //  fontFamily: 'VodafoneRg',
    fontSize: 18,
    textAlign: 'left',
    paddingBottom: 10,
    color: Colors.DarkGrey
  },
  findDeal: {
    padding: 10,
    backgroundColor: Colors.VeryLightGrey
  },
  boldText: {
    color: Colors.Black,
    fontWeight: '700',
 //   fontFamily: 'VodafoneRgBd',
    fontSize: 20
  },
  plainText: {
    color: Colors.Black,
 //   fontFamily: 'VodafoneRg',
    fontSize: 18,
    paddingTop: 10
  },
  noDealErrorText: {
    paddingHorizontal: 20,
    paddingVertical: 30,
 //   fontFamily: 'VodafoneRg',
    fontSize: 20,
    textAlign: 'center',
    color: Colors.DarkGrey
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#08081B',
    padding: 0
  },
  filterOptionsContainer: {
    flexDirection: 'column',
    color: Colors.Black
  },
  spinner: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20
  }
});

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
  TouchableOpacity
} from 'react-native';

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
    FilterItem
} from '../../../components/filterItems';

import {
    FilterButtons
} from '../../../components/filterButton';

import {
    FilterDeviceOptions
} from '../../../components/filterDeviceOptions';

import BusketCard from '../../../components/busketcard';

import { Colors } from '../../../components/styles';
import { AccessoriesDeals } from '../../../components/constants';
import { AccessoriesCard } from '../../../components/accessoriesCard';

export class Accessories extends Component {
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
        findDeal: false
    };

    renderAccessories = ({item}) => {
        return (
            <AccessoriesCard
            image={item.image_url}
            description={item.DESCRIPTION}
            cost24={item.PRICE_MNTLY_24}
            navigation={() => this.props.navigation.navigate('Streaming')}
            />
        )
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
    
            { this.state.noDeals
    
              ? <View style={styles.container}
                  accessible={true}
                  accessibiltyLabel={'Deals filter screen'}>
    
                <HorizontalStepper
                  currentStep={1}
                  steps={UpgradeSteps}
                  hasRightComponent={false} />
    
                { this.state.findDeal
                    && <View style={styles.findDeal}>
                      <Text
                        accessibilityRole={'header'}
                        accessibilityLabel={'Let\'s find a deal'}
                        style={styles.boldText}>
    
                        Let's find a deal
                      </Text>
                      <Text style={styles.plainText}>
    
                        Please configure the following filters:
                      </Text>
                    </View>
                }
    
                <View>
    
                  <FilterDeviceOptions
                    deviceWithContract={this.state.deviceWithContract}
                    actionOne={() => {
    
                      this.changeDeviceOptions(true);
                    }}
                    actionTwo={() => {
    
                      this.changeDeviceOptions(false);
                    }}
                  />
                </View>
    
    
                { this.state.loadingManufacturers
    
                  ? <View style={styles.spinner}>
    
                    <RebrandSpinner
                      color={Colors.Red}
                      size={150}
                      animationTime={3000}
                    />
                  </View>
    
                  : <View>
    
                    { this.state.deviceWithContract
    
                      && <View style={styles.filterOptionsContainer}>
                      {Devices.map((deals) =>{
                        <FilterItem
                          name={'Brands'}
                          onChange={this.changeSelectedManufacturer}
                          items={deals.device}
                          selected={this.state.deviceManufacturer}
                        />
                      })}
                        { this.state.deviceWithContract && this.state.deviceManufacturer !== 'All'
    
                          && 
                          <View style={styles.filterOptionsContainer}>
                        {Devices.map((deals) =>{
                            <FilterItem
                              name={'Models'}
                              onChange={this.changeSelectedModel}
                              items={deals.device}
                              selected={this.state.device}
                            />
                          })}
                          </View>
                        }
    
                      </View>
                    }
    
                  </View>
                }
    
                <FilterButtons
                  applyAction={() => {
    
                    this.getRecommendedDeals();
                  }}
                  resetAction={() => {
    
                    this.reset();
                  }}
                />
    
              </View>
    
              : <ScrollView style={styles.scrollViewStyle}>
    
                <HorizontalStepper
                  currentStep={4}
                  steps={UpgradeSteps}
                  hasRightComponent={false} />
    
              <BusketCard>
                
              </BusketCard>
    
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
                    <TouchableOpacity
                      accessibilityRole={'button'}
                      accessibilityLabel={'Filter'}
                      accessibiltyHint={'Will redirect you to the filter screen'}
                      onPress={() => this.props.navigation.navigate('PopupList')}
                      style={styles.redRightText}>
    
                      <Text style={styles.redRightText}>
                       FILTER
                      </Text>
                    </TouchableOpacity>
    
                  </View>
    
                  <View style={styles.detailsContainer}>
    
                    <Text
                      accessibilityRole={'text'}
                      accessibilityLabel={'These deals are perfect for you'}
                      style={styles.detailsText}>
    
                       These deals are perfect for you!
                    </Text>
    
                    {/* <Text style={styles.detailsText}>
    
                        Get a great device PLUS all the data and minutes you need.
                    </Text> */}
                  </View>
    
                   { this.state.isLoading ?
                     <FlatList
                      data={AccessoriesDeals}
                      keyExtractor={(item) => item.id}
                      renderItem={this.renderAccessories}
                      ListEmptyComponent={this.listEmptyComponent} />
                    : 
                      <View style={styles.subLoaderContainer}>
                      <RebrandSpinner
                        color={Colors.Red}
                        size={70}
                        animationTime={3000} />
                    </View>
                  }  
    
                </View>
              </ScrollView>
    
            }
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
    
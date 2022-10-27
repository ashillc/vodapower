/* eslint-disable no-invalid-this */
import
  React, {
  Component
} from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import {
    FilterItem
} from './filterItems';

import {
    FilterButtons
} from './filterButton';

import { DeviceDeals } from './constants';

export class DealsFilter extends Component {

  state = {
    loadingManufacturers: true,
    loadingDevices: false,
    deviceWithContract: true,
    manufacturer: 'All',
    device: 'All',
    manufacturerItems: [],
    deviceItems: []
  };

  removeFocusListener = null;


  reset = () => {

    this.setState({
      manufacturer: 'All',
      device: 'All',
      loadingDevices: false
    });

    if (this.state.manufacturerItems.length < 1) {

      this.setState({
        loadingManufacturers: true
      });
      this.getManufacturerList();
    }
  };

  componentWillUnmount = () => {

    if (this.removeFocusListener !== null) {

      this.removeFocusListener();
    }
  }

  render = () => {

    return (

        <View
          accessible={true}
          accessibiltyLabel={'Deals filter screen'}
          style={styles.container}>

            <View>

              {/* { this.state.deviceWithContract */}

                  {/* &&  */}
                  <View style={styles.filterOptionsContainer}>

                    <FilterItem
                      name={'Brands'}
                      onChange={this.DeviceDeals}
                      items={DeviceDeals.MANUFACTURER}
                      selected={this.state.manufacturer}
                    />

                    {/* { this.state.deviceWithContract && this.state.manufacturer !== 'All' */}

                      {/* &&  */}
                      <View style={styles.filterOptionsContainer}>

                        <FilterItem
                          name={'Model'}
                          onChange={this.changeSelectedModel}
                          items={DeviceDeals.MANUFACTURER}
                          selected={this.state.device}
                        />
                      </View>
                    {/* } */}

                  </View>
              {/* } */}

            </View>


          <FilterButtons
            applyAction={() => this.applyFilters()}
            resetAction={() => this.reset()}
          />

        </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 0
  },
  filterOptionsContainer: {
    color: '#333333',
    flexDirection: 'column'
  },
  spinner: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 100
  }
});

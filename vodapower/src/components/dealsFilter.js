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

import {
    FilterDeviceOptions
} from './filterDeviceOptions';

import {
    RebrandSpinner
} from './rebrandSpinner';

import {
  ModalType
} from 'app/core/constants';

import {
  DealsFilterProvider
} from 'app/providers';

import {
  DealsTagHelper
} from 'app/ui/sales/upgrades/dealsTagHelper';

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

  insight = AppCore.Insight.with('Upgrades', 'DealsFilter');

  removeFocusListener = null;

  changeDeviceOptions = (value) => {

    this.setState({
      deviceWithContract: value,
      manufacturer: (value) ? 'All' : null,
      device: (value) ? 'All' : null
    });
  };

  changeSelectedManufacturer = (manufacturer) => {

    if (manufacturer === this.state.manufacturer || manufacturer === 'All') {

      return;
    }

    this.insight.tag(
      'Upgrade',
      'myvodacomapp: upgrades: filter brand',
      DealsTagHelper.filterBrand(this.state.manufacturer)
    );

    this.getDeviceList(manufacturer);

    this.setState({
      manufacturer: manufacturer,
      loadingDevices: true,
      device: 'All'
    });

  };

  changeSelectedModel = (device) => {

    if (device === this.state.device) {

      return;
    }

    this.insight.tag(
      'Upgrade',
      'myvodacomapp: upgrades: filter model',
      DealsTagHelper.filterModel(this.state.device)
    );

    this.setState({
      device: device || 'All'
    });
  };

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

  getDeviceList = (manufacturer = this.state.manufacturer) => {

    DealsFilterProvider
      .getModels(manufacturer)
      .then((ret) => {

        if (ret.ok && !ret.noDevices) {

          this.setState({
            deviceItems: ret.result,
            loadingDevices: false
          });

          return;
        }

        if (ret.noDevices) {

          this.insight.tag(
            'Upgrade',
            'myvodacomapp: upgrades: filter no results found',
            DealsTagHelper.noResultsFound()
          );

          AppCore.PopUp.showSimple(
            'No results found',
            'We couldn\'t find any deals for you. Please adjust your filter to widen your search or visit your nearest Vodacom shop.',
            null,
            () => this.reset(),
            ModalType.Info,
            'Okay'
          );

          return;
        }

        AppCore.PopUp.showError(
          'Sorry',
          'We seem to be having some technical issues right now. Please try again later',
          ret.trace || null,
          'Upgrades - Deals Filter',
          ret.date || null,
          () => this.reset(),
          'Okay',
          ModalType.Error,
          () => this.getDeviceList(),
          'Retry'
        );
      })
      .catch((e) => {

        this.insight.error(e);

        AppCore.PopUp.showError(
          'Sorry',
          'We seem to be having some technical issues right now. Please try again later',
          ret.trace || null,
          'Upgrades - Deals Filter',
          ret.date || null,
          () => this.reset(),
          'Okay',
          ModalType.Error,
          () => this.getDeviceList(),
          'Retry'
        );
      });
  };

  getManufacturerList = () => {

    DealsFilterProvider
      .getManufacturers()
      .then((ret) => {

        if (ret.ok) {

          const returnedManufacturers = ret.result;

          if (returnedManufacturers.length === 0) {

            this.insight.tag(
              'Upgrade',
              'myvodacomapp: upgrades: filter no results found',
              DealsTagHelper.noResultsFound()
            );

            AppCore.PopUp.showSimple(
              'No results found',
              'We couldn\'t find any deals for you. Please adjust your filter to widen your search or visit your nearest Vodacom shop.',
              null,
              () => this.reset(),
              ModalType.Info,
              'Okay'
            );

            return;
          }

          this.setState({
            manufacturerItems: returnedManufacturers,
            loadingManufacturers: false
          });

          return;
        }

        AppCore.PopUp.showError(
          'Sorry',
          'We seem to be having some technical issues right now. Please try again later',
          ret.trace || null,
          'Upgrades - Deals Filter',
          ret.date || null,
          () => this.reset(),
          'Okay',
          ModalType.Error,
          () => this.getManufacturerList(),
          'Retry'
        );
      })
      .catch((e) => {

        this.insight.error(e);
      });
  };

  applyFilters = () => {

    if (!this.state.deviceWithoutContract) {

      this.insight.tag(
        'Upgrade',
        'myvodacomapp: upgrades: filter without device',
        DealsTagHelper.filterWithoutDevice()
      );
    }

    this.props.navigation.navigate(
      'Deals',
      {
        device: this.state.device,
        manufacturer: this.state.manufacturer,
        simOnly: (this.state.deviceWithContract)
          ? 'N'
          : 'Y'
      });
  }

  componentDidMount = () => {

    this.removeFocusListener = this.props.navigation.addListener('focus', () => {

      this.getManufacturerList();
      this.insight.tag(
        'Upgrade',
        'myvodacomapp: upgrades: filter without device',
        DealsTagHelper.filterWithDevice()
      );
    });

  }

  componentWillUnmount = () => {

    if (this.removeFocusListener !== null) {

      this.removeFocusListener();
    }
  }

  render = () => {

    const title = AppCore.Nav.getParam(this.props.route, 'title', 'DealsFilter');
    const journey = 'Upgrades';

    return (

        <View
          accessible={true}
          accessibiltyLabel={'Deals filter screen'}
          style={styles.container}>

          <FilterDeviceOptions
            deviceWithContract={this.state.deviceWithContract}
            actionOne={() => this.changeDeviceOptions(true)}
            actionTwo={() => this.changeDeviceOptions(false)}
          />

          { this.state.loadingManufacturers || this.state.loadingDevices

            ? <View style={styles.spinner}>

              <RebrandSpinner
                color={'#E60000'}
                size={100}
                animationTime={3000}
              />
            </View>

            : <View>

              { this.state.deviceWithContract

                  && <View style={styles.filterOptionsContainer}>

                    <FilterItem
                      name={'Brands'}
                      onChange={this.changeSelectedManufacturer}
                      items={this.state.manufacturerItems}
                      selected={this.state.manufacturer}
                    />

                    { this.state.deviceWithContract && this.state.manufacturer !== 'All'

                      && <View style={styles.filterOptionsContainer}>

                        <FilterItem
                          name={'Model'}
                          onChange={this.changeSelectedModel}
                          items={this.state.deviceItems}
                          selected={this.state.device}
                        />
                      </View>
                    }

                  </View>
              }

            </View>
          }

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

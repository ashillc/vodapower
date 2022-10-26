import
  React, {
  PureComponent
} from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import
  PropTypes
from 'prop-types';

import {
    Button
} from './button';

export class FilterDeviceOptions extends PureComponent {

  static propTypes = {
    deviceWithContract: PropTypes.bool.isRequired,
    actionOne: PropTypes.func.isRequired,
    actionTwo: PropTypes.func.isRequired,
  }

  render = () => {

    return (

      <View style={styles.filterOptionsView}>

        <Text
          accessibilityRole={'text'}
          accessibilityLabel={'Want a contract with a device'}
          style={styles.boldText}>

          Want a contract with a device?
        </Text>

        <View style={styles.contractOptionContainer}>

          <Button
            accessibilityRole={'button'}
            accessibilityLabel={'Yes'}
            accessibilityLiveRegion={'polite'}
            accessibilityState={{selected: this.props.deviceWithContract}}
            accessibiltyHint={'Will display deals with device'}
            style={[
              styles.yesButton,
              styles.yesNoButtonBase
            ]}
            text={'Yes'}
            isPrimaryButton={this.props.deviceWithContract}
            onPress={() => this.props.actionOne()} />

          <Button
            accessibilityRole={'button'}
            accessibilityLabel={'No'}
            accessibilityLiveRegion={'polite'}
            accessibilityState={{selected: this.props.deviceWithContract}}
            accessibiltyHint={'Will display sim only deals'}
            style={[
              styles.noButton,
              styles.yesNoButtonBase
            ]}
            text={'No'}
            isPrimaryButton={!this.props.deviceWithContract}
            onPress={() => this.props.actionTwo()} />

        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  contractOptionContainer: {
    flexDirection: 'row',
    paddingTop: 15
  },
  filterOptionsView: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 15,
    paddingBottom: 25,
  },
  yesNoButtonBase: {
    width: 100,
    height: 35
  },
  yesButton: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },
  noButton: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderLeftColor: '#00000000',
  },
  boldText: {
    fontWeight: '700',
    fontSize: 18,
    paddingTop: 10,
    color: '#333333',
  }
});
import
  React, {
  Component
} from 'react';

import
  PropTypes
from 'prop-types';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export class ContractSummary extends Component {

  static propTypes = {
    contractType: PropTypes.string,
    monthlyContract: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    currentDevice: PropTypes.string,
    deviceCost: PropTypes.string,
    planType: PropTypes.string,
    planName: PropTypes.string,
    planCost: PropTypes.string,
    packageData: PropTypes.string,
    packageVoice: PropTypes.string,
    packageSms: PropTypes.string
  }

  static defaultProps = {
    contractType: '',
    monthlyContract: '',
    startDate: '',
    endDate: '',
    currentDevice: '',
    deviceCost: '',
    planType: '',
    planName: '',
    planCost: '',
    packageData: '',
    packageVoice: '',
    packageSms: ''
  }

  render = () => {

    return(
      <View
        accessibilityRole={'text'}
        style={[ styles.ContractContainer, styles.upgradesContainer ]}>

        <Text
          style={styles.boldLeftText}>
          Contract details
        </Text>

        <View
          style={styles.container}>

          <Text
            style={styles.leftText}>
            Contract Type
          </Text>

          <Text
            style={styles.boldRightText}>
            {this.props.contractType}
           </Text>

        </View>

        <View
          style={styles.container}>

          <Text
            style={styles.leftText}>
            Total monthly contract cost
          </Text>

          <Text
            accessibilityLabel={AppCore.Accessibility.formatAmountForAccessibility(this.props.monthlyContract)}
            style={styles.boldRightText}>
            {this.props.monthlyContract}
          </Text>
        </View>

        <View
          style={styles.container}>

          <Text
            style={styles.leftText}>
            Contract start date
          </Text>

          <Text
            style={styles.boldRightText}>
            {this.props.startDate}
          </Text>
        </View>

        <View
          style={styles.container}>

          <Text
            style={styles.leftText}>
            Contract end date
          </Text>

          <Text
            style={styles.boldRightText}>
            {this.props.endDate}
          </Text>
        </View>

        <Text
          style={styles.boldLeftText}>
          Device details
        </Text>

        <View
          style={styles.container}>

          <Text
            style={styles.leftText}>
            Device name
          </Text>

          <Text
            style={styles.boldRightText}>
            {this.props.currentDevice}
          </Text>

        </View>

        <View
          style={styles.container}>

          <Text
            style={styles.leftText}>
            Monthly device cost
          </Text>

          <Text
            accessibilityLabel={AppCore.Accessibility.formatAmountForAccessibility(this.props.deviceCost)}
            style={styles.boldRightText}>
            {this.props.deviceCost}
          </Text>

        </View>

        <Text
          style={styles.boldLeftText}>
          Plan details
        </Text>

        <View
          style={styles.container}>

          <Text
            style={styles.leftText}>
            Plan type
          </Text>

          <Text
            style={styles.boldRightText}>
            {this.props.planType}
          </Text>

        </View>

        <View
          style={styles.container}>

          <Text
            style={styles.leftText}>
            Plan name
          </Text>

          <Text
            style={styles.boldRightText}>
            {this.props.planName}
          </Text>

        </View>

        <View
          style={styles.container}>

          <Text
            style={styles.leftText}>
            Monthly plan cost
          </Text>

          <Text
            accessibilityLabel={AppCore.Accessibility.formatAmountForAccessibility(this.props.planCost)}
            style={styles.boldRightText}>
            {this.props.planCost}
          </Text>

        </View>

        <View
          style={styles.container}>

          <Text
            style={styles.leftText}>
            Anytime data allocation
          </Text>

          <Text
            accessibilityLabel={AppCore.Accessibility.formatDataForAccessibility(this.props.packageData)}
            style={styles.boldRightText}>
            {this.props.packageData}
          </Text>

        </View>

        <View
          style={styles.container}>

          <Text
            Voice allocation
            style={styles.leftText}>
          </Text>

          <Text
            accessibilityLabel={`${this.props.packageVoice} minutes`}
            style={styles.boldRightText}>
            {this.props.packageVoice}
          </Text>

        </View>

        <View
          style={styles.container}>

          <Text
            style={styles.leftText}>
            SMS allocation
          </Text>

          <Text
            accessibilityLabel={`${this.props.packageSms} SMS's`}
            style={styles.boldRightText}>
            {this.props.packageSms}
          </Text>

        </View>

      </View>
    );
  }

}

const styles = StyleSheet.create({

  boldLeftText: {
 //   fontFamily: 'VodafoneRgBd',
    fontSize: 16,
    textAlign: 'left',
    padding: 10,
    marginBottom: 5,
    marginTop: 5,
    color: '#333333',
    fontWeight: 'bold',
    flex: 1,
    alignSelf: 'stretch',
  },
  leftText: {
//   fontFamily: 'VodafoneRg',
    fontSize: 16,
    textAlign: 'left',
    padding: 10,
    color: '#333333',
    flex: 1,
    alignSelf: 'stretch',
  },
  boldRightText: {
 //   fontFamily: 'VodafoneRgBd',
    fontSize: 16,
    textAlign: 'left',
    padding: 10,
    color: '#333333',
    flex: 1,
    fontWeight: 'bold',
    alignSelf: 'stretch',
  },
  upgradesContainer: {
    backgroundColor: '#ffffff',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 2.5,
    marginBottom: 2.5,
    flex: 1,
    alignSelf: 'stretch'
  },
  ContractContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 70,
    marginTop: 7,
  },
});
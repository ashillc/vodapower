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
  TouchableOpacity,
  View,
} from 'react-native';

import { UsageAmount } from '../ui/usageamount';

import {
  Colors
} from './constants';

// import {
//   GeneralIcon
// } from 'app/core/constants';

// import {
//   Image
// } from 'app/core/components';

export class UpgradeSummary extends Component {


//   insight = AppCore.Insight.with('Upgrades', 'upgradeSummary');

  state = {
    expanded: false
  };

  static propTypes = {
    data: PropTypes.string,
    packageData: PropTypes.string,
    voice: PropTypes.string,
    packageVoice: PropTypes.string,
    sms: PropTypes.string,
    packageSms: PropTypes.string,
    avgSpend: PropTypes.string,
    bill: PropTypes.string,
    totalBill: PropTypes.string,
    dataOverUse: PropTypes.bool,
    voiceOverUse: PropTypes.bool,
    smsOverUse: PropTypes.bool,
    billOverUse: PropTypes.bool,
    navigation: PropTypes.func
  }

  static defaultProps = {
    data: '0',
    packageData: '0',
    voice: '0',
    packageVoice: '0',
    sms: '0',
    packageSms: '0',
    avgSpend: '',
    bill: '',
    totalBill: '-',
    dataOverUse: false,
    voiceOverUse: false,
    smsOverUse: false,
    billOverUse: false,
    navigation: ()=> {}
  }

  toggleExpand = () => {

    this.setState({ expanded: !this.state.expanded });
  }

  render = () => {

    return(

      <View
        accessibilityRole={'text'}
        style={styles.upgradesContainerBody} >

        <View
          style={styles.card}>

          <Text
            style={styles.cardHead}>
            Data
          </Text>

          <View
            style={styles.overUseContainer}>

            {/* {this.props.dataOverUse &&

              <Image
                style={styles.icon}
                source={{ uri: GeneralIcon.FilledError }} />
            } */}
        { UsageAmount.map((data) => 
            <Text
              accessibilityLabel={`You used ${(data.data)}`}
              style={[ styles.usageInfo, this.props.dataOverUse? styles.overUse: {} ]}>
              {data.data}
            </Text>
        )}
          </View>
          { UsageAmount.map((datainc) => 
          <Text
            accessibilityLabel={`Your current plan gives you ${(datainc.includedData)} of data`}
            style={[ styles.usageOtherInfo, this.props.dataOverUse? styles.overUse: {} ]}>
            Your current plan gives you {' '}
            <Text
              style={styles.highlight}>
              {datainc.includedData} data
            </Text>
          </Text>
  )}
        </View>

        <View
          style={styles.card}>

          <Text
            style={styles.cardHead}>
            Voice
          </Text>

          <View style={styles.overUseContainer}>

            {/* {this.props.voiceOverUse &&

              <Image
                style={styles.icon}
                source={{ uri: GeneralIcon.FilledError}}/>
            } */}
         { UsageAmount.map((voiceinc) => 
            <Text
              accessibilityLabel={`You used ${voiceinc.voice}`}
              style={[ styles.usageInfo, this.props.voiceOverUse? styles.overUse: {} ]}>
              {voiceinc.voice}
            </Text>
 )}
          </View>
          { UsageAmount.map((mininc) => 
          <Text
            accessibilityLabel={`Your current plan gives you ${mininc.includedMinutes}`}
            style={[ styles.usageOtherInfo, this.props.voiceOverUse? styles.overUse: {} ]}>
            Your current plan gives you {' '}
            <Text
              style={styles.highlight}>
              {mininc.includedMinutes} minutes
            </Text>
          </Text>
)}
        </View>

        <View style={styles.card}>

          <Text
            style={styles.cardHead}>
            SMS
          </Text>

          <View
            style={styles.overUseContainer}>

            {/* { this.props.smsOverUse &&

              <Image
                style={styles.icon}
                source={{ uri: GeneralIcon.FilledError }} />
            } */}
 { UsageAmount.map((smsinc) => 
            <Text
              accessibilityLabel={`You used ${smsinc.sms}`}
              style={[ styles.usageInfo, this.props.smsOverUse? styles.overUse : {} ]}>
              {smsinc.sms}
            </Text>
)}
          </View>
          { UsageAmount.map((smsinc) => 
          <Text
            accessibilityLabel={`Your current plan gives you ${smsinc.includedSms}`}
            style={[ styles.usageOtherInfo, this.props.smsOverUse? styles.overUse : {} ]}>
            Your current plan gives you {' '}
            <Text
              style={styles.highlight}>
              {smsinc.includedSms} sms
            </Text>
          </Text>
)}
        </View>

        <View
          style={styles.card}>

          <Text
            style={styles.cardHead}>
            Average monthly spend
          </Text>

          <View
            style={styles.overUseContainer}>

            {/* { this.props.billOverUse &&

              <Image
                style={styles.icon}
                source={{ uri: GeneralIcon.FilledError }} />
            } */}
  { UsageAmount.map((avgspend) => 
            <Text
               accessibilityLabel={`Your monthly spend is ${(avgspend.averageSpend)} per month`}
              style={[ styles.usageInfo, this.props.billOverUse? styles.overUse : {} ]}>
              {avgspend.averageSpend} PM
            </Text>
  )}
          </View>
          { UsageAmount.map((avgbill) => 
          <Text
            // accessibilityLabel={`Your monthly contract cost is ${AppCore.Accessibility.formatAmountForAccessibility(this.props.bill)} per month`}
            style={[ styles.usageOtherInfo, this.props.billOverUse? styles.overUse: {} ]}>
            Your monthly contract cost is {' '}
            <Text style={styles.highlight}>
              {avgbill.bill} PM
            </Text>
          </Text>
 )}
        </View>

        {this.props.billOverUse &&

          <View
            style={styles.cardMed}>

            <TouchableOpacity
              accessibilityRole={'button'}
              accessibilityLabel={'Why did I overspend'}
              style={styles.cardMedBody}
              onPress={() => this.toggleExpand()}>

              <View
                style={styles.cardMedHead}>

                {/* <Image
                  style={styles.cardMedHeadIcon}
                  source={{ uri: GeneralIcon.FilledInfo }} /> */}

                <Text
                  style={styles.boldText}>
                  Why did I overspend?
                </Text>

              </View>

              {/* <Image
                stroke={Colors.Black}
                fill={Colors.Black}
                style={styles.cardMedShuffleIcon}
                source={this.state.expanded ? { uri: GeneralIcon.ArrowUpRed } : { uri: GeneralIcon.ArrowDownRed }} /> */}

            </TouchableOpacity>

          { this.state.expanded &&

            <View
              style={styles.child}>

              <Text
                accessibilityLabel={'On average, your total bill amount was'}
                style={styles.cardMedFoldBody}>
                On average, your total bill amount was {' '}
                <Text
                  accessibilityLabel={`${AppCore.Accessibility.formatAmountForAccessibility(this.props.totalBill)} more than your monthly contract cost. This is most likely due to`}
                  style={styles.boldText}>
                  {this.props.totalBill} more {' '}
                </Text> than your monthly contract cost.
                This is most likely due to {' '}
                <Text
                  accessibilityLabel={'going out-of-bundle on your data, voice and/or SMS allocations, or'}
                  style={styles.boldText}>
                  going out-of-bundle {' '}
                </Text>
                on your data, voice and/or SMS allocations, or {' '}
                <Text
                  accessibilityLabel={'activating other services on your account. For more information,'}
                  style={styles.boldText}>
                  activating other services{' '}
                </Text>
                on your account. For more information, {' '}
                <Text
                  accessibilityRole={'link'}
                  accessibilityLabel={'view your statement or contact Customer Care at 082 135'}
                  style={styles.redText}
                  onPress={this.props.navigation}>
                  view your statement {' '}
                </Text>
                or contact Customer Care at 082 135.
              </Text>

            </View>
          }

          </View>
        }
        </View>

    );
  }
}

const styles = StyleSheet.create({

  upgradesContainerBody: {
    justifyContent: 'flex-start',
    flex: 1,
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 10,
    paddingBottom: 70,
  },
  icon: {
    alignSelf: 'flex-start',
    width: 20,
    height: 20,
    marginRight: 5,
    paddingTop: 2
  },
  card: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 15,
    paddingVertical: 7,
    marginVertical: 7,
    borderRadius: 4
  },
  cardMed: {
    marginHorizontal: 5,
    backgroundColor: '#ffffff',
    paddingVertical: 7,
    marginVertical: 7,
    borderRadius: 4,
  },
  cardMedFoldBody: {
    backgroundColor: '#ffffff',
    color: '#4a4a4a',
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderTopColor: '#F4F4F4',
    borderTopWidth: 1,
    marginTop: 7,
    paddingTop: 10,
  },
  cardMedBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  overUseContainer: {
    flexDirection: 'row'
  },
  overUse: {
    color: '#E60000',
  },
  cardHead: {
    color: '#333333',
    fontSize: 16,
  //  fontFamily: 'VodafoneRg',
    paddingBottom: 5,
  },
  cardMedHead: {
    color: '#333333',
    fontSize: 16,
  //  fontFamily: 'VodafoneRg',
    paddingVertical: 5,
    flexDirection: 'row',
  },
  cardMedHeadIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
    alignSelf: 'flex-start',
  },
  cardMedShuffleIcon: {
    width: 20,
    height: 20,
    paddingVertical: 2,
  },
  highlight: {
    color: '#333333',
  //  fontFamily: 'VodafoneRgBd',
  },
  usageInfo: {
    color: '#333333',
    fontSize: 24,
  //  fontFamily: 'VodafoneRgBd',
    paddingBottom: 5,
  },
  usageOtherInfo: {
    color: '#333333',
    fontSize: 16,
  //  fontFamily: 'VodafoneRg',
  },
  redText: {
    color: '#E60000'
  },
  boldText: {
    color: '#333333',
    fontWeight: 'bold',
 //   fontFamily: 'VodafoneRgBd'
  }
});

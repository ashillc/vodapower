import
  React, {
  Component
} from 'react';

import {
  StyleSheet,
  Text,
  ScrollView,
  View,
} from 'react-native';
import { Button } from './button';
import { RebrandSpinner } from './rebrandSpinner';

// import {
//   Button,
//   RebrandSpinner,
//   Spinner
// } from 'app/core/components';

import {
  Colors,
  GlobalStyles
} from './styles';


import {
  HorizontalStepper,
} from './horizontalStepper';

import {
  UpgradeSteps
} from './constants';
import { ContractSummary } from './contactsummary';
import { UpgradeSummary } from './upgragesummary';

export class Usage extends Component {

  removeFocusListener = null;

  state = {
    onUsage: true,
    usageLoaded: false,
    isUpgradeEligible: false,
    result: {}
  };


  componentDidMount = () => {

    this.removeFocusListener = this.props.navigation.addListener('focus', () => {


    //   this.insight.tag(
    //     'Upgrade',
    //     'myvodacomapp: upgrades: usage: start',
    //     UsageTagHelper.getUsageTags()
    //   );
    });

  }

  componentWillUnmount = () => {

    if (this.removeFocusListener !== null) {

      this.removeFocusListener();
    }
  }

  changePageContents = (value) => {

    if (!value) {

    //   this.insight.tag(
    //     'Upgrade',
    //     'myvodacomapp: upgrades: contract: start',
    //     UsageTagHelper.getContractTags()
    //   );
    }

    this.setState({
      onUsage: value
    });
  };

  render = () => {

    return (
    <>
          <View
              accessibilityRole={'text'}
              accessibilityLabel={'Usage and average spend'}
              style={styles.masterContainer}>

            <View
              style={styles.stepperContainer}>

              <HorizontalStepper
                currentStep={1}
                steps={UpgradeSteps}
                hasRightComponent={false} />

            </View>

            <ScrollView
              style={styles.scrollViewStyle}>

              <View
                style={styles.detailsTextContainer}>

                <Text
                  style={styles.topHeaderText}>
                  Let's start your upgrade
                </Text>

                <Text
                  style={styles.detailsText}>
                  Before we find the perfect deals, check out <Text style={styles.detailsTextBold}>your average usage and spend</Text> for the past 6 months:
                </Text>

                <View
                  style={[ styles.SwitchButtoncontainer, styles.container ]}>

                  <Button
                    accessibilityRole={'button'}
                    accessibilityLabel={'Usage and spend'}
                    accessibiltyHint={'View your past usage and average spend'}
                    style={[
                      GlobalStyles.rowButton,
                      styles.buttonStyle,
                      styles.leftBtnGroup
                    ]}
                    text={'Usage & spend'}
                    isPrimaryButton={this.state.onUsage}
                    onPress={() => this.changePageContents(true)}
                    disabled={false}
                  />

                  <Button
                    accessibilityRole={'button'}
                    accessibilityLabel={'Your contract'}
                    accessibiltyHint={'View your contract details'}
                    style={[
                      GlobalStyles.rowButton,
                      styles.buttonStyle,
                      styles.rightBtnGroup
                    ]}
                    text={'Your contract'}
                    isPrimaryButton={!this.state.onUsage}
                    onPress={() => this.changePageContents(false)}
                    disabled={false}
                  />

                </View>

                {this.state.onUsage &&
                  <UpgradeSummary
                    data={this.state.result.data}
                    packageData={this.state.result.packageData}
                    voice={this.state.result.voice}
                    packageVoice={this.state.result.packageVoice}
                    sms={this.state.result.sms}
                    packageSms={this.state.result.packageSms}
                    avgSpend={this.state.result.avgSpend}
                    bill={this.state.result.bill}
                    totalBill={this.state.result.totalBill}
                    dataOverUse={this.state.result.dataOverUse}
                    voiceOverUse={this.state.result.voiceOverUse}
                    smsOverUse={this.state.result.smsOverUse}
                    billOverUse={this.state.result.billOverUse}
                  />
                }

                { !this.state.onUsage && this.state.usageLoaded &&

                  <ContractSummary
                    contractType={this.state.result.contractType}
                    monthlyContract={this.state.result.monthlyContract}
                    startDate={this.state.result.startDate}
                    endDate={this.state.result.endDate}
                    currentDevice={this.state.result.currentDevice}
                    deviceCost={this.state.result.deviceCost}
                    planType={this.state.result.planType}
                    planName={this.state.result.planName}
                    planCost={this.state.result.planCost}
                    packageData={this.state.result.packageData}
                    packageVoice={this.state.result.packageVoice}
                    packageSms={this.state.result.packageSms}
                  />
                }

              </View>

            </ScrollView>

            {/* <View
              style={styles.StickyContainer}>

              <Button
                accessibilityRole={'button'}
                accessibilityLabel={'View my deals'}
                text={'View my deals'}
                isPrimaryButton={true}
                onPress={() => this.props.navigation.navigate('Deals')}
                disabled={false}
                style={styles.StickyButton}
              />

            </View> */}
          </View>

          {/* : */}
           {/* <View
              style={GlobalStyles.containerCenterVH}>

              <RebrandSpinner
                size={140}
                color={Colors.White}
                animationTime={3000} />

            </View> */}
        {/* } */}
           </>
    );
  };

}

const styles = StyleSheet.create({
  subLoaderContainer: {
    width: '100%',
    height: 400,
    paddingVertical: '35%',
    alignItems: 'center'
  },
  buttonStyle: {
    height: 40,
    borderRadius: 6,
  },
  leftBtnGroup: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    marginRight: 0
  },
  rightBtnGroup: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    marginLeft: 0,
  },
  SwitchButtoncontainer: {
    marginHorizontal: 20,
  },
  masterContainer: {
    flex: 1,
  },
  stepperContainer: {
    backgroundColor: Colors.White,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    alignSelf: 'stretch'
  },
  scrollViewStyle: {
    backgroundColor: Colors.OffWhite,
  },
  detailsTextContainer: {
    paddingVertical: 10,
  },
  detailsTextBold: {
//    fontFamily: 'VodafoneRgBd',
  },
  detailsText: {
 //   fontFamily: 'VodafoneRg',
    fontSize: 18,
    paddingHorizontal: 15,
    color: Colors.DarkGrey,
  },
  topHeaderText: {
    color: Colors.Black,
    fontSize: 20,
 //   fontFamily: 'VodafoneRgBd',
    marginBottom: 10,
    marginTop: 0,
    paddingHorizontal: 15,
  },
  StickyContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.White,
    paddingVertical: 12,
    paddingHorizontal: 40,
    width: '100%',
    borderTopColor: Colors.Grey,
    borderTopWidth: 1,
    borderBottomColor: Colors.Grey,
    borderBottomWidth: 1,
  },
  StickyButton: {
    margin: 0,
    height: 40,
  }
});

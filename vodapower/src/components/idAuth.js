import
  React, {
  Component
} from 'react';

import {
  StyleSheet,
  View,
  Keyboard,
} from 'react-native';

import
  PropTypes
from 'prop-types';

import {
  Colors
} from './styles';

import {
  NotificationType,
} from './constants';

import InputBox from './input';

import {
  SAIDErrorMessages
} from './constants';

export class IdAuth extends Component {

//   static propTypes = {
//     onValidChange: PropTypes.func.isRequired,
//     onIDChange: PropTypes.func.isRequired,
//   }

  state = {
    saIDNotiShow: true,
    saIDNotiMsg: SAIDErrorMessages.Standard,
    saIDNotiType: NotificationType.Info,
    saIDNumber: '',
    isValidMsisdn:'',
  };

  handleSaID = (saID) => {

    this.setState({
      saIDNumber: saID
    }, this.validate);
  };

  handleMSISDNChange = (notificationMsisdn) => {

    // notificationMsisdn = notificationMsisdn.trim();
    // const isValidMsisdn = AppCore.Validation.isValidMsisdn(notificationMsisdn);

    this.setState({
      isValidMsisdn,
      notificationMsisdn: notificationMsisdn,
      msisdnHint: !isValidMsisdn
        ? Messages.InvalidMsisdnMessage
        : Messages.MsisdnHint
    }, this.validate);

  };

  validate = () => {

    let isActive = this.validateSaID(this.state.saIDNumber);

    if (typeof this.props.onValidChange === 'function') {

      this.props.onValidChange(isActive);
    }

    if (typeof this.props.onIDChange === 'function') {

      this.props.onIDChange(this.state.saIDNumber);
    }
  }

  validateSaID = (value) => {

    const isValid = AppCore.Validation.isValidID(value);

    if (isValid) {

      this.setState({
        saIDNotiShow: false
      });

      return isValid;
    }

    this.setState({
      saIDNotiShow: true,
      saIDNotiType: NotificationType.Error,
      saIDNotiMsg: SAIDErrorMessages.Invalid
    });

    return isValid;
  };

  render = () => {

    const {
      saIDNumber
    } = this.state;

    return (
      <View
        style={styles.cardContainer}>

        <View style={styles.rowContainerTop}
          accessible={true}
          accessibiltyLabel={'ID number details'}>

          <InputBox
            accessibilityLabel={this.state.saIDNumber}
            style={styles.inputTextStyle}
            placeholder={'Enter ID number'}
            source={''}
            maxLength={13}
            onStateChange={(saID) => this.handleSaID(saID)}
            value={this.state.saID}
            onBlur={() => this.validateSaID(saIDNumber)}
            showNotification={this.state.saIDNotiShow}
            notificationMessage={this.state.saIDNotiMsg}
            notificationType={this.state.saIDNotiType}
            onSubmit={Keyboard.dismiss}
          />

          
        <InputBox
            style={ styles.inputTextStyle }
            source={ '' }
            placeholder='Cellphone number'
            onStateChange={ this.handleMSISDNChange }
            onSubmit={ () => Keyboard.dismiss() }
            showNotification={ true }
            notificationMessage={ this.state.msisdnHint}     
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    paddingBottom: 16
  },
  inputTextStyle: {
    fontSize: 14,
    // fontFamily: Fonts.VodafoneRegular,
    color: Colors.Grey,
  },
  rowContainerTop: {
    paddingHorizontal: 2,
    paddingVertical: 5,
  },
});
import
  React, {Component}
from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ViewPropTypes,
  TouchableOpacity
} from 'react-native';

import
  PropTypes
from 'prop-types';

import {
  Ionicons
} from '@expo/vector-icons';

import {
  KeyboardType,
  ReturnKeyType,
  NotificationType,
  GeneralIcon,
} from 'app/core/constants';

import {
  Colors,
} from './styles';

export class TextBox extends Component {

  static propTypes = {
    keyboardType: PropTypes.oneOf([
      KeyboardType.Default,
      KeyboardType.Numeric,
      KeyboardType.EmailAddress,
      KeyboardType.PhonePad,
    ]),
    returnKeyType: PropTypes.oneOf([
      ReturnKeyType.Done,
      ReturnKeyType.Go,
      ReturnKeyType.Next,
      ReturnKeyType.Search,
      ReturnKeyType.Send,
    ]),
    source: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    showPlaceholderTitle: PropTypes.bool,
    maxLength: PropTypes.number,
    isReadOnly: PropTypes.bool,
    isSecure: PropTypes.bool,
    isFocused: PropTypes.bool,
    onStateChange: PropTypes.func,
    onSubmit: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    value: PropTypes.string,
    showNotification: PropTypes.bool,
    secureUseIcon: PropTypes.bool,
    notificationMessage: PropTypes.string,
    notificationType: PropTypes.oneOf([
      NotificationType.Error,
      NotificationType.Success,
      NotificationType.Info
    ]),
    textInputStyle: Text.propTypes.style,
    padForButtonRight: PropTypes.bool,
    style: ViewPropTypes.style,
    colour: PropTypes.string,
    actionComponent: PropTypes.node,
    notificationIconContainerStyle: ViewPropTypes.style,
    notificationTextContainerStyle: ViewPropTypes.style,
    isManagedState: PropTypes.bool,
    notificationTextStyle: Text.propTypes.style,
    showIcon: PropTypes.bool,
    fullWidth: PropTypes.bool,
    automationId: PropTypes.string,
    accessibilityString: PropTypes.string,
    showUnderline: PropTypes.bool

  };

  static defaultProps = {
    returnKeyType: ReturnKeyType.Go,
    keyboardType: KeyboardType.Default,
    isReadOnly: false,
    isSecure: false,
    isFocused: false,
    onBlur: () => {},
    onFocus: () => {},
    isValid: true,
    showNotification: false,
    source: GeneralIcon.Help,
    padForButtonRight: false,
    colour: Colors.DarkRed,
    actionComponent: false,
    isManagedState: false,
    showIcon: true,
    fullWidth: false,
    showPlaceholderTitle: true,
    automationId: '',
    accessibilityString: '',
    showUnderline: true
  };

  state = {
    isFocused: this.props.isFocused
      ? this.props.isFocused
      : false,
    isSecure: this.props.isSecure || false,
    isSecureVisible: false,
    isTextEntered: false
  };

  getUnderlineColor = (isFocused) => {

    return isFocused
      ? [ styles.underlineFocused, { backgroundColor: this.props.colour } ]
      : styles.underlineUnfocused;
  };

  toggleSecureVisibility = () => {

    this.setState({
      isSecureVisible: !this.state.isSecureVisible,
      isSecure: this.state.isSecureVisible
    });
  };

  getNotificationUnderlineStyle = (showNotification) => {

    if (showNotification) {

      switch(this.props.notificationType) {

        case NotificationType.Error:
          return styles.notificationUnderlineGlowError;

        case NotificationType.Info:
          return styles.notificationUnderlineGlowInfo;

        case NotificationType.Success:
          return styles.notificationUnderlineGlowSuccess;

        default:
            return null;
      }
    }

    return null;
  };

  getNotificationTextStyle = () => {

    switch (this.props.notificationType) {

      case NotificationType.Error:
        return styles.notificationTextError;

      case NotificationType.Info:
        return styles.notificationTextInfo;

      case NotificationType.Success:
        return styles.notificationTextSuccess;

      default:
        return {};
    }
  }

  getNotificationIcon = () => {

      switch (this.props.notificationType) {
        case NotificationType.Error:
          return GeneralIcon.WarningNotification;
        case NotificationType.Info:
          return GeneralIcon.InfoCircle;
        case NotificationType.Success:
          return GeneralIcon.TickSolvedRed;
      }
  };

  onStateChange = (text) => {

    text.length === 0 && this.state.isTextEntered &&
      this.setState({
        isTextEntered: false,
      });

    text.length > 0 && !this.state.isTextEntered &&
      this.setState({
        isTextEntered: true,
      });

    this.props.onStateChange(text);
  };

  renderShowPassword = () => {

    const isSecureVisible = this.state.isSecureVisible;
    const secureUseIcon = this.props.secureUseIcon;

    return(

      <Text
        style={styles.showPassword}
        onPress={() => this.toggleSecureVisibility()}>

        { secureUseIcon

          ? <Ionicons
              name={
                isSecureVisible
                  ? 'md-eye-off'
                  : 'md-eye'
              }
              size={20}
              color={Colors.Grey}/>

          : isSecureVisible
              ? 'HIDE'
              : 'SHOW'
        }
      </Text>
    );
  };

  render = () => {

    const keyboardType = this.props.keyboardType,
      returnKeyType = this.props.returnKeyType,
      source = this.props.source,
      placeholder = this.props.placeholder,
      maxLength = this.props.maxLength && this.props.maxLength > 0
        ? this.props.maxLength
        : null,
      isReadOnly = this.props.isReadOnly,
      isSecure = this.props.isSecure,
      onStateChange = this.onStateChange,
      onSubmit = this.props.onSubmit,
      onFocus = this.props.onFocus,
      onBlur = this.props.onBlur,
      value = this.props.value,
      actionComponent = this.props.actionComponent,
      colour = this.props.colour,
      showIcon = this.props.showIcon,
      showUnderline = this.props.showUnderline;

    return (

      <View
          style={[
            styles.outerContainer,
            this.props.style
          ]}>

        <View
          style={[
            styles.rowContainer,
            this.props.fullWidth && styles.fullWidth
          ]}>

          <View style={styles.innerContainer}>

            { (this.state.isFocused || this.state.isTextEntered || !!this.props.value) && this.props.showPlaceholderTitle

              ? <Text style={[
                  styles.textInput,
                  styles.textInputText,
                  styles.fontSize14,
                ]}>
                  {this.props.placeholder}
                </Text>

              : <View style={styles.textInput}/>

            }

            <View style={styles.textInputContainer}>

              <TextInput
                accessible={true}
                accessibilityLabel={
                  this.replaceAccessibilityWithAutomation
                    ? this.props.automationId
                    : this.props.accessibilityString
                }
                testID={this.props.automationId}
                editable={!isReadOnly}
                autoFocus={this.state.isFocused}
                style={[
                  styles.textInput,
                  styles.textInputText,
                  this.props.textInputStyle
                ]}
                placeholder={this.state.isFocused || this.state.isTextEntered ? '' : placeholder}
                placeholderTextColor={Colors.Grey}
                keyboardType={keyboardType}
                returnKeyType={returnKeyType}
                autoCorrect={false}
                autoCapitalize='none'
                enablesReturnKeyAutomatically={true}
                secureTextEntry={isSecure ? this.state.isSecure : false}
                underlineColorAndroid='transparent'
                maxLength={maxLength}
                defaultValue={
                  value
                    ? value
                    : null}
                value={
                  !!this.props.isManagedState
                    ? value
                    : undefined
                }
                ref={input => this.input = input}
                onBlur={() => {

                  onBlur();
                  this.setState({
                    isFocused: false
                  });
                }}
                onFocus={() => {

                  onFocus();
                  this.setState({
                    isFocused: true
                  });
                }}
                onChangeText={(text) => {

                  if (onStateChange) {

                    onStateChange(text);
                  }
                }}
                onSubmitEditing={(text) => {

                  if (onSubmit && returnKeyType === ReturnKeyType.Go) {

                    onSubmit(text);
                  }
                }}
              />

              { isSecure &&

                <TouchableOpacity
                  style={styles.showContainer}
                  accessibilityLabel={`Button: ${this.state.isSecureVisible ? 'hide characters' : 'show characters'}`}>
                  { this.renderShowPassword() }
                </TouchableOpacity>
              }

              { actionComponent }

            </View>

            { showUnderline &&
            
              <View style={[
                styles.underLine,
                this.getUnderlineColor(this.state.isFocused),
                this.getNotificationUnderlineStyle(this.props.showNotification)
              ]}/>
            }
          </View>
        </View>

        { this.props.showNotification &&

          <View style={[
            styles.notificationContainer,
            source && styles.notificationImagePadding,
            this.props.notificationTextContainerStyle
            ]}>

            <Text
              style={[
                styles.notificationText,
                this.getNotificationTextStyle(),
                this.props.notificationTextStyle
              ]}
              accessibilityLabel={`${this.props.notificationType}. ${this.props.notificationMessage}`}>
                {this.props.notificationMessage}
            </Text>

          </View>
        }
      </View>
    );
  };
}

const styles = StyleSheet.create({
  outerContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  fullWidth: {
    width: '100%'
  },
  rowContainer: {
    width: '90%',
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    height: 40,
    width: 40,
    justifyContent: 'center',
  },
  textInputContainer: {
    flex: 1,
    flexDirection: 'row',
    minHeight: 20,
    alignItems: 'center'
  },
  innerContainer: {
    flex: 1,
    height: 55,
    justifyContent: 'space-between'
  },
  icon: {
    height: 25,
    width: 25,
    marginTop: 3,
  },
  textInput: {
    flex: 1,
  },
  textInputText: {
    fontSize: 16,
    color: Colors.Grey,
  //  fontFamily: 'VodafoneRg',
  },
  showContainer: {
    height: 28,
    width: 45,
  },
  showPassword: {
//   fontFamily: 'VodafoneLt',
    fontSize: 14,
    color: Colors.Red,
    textAlign: 'right'
  },
  underLine: {
    flex: 1,
    top: 2,
  },
  underlineFocused: {
    height: 2,
    maxHeight: 2
  },
  underlineUnfocused: {
    backgroundColor: Colors.Grey,
    maxHeight: 1,
  },
  redBar: {
    width: 4,
    height: '100%',
    marginLeft: -16,
    marginRight: 12,
    borderRadius: 3,
    backgroundColor: Colors.Red
  },
  notificationContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '95%',
    flexDirection: 'row',
    padding: 5,
    marginTop: 5
  },
  notificationImagePadding: {
    paddingLeft: 40,
  },
  notification: {
    height: 60
  },
  notificationIcon: {
    height: 30,
    width: 30,
  },
  notificationTextContainer: {
    maxHeight: 60,
    minHeight: 60,
    flex: 1,
  },
  notificationText: {
  //  fontFamily: 'VodafoneLt',
    fontSize: 14,
    marginLeft: 5,
  },
  notificationTextError: {
    color: Colors.Red
  },
  notificationTextInfo: {
    color: Colors.Grey
  },
  notificationTextSuccess: {
    color: Colors.DarkGreen
  },
  notificationUnderlineGlowError: {
    backgroundColor: Colors.Red
  },
  notificationUnderlineGlowInfo: {
    backgroundColor: Colors.Grey
  },
  notificationUnderlineGlowSuccess: {
    backgroundColor: Colors.DarkGreen
  },
  fontSize14: {
    fontSize: 14,
  },
  additionalActionsStyle: {
    flexDirection: 'row',
  }
});

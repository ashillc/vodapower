import
  React, {
    PureComponent
  }
from 'react';

import {
  Text,
  ViewPropTypes,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import
  PropTypes
from 'prop-types';

import { GlobalStyles } from './styles';

export class Button extends PureComponent {

  static propTypes = {
    text: PropTypes.string,
    isPrimaryButton: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
    isBusy: PropTypes.bool,
    disabled: PropTypes.bool,
    activeOpacity: PropTypes.number,
    automationId: PropTypes.string,
    accessible: PropTypes.bool,
    accessibilityLabel: PropTypes.string,
    accessibilityHint: PropTypes.string,
    accessibilityComponentType: PropTypes.string,
    accessibilityTraits: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
  };

  static defaultProps = {
    disabled: false,
    isBusy: false,
    isPrimaryButton: true,
    activeOpacity: 0.2,
    automationId: '',
    accessibilityComponentType: 'button',
    accessibilityTraits: 'button',
  };

  render = () => {

    const {
      text,
      textStyle,
      isBusy,
      disabled,
      style,
      activeOpacity,
      isPrimaryButton,
      onPress,
    } = this.props;

    return (

      <TouchableOpacity
        accessible={this.props.accessible ? this.props.accessible : true}
        accessibilityLabel={this.props.accessibilityLabel || text}
        accessibilityHint={this.props.accessibilityHint || text}
        accessibilityRole={this.props.accessibilityRole
          || this.props.accessibilityComponentType // DEPRECATED
          || 'button'}
        accessibilityTraits={this.props.accessibilityTraits
          ? this.props.accessibilityTraits
          : 'button'}
        disabled={disabled || isBusy}
        activeOpacity={activeOpacity}
        style={[
          styles.button,
          !isPrimaryButton
            ? GlobalStyles.buttonSecondary
            : disabled
              ? GlobalStyles.buttonDisabled
              : GlobalStyles.buttonPrimary,
          style,
        ]}
        onPress={onPress}>

             <Text
                style={[
                  !isPrimaryButton
                    ? GlobalStyles.buttonTextSecondary
                    : disabled || isBusy
                      ? GlobalStyles.buttonTextDisabled
                      : GlobalStyles.buttonTextPrimary,
                  textStyle,
                ]}>

                {text}
              </Text>

      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    // height: 0.085 * AppCore.Dimensions.screenHeight,
    maxHeight: 50
  }
});

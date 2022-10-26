import
  React, {
  Component
} from 'react';

import
  PropTypes
from 'prop-types';

import {
  View,
  Picker,
  Platform,
  StyleSheet,
  ViewPropTypes,
  ActionSheetIOS,
  TouchableOpacity
} from 'react-native';

export class PopupList extends Component {

  static propTypes = {
    title: PropTypes.string,
    // style: ViewPropTypes.style,
    // pickerStyle: ViewPropTypes.style,
    onChange: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    mode: PropTypes.oneOf([
      'dialog',
      'dropdown'
    ])
  };

  static defaultProps = {
    title: '',
    style: null,
    mode: 'dialog',
    pickerStyle: null
  };

  state = {
    questions: [],
    pickerItems: []
  };

  showActionSheet = () => {

    const {
      questions
    } = this.state;

    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: questions,
        title: this.props.title,
        cancelButtonIndex: questions.length - 1
      },
      (buttonIndex) => {

        if (buttonIndex !== questions.length - 1) {

          this.props.onChange(questions[buttonIndex]);
        }
      }
    );
  };

  onValueChange = (item) => {

    const {
      onChange
    } = this.props;

    typeof onChange === 'function' && onChange(item);
  };

  static getDerivedStateFromProps = (props, state) => {

    if (Platform.OS === 'ios') {

      if (props.items && props.items.length > 0) {

        let iosItems = [];

        iosItems = props.items.slice();
        iosItems.push('Cancel');

        if (iosItems !== state.questions) {

          return {
            questions: iosItems
          };
        }
      }

      return null;
    }

    if (props.items && props.items.length > 0) {

      const androidItems = props.items.slice();

      androidItems.unshift('');

      if (androidItems !== state.questions) {

        const pickerItems = [];

        for (let i = 0; i < androidItems.length; i++) {

          if (typeof androidItems[i] !== 'string') {

            continue;
          }

          pickerItems.push(
            <Picker.Item
              key={i}
              label={androidItems[i]}
              value={androidItems[i]}
            />
          );
        }

        return {
          questions: props.items,
          pickerItems: pickerItems
        };
      }
    }

    return null;
  };

  render = () => {

    const {
      mode,
      style,
      children,
      pickerStyle
    } = this.props;

    const {
      pickerItems
    } = this.state;

    if (Platform.OS === 'ios') {

      return (
        <TouchableOpacity
          style={style}
          onPress={this.showActionSheet}
        >

          {children}

        </TouchableOpacity>
      );
    }

    return (

      <View
        style={[
          styles.container,
          style
        ]}
      >

        {children}

        <Picker
          mode={mode}
          itemStyle={styles.pickerItems}
          onValueChange={this.onValueChange}
          style={[
            styles.picker,
            pickerStyle
          ]}>

          {pickerItems}

        </Picker>

      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    position: 'relative'
  },
  picker: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF'
  }
});

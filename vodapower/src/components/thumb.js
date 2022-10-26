import
  React, {
  PureComponent
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';

import
  PropTypes
from 'prop-types';

import {
  Colors,
  GlobalStyles
} from './styles';

export class Thumb extends PureComponent {

  static propTypes = {
    enabled: PropTypes.bool.isRequired,
    active: PropTypes.bool.isRequired,
    text: PropTypes.string,
    route: PropTypes.string,
    first: PropTypes.bool.isRequired,
    leftLineActive: PropTypes.bool.isRequired,
    last: PropTypes.bool.isRequired,
    rightLineActive: PropTypes.bool.isRequired,
    onStepPress: PropTypes.func
  };

  static defaultProps = {
    route: '',
    text: '',
    first: true,
    last: true,
    leftLineActive: false,
    rightLineActive: false
  };

  navigateToRoute = () => {
  
    if (this.props.route && this.props.enabled && !this.props.active &&
      typeof this.props.onStepPress === 'function') {

      this.props.onStepPress(this.props.route);
    }
  }

  render = () => {

    return (

      <View style={styles.container}>

        <View style={styles.circleAndLineContainer}>

          { !this.props.first &&

            <View style={[
              styles.leftLine,
              this.props.leftLineActive && styles.enabled
            ]}/>
          }

          { !this.props.last &&

            <View style={[
              styles.rightLine,
              this.props.rightLineActive && styles.enabled
            ]}/>
          }

          <TouchableWithoutFeedback
            onPress={this.navigateToRoute}>

            <View style={[
              styles.outerCircle,
              this.props.active && styles.outerBorder
            ]}>

              <View style={[
                styles.innerCircle,
                this.props.enabled && styles.enabled
              ]} />

            </View>
          </TouchableWithoutFeedback>

        </View>

        { !!this.props.text &&

          <Text
            numberOfLines={1}
            style={[
              this.props.active
                ? GlobalStyles.fontVodafoneRgBd
                : GlobalStyles.fontVodafoneRg,
              styles.thumbText
            ]}>
            { this.props.text }
          </Text>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  circleAndLineContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  outerCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  outerBorder: {
    borderColor: Colors.Red,
    borderWidth: 1,
    backgroundColor: Colors.White
  },
  innerCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: Colors.ButtonGrey
  },
  leftLine: {
    position: 'absolute',
    alignSelf: 'flex-start',
    width: '51%',
    height: 2,
    backgroundColor: Colors.ButtonGrey
  },
  rightLine: {
    position: 'absolute',
    alignSelf: 'flex-end',
    width: '51%',
    height: 2,
    backgroundColor: Colors.ButtonGrey
  },
  enabled: {
    backgroundColor: Colors.Red
  },
  thumbText: {
    paddingTop: 8,
    fontSize: 16,
    color: Colors.Black,
    textAlign: 'center'
  }
});

import
  React, {
  PureComponent
} from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import {
  SimpleLineIcons
} from '@expo/vector-icons';

import
  PropTypes
from 'prop-types';

import {
  Colors
} from '../styles';

export class Header extends PureComponent {

  onPress = () => {

    typeof this.props.onPress === 'function' &&
      this.props.onPress();
  }

  render = () => {

    return (
      <View style={[
        styles.container,
        this.props.style
      ]}>

        <Text style={styles.titleText}>
          {this.props.title}
        </Text>

        { !!this.props.onPress &&

          <TouchableOpacity
            style={styles.headerLeft}
            onPress={this.onPress}>

            <SimpleLineIcons
              name='arrow-left'
              size={18}
              color={Colors.White}
            />
          </TouchableOpacity>
        }
      </View>
    )
  };
}

Header.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func
}

Header.defaultProps = {
  title: '',
  onPress: null
}

const styles = StyleSheet.create({
  container: {
    height: 47,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.VodaPayHeaderBlack
  },
  titleText: {
    width: '100%',
    textAlign: 'center',
    justifySelf: 'center',
   // fontFamily: 'Roboto',
    fontSize: 20,
    color: Colors.White
  },
  headerLeft: {
    position: 'absolute',
    justifyContent: 'center',
    left: 10,
    width: 30,
    height: 25
  }
})

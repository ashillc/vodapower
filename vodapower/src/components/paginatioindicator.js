import 
  React, { 
  Component 
} from 'react';

import {
  View,
  ViewPropTypes,
  StyleSheet,
} from 'react-native';

import
  PropTypes
from 'prop-types';

import {
  Colors
} from '../core/styles';

export class PaginationIndicator extends Component {

  static propTypes = {
    currentIndex: PropTypes.number.isRequired,
    numberOfItems: PropTypes.number.isRequired,
    dotStyle: ViewPropTypes.style,
    activeDotStyle: ViewPropTypes.style,
    style: ViewPropTypes.style,
  };

//   static defaultProps = {
//     currentIndex: -1,
//     numberOfItems: 0,
//   };

  dots = [];

  getDots = () => {

    if (!this.props.numberOfItems) {
      return;
    }

    let dots = [];

    for (let i = 0; i < this.props.numberOfItems; i++) {

      dots.push(
        <View
          style={
            i !== this.props.currentIndex
              ? !!this.props.dotStyle
                ? this.props.dotStyle
                : styles.dotDefault
              : !!this.props.activeDotStyle
                ? this.props.activeDotStyle
                : styles.dotActiveDefault}
          key={i}
        />
      )
    }
    return dots;
  };

  render() {

    return (

      <View style={[!!this.props.style ? this.props.style : styles.container]}>
        {this.getDots()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 12,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
  },
  dotDefault: {
    height: 8,
    width: 8,
    borderWidth: 2,
    borderColor: Colors.White,
    borderRadius: 4,
    marginHorizontal: 10,
  },
  dotActiveDefault:{
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: Colors.White,
    marginHorizontal: 10,
  }
});
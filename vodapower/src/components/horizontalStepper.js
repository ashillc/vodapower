import
  React, {
  Component
} from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import
  PropTypes
from 'prop-types';

import {
  Thumb
} from './thumb';

export class HorizontalStepper extends Component {

  static propTypes = {
    currentStep: PropTypes.number.isRequired,
    steps: PropTypes.arrayOf(PropTypes.string).isRequired,
    routes: PropTypes.arrayOf(PropTypes.string),
    hasLeftComponent: PropTypes.bool,
    leftComponent: PropTypes.node,
    hasRightComponent: PropTypes.bool,
    rightComponent: PropTypes.node,
    onStepPress: PropTypes.func
  };

  static defaultProps = {
    hasLeftText: false,
    leftText: null,
    hasRightText: false,
    rightText: null,
    routes: []
  };

  state = {
    thumbComponents: []
  };

  componentDidMount = () => {

    if (!Array.isArray(this.props.steps) || this.props.steps.length < 1) {
      return;
    }

    const thumbComponents = [];
    //Steps start at 1.
    const zeroIndex = this.props.currentStep - 1;
    const lastIndex = this.props.steps.length - 1;

    for (let i = 0; i < this.props.steps.length; i++) {

      const enabled = i <= zeroIndex;

      thumbComponents.push(
        <Thumb
          key={`${i}${this.props.steps[i]}`}
          first={i === 0}
          last={i === lastIndex}
          active={i === zeroIndex}
          enabled={enabled}
          leftLineActive={enabled}
          rightLineActive={i < zeroIndex}
          onStepPress={this.props.onStepPress}
          route={this.props.routes[i] || ''}
          text={this.props.steps[i]}
        />
      );
    }

    this.setState({
      thumbComponents: thumbComponents
    });
  };

  render = () => {

    return (

      <View style={styles.container}>

        { this.props.hasLeftComponent && !!this.props.leftComponent &&

          this.props.leftComponent
        }

        <View style={styles.stepsContainer}>

          { this.state.thumbComponents }

        </View>

        { this.props.hasRightComponent && !!this.props.rightComponent &&

          this.props.rightComponent
        }

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    display: 'flex',
    flexDirection: 'row'
  },
  stepsContainer: {
    flex: 1,
    paddingHorizontal: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
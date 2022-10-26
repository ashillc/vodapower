import
  React, {
  PureComponent
} from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import
  PropTypes
from 'prop-types';

import {
    Button
} from './button';


export class FilterButtons extends PureComponent {

  static propTypes = {
    applyAction: PropTypes.func.isRequired,
    resetAction: PropTypes.func.isRequired,
  }

  render = () => {

    return (

      <View style={styles.bottomButtons}>

        <Button
          style={styles.applyFilterButton}
          text='Apply filters'
          isPrimaryButton={true}
          onPress={this.props.applyAction}
          disabled={false}/>

        <Button
          style={styles.resetFilterButton}
          textStyle={styles.textColor}
          text='RESET FILTERS'
          isPrimaryButton={false}
          onPress={this.props.resetAction}
          disabled={false} />

    </View>
    )
  }

}

const styles = StyleSheet.create({
  bottomButtons: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#ffffff',
    height: 120
  },
  applyFilterButton: {
    width: 320,
    marginTop: 10,
    padding: 10,
  },
  resetFilterButton: {
    width: 320,
    marginTop: 10,
    padding: 10,
    borderColor: '#00000000',
  },
  textColor: {
    color: '#E60000',
  }
});
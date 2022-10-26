import
  React, {
  PureComponent
} from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import {
    PopupList
} from './popupList';

import
  PropTypes
from 'prop-types';

import {
  Entypo
} from '@expo/vector-icons';

export class FilterItem extends PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    selected: PropTypes.string.isRequired
  }

  render = () => {

    return (

      <TouchableOpacity
        accessibilityRole={'button'}
        accessibilityLabel={this.props.name}
        accessibiltyHint={`Will display a list of all available ${this.props.name}`}>

        <PopupList
          title={this.props.name}
          items={this.props.items}
          onChange={this.props.onChange}>

          <View style={styles.brandModelContainer}>

            <View style={styles.brandModelDetails}>

              <Text style={styles.boldText}>

                {this.props.name}
              </Text>

              <Text>

                {this.props.selected}
              </Text>

            </View>

            <View style={styles.brandModelChevron}>

              <Entypo
                name={'chevron-thin-right'}
                size={20}
                color={'black'}
              />

            </View>
          </View>
        </PopupList>
      </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({
  brandModelChevron: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 10
  },
  brandModelDetails: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 15
  },
  brandModelContainer: {
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#EBEBEB',
    height: 100
  },
  boldText: {
    color: '#333333',
    fontWeight: '700',
    fontSize: 18,
    paddingTop: 10
  }
});

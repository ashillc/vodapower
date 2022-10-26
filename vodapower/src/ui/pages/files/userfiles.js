import
  React, {
  Component,
} from 'react';

import InputBox from '../../../components/input';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import { UserMenu } from '../../../components/usermenu';


export class UserSelection extends Component {
  render = () => {
    return (
      <View>
        <View>
        <UserMenu/>
        </View>
        <View>
        </View>
      
      </View>
    )
  }
}
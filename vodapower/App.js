import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import HomeScreen from './src/ui/pages/homescreen/homescreen';
import UserDetails from './src/ui/pages/user/user';
import Amount from './src/ui/pages/amount/amount';
import Onboarding from './src/ui/pages/onbording/onboarding';
import Devices from './src/ui/pages/devices/devices';
import { Deals } from './src/ui/pages/devices/devices';
import Vetting from './src/ui/pages/vetting/vetting';
import { Usage } from './src/components/usage';
import { DealsCard } from './src/components/dealsCard';
import DeviceTest from './src/ui/pages/devices/devicestest';
import { VasCard } from './src/components/vasCard';
import { HomePage } from './src/ui/pages/homescreen/homepage';
import ApprovedUser from './src/ui/pages/vetting/score';
import { VasDeals } from './src/ui/pages/devices/vasselector';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.mainContainer}>
      <Stack.Navigator initialRouteName="Shop with Vodapower">
        <Stack.Screen name="Home" component={HomePage} options={{headerShown: false}} />
        <Stack.Screen name="User" component={UserDetails} />
        <Stack.Screen name="Approved" component={ApprovedUser} />
        <Stack.Screen name="Vetting" component={Vetting} />
        <Stack.Screen name="Deals" component={Deals} />
        <Stack.Screen name="Vas" component={VasDeals} />
      </Stack.Navigator>
     </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor:'#08081B',
    flex: 1,
  },
});
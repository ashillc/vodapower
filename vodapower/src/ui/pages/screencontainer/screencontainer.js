import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack"
import HomeScreen from '../homescreen/homescreen';
import UserDetails from '../user/user';

const Stack = createStackNavigator({
    Home: {
      screen: HomeScreen
    },
    User: {
      screen: UserDetails
    }
  });
  
  const Container = createAppContainer(Stack);
  export default Container;
  
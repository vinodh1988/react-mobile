import {createStackNavigator,createAppContainer} from 'react-navigation';
//import { Home } from './Home';
import {HomeComponent} from '../Redux/Mappings/ComponentMappings';
import { Contacts } from './Contacts';

var AppNavigator=createStackNavigator({
  Home: {screen:HomeComponent, navigationOptions: () => ({
    title: 'Home page',
    headerStyle: {
      backgroundColor: '#f4511e',
    }
  })},
  Contacts: {screen:Contacts, navigationOptions: () => ({
    title: 'Contacts page',
    headerStyle: {
      backgroundColor: '#f4511e',
    }
  })}
});

export default createAppContainer(AppNavigator);
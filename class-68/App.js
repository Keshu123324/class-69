import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BookScreen from './screens/book';
import SearchScreen from './screens/searchScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component{
render(){
  return(
 <AppContainer/>

);
}
}


const TabNavigator=createBottomTabNavigator({
  Book:{screen:BookScreen},
  Search:{screen:SearchScreen}
})

const AppContainer = createAppContainer(TabNavigator)

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
import TransactionScreen from "./screens/transactionscreen";
import SearchScreen from "./screens/searchscreen";
export default class App extends React.Component {
  render(){
  return  <AppContainer/>
  }
}
const TabNavigator=createBottomTabNavigator({
  Transaction:{screen:TransactionScreen},
  Search:{screen:SearchScreen}
})
const AppContainer=createAppContainer(TabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: 'center',
    justifyContent: 'center',
  },
});

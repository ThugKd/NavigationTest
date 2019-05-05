/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import {Text, View} from "react-native";
import {createAppContainer, createStackNavigator} from "react-navigation";

class HomeScreen extends React.Component {
    render() {
        return (
            <View
                style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text>Home Screen</Text>
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text>Details Screen</Text>
            </View>
        );
    }
}


const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen
    },
    {
        initialRouteName: "Details"
    }
);
export default createAppContainer(AppNavigator);

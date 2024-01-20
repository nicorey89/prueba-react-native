import React from "react";
import Constants from 'expo-constants';
import {Text, View } from 'react-native';
import RepositoryList from "./repositoryList";

const Main = () => {
    <View style={{marginTop: Constants.statusBarHeight, flexGrow:1}}>
        <Text>Prueba React</Text>
        <RepositoryList />
    </View>

}

export default Main;
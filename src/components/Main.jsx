import React from "react";
import {Text, View } from 'react-native';
import Constants from "expo-constants";
import RepositoryList from "./repositoryList.jsx";

const Main = () => {
    return (
        <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
            <Text>Lista de Repositorios</Text>
            <RepositoryList />
        </View>
    );
}

export default Main;
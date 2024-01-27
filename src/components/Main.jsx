import React from "react";
import { View, Text  } from 'react-native';
import RepositoryList from "./RepositoryList.jsx";
import AppBar from "./AppBar.jsx";
import { Route } from "react-router-native";

const Main = () => {
    return (
        <View style={{ flex: 1 }}>
            <AppBar/>
            <RepositoryList />
        </View>
    );
}

export default Main;
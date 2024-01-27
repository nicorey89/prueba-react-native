import React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText.jsx";
import Constants from "expo-constants";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
    appBar: {
        backgroundColor: "blue",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingLeft: 10
    }
})

const AppBarTab = ({ children, to }) => {
    return(
        <Link to={to}>
            <StyledText bold white>{children}</StyledText>
        </Link>
    )
}

const AppBar = () => {
    return (
        <View style={styles.appBar}>
            <AppBarTab active={true} to="/">Repositories</AppBarTab>
            <AppBarTab active={true} to="/signin">Singin</AppBarTab>
        </View> 
    );
}

export default AppBar;
import React from "react";
import { View, ScrollView, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import Constants from "expo-constants";
import { Link, useLocation } from "react-router-native";

const styles = StyleSheet.create({
    appBar: {
        backgroundColor: "blue",
        flexDirection: "row",
        justifyContent: "space-",
        paddingTop: Constants.statusBarHeight + 10,
        paddingHorizontal: 10
    },
    scroll: {
        paddingBottom: 15
    },
    textBar: {
        color: "#999",
        paddingHorizontal: 15

    },
    active: {
        color: "white"
    }
})

const AppBarTab = ({ children, to }) => {
    const { pathname } = useLocation();
    const active = pathname == to;
    const textStyles = [
        styles.textBar,
        active && styles.active
    ]
    return(
        <Link to={to} component={TouchableWithoutFeedback}>
            <Text style={textStyles}>{children}</Text>
        </Link>
    )
}

const AppBar = () => {
    return (
        <View  style={styles.appBar}>
            <ScrollView horizontal style={styles.scroll}>
                <AppBarTab to="/">Repositories</AppBarTab>
                <AppBarTab to="/signin">Sing In</AppBarTab>
            </ScrollView>
        </View> 
    )
}

export default AppBar
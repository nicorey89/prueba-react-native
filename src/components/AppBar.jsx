import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import StyledText from "./StyledText.jsx";
import Constants from "expo-constants";
import { Link, useLocation } from "react-router-native";

const styles = StyleSheet.create({
    appBar: {
        backgroundColor: "blue",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: Constants.statusBarHeight + 10
    },
    scroll: {
        paddingBottom: 15
    },
    text: {
        color: "grey",
        paddingHorizontal: 10
    },
    active: {
        color: "white"
    }
})

const AppBarTab = ({ children, to }) => {
    const { pathname } = useLocation()
    const active = pathname == to
    const textActive = [
        styles.text,
        active && styles.active
    ]
    return(
        <Link to={to}>
            <StyledText bold styles={textActive}>{children}</StyledText>
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
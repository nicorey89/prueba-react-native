import React from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        color: "grey"
    },
    bold: {
        fontWeight: "bold"
    },
    blue:{
        color: "blue"
    },
    white:{
        color: "white",
        backgroundColor: "blue"
    },
    big:{
        fontSize: 20
    },
    small:{
        fontSize: 10
    },
    languaje:{
        padding: 4,
        alignSelf: "flex-start",
        marginTop: 4,
        marginBottom: 4,
        borderRadius: 4,
        overflow: "hidden"
    },
    appbar: {
        paddingHorizontal: 15
    }
})

export default function StyledText ({ appbar, blue, languaje, bold, white,  children, small, big}) {
    const textStyles = [
        styles.text,
        blue && styles.blue,
        big && styles.big,
        bold && styles.bold,
        small && styles.small,
        appbar && styles.appbar,
        white && styles.white,
        languaje && styles.languaje
    ]
    
    return (
        <Text style={textStyles}>
            {children}
        </Text>
    );

}
import React from "react";
import { Image, View, StyleSheet } from "react-native";
import StyledText from "./StyledText.jsx";

const RepositoryItemHeader = (props => {
    return (
        <View style={{ flexDirection: "row", paddingBottom: 2 }}>
            <View style={{ paddingRight: 10 }}>
                <Image style={styles.image} source={{ uri:props.ownerAvatarUrl }}/>
            </View>
            <View style={{ flex: 1 }}>
                <StyledText bold blue>{props.fullName}</StyledText>
                <StyledText>{props.description}</StyledText>
                <StyledText white languaje>{props.languaje}</StyledText>
            </View>
        </View>
    );

});

const styles = StyleSheet.create({
    image: {
        width: 48,
        height: 48,
        borderRadius: 4
    }
})

export default RepositoryItemHeader;
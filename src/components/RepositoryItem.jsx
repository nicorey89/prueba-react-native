import React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText.jsx";

const RepositoryItem = ({ id, fullName, description, ownerAvatarUrl, languaje }) => {
    return (
    <View key={id} style={styles.container}>
        <StyledText big bold>id: {id}</StyledText>
        <StyledText>name: {fullName}</StyledText>
        <StyledText>description: {description}</StyledText>
        <StyledText blue>avatar url: {ownerAvatarUrl}</StyledText>
        <StyledText >languaje: {languaje}</StyledText>
    </View>

    );
}
 
const styles = StyleSheet.create({
    container: {
        padding: 20, 
        paddingBottom: 5,
        paddingTop: 5
    }
})

export default RepositoryItem;
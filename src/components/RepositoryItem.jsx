import React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText.jsx";
import RepositoryStats from "./RepositoryStats.jsx";


const RepositoryItem = (props) => {
    return (
    <View key={props.id} style={styles.container}>
        <StyledText big bold>id: {props.id}</StyledText>
        <StyledText>name: {props.fullName}</StyledText>
        <StyledText>languaje: {props.languaje}</StyledText>
        <StyledText>description: {props.description}</StyledText>
        <StyledText blue>avatar url: {props.ownerAvatarUrl}</StyledText>
        <RepositoryStats {...props}/>
    </View>
    );
};
 
const styles = StyleSheet.create({
    container: {
        padding: 20, 
        paddingBottom: 5,
        paddingTop: 5
    }
})

export default RepositoryItem;
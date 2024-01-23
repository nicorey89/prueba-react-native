import React from "react";
import { View } from "react-native";
import StyledText from "./StyledText.jsx";

const RepositoryStats = ( props => {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            <View>
                <StyledText bold>forks</StyledText>
                <StyledText>{props.forksCount}</StyledText>
            </View>
            <View>
                <StyledText bold>stars</StyledText>
                <StyledText>{props.stargazersCount}</StyledText>
            </View>
            <View>
                <StyledText bold>rating</StyledText>
                <StyledText>{props.ratingAverage}</StyledText>
            </View>
            <View>
                <StyledText bold>review</StyledText>
                <StyledText>{props.reviewCount}</StyledText>
            </View>
        </View>
    );
});

export default RepositoryStats;
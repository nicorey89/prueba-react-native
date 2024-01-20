import React from "react";
import {Text, View, FlatList } from 'react-native';
import repositories from '../data/repositories.js';

const RepositoryList = () => {
    return (
        <FlatList 
            data={repositories}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item: repo }) => (
            <View key={repo.id}>
                <Text>id: {repo.id}</Text>
                <Text>name: {repo.fullName}</Text>
                <Text>description: {repo.description}</Text>
                <Text>avatar url: {repo.ownerAvatarUrl}</Text>
                <Text>languaje: {repo.languaje}</Text>
            </View>

            )}
        >
        </FlatList>
    )
}

export default RepositoryList;
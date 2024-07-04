// Filename: index.js
// Combined code from all files

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, FlatList, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';

const fairyTales = [
  { id: '1', title: 'Cinderella', content: 'Once upon a time, there was a girl named Cinderella...' },
  { id: '2', title: 'Snow White', content: 'Once upon a time, there was a girl named Snow White...' },
  { id: '3', title: 'Little Red Riding Hood', content: 'Once upon a time, there was a girl named Little Red Riding Hood...' },
  { id: '4', title: 'Hansel and Gretel', content: 'Once upon a time, there were two siblings named Hansel and Gretel...' }
];

function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={stylesHome.item} onPress={() => navigation.navigate('Story', { story: item })}>
      <Text style={stylesHome.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={stylesHome.container}>
      <FlatList
        data={fairyTales}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={stylesHome.list}
      />
    </SafeAreaView>
  );
}

const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  list: {
    paddingHorizontal: 10,
  },
  item: {
    backgroundColor: '#E5E4E2',
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
  },
});

function StoryScreen({ route }) {
  const { story } = route.params;

  return (
    <SafeAreaView style={stylesStory.container}>
      <ScrollView contentContainerStyle={stylesStory.storyContainer}>
        <Text style={stylesStory.title}>{story.title}</Text>
        <Text style={stylesStory.content}>{story.content}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const stylesStory = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  storyContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
});

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Fairy Tales' }} />
        <Stack.Screen name="Story" component={StoryScreen} options={{ title: 'Story' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
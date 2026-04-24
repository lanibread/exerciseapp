import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import RepetitionExercise from './screens/RepetitionExercise';
import DurationExercise from './screens/DurationExercise';

const Stack = createStackNavigation();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RepetitionExercise" component={RepetitionExercise} options={({ route }) => ({ title: route.params.name })} />
        <Stack.Screen name="DurationExercise" component={DurationExercise} options={({ route }) => ({ title: route.params.name })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
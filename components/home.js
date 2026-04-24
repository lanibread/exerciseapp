import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';

const EXERCISES = [
    { id: '1', name: 'Pushups', type: 'repetition', suggested: { name: 'Plank', type: 'duration'} },
    { id: '2', name:'Running', type: 'duration', suggested: { name: 'Squats', type: 'repetition'} },
    { id: '3', name: 'Squats', type: 'repetition', suggested: { name: 'Running', type: 'duration' } },
    { id: '4', name: 'Plank', type: 'duration', suggested: { name: 'Pushups', type: 'repetition' } },
  ];

  export default function Home({ navigation }) {
   const renderItem = ({ item }) => (
    <Button
      title={item.name}
      buttonStyle={styles.button}
      onPress={() => {
        const screen = item.type === 'repetition' ? 'RepetitionExercise' : 'DurationExercise';
        navigation.navigate(screen, { ...item });
      }}
    />
  );

  return (
    <View style={styles.container}>
      <Text h4 style={styles.header}>Select an Exercise</Text>
      <FlatList
        data={EXERCISES}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { textAlign: 'center', marginBottom: 20 },
  button: { marginVertical: 10, borderRadius: 10 }
});




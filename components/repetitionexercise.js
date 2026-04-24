import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';

export default function RepetitionExercise({ route, navigation}) {
    const { name, suggested } = route.params;
    const [count, setCount] = useState(0);

    return (
      <View style={styles.container}>
        <Text h2>{name}</Text>
        <Text h1 style={styles.counter}>{count}</Text>

        <Button title="Increase" onPress={() => setCount(count + 1)} containerStyle={styles.mainBtn} />
        <Button title="Reset" type="outline" onPress={() => setCount(0)} />

      <View style={styles.navSection}>
        <Button 
          title={`Suggested: ${suggested.name}`} 
          type="clear" 
          onPress={() => navigation.push(suggested.type === 'repetition' ? 'RepetitionExercise' : 'DurationExercise', { ...suggested, suggested: { name: 'Home', type: 'home' } })} 
        />
        <Button title="Return Home" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  counter: { marginVertical: 30 },
  mainBtn: { width: 200, marginBottom: 10 },
  navSection: { marginTop: 50 }
});


import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';

export default function DurationExercise({ route, navigation}) {
    const { name, suggested } = route.params;
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(s => s + 1);
              }, 1000);
           } else {
             clearInterval(interval);
           }
           return () => clearInterval(interval);
         }, [isActive];

         const formatTime = (s) => {
           const mins = Math.floor(s / 60).toString().padStart(2, '0');
           const secs = (s % 60).toString().padStart(2, '0');
           return `${mins}:${secs}`;
         };

         return (
            <View style={styles.container}>
              <Text h2>{name}</Text>
              <Text h1 style={styles.counter}>{formatTime(seconds)}</Text>

              <Button 
                  title={isActive ? "Stop" : "Start"} 
                  onPress={() => setIsActive(!isActive)} 
                  buttonStyle={{ backgroundColor: isActive ? 'red' : 'green' }}
                  containerStyle={styles.mainBtn} 
            />
            <Button title="Reset" type="outline" onPress={() => { setSeconds(0); setIsActive(false); }} />

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
  counter: { marginVertical: 30, fontFamily: 'monospace' },
  mainBtn: { width: 200, marginBottom: 10 },
  navSection: { marginTop: 50 }
});
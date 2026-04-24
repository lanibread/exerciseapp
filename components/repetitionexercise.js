import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';

export default function RepetitionExercise({ route, navigation}) {
    const { name, suggested } = route.params;
    const [count, setCount] = useState(0);


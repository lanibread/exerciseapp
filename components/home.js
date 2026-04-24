import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';

const EXERCISES = [
    { id: '1', name: 'Pushups', type: 'repetition', suggested: { name: 'Plank', type: 'duration'} },
    { id: '2', name:'Running', type: 'duration', suggested: { name: 'Squats', type: 'repetition'} },
    { id: '3', name: 'Squats', type: 'repetition', suggested: { name: 'Running', type: 'duration' } },
    { id: '4', name: 'Plank', type: 'duration', suggested: { name: 'Pushups', type: 'repetition' } },
  ];


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
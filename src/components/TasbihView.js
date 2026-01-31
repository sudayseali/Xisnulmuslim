import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Vibration } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { styles } from '../constants/Styles';
import { COLORS } from '../constants/Colors';

const TasbihView = () => {
  const [count, setCount] = useState(0);
  const [round, setRound] = useState(1);

  const handleCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    
    if (newCount === 33 || newCount === 66 || newCount === 99 || newCount === 100) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      Vibration.vibrate(100);
    } else {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
  };

  const resetTasbih = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
    setCount(0);
    setRound(1);
  };

  return (
    <View style={styles.tasbihContainer}>
      <View style={styles.tasbihDisplay}>
        <Text style={styles.tasbihLabel}>Wadarta</Text>
        <Text style={styles.tasbihCount}>{count}</Text>
        <Text style={styles.tasbihTarget}>Target: 33 / 99</Text>
      </View>

      <TouchableOpacity 
        style={styles.tasbihButton} 
        activeOpacity={0.7}
        onPress={handleCount}
      >
        <View style={styles.tasbihInnerCircle}>
          <Ionicons name="finger-print" size={50} color={COLORS.surface} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.resetButton} onPress={resetTasbih}>
        <Ionicons name="refresh" size={24} color={COLORS.textSecondary} />
        <Text style={styles.resetText}>Dib u bilow</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TasbihView;
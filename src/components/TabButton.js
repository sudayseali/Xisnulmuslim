import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../constants/Styles';
import { COLORS } from '../constants/Colors';

const TabButton = ({ icon, label, isActive, onPress }) => (
  <TouchableOpacity style={[styles.tabItem, isActive && styles.tabItemActive]} onPress={onPress}>
    <Ionicons name={isActive ? icon : `${icon}-outline`} size={22} color={isActive ? COLORS.surface : '#94A3B8'} />
    {isActive && <Text style={styles.tabText}>{label}</Text>}
  </TouchableOpacity>
);

export default TabButton;
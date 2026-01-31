import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../constants/Styles';
import { COLORS } from '../constants/Colors';

const DetailView = ({ item, onClose, insets }) => {
  const [fontSize, setFontSize] = useState(26);
  return (
    <View style={[styles.detailContainer, { paddingTop: insets.top }]}>
      <View style={styles.detailHeader}>
        <TouchableOpacity onPress={onClose} style={styles.backButton}>
          <Ionicons name="chevron-back" size={28} color={COLORS.primary} />
        </TouchableOpacity>
        <Text style={styles.detailTitle} numberOfLines={1}>{item.title}</Text>
        <View style={{width: 40}} />
      </View>
      <Animated.ScrollView contentContainerStyle={{padding: 20}}>
        <View style={styles.arabicBox}>
          <Text style={[styles.arabicText, {fontSize}]}>{item.arabic}</Text>
        </View>
        <View style={styles.controlsRow}>
            <TouchableOpacity onPress={() => setFontSize(Math.max(20, fontSize-2))} style={styles.sizeBtn}>
              <Text style={styles.sizeTxt}>A-</Text>
            </TouchableOpacity>
            <Text style={{color:COLORS.textSecondary}}>Cabirka</Text>
            <TouchableOpacity onPress={() => setFontSize(Math.min(50, fontSize+2))} style={styles.sizeBtn}>
              <Text style={styles.sizeTxt}>A+</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.transBox}>
          <Text style={styles.transTitle}>MACNAHA</Text>
          <Text style={styles.transText}>{item.somali}</Text>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default DetailView;
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../constants/Styles';
import { COLORS } from '../constants/Colors';

const Header = ({ title, subtitle, showSearch, onSearch, searchText, onClear }) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.headerContainer, { paddingTop: insets.top + 10 }]}>
      <View style={styles.headerCircle} />
      <View style={styles.headerTopRow}>
        <View>
          <Text style={styles.headerGreeting}>{subtitle}</Text>
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
        <View style={styles.logoContainer}>
           <Ionicons name="moon" size={20} color={COLORS.accent} />
        </View>
      </View>
      
      {showSearch && (
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color={COLORS.primary} style={{ opacity: 0.7 }} />
          <TextInput 
            style={styles.searchInput}
            placeholder="Raadi..."
            placeholderTextColor="#94A3B8"
            value={searchText}
            onChangeText={onSearch}
          />
          {searchText.length > 0 && (
            <TouchableOpacity onPress={onClear}>
              <Ionicons name="close-circle" size={20} color={COLORS.textSecondary} />
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

export default Header;
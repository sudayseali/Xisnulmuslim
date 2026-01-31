import React from 'react';
import { FlatList, TouchableOpacity, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../constants/Styles';
import { COLORS } from '../constants/Colors';

const DuaList = ({ data, onSelect, favorites, onToggleFav }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 120, paddingTop: 10 }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <TouchableOpacity 
          style={styles.card} 
          activeOpacity={0.9} 
          onPress={() => onSelect(item)}
        >
          <View style={styles.cardHeader}>
            <Text style={styles.categoryText}>{item.category || 'Xusitaanka Alle'}</Text>
            <TouchableOpacity onPress={() => onToggleFav(item.id)}>
              <Ionicons 
                name={favorites[item.id] ? "heart" : "heart-outline"} 
                size={22} 
                color={favorites[item.id] ? COLORS.danger : COLORS.textSecondary} 
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.duaTitle} numberOfLines={1}>{item.title}</Text>
          <Text style={styles.duaPreview} numberOfLines={2}>{item.somali}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default DuaList;
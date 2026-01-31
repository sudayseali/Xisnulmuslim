import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { styles } from '../constants/Styles';
import { COLORS } from '../constants/Colors';

const NamesOfAllahView = () => {
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNames();
  }, []);

  const fetchNames = async () => {
    try {
      const response = await fetch('https://api.aladhan.com/v1/asmaAlHusna');
      const json = await response.json();
      if (json.data) setNames(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const renderNameCard = ({ item }) => (
    <View style={styles.nameCard}>
      <View style={styles.nameNumber}>
        <Text style={styles.nameNumberText}>{item.number}</Text>
      </View>
      <Text style={styles.nameArabic}>{item.name}</Text>
      <Text style={styles.nameTransliteration}>{item.transliteration}</Text>
      <Text style={styles.nameMeaning}>{item.en.meaning}</Text>
    </View>
  );

  if (loading) return <ActivityIndicator size="large" color={COLORS.primary} style={{marginTop: 50}} />;

  return (
    <FlatList 
      data={names}
      numColumns={2}
      keyExtractor={(item) => item.number.toString()}
      renderItem={renderNameCard}
      contentContainerStyle={styles.namesGrid}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default NamesOfAllahView;
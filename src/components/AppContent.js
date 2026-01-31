import React, { useState, useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from './Header';
import NamesOfAllahView from './NamesOfAllahView';
import TasbihView from './TasbihView';
import DuaList from './DuaList';
import DetailView from './DetailView';
import TabButton from './TabButton';
import { styles } from '../constants/Styles';
import xisnulData from '../data/xisnul.json';

const AppContent = () => {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState('home');
  const [selectedDua, setSelectedDua] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [favorites, setFavorites] = useState({});
  const [filteredData, setFilteredData] = useState(xisnulData);

  useEffect(() => {
    if (activeTab === 'home' || activeTab === 'favorites') {
      const source = activeTab === 'favorites' ? xisnulData.filter(d => favorites[d.id]) : xisnulData;
      if (!searchText.trim()) {
        setFilteredData(source);
      } else {
        const lower = searchText.toLowerCase();
        setFilteredData(source.filter(d => 
          d.title.toLowerCase().includes(lower) || 
          d.somali.toLowerCase().includes(lower)
        ));
      }
    }
  }, [searchText, activeTab, favorites]);

  const toggleFav = (id) => setFavorites(p => ({...p, [id]: !p[id]}));

  const renderContent = () => {
    switch (activeTab) {
      case 'names':
        return <NamesOfAllahView />;
      case 'tasbih':
        return <TasbihView />;
      case 'favorites':
        return <DuaList data={filteredData} onSelect={setSelectedDua} favorites={favorites} onToggleFav={toggleFav} />;
      default:
        return <DuaList data={filteredData} onSelect={setSelectedDua} favorites={favorites} onToggleFav={toggleFav} />;
    }
  };

  const getHeaderTitle = () => {
    const titles = {
      'names': 'Asma’ul Xusna',
      'tasbih': 'Tasbiix',
      'favorites': 'Jecel',
      'home': 'Xisnul Muslim'
    };
    return titles[activeTab] || 'Xisnul Muslim';
  };

  const getSubtitle = () => {
    const subtitles = {
      'names': '99ka Magac ee Alle',
      'home': 'Adkaarta Maalinlaha',
      'tasbih': 'Adkaarta Maalinlaha',
      'favorites': 'Adkaarta Maalinlaha'
    };
    return subtitles[activeTab] || 'Adkaarta Maalinlaha';
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#064E3B" />
      
      {selectedDua ? (
        <DetailView 
          item={selectedDua} 
          onClose={() => setSelectedDua(null)} 
          insets={insets} 
        />
      ) : (
        <>
          <Header 
            title={getHeaderTitle()} 
            subtitle={getSubtitle()}
            showSearch={activeTab === 'home' || activeTab === 'favorites'}
            searchText={searchText}
            onSearch={setSearchText}
            onClear={() => setSearchText('')}
          />

          <View style={styles.contentContainer}>
            {renderContent()}
          </View>

          <View style={[styles.tabBar, { bottom: insets.bottom + 10 }]}>
            <TabButton icon="home" label="Home" isActive={activeTab === 'home'} onPress={() => setActiveTab('home')} />
            <TabButton icon="grid" label="Asma" isActive={activeTab === 'names'} onPress={() => setActiveTab('names')} />
            <TabButton icon="radio-button-on" label="Tasbiix" isActive={activeTab === 'tasbih'} onPress={() => setActiveTab('tasbih')} />
            <TabButton icon="heart" label="Jecel" isActive={activeTab === 'favorites'} onPress={() => setActiveTab('favorites')} />
          </View>
        </>
      )}
    </View>
  );
};

export default AppContent;
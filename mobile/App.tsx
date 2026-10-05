import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ResourceCard } from './src/components/ResourceCard';
import { Resource } from './src/types';

export default function App() {
const sampleResource: Resource = {
  id: 'res-1',
  title: 'Основи React Native та Flexbox',
  minutes: 45,
};

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.screen}>
        <Text style={styles.heading}>Мій каталог навчання</Text>

        <View style={styles.row}>
          <Image
            source={require('./assets/resource.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={{ flex: 1 }}>
            <ResourceCard resource={sampleResource} />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8FAFC',
  },
  heading: {
    fontSize: 26,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 20,
  },
row: {
  flexDirection: 'row', 
  alignItems: 'center',
  gap: 12,
},
  image: {
    width: 64,
    height: 64,
  },
});
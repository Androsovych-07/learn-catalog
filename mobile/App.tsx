import { StyleSheet, View } from 'react-native';
import ResourceCard from './src/components/ResourceCard';
import type { Resource } from './src/types';


const resource: Resource = {
  id: 1,
  title: 'Основи React Native та Expo',
  minutes: 35,
};

export default function App() {
  return (
    <View style={styles.container}>
      <ResourceCard resource={resource} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
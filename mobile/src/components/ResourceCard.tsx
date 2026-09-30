import { StyleSheet, Text, View } from 'react-native';
import type { Resource } from '../types';

type ResourceCardProps = {
  resource: Resource;
};

export default function ResourceCard(props: ResourceCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{props.resource.title}</Text>
      <Text style={styles.minutes}>{props.resource.minutes} хв</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginVertical: 10,
    width: '100%',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 6,
  },
  minutes: {
    fontSize: 14,
    color: '#666',
  },
});
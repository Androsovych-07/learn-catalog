import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Resource } from '../types';

interface ResourceCardProps {
  resource: Resource;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  // Обробник події натискання на кнопку
  function handlePress() {
    console.log('Натискання перевірено');
  }

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{resource.title}</Text>
      <Text style={styles.meta}>Тривалість: {resource.minutes} хв</Text>

      <Pressable
        onPress={handlePress}
        style={styles.button}
        accessibilityRole="button"
      >
        <Text style={styles.buttonText}>Перевірити кнопку</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 6,
  },
  meta: {
    fontSize: 16,
    color: '#64748B',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 12,
    borderRadius: 8,
    minHeight: 48,
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
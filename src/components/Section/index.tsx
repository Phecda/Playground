import React, { PropsWithChildren } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

export function Section({ children, title }: SectionProps) {
  const { colors } = useTheme();
  return (
    <View
      style={StyleSheet.flatten([
        styles.sectionContainer,
        {
          backgroundColor: colors.surface,
        },
      ])}>
      <Text
        style={StyleSheet.flatten([
          styles.sectionTitle,
          { color: colors.onSurface },
        ])}>
        {title}
      </Text>
      <Text
        style={StyleSheet.flatten([
          styles.sectionDescription,
          { color: colors.onSurface },
        ])}>
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});

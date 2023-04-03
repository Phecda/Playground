import { FC } from 'react';
import {
  ScrollView,
  ScrollViewProps,
  StyleSheet,
  View,
  ViewProps,
} from 'react-native';
import { useTheme } from 'react-native-paper';

export const BGView: FC<ViewProps> = ({ style, ...props }) => {
  const theme = useTheme();
  return (
    <View
      style={StyleSheet.flatten([
        { backgroundColor: theme.colors.background },
        style,
      ])}
      {...props}
    />
  );
};

export const BGScroll: FC<ScrollViewProps> = ({
  style,
  contentContainerStyle,
  ...props
}) => {
  const theme = useTheme();
  return (
    <ScrollView
      style={StyleSheet.flatten([
        { backgroundColor: theme.colors.background, flex: 1 },
        style,
      ])}
      contentContainerStyle={StyleSheet.flatten([
        { padding: 16 },
        contentContainerStyle,
      ])}
      centerContent
      contentInsetAdjustmentBehavior="automatic"
      {...props}
    />
  );
};

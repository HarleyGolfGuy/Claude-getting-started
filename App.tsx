import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Platform, Pressable, StyleSheet, Text, View, useColorScheme } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const dark = useColorScheme() === 'dark';
  const colors = dark
    ? { bg: '#111418', text: '#f2f4f7', muted: '#9aa4b2' }
    : { bg: '#ffffff', text: '#111418', muted: '#5b6573' };

  return (
    <View style={[styles.container, { backgroundColor: colors.bg }]}>
      <Text style={[styles.title, { color: colors.text }]}>Hello from Expo 👋</Text>
      <Text style={[styles.subtitle, { color: colors.muted }]}>
        Running on {Platform.OS === 'ios' ? 'iPhone' : Platform.OS === 'android' ? 'Android' : 'the web'}
      </Text>

      <Text style={[styles.count, { color: colors.text }]}>{count}</Text>

      <View style={styles.row}>
        <Pressable
          accessibilityRole="button"
          onPress={() => setCount((c) => c + 1)}
          style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        >
          <Text style={styles.buttonText}>Tap me</Text>
        </Pressable>
        <Pressable
          accessibilityRole="button"
          onPress={() => setCount(0)}
          style={({ pressed }) => [styles.button, styles.secondary, pressed && styles.pressed]}
        >
          <Text style={[styles.buttonText, styles.secondaryText]}>Reset</Text>
        </Pressable>
      </View>

      <StatusBar style={dark ? 'light' : 'dark'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: { fontSize: 28, fontWeight: '700' },
  subtitle: { fontSize: 16, marginTop: 8 },
  count: { fontSize: 72, fontWeight: '800', marginVertical: 32 },
  row: { flexDirection: 'row', gap: 12 },
  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  secondary: { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#2563eb' },
  pressed: { opacity: 0.7 },
  buttonText: { color: '#fff', fontSize: 17, fontWeight: '600' },
  secondaryText: { color: '#2563eb' },
});

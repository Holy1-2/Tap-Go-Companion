
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  onNavigate: () => void;
}

const ErrorScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
         <View style={styles.iconBox}>
            <Text style={styles.icon}>⚠️</Text>
         </View>
         <Text style={styles.title}>System Deviation</Text>
         <Text style={styles.desc}>
            We've detected you're off-route. Would you like to recalculate your journey or find the nearest stop?
         </Text>

         <View style={styles.actions}>
            <TouchableOpacity style={styles.primary} onPress={onNavigate}>
               <Text style={styles.primaryText}>Reroute Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondary} onPress={onNavigate}>
               <Text style={styles.secondaryText}>I'm Okay</Text>
            </TouchableOpacity>
         </View>
      </View>

      <TouchableOpacity style={styles.helpRow}>
         <Text style={styles.helpIcon}>💬</Text>
         <Text style={styles.helpText}>Need immediate assistance? <Text style={styles.bold}>Chat Support</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1E3A8A', padding: 32, justifyContent: 'center' },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 44,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 30,
  },
  iconBox: {
    width: 70,
    height: 70,
    borderRadius: 24,
    backgroundColor: '#FEF2F2',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  icon: { fontSize: 32 },
  title: { fontSize: 24, fontWeight: '900', color: '#1E3A8A', marginBottom: 12 },
  desc: { fontSize: 15, color: '#64748B', textAlign: 'center', lineHeight: 22, marginBottom: 32, fontWeight: '500' },
  actions: { width: '100%', gap: 12 },
  primary: { backgroundColor: '#2563EB', height: 60, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  primaryText: { color: '#FFFFFF', fontWeight: '900', fontSize: 16 },
  secondary: { backgroundColor: '#F1F5F9', height: 60, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  secondaryText: { color: '#64748B', fontWeight: '800', fontSize: 16 },
  helpRow: { flexDirection: 'row', alignItems: 'center', marginTop: 40, justifyContent: 'center' },
  helpIcon: { marginRight: 10, fontSize: 18 },
  helpText: { color: 'rgba(255,255,255,0.7)', fontSize: 13, fontWeight: '500' },
  bold: { color: '#FFFFFF', fontWeight: '800' }
});

export default ErrorScreen;

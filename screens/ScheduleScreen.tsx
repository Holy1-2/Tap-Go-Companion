
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { BusIcon, BackIcon } from './icons';

interface Props {
  onBack: () => void;
}

const ScheduleScreen: React.FC<Props> = ({ onBack }) => {
  const routes = [
    { id: '102', from: 'City Center', to: 'Remera', time: 'Every 10 mins', status: 'On Time' },
    { id: '208', from: 'Kimironko', to: 'Kanombe', time: 'Every 15 mins', status: 'Delayed 5m' },
    { id: '305', from: 'Nyamirambo', to: 'Down Town', time: 'Every 12 mins', status: 'On Time' },
    { id: '401', from: 'Gikondo', to: 'Kicukiro', time: 'Every 20 mins', status: 'Heavy Traffic' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backBtn}>
           <BackIcon size={20} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Trips</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Live Schedules</Text>
        <Text style={styles.subtitle}>Track your regular routes in real-time.</Text>

        <View style={styles.searchBar}>
           <Text style={styles.searchPlaceholder}>Where are you heading?</Text>
        </View>

        <Text style={styles.sectionHeading}>Active routes</Text>
        
        {routes.map(route => (
          <View key={route.id} style={styles.routeCard}>
             <View style={styles.routeHeader}>
                <View style={styles.routeId}>
                   <Text style={styles.routeIdText}>{route.id}</Text>
                </View>
                <View style={[styles.statusTag, { backgroundColor: route.status.includes('Delayed') ? '#FFF1F2' : '#F0FDF4' }]}>
                   <Text style={[styles.statusText, { color: route.status.includes('Delayed') ? '#E11D48' : '#16A34A' }]}>{route.status}</Text>
                </View>
             </View>
             
             <View style={styles.routePath}>
                <Text style={styles.pathText}>{route.from} to {route.to}</Text>
                <Text style={styles.freqText}>{route.time}</Text>
             </View>

             <TouchableOpacity style={styles.viewLiveBtn}>
                <Text style={styles.viewLiveText}>View track</Text>
             </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: { paddingTop: 60, paddingHorizontal: 24, flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  backBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#F7F7F7', alignItems: 'center', justifyContent: 'center' },
  headerTitle: { flex: 1, textAlign: 'center', marginRight: 40, fontSize: 17, fontWeight: '700', color: '#222' },
  scrollContent: { 
    padding: 24,
    paddingBottom: 140 // Accommodation for BottomNav
  },
  title: { fontSize: 32, fontWeight: '700', color: '#222' },
  subtitle: { fontSize: 16, color: '#717171', marginTop: 4, marginBottom: 24 },
  searchBar: { height: 56, backgroundColor: '#FFF', borderRadius: 28, justifyContent: 'center', paddingHorizontal: 20, marginBottom: 32, borderWidth: 1, borderColor: '#EBEBEB', shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10 },
  searchPlaceholder: { color: '#717171', fontWeight: '500', fontSize: 15 },
  sectionHeading: { fontSize: 22, fontWeight: '700', color: '#222', marginBottom: 20 },
  routeCard: { 
    backgroundColor: '#FFF', 
    borderRadius: 24, 
    padding: 20, 
    marginBottom: 20, 
    borderWidth: 1, 
    borderColor: '#EBEBEB',
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 10
  },
  routeHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  routeId: { backgroundColor: '#222', width: 44, height: 44, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  routeIdText: { color: '#FFF', fontWeight: '800', fontSize: 15 },
  statusTag: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
  statusText: { fontSize: 12, fontWeight: '700' },
  routePath: { marginBottom: 20 },
  pathText: { fontSize: 18, fontWeight: '700', color: '#222' },
  freqText: { fontSize: 14, color: '#717171', fontWeight: '500', marginTop: 4 },
  viewLiveBtn: { height: 48, backgroundColor: '#F7F7F7', borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  viewLiveText: { color: '#222', fontWeight: '700', fontSize: 14 }
});

export default ScheduleScreen;

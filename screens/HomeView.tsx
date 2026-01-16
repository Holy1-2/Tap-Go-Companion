
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { HomeIcon, WorkIcon, BellIcon, UserIcon, BusIcon, WalletIcon } from './icons';

interface Props {
   onNavigate: () => void;
  onGoNotifications: () => void;
  onGoAccount: () => void;
  onGoCard: () => void;
  onGoSchedule: () => void;
}

export const SignUpScreen: React.FC<Props> = ({ onNavigate }) => {
     const [destination, setDestination] = useState('');
  const fadeAnim = useState(new Animated.Value(0))[0];

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <View style={styles.container}>
      {/* Decorative Top Pattern */}
      <View style={styles.topPattern}>
        <svg width="100%" height="160" viewBox="0 0 400 160" preserveAspectRatio="none">
          <path d="M0 0Q100 80 200 40T400 80V0H0Z" fill="#2563EB" opacity="0.05" />
          <path d="M0 0Q150 120 300 60T450 100V0H0Z" fill="#2563EB" opacity="0.03" />
        </svg>
      </View>

      <Animated.ScrollView 
        style={{ opacity: fadeAnim }}
        contentContainerStyle={styles.scrollContent} 
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Welcome back,</Text>
            <Text style={styles.userName}>Emery K. 🇷🇼</Text>
          </View>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.circleBtn} onPress={onNavigate}>
              <BellIcon size={20} color="#222" />
              <View style={styles.badge} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileBtn} onPress={onNavigate}>
              <UserIcon size={20} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar Container */}
        <View style={styles.searchContainer}>
          <Text style={styles.sectionTitle}>Where to?</Text>
          <TouchableOpacity style={styles.searchBar} activeOpacity={0.9} onPress={() => {}}>
            <View style={styles.searchIconBox}>
              <View style={styles.searchDot} />
            </View>
            <TextInput 
              style={styles.searchInput}
              placeholder="Search destination..."
              placeholderTextColor="#717171"
              value={destination}
              onChangeText={setDestination}
            />
            {destination.length > 0 && (
              <TouchableOpacity onPress={onNavigate} style={styles.goBtn}>
                <Text style={styles.goText}>Search</Text>
              </TouchableOpacity>
            )}
          </TouchableOpacity>
        </View>

        {/* Wallet Overview */}
        <TouchableOpacity style={styles.walletCard} onPress={onNavigate} activeOpacity={0.9}>
          <View style={styles.walletInfo}>
            <View>
              <Text style={styles.walletLabel}>Access Balance</Text>
              <Text style={styles.walletAmount}>12,450 <Text style={styles.currency}>RWF</Text></Text>
            </View>
            <View style={styles.walletIconBox}>
              <WalletIcon size={24} color="#2563EB" />
            </View>
          </View>
          <View style={styles.walletFooter}>
            <Text style={styles.walletAction}>Manage account</Text>
            <View style={styles.dotSeparator} />
            <Text style={styles.walletAction}>Top up</Text>
          </View>
        </TouchableOpacity>

        {/* Actions Grid */}
        <View style={styles.actionGrid}>
          <TouchableOpacity style={styles.gridItem} onPress={onNavigate}>
            <View style={styles.gridIconBox}>
              <BusIcon size={24} color="#222" />
            </View>
            <Text style={styles.gridLabel}>Schedules</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem} onPress={onNavigate}>
            <View style={styles.gridIconBox}>
              <BusIcon size={24} color="#222" />
            </View>
            <Text style={styles.gridLabel}>Live Map</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem} onPress={onNavigate}>
            <View style={styles.gridIconBox}>
              <WalletIcon size={24} color="#222" />
            </View>
            <Text style={styles.gridLabel}>Passes</Text>
          </TouchableOpacity>
        </View>

        {/* Recent Places */}
        <Text style={styles.historyLabel}>Recent searches</Text>
        <View style={styles.historyList}>
          <TouchableOpacity style={styles.historyItem} onPress={onNavigate}>
            <View style={styles.historyIcon}><WorkIcon size={18} color="#717171" /></View>
            <View style={styles.historyText}>
              <Text style={styles.historyTitle}>Work</Text>
              <Text style={styles.historySub}>City Center • 15 min</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.historyItem} onPress={onNavigate}>
            <View style={styles.historyIcon}><HomeIcon size={18} color="#717171" /></View>
            <View style={styles.historyText}>
              <Text style={styles.historyTitle}>Home</Text>
              <Text style={styles.historySub}>Kanombe • 5 min</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  topPattern: { position: 'absolute', top: 0, left: 0, right: 0, zIndex: 0 },
  scrollContent: { padding: 24, paddingTop: 60, zIndex: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 },
  greeting: { fontSize: 14, color: '#717171', fontWeight: '500' },
  userName: { fontSize: 24, fontWeight: '700', color: '#222', marginTop: 2 },
  headerActions: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  circleBtn: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#F7F7F7', alignItems: 'center', justifyContent: 'center' },
  profileBtn: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#222', alignItems: 'center', justifyContent: 'center' },
  badge: { position: 'absolute', top: 12, right: 12, width: 8, height: 8, backgroundColor: '#FF385C', borderRadius: 4, borderWidth: 2, borderColor: '#F7F7F7' },
  searchContainer: { marginBottom: 32 },
  sectionTitle: { fontSize: 32, fontWeight: '700', color: '#222', marginBottom: 20 },
  searchBar: { 
    height: 64, 
    borderRadius: 32, 
    backgroundColor: '#FFF', 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingHorizontal: 20, 
    shadowColor: '#000', 
    shadowOpacity: 0.1, 
    shadowRadius: 15, 
    shadowOffset: { width: 0, height: 4 },
    borderWidth: 1,
    borderColor: '#EBEBEB'
  },
  searchIconBox: { marginRight: 12 },
  searchDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#FF385C' },
  searchInput: { flex: 1, fontSize: 16, color: '#222', fontWeight: '500' },
  goBtn: { backgroundColor: '#FF385C', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20 },
  goText: { color: '#FFF', fontWeight: '700', fontSize: 14 },
  walletCard: { 
    backgroundColor: '#FFF', 
    borderRadius: 24, 
    padding: 24, 
    marginBottom: 32, 
    borderWidth: 1, 
    borderColor: '#EBEBEB',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10
  },
  walletInfo: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  walletLabel: { fontSize: 13, color: '#717171', fontWeight: '600' },
  walletAmount: { fontSize: 32, fontWeight: '700', color: '#222', marginTop: 4 },
  currency: { fontSize: 16, color: '#2563EB', fontWeight: '800' },
  walletIconBox: { width: 50, height: 50, borderRadius: 16, backgroundColor: '#F0F7FF', alignItems: 'center', justifyContent: 'center' },
  walletFooter: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingTop: 16, borderTopWidth: 1, borderTopColor: '#F7F7F7' },
  walletAction: { fontSize: 13, fontWeight: '700', color: '#222', textDecorationLine: 'underline' },
  dotSeparator: { width: 4, height: 4, borderRadius: 2, backgroundColor: '#DEDEDE' },
  actionGrid: { flexDirection: 'row', gap: 16, marginBottom: 40 },
  gridItem: { flex: 1, alignItems: 'center' },
  gridIconBox: { width: '100%', height: 64, borderRadius: 16, backgroundColor: '#F7F7F7', alignItems: 'center', justifyContent: 'center', marginBottom: 8 },
  gridLabel: { fontSize: 12, fontWeight: '600', color: '#222' },
  historyLabel: { fontSize: 18, fontWeight: '700', color: '#222', marginBottom: 16 },
  historyList: { gap: 16 },
  historyItem: { flexDirection: 'row', alignItems: 'center' },
  historyIcon: { width: 40, height: 40, borderRadius: 12, backgroundColor: '#F7F7F7', alignItems: 'center', justifyContent: 'center' },
  historyText: { marginLeft: 16, flex: 1, borderBottomWidth: 1, borderBottomColor: '#F7F7F7', paddingBottom: 12 },
  historyTitle: { fontSize: 16, fontWeight: '600', color: '#222' },
  historySub: { fontSize: 13, color: '#717171', marginTop: 2 }
});




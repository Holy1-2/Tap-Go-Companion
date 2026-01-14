
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { WalletIcon, RewardIcon, UserIcon, HomeIcon, ChevronRight, BackIcon } from './icons';

interface Props {
  onBack: () => void;
  onLogout: () => void;
  onGoCard: () => void;
  onGoRewards: () => void;
  onGoSavedPlaces: () => void;
  onGoAccount: () => void;
}

const AccountSettingsScreen: React.FC<Props> = ({ 
  onBack, 
  onLogout, 
  onGoCard, 
  onGoRewards, 
  onGoSavedPlaces,
  onGoAccount
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backBtn}>
           <BackIcon size={20} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.profileHeader}>
          <View style={styles.profileInfo}>
            <Text style={styles.userName}>Emery K.</Text>
            <TouchableOpacity onPress={onGoAccount}>
              <Text style={styles.userAction}>Show profile</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.avatar}>
            <UserIcon size={32} color="#FFF" />
          </View>
        </View>

        {/* Promo Card */}
        <TouchableOpacity style={styles.promoCard} onPress={onGoRewards}>
          <View style={styles.promoText}>
            <Text style={styles.promoTitle}>Eco Rewards</Text>
            <Text style={styles.promoSub}>You've saved 12.4kg of CO2 this month!</Text>
          </View>
          <RewardIcon size={24} color="#2563EB" />
        </TouchableOpacity>

        <Text style={styles.sectionHeading}>Settings</Text>
        
        <TouchableOpacity style={styles.settingItem} onPress={onGoAccount}>
          <UserIcon size={20} color="#222" style={styles.itemIcon} />
          <Text style={styles.itemText}>Personal information</Text>
          <ChevronRight size={18} color="#717171" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem} onPress={onGoCard}>
          <WalletIcon size={20} color="#222" style={styles.itemIcon} />
          <Text style={styles.itemText}>Payments and payouts</Text>
          <ChevronRight size={18} color="#717171" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem} onPress={onGoSavedPlaces}>
          <HomeIcon size={20} color="#222" style={styles.itemIcon} />
          <Text style={styles.itemText}>Saved places</Text>
          <ChevronRight size={18} color="#717171" />
        </TouchableOpacity>

        <Text style={styles.sectionHeading}>Support</Text>

        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.itemText}>How Tap&Go works</Text>
          <ChevronRight size={18} color="#717171" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.itemText}>Get help</Text>
          <ChevronRight size={18} color="#717171" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutBtn} onPress={onLogout}>
          <Text style={styles.logoutText}>Log out</Text>
        </TouchableOpacity>

        <Text style={styles.version}>Version 2.5.0 (281)</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: { paddingTop: 60, paddingHorizontal: 24, flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  backBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#F7F7F7', alignItems: 'center', justifyContent: 'center' },
  headerTitle: { flex: 1, textAlign: 'center', marginRight: 40, fontSize: 17, fontWeight: '700', color: '#222' },
  scrollContent: { paddingHorizontal: 24, paddingBottom: 140 },
  profileHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 20, marginBottom: 20 },
  profileInfo: {},
  userName: { fontSize: 32, fontWeight: '700', color: '#222' },
  userAction: { fontSize: 14, color: '#717171', marginTop: 4, textDecorationLine: 'underline' },
  avatar: { width: 64, height: 64, borderRadius: 32, backgroundColor: '#222', alignItems: 'center', justifyContent: 'center' },
  promoCard: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#FFF', 
    borderRadius: 16, 
    padding: 20, 
    marginBottom: 40, 
    borderWidth: 1, 
    borderColor: '#EBEBEB',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10
  },
  promoText: { flex: 1 },
  promoTitle: { fontSize: 16, fontWeight: '700', color: '#222' },
  promoSub: { fontSize: 13, color: '#717171', marginTop: 4 },
  sectionHeading: { fontSize: 22, fontWeight: '700', color: '#222', marginBottom: 12, marginTop: 12 },
  settingItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 16, 
    borderBottomWidth: 1, 
    borderBottomColor: '#F7F7F7' 
  },
  itemIcon: { marginRight: 16 },
  itemText: { flex: 1, fontSize: 16, fontWeight: '400', color: '#222' },
  logoutBtn: { marginTop: 40, paddingVertical: 12 },
  logoutText: { fontSize: 16, fontWeight: '600', color: '#222', textDecorationLine: 'underline' },
  version: { fontSize: 12, color: '#717171', textAlign: 'center', marginTop: 40 }
});

export default AccountSettingsScreen;

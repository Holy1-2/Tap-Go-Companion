
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

export const AccountView: React.FC = () => {
  const sections = [
    { title: 'Messages', icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" },
    { title: 'Payment Methods', icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" },
    { title: 'Settings', icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
    { title: 'Help & Support', icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  ];

  return (
    <ScrollView style={styles.container} bounces={false}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.userName}>John Doe</Text>
          <View style={styles.riderBadge}>
            <svg width="14" height="14" viewBox="0 0 20 20" fill="#000">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <Text style={styles.riderBadgeText}>5.0 STAR PASSENGER</Text>
          </View>
        </View>
        <View style={styles.avatar}>
           <svg width="40" height="40" viewBox="0 0 24 24" fill="#E5E7EB">
             <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
           </svg>
        </View>
      </View>

      {/* Wallet Card */}
      <View style={styles.walletCard}>
        <View style={styles.walletHeader}>
           <View>
             <Text style={styles.walletLabel}>Total Balance</Text>
             <Text style={styles.walletBalance}>4,250 <Text style={styles.currency}>RWF</Text></Text>
           </View>
           <TouchableOpacity style={styles.topUpBtn}>
             <Text style={styles.topUpBtnText}>TOP UP</Text>
           </TouchableOpacity>
        </View>
        <View style={styles.divider} />
        <View style={styles.walletStats}>
           <View style={styles.statBox}>
              <Text style={styles.statBoxLabel}>Loyalty Points</Text>
              <Text style={styles.statBoxValue}>120</Text>
           </View>
           <View style={styles.statBox}>
              <Text style={styles.statBoxLabel}>Est. Trips</Text>
              <Text style={styles.statBoxValue}>~14</Text>
           </View>
        </View>
      </View>

      {/* Settings Rows */}
      <View style={styles.settingsSection}>
        {sections.map((section, idx) => (
          <TouchableOpacity key={section.title} style={[styles.settingRow, idx !== sections.length - 1 && styles.borderBottom]}>
            <View style={styles.settingIconBox}>
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={section.icon} />
               </svg>
            </View>
            <Text style={styles.settingTitle}>{section.title}</Text>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
               <path d="M9 5l7 7-7 7" />
            </svg>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.signoutArea}>
         <TouchableOpacity style={styles.signoutBtn}>
            <Text style={styles.signoutBtnText}>SIGN OUT</Text>
         </TouchableOpacity>
         <Text style={styles.version}>VERSION 2.4.0 (PRO)</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    paddingTop: 80,
    paddingHorizontal: 24,
    paddingBottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userName: {
    fontSize: 40,
    fontWeight: '900',
    color: '#000',
    letterSpacing: -2,
  },
  riderBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 100,
    marginTop: 8,
  },
  riderBadgeText: {
    fontSize: 9,
    fontWeight: '900',
    color: '#000',
    letterSpacing: 1,
  },
  avatar: {
    width: 80,
    height: 80,
    backgroundColor: '#F3F4F6',
    borderRadius: 40,
    borderWidth: 4,
    borderColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
  },
  walletCard: {
    marginHorizontal: 24,
    backgroundColor: '#1A1A1A',
    borderRadius: 32,
    padding: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.3,
    shadowRadius: 40,
  },
  walletHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  walletLabel: {
    fontSize: 9,
    fontWeight: '900',
    color: '#6B7280',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  walletBalance: {
    fontSize: 36,
    fontWeight: '900',
    color: '#FFF',
    marginTop: 4,
  },
  currency: {
    fontSize: 16,
    color: '#9CA3AF',
  },
  topUpBtn: {
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 100,
  },
  topUpBtnText: {
    fontSize: 10,
    fontWeight: '900',
    color: '#000',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
    marginVertical: 24,
  },
  walletStats: {
    flexDirection: 'row',
    gap: 16,
  },
  statBox: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.05)',
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  statBoxLabel: {
    fontSize: 8,
    fontWeight: '900',
    color: '#9CA3AF',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  statBoxValue: {
    fontSize: 18,
    fontWeight: '900',
    color: '#FFF',
    marginTop: 4,
  },
  settingsSection: {
    paddingHorizontal: 12,
    marginTop: 32,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 20,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#F9FAFB',
  },
  settingIconBox: {
    width: 44,
    height: 44,
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingTitle: {
    flex: 1,
    marginLeft: 16,
    fontSize: 15,
    fontWeight: '700',
    color: '#000',
  },
  signoutArea: {
    padding: 24,
    paddingBottom: 100,
    marginTop: 40,
    alignItems: 'center',
  },
  signoutBtn: {
    backgroundColor: '#FEF2F2',
    width: '100%',
    height: 60,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signoutBtnText: {
    color: '#EF4444',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 2,
  },
  version: {
    fontSize: 9,
    fontWeight: '800',
    color: '#D1D5DB',
    letterSpacing: 3,
    marginTop: 24,
  },
});

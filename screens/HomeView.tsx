
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

interface HomeViewProps {
  onSearch: (from: string, to: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onSearch }) => {
  return (
    <ScrollView style={styles.container} bounces={false}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.logo}>Tap&Go</Text>
          <Text style={styles.welcome}>Where are you going today?</Text>
        </View>
        <TouchableOpacity style={styles.notifBtn}>
           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
             <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
           </svg>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <TouchableOpacity 
        style={styles.searchBar} 
        onPress={() => onSearch('', '')}
        activeOpacity={0.9}
      >
        <View style={styles.searchIndicator} />
        <Text style={styles.searchText}>Where to?</Text>
        <View style={styles.searchTime}>
           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
             <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
           </svg>
           <Text style={styles.nowText}>Now</Text>
        </View>
      </TouchableOpacity>

      {/* Saved Places */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.placeRow} onPress={() => onSearch('Home', 'Central Station')}>
          <View style={styles.iconCircleBlack}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
     
          </View>
          <View style={styles.placeInfo}>
            <Text style={styles.placeTitle}>Home</Text>
            <Text style={styles.placeSubtitle}>123 Street Name, Kigali</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.placeRow} onPress={() => onSearch('Work', 'Business District')}>
          <View style={styles.iconCircleGray}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
       
          </View>
          <View style={styles.placeInfo}>
            <Text style={styles.placeTitle}>Work</Text>
            <Text style={styles.placeSubtitle}>Nyarugenge Tower, Floor 4</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Promo Card */}
      <View style={styles.promoCard}>
        <View style={styles.promoBadge}>
           <View style={styles.pulseDot} />
           <Text style={styles.promoBadgeText}>Live Update</Text>
        </View>
        <Text style={styles.promoTitle}>Downtown Express now has 50% more buses.</Text>
        <Text style={styles.promoText}>Less waiting, more comfort during rush hours.</Text>
        <TouchableOpacity style={styles.promoBtn}>
           <Text style={styles.promoBtnText}>LEARN MORE</Text>
        </TouchableOpacity>
        <View style={styles.promoBgIcon}>
           <svg width="120" height="120" viewBox="0 0 24 24" fill="rgba(255,255,255,0.05)">
              <path d="M13 10V3L4 14H11V21L20 10H13Z" />
           </svg>
        </View>
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
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 32,
    fontWeight: '900',
    color: '#000',
    letterSpacing: -1,
  },
  welcome: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
    marginTop: 4,
  },
  notifBtn: {
    width: 44,
    height: 44,
    backgroundColor: '#F3F4F6',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  searchBar: {
    marginHorizontal: 24,
    backgroundColor: '#F3F4F6',
    padding: 16,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  searchIndicator: {
    width: 12,
    height: 12,
    backgroundColor: '#000',
    borderRadius: 2,
    transform: [{ rotate: '45deg' }],
  },
  searchText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#374151',
    marginLeft: 16,
    flex: 1,
  },
  searchTime: {
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: '#D1D5DB',
    paddingLeft: 12,
    gap: 6,
  },
  nowText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#6B7280',
  },
  section: {
    paddingHorizontal: 24,
    marginTop: 40,
    gap: 16,
  },
  placeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
  },
  iconCircleBlack: {
    backgroundColor: '#000',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCircleGray: {
    backgroundColor: '#E5E7EB',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeInfo: {
    marginLeft: 16,
  },
  placeTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#000',
  },
  placeSubtitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#9CA3AF',
    marginTop: 2,
  },
  promoCard: {
    margin: 24,
    marginTop: 40,
    backgroundColor: '#1A1A1A',
    borderRadius: 24,
    padding: 24,
    overflow: 'hidden',
    position: 'relative',
  },
  promoBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 6,
  },
  pulseDot: {
    width: 8,
    height: 8,
    backgroundColor: '#10B981',
    borderRadius: 4,
  },
  promoBadgeText: {
    fontSize: 10,
    fontWeight: '900',
    color: '#10B981',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  promoTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#FFF',
    lineHeight: 26,
    maxWidth: '85%',
  },
  promoText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#9CA3AF',
    marginTop: 12,
    lineHeight: 18,
    maxWidth: '80%',
  },
  promoBtn: {
    marginTop: 24,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  promoBtnText: {
    fontSize: 11,
    fontWeight: '900',
    color: '#000',
    letterSpacing: 0.5,
  },
  promoBgIcon: {
    position: 'absolute',
    bottom: -20,
    right: -20,
  },
});

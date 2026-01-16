
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { BusIcon, WalletIcon, BackIcon, ChevronRight } from './icons';

interface Props {
  onBack: () => void;
}

const CardDetailsScreen: React.FC<Props> = ({ onBack }) => {
  const [selectedAmount, setSelectedAmount] = useState(5000);

  return (
    <View style={styles.container}>
      {/* Dynamic Background Pattern */}
      <View style={styles.bgPattern}>
        <svg width="100%" height="300" viewBox="0 0 400 300" preserveAspectRatio="none">
          <path d="M0 0 L400 0 L400 200 Q200 300 0 200 Z" fill="#F8FAFC" />
        </svg>
      </View>

      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backBtn}>
           <BackIcon size={20} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Wallet</Text>
        <TouchableOpacity style={styles.headerAction}>
           <View style={styles.dot} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Premium Realistic Card */}
        <View style={styles.cardContainer}>
          <View style={styles.card}>
             <View style={styles.cardGlow} />
             <View style={styles.cardHeader}>
                <View>
                   <Text style={styles.cardBrand}>Access</Text>
                   <Text style={styles.cardTier}>PLATINUM PASS</Text>
                </View>
                <View style={styles.nfcBox}>
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M4 7C6.66667 9.66667 6.66667 14.3333 4 17" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M7 5C10.3333 8.33333 10.3333 15.6667 7 19" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M10 3C14.6667 7.66667 14.6667 16.3333 10 21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                   </svg>
                </View>
             </View>
             
             <View style={styles.cardBody}>
                <Text style={styles.balLabel}>CURRENT BALANCE</Text>
                <Text style={styles.balValue}>12,450 <Text style={styles.balCurrency}>RWF</Text></Text>
             </View>

             <View style={styles.cardFooter}>
                <View>
                   <Text style={styles.footerLabel}>HOLDER NAME</Text>
                   <Text style={styles.footerVal}>EMERY KAGABO</Text>
                </View>
                <View style={styles.chip} />
             </View>
          </View>
        </View>

        

        {/* Monthly Insights Preview */}
        <View style={styles.insightsCard}>
           <View style={styles.insightHeader}>
              <Text style={styles.insightTitle}>Monthly Spending</Text>
              <Text style={styles.insightVal}>-4,200 RWF</Text>
           </View>
           <View style={styles.insightBarContainer}>
              <View style={[styles.insightBar, { width: '65%' }]} />
           </View>
           <Text style={styles.insightNote}>You've spent 15% less on transport this month. Nice!</Text>
        </View>

        {/* Top Up Section - Refined */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Reload Card</Text>
          <View style={styles.topUpGrid}>
             {[1000, 2000, 5000, 10000].map(amt => (
                <TouchableOpacity 
                  key={amt} 
                  onPress={() => setSelectedAmount(amt)}
                  style={[styles.amtOption, amt === selectedAmount && styles.amtOptionActive]}
                >
                   <Text style={[styles.amtText, amt === selectedAmount && styles.amtTextActive]}>
                     {amt >= 1000 ? `${amt/1000}K` : amt}
                   </Text>
                </TouchableOpacity>
             ))}
          </View>
          <TouchableOpacity style={styles.primaryAction}>
             <WalletIcon size={20} color="#FFF" style={{ marginRight: 10 }} />
             <Text style={styles.primaryActionText}>Add {selectedAmount.toLocaleString()} RWF</Text>
          </TouchableOpacity>
        </View>

        {/* Enhanced Transaction History */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>History</Text>
            <TouchableOpacity><Text style={styles.viewAll}>See All</Text></TouchableOpacity>
          </View>
          
          <View style={styles.historyList}>
             <View style={styles.transaction}>
                <View style={[styles.tIcon, { backgroundColor: '#F0FDF4' }]}>
                   <Text style={{ fontSize: 16 }}>💰</Text>
                </View>
                <View style={styles.tText}>
                   <Text style={styles.tTitle}>Mobile Money Top-up</Text>
                   <Text style={styles.tDate}>Today • 08:45 AM</Text>
                </View>
                <View style={styles.tAmountCol}>
                   <Text style={[styles.tAmount, { color: '#10B981' }]}>+5,000</Text>
                   <Text style={styles.tStatus}>Success</Text>
                </View>
             </View>

             <View style={styles.transaction}>
                <View style={[styles.tIcon, { backgroundColor: '#F1F5F9' }]}>
                   <BusIcon size={18} color="#222" />
                </View>
                <View style={styles.tText}>
                   <Text style={styles.tTitle}>Route 102 - City Center</Text>
                   <Text style={styles.tDate}>Yesterday • 06:12 PM</Text>
                </View>
                <View style={styles.tAmountCol}>
                   <Text style={styles.tAmount}>-500</Text>
                   <Text style={styles.tStatus}>Confirmed</Text>
                </View>
             </View>

             <View style={styles.transaction}>
                <View style={[styles.tIcon, { backgroundColor: '#F1F5F9' }]}>
                   <BusIcon size={18} color="#222" />
                </View>
                <View style={styles.tText}>
                   <Text style={styles.tTitle}>Route 208 - Remera</Text>
                   <Text style={styles.tDate}>Yesterday • 09:10 AM</Text>
                </View>
                <View style={styles.tAmountCol}>
                   <Text style={styles.tAmount}>-800</Text>
                   <Text style={styles.tStatus}>Confirmed</Text>
                </View>
             </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  bgPattern: { position: 'absolute', top: 0, left: 0, right: 0 },
  header: { 
    paddingTop: 60, 
    paddingHorizontal: 24, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    marginBottom: 20 
  },
  backBtn: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center', shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10 },
  headerTitle: { fontSize: 18, fontWeight: '800', color: '#222' },
  headerAction: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center', shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#2563EB' },
  scrollContent: { paddingHorizontal: 24, paddingBottom: 140 },
  cardContainer: { 
    marginVertical: 24,
  },
  card: { 
    backgroundColor: '#0F172A', 
    height: 220, 
    borderRadius: 28, 
    padding: 24, 
    justifyContent: 'space-between',
    overflow: 'hidden',
    shadowColor: '#2563EB',
    shadowOpacity: 0.25,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)'
  },
  cardGlow: {
    position: 'absolute',
    top: -50,
    right: -50,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#2563EB',
    opacity: 0.2,
    filter: 'blur(40px)',
  },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  cardBrand: { color: '#FFF', fontSize: 22, fontWeight: '900', letterSpacing: -0.5 },
  cardTier: { color: 'rgba(255,255,255,0.4)', fontSize: 10, fontWeight: '800', letterSpacing: 2, marginTop: 2 },
  nfcBox: { padding: 4 },
  cardBody: { marginVertical: 10 },
  balLabel: { color: 'rgba(255,255,255,0.5)', fontSize: 10, fontWeight: '800', letterSpacing: 1 },
  balValue: { color: '#FFF', fontSize: 38, fontWeight: '700', marginTop: 4 },
  balCurrency: { fontSize: 16, color: 'rgba(255,255,255,0.6)', fontWeight: '400' },
  cardFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' },
  footerLabel: { color: 'rgba(255,255,255,0.3)', fontSize: 9, fontWeight: '800', letterSpacing: 1 },
  footerVal: { color: '#FFF', fontSize: 14, fontWeight: '600', marginTop: 2, letterSpacing: 1 },
  chip: { 
    width: 44, 
    height: 32, 
    borderRadius: 6, 
    backgroundColor: '#FACC15',
    opacity: 0.9,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)'
  },
  actionsRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 32,
    paddingHorizontal: 4
  },
  actionBtn: { alignItems: 'center' },
  actionIcon: { 
    width: 56, 
    height: 56, 
    borderRadius: 20, 
    alignItems: 'center', 
    justifyContent: 'center',
    marginBottom: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5
  },
  actionLabel: { fontSize: 12, fontWeight: '700', color: '#64748B' },
  insightsCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: 24,
    padding: 20,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  insightHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  insightTitle: { fontSize: 14, fontWeight: '700', color: '#1E293B' },
  insightVal: { fontSize: 14, fontWeight: '800', color: '#EF4444' },
  insightBarContainer: { height: 8, backgroundColor: '#E2E8F0', borderRadius: 4, overflow: 'hidden' },
  insightBar: { height: '100%', backgroundColor: '#2563EB', borderRadius: 4 },
  insightNote: { fontSize: 11, color: '#64748B', marginTop: 12, fontWeight: '500' },
  section: { marginBottom: 32 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  sectionTitle: { fontSize: 20, fontWeight: '800', color: '#1E293B' },
  viewAll: { fontSize: 13, fontWeight: '700', color: '#2563EB' },
  topUpGrid: { flexDirection: 'row', gap: 10, marginBottom: 16 },
  amtOption: { 
    flex: 1, 
    height: 52, 
    borderRadius: 14, 
    borderWidth: 1.5, 
    borderColor: '#E2E8F0', 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },
  amtOptionActive: { backgroundColor: '#2563EB', borderColor: '#2563EB' },
  amtText: { fontSize: 15, fontWeight: '800', color: '#1E293B' },
  amtTextActive: { color: '#FFF' },
  primaryAction: { 
    backgroundColor: '#222', 
    height: 60, 
    borderRadius: 18, 
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10
  },
  primaryActionText: { color: '#FFF', fontSize: 17, fontWeight: '800' },
  historyList: { gap: 12 },
  transaction: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 14, 
    borderRadius: 20,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#F1F5F9'
  },
  tIcon: { 
    width: 48, 
    height: 48, 
    borderRadius: 14, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  tText: { flex: 1, marginLeft: 16 },
  tTitle: { fontSize: 15, fontWeight: '700', color: '#1E293B' },
  tDate: { fontSize: 12, color: '#94A3B8', marginTop: 2, fontWeight: '500' },
  tAmountCol: { alignItems: 'flex-end' },
  tAmount: { fontSize: 16, fontWeight: '800', color: '#1E293B' },
  tStatus: { fontSize: 10, fontWeight: '700', color: '#94A3B8', marginTop: 2, textTransform: 'uppercase' }
});

export default CardDetailsScreen;

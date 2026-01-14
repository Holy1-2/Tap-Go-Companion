
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { BackIcon, RewardIcon, UserIcon, BusIcon } from './icons';

interface Reward {
  id: string;
  name: string;
  cost: number;
  unlocked: boolean;
  level: 'Bronze' | 'Silver' | 'Gold';
  icon: string;
}

interface Props {
  onBack: () => void;
}

const RewardsScreen: React.FC<Props> = ({ onBack }) => {
  const rewards: Reward[] = [
    { id: '1', name: 'Free Daily Pass', cost: 500, unlocked: true, level: 'Bronze', icon: '🎟️' },
    { id: '2', name: 'Premium Bus Wi-Fi', cost: 1200, unlocked: true, level: 'Silver', icon: '📶' },
    { id: '3', name: 'VIP Lounge Access', cost: 5000, unlocked: false, level: 'Gold', icon: '🛋️' },
    { id: '4', name: 'Airport Shuttle Pass', cost: 8000, unlocked: false, level: 'Gold', icon: '✈️' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backBtn}>
           <BackIcon size={20} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Eco Rewards</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Progress Header */}
        <View style={styles.levelCard}>
           <View style={styles.levelHeader}>
              <View>
                 <Text style={styles.levelLabel}>CURRENT LEVEL</Text>
                 <Text style={styles.levelName}>Silver Explorer</Text>
              </View>
              <View style={styles.pointsBadge}>
                 <Text style={styles.pointsValue}>1,240</Text>
                 <Text style={styles.pointsLabel}>PTS</Text>
              </View>
           </View>

           <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                 <View style={[styles.progressFill, { width: '45%' }]} />
              </View>
              <View style={styles.levelMarkers}>
                 <Text style={styles.markerText}>Bronze</Text>
                 <Text style={styles.markerTextActive}>Silver</Text>
                 <Text style={styles.markerText}>Gold</Text>
              </View>
           </View>
           
           <Text style={styles.levelHint}>Earn 760 more points to reach Gold status!</Text>
        </View>

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
           <View style={styles.statBox}>
              <View style={[styles.statIcon, { backgroundColor: '#F0FDF4' }]}>
                 <BusIcon size={18} color="#16A34A" />
              </View>
              <Text style={styles.statVal}>48</Text>
              <Text style={styles.statName}>Trips</Text>
           </View>
           <View style={styles.statBox}>
              <View style={[styles.statIcon, { backgroundColor: '#EFF6FF' }]}>
                 <RewardIcon size={18} color="#2563EB" />
              </View>
              <Text style={styles.statVal}>12.4kg</Text>
              <Text style={styles.statName}>CO2 Saved</Text>
           </View>
        </View>

        <Text style={styles.sectionHeading}>Unlocked Rewards</Text>
        <View style={styles.rewardList}>
          {rewards.map(reward => (
            <TouchableOpacity 
              key={reward.id} 
              style={[styles.rewardItem, !reward.unlocked && styles.rewardLocked]}
              disabled={!reward.unlocked}
            >
               <View style={styles.rewardIconContainer}>
                  {!reward.unlocked ? (
                    <View style={styles.lockIcon}>
                       <Text style={{ fontSize: 16 }}>🔒</Text>
                    </View>
                  ) : (
                    <Text style={{ fontSize: 24 }}>{reward.icon}</Text>
                  )}
               </View>
               <View style={styles.rewardMeta}>
                  <View style={styles.rewardHeader}>
                    <Text style={[styles.rewardTitle, !reward.unlocked && styles.lockedText]}>{reward.name}</Text>
                    <View style={[styles.badge, styles[`badge${reward.level}`]]}>
                       <Text style={styles.badgeText}>{reward.level}</Text>
                    </View>
                  </View>
                  <Text style={styles.rewardCost}>{reward.cost} Points</Text>
               </View>
               {reward.unlocked && (
                 <TouchableOpacity style={styles.redeemBtn}>
                    <Text style={styles.redeemText}>Redeem</Text>
                 </TouchableOpacity>
               )}
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.footerInfo}>
           <Text style={styles.footerTitle}>How to earn points?</Text>
           <Text style={styles.footerDesc}>Earn 10 points for every journey, +5 for off-peak travel, and +50 for weekly streaks!</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: { paddingTop: 60, paddingHorizontal: 24, flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  backBtn: { width: 44, height: 44, borderRadius: 14, backgroundColor: '#F8FAFC', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#E2E8F0' },
  headerTitle: { flex: 1, textAlign: 'center', marginRight: 44, fontSize: 18, fontWeight: '800', color: '#0F172A' },
  scrollContent: { paddingHorizontal: 24, paddingBottom: 120 },
  levelCard: { 
    backgroundColor: '#0F172A', 
    borderRadius: 28, 
    padding: 24, 
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 10 }
  },
  levelHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  levelLabel: { color: 'rgba(255,255,255,0.4)', fontSize: 10, fontWeight: '800', letterSpacing: 1.5 },
  levelName: { color: '#FFF', fontSize: 24, fontWeight: '700', marginTop: 4 },
  pointsBadge: { backgroundColor: 'rgba(255,255,255,0.1)', paddingHorizontal: 16, paddingVertical: 10, borderRadius: 16, alignItems: 'center' },
  pointsValue: { color: '#FFF', fontSize: 18, fontWeight: '900' },
  pointsLabel: { color: '#2563EB', fontSize: 10, fontWeight: '800', marginTop: 2 },
  progressContainer: { marginBottom: 16 },
  progressBar: { height: 8, backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 4, overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: '#2563EB', borderRadius: 4 },
  levelMarkers: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 },
  markerText: { color: 'rgba(255,255,255,0.4)', fontSize: 11, fontWeight: '700' },
  markerTextActive: { color: '#FFF', fontSize: 11, fontWeight: '800' },
  levelHint: { color: 'rgba(255,255,255,0.5)', fontSize: 12, fontWeight: '500', fontStyle: 'italic' },
  statsGrid: { flexDirection: 'row', gap: 16, marginBottom: 32 },
  statBox: { flex: 1, backgroundColor: '#F8FAFC', padding: 20, borderRadius: 24, borderWidth: 1, borderColor: '#E2E8F0' },
  statIcon: { width: 36, height: 36, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginBottom: 12 },
  statVal: { fontSize: 20, fontWeight: '800', color: '#0F172A' },
  statName: { fontSize: 12, color: '#64748B', fontWeight: '600', marginTop: 2 },
  sectionHeading: { fontSize: 20, fontWeight: '800', color: '#0F172A', marginBottom: 20 },
  rewardList: { gap: 12 },
  rewardItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', padding: 16, borderRadius: 20, borderWidth: 1, borderColor: '#E2E8F0' },
  rewardLocked: { backgroundColor: '#F8FAFC', borderColor: '#F1F5F9', opacity: 0.7 },
  rewardIconContainer: { width: 56, height: 56, borderRadius: 14, backgroundColor: '#F1F5F9', alignItems: 'center', justifyContent: 'center' },
  lockIcon: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#E2E8F0', alignItems: 'center', justifyContent: 'center' },
  rewardMeta: { flex: 1, marginLeft: 16 },
  rewardHeader: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  rewardTitle: { fontSize: 16, fontWeight: '700', color: '#0F172A' },
  lockedText: { color: '#94A3B8' },
  rewardCost: { fontSize: 13, color: '#64748B', marginTop: 4, fontWeight: '600' },
  badge: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 6 },
  badgeBronze: { backgroundColor: '#FFF7ED' },
  badgeSilver: { backgroundColor: '#EFF6FF' },
  badgeGold: { backgroundColor: '#FEFCE8' },
  badgeText: { fontSize: 10, fontWeight: '800', color: '#64748B' },
  redeemBtn: { backgroundColor: '#0F172A', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 10 },
  redeemText: { color: '#FFF', fontSize: 12, fontWeight: '700' },
  footerInfo: { marginTop: 32, padding: 24, backgroundColor: '#F8FAFC', borderRadius: 24, borderWidth: 1, borderColor: '#E2E8F0' },
  footerTitle: { fontSize: 15, fontWeight: '700', color: '#0F172A', marginBottom: 8 },
  footerDesc: { fontSize: 13, color: '#64748B', lineHeight: 20, fontWeight: '500' }
});

export default RewardsScreen;


import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

interface Props {
  onBack: () => void;
}

const NotificationsScreen: React.FC<Props> = ({ onBack }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={onBack}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Updates</Text>
        <TouchableOpacity><Text style={styles.clear}>Clear All</Text></TouchableOpacity>
      </View>

      <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
        <View style={[styles.notif, styles.unread]}>
          <View style={styles.dot} />
          <View style={styles.content}>
             <Text style={styles.nTitle}>Route 208 Delay</Text>
             <Text style={styles.nDesc}>Expect a 5-minute delay on Route 208 due to construction at Remera.</Text>
             <Text style={styles.nTime}>2 mins ago</Text>
          </View>
        </View>

        <View style={styles.notif}>
          <View style={styles.content}>
             <Text style={styles.nTitle}>Balance Low</Text>
             <Text style={styles.nDesc}>Your Access balance is below 1,000 RWF. Top up now to avoid interruptions.</Text>
             <Text style={styles.nTime}>1 hour ago</Text>
          </View>
        </View>

        <View style={styles.notif}>
          <View style={styles.content}>
             <Text style={styles.nTitle}>Successful Top-Up</Text>
             <Text style={styles.nDesc}>Successfully added 5,000 RWF to your account via Mobile Money.</Text>
             <Text style={styles.nTime}>Yesterday</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  header: { paddingTop: 60, paddingHorizontal: 24, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  backBtn: { width: 44, height: 44, borderRadius: 12, backgroundColor: '#F8FAFC', alignItems: 'center', justifyContent: 'center' },
  backArrow: { fontSize: 24, color: '#0F172A' },
  title: { fontSize: 22, fontWeight: '900', color: '#0F172A' },
  clear: { color: '#FF6600', fontWeight: '800', fontSize: 13 },
  list: { paddingHorizontal: 24 },
  notif: { padding: 20, backgroundColor: '#F8FAFC', borderRadius: 24, marginBottom: 12, flexDirection: 'row' },
  unread: { backgroundColor: '#F1F5F9', borderLeftWidth: 4, borderLeftColor: '#FF6600' },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#FF6600', marginTop: 6, marginRight: 12 },
  content: { flex: 1 },
  nTitle: { fontSize: 16, fontWeight: '800', color: '#0F172A' },
  nDesc: { fontSize: 13, color: '#64748B', marginTop: 4, lineHeight: 18, fontWeight: '500' },
  nTime: { fontSize: 10, color: '#94A3B8', fontWeight: '800', textTransform: 'uppercase', marginTop: 10 }
});

export default NotificationsScreen;

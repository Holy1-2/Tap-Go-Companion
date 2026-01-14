
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

interface Props {
  onNavigate: () => void;
}

const FeedbackScreen: React.FC<Props> = ({ onNavigate }) => {
  const [rating, setRating] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
         <View style={styles.checkRing}>
            <Text style={styles.checkMark}>✓</Text>
         </View>
         <Text style={styles.hTitle}>Journey Complete</Text>
         <Text style={styles.hSubtitle}>You saved 1.2kg of CO2 today! 🌿</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.qText}>How was Route 208?</Text>
        <View style={styles.starRow}>
          {[1, 2, 3, 4, 5].map((s) => (
            <TouchableOpacity key={s} onPress={() => setRating(s)}>
              <Text style={[styles.star, rating >= s && styles.starFilled]}>
                {rating >= s ? '★' : '☆'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>ANY SPECIFIC FEEDBACK?</Text>
        <View style={styles.chipGrid}>
           <TouchableOpacity style={[styles.chip, styles.chipActive]}><Text style={styles.chipTextActive}>Punctual</Text></TouchableOpacity>
           <TouchableOpacity style={styles.chip}><Text style={styles.chipText}>Clean Bus</Text></TouchableOpacity>
           <TouchableOpacity style={styles.chip}><Text style={styles.chipText}>Safe Driver</Text></TouchableOpacity>
           <TouchableOpacity style={styles.chip}><Text style={styles.chipText}>App Ease</Text></TouchableOpacity>
        </View>

        <TextInput 
          style={styles.input}
          placeholder="Something else to share?"
          multiline
          placeholderTextColor="#94A3B8"
        />

        <TouchableOpacity style={styles.doneBtn} onPress={onNavigate}>
           <Text style={styles.doneText}>Submit & Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: {
    backgroundColor: '#EFF6FF',
    paddingTop: 80,
    paddingBottom: 40,
    alignItems: 'center',
    borderBottomLeftRadius: 44,
    borderBottomRightRadius: 44,
  },
  checkRing: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#10B981',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: '#10B981',
    shadowOpacity: 0.2,
    shadowRadius: 15,
  },
  checkMark: { color: '#FFFFFF', fontSize: 36, fontWeight: '900' },
  hTitle: { fontSize: 26, fontWeight: '900', color: '#1E3A8A' },
  hSubtitle: { fontSize: 14, color: '#10B981', fontWeight: '800', marginTop: 8 },
  body: { padding: 32, flex: 1 },
  qText: { fontSize: 18, fontWeight: '800', color: '#1E3A8A', textAlign: 'center', marginTop: 20 },
  starRow: { flexDirection: 'row', justifyContent: 'center', marginVertical: 24 },
  star: { fontSize: 44, color: '#E2E8F0', marginHorizontal: 4 },
  starFilled: { color: '#FFB800' },
  label: { fontSize: 10, fontWeight: '900', color: '#94A3B8', letterSpacing: 2, marginBottom: 16 },
  chipGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 32 },
  chip: { paddingHorizontal: 16, paddingVertical: 10, borderRadius: 14, backgroundColor: '#F1F5F9' },
  chipActive: { backgroundColor: '#2563EB' },
  chipText: { fontSize: 13, color: '#64748B', fontWeight: '700' },
  chipTextActive: { color: '#FFFFFF', fontWeight: '800' },
  input: {
    backgroundColor: '#F8FAFC',
    borderRadius: 24,
    padding: 20,
    height: 120,
    textAlignVertical: 'top',
    fontSize: 15,
    color: '#1E3A8A',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
  },
  doneBtn: {
    backgroundColor: '#2563EB',
    height: 64,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    shadowColor: '#2563EB',
    shadowOpacity: 0.3,
    shadowRadius: 15,
  },
  doneText: { color: '#FFFFFF', fontSize: 18, fontWeight: '900' }
});

export default FeedbackScreen;

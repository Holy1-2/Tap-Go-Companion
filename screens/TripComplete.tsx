
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

interface Props {
  onNavigate: () => void;
}

const TripCompleteScreen: React.FC<Props> = ({ onNavigate }) => {
  const [rating, setRating] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.successHeader}>
         <View style={styles.successIcon}>
           <Text style={styles.check}>✓</Text>
         </View>
         <Text style={styles.title}>Trip Finished!</Text>
         <Text style={styles.subtitle}>Route 208 • Kanombe Stop</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.rateTitle}>Rate your experience</Text>
        <View style={styles.stars}>
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity key={star} onPress={() => setRating(star)}>
              <Text style={[styles.starIcon, rating >= star && styles.starActive]}>
                {rating >= star ? '★' : '☆'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.tagsTitle}>What stood out?</Text>
        <View style={styles.tagContainer}>
           <TouchableOpacity style={[styles.tag, styles.tagActive]}>
             <Text style={styles.tagTextActive}>Clean Bus</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.tag}>
             <Text style={styles.tagText}>On Time</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.tag}>
             <Text style={styles.tagText}>Friendly Driver</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.tag}>
             <Text style={styles.tagText}>Safe Driving</Text>
           </TouchableOpacity>
        </View>

        <TextInput 
          style={styles.commentInput}
          placeholder="Write a message (optional)"
          multiline
          placeholderTextColor="#94A3B8"
        />

        <TouchableOpacity style={styles.submitBtn} onPress={onNavigate}>
           <Text style={styles.submitText}>Complete Feedback</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.skipBtn} onPress={onNavigate}>
           <Text style={styles.skipText}>Maybe later</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  successHeader: {
    backgroundColor: '#F8FAFC',
    paddingTop: 60,
    paddingBottom: 40,
    alignItems: 'center',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  successIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#4ADE80',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  check: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    color: '#003366',
  },
  subtitle: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 4,
    fontWeight: '600',
  },
  content: {
    padding: 24,
    flex: 1,
  },
  rateTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#003366',
    textAlign: 'center',
    marginTop: 20,
  },
  stars: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
  },
  starIcon: {
    fontSize: 40,
    marginHorizontal: 4,
    color: '#CBD5E1',
  },
  starActive: {
    color: '#FFB800',
  },
  tagsTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#64748B',
    marginBottom: 12,
    marginTop: 10,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 24,
  },
  tag: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: '#F1F5F9',
  },
  tagActive: {
    backgroundColor: '#003366',
  },
  tagText: {
    fontSize: 13,
    color: '#64748B',
    fontWeight: '600',
  },
  tagTextActive: {
    fontSize: 13,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  commentInput: {
    backgroundColor: '#F8FAFC',
    borderRadius: 16,
    padding: 16,
    height: 100,
    fontSize: 14,
    color: '#003366',
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  submitBtn: {
    backgroundColor: '#FF6600',
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    shadowColor: '#FF6600',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  submitText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  skipBtn: {
    alignItems: 'center',
    marginTop: 16,
  },
  skipText: {
    color: '#94A3B8',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default TripCompleteScreen;

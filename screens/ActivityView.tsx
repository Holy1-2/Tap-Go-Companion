import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MOCK_HISTORY } from '../theme/constants';

export const ActivityView: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Activity</Text>
        
        <View style={styles.historyList}>
          {MOCK_HISTORY.map((trip) => (
            <View key={trip.id} style={styles.tripCard}>
              <View style={styles.tripIconContainer}>
                <Icon name="clock-outline" size={24} color="#000" />
              </View>
              <View style={styles.tripDetails}>
                <View style={styles.tripHeader}>
                  <Text style={styles.tripDestination}>{trip.to}</Text>
                  <Text style={styles.tripFare}>{trip.fare} RWF</Text>
                </View>
                <Text style={styles.tripDate}>{trip.date}</Text>
                {trip.rating && (
                  <View style={styles.ratingContainer}>
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="star"
                        size={16}
                        color={i < trip.rating! ? '#000' : '#E5E7EB'}
                        style={styles.starIcon}
                      />
                    ))}
                  </View>
                )}
              </View>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.viewMoreButton}>
          <Text style={styles.viewMoreText}>View past 3 months</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollView: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Inter-Bold',
    color: '#000',
    marginBottom: 32,
  },
  historyList: {
    gap: 24,
  },
  tripCard: {
    flexDirection: 'row',
    gap: 16,
  },
  tripIconContainer: {
    backgroundColor: '#F3F4F6',
    padding: 12,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  tripDetails: {
    flex: 1,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  tripHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  tripDestination: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#000',
  },
  tripFare: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: '#111827',
  },
  tripDate: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#6B7280',
    marginTop: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  starIcon: {
    marginRight: 2,
  },
  viewMoreButton: {
    marginTop: 32,
    alignItems: 'center',
  },
  viewMoreText: {
    fontSize: 14,
    fontFamily: 'Inter-Bold',
    color: '#9CA3AF',
    textDecorationLine: 'underline',
    textDecorationColor: '#E5E7EB',
  },
});

import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Route as RouteType } from '../theme/types';
import {
  
  SafeAreaView,
} from 'react-native';
interface TripModeViewProps {
  route: RouteType;
  onFinish: () => void;
}

export const TripModeView: React.FC<TripModeViewProps> = ({ route, onFinish }) => {
  const [status, setStatus] = useState<'correct' | 'approaching' | 'missed'>('correct');
  const [currentStopIndex, setCurrentStopIndex] = useState(0);
  const pulseAnim = new Animated.Value(1);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, { toValue: 1.2, duration: 1000, useNativeDriver: true }),
        Animated.timing(pulseAnim, { toValue: 1, duration: 1000, useNativeDriver: true }),
      ])
    ).start();

    const timer = setInterval(() => {
       if (currentStopIndex < route.stops.length - 1) {
         setCurrentStopIndex(prev => prev + 1);
         if (currentStopIndex === route.stops.length - 2) {
           setStatus('approaching');
         }
       }
    }, 4000);
    return () => clearInterval(timer);
  }, [currentStopIndex, route.stops.length]);

  const statusColors = {
    correct: '#10B981',
    approaching: '#F59E0B',
    missed: '#EF4444',
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>On Your Way</Text>
          <Text style={styles.headerSubtitle}>Bus Line {route.lineNumber}</Text>
        </View>
        <View style={[styles.statusIndicator, { borderColor: statusColors[status] }]}>
           <Animated.View style={[styles.statusPing, { backgroundColor: statusColors[status], transform: [{ scale: pulseAnim }] }]} />
        </View>
      </View>

      <View style={styles.main}>
        <View style={[styles.massiveRing, { borderColor: statusColors[status] }]}>
           <Text style={styles.massiveRingLabel}>Trip Status</Text>
           <Text style={styles.massiveRingValue}>
             {status === 'correct' ? 'ON TRACK' : status === 'approaching' ? 'NEARBY' : 'PASSED'}
           </Text>
        </View>

        <View style={styles.nextStop}>
          <Text style={styles.nextStopLabel}>Next Stop</Text>
          <Text style={styles.nextStopName}>
             {currentStopIndex < route.stops.length - 1 ? route.stops[currentStopIndex + 1] : 'Destination Reached'}
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.statsRow}>
          <View>
            <Text style={styles.statLabel}>Est. Arrival</Text>
            <Text style={styles.statValue}>10:45 AM</Text>
          </View>
          <View style={styles.statDivider} />
          <View>
            <Text style={styles.statLabel}>Duration</Text>
            <Text style={styles.statValue}>12 min</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.endBtn} onPress={onFinish}>
           <Text style={styles.endBtnText}>End Journey</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 32,
  },
  header: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 40,
    fontWeight: '900',
    color: '#FFF',
    letterSpacing: -1.5,
  },
  headerSubtitle: {
    fontSize: 12,
    fontWeight: '900',
    color: '#6B7280',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginTop: 4,
  },
  statusIndicator: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusPing: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
  },
  massiveRing: {
    width: 280,
    height: 280,
    borderRadius: 140,
    borderWidth: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.03)',
  },
  massiveRingLabel: {
    fontSize: 10,
    fontWeight: '900',
    color: '#6B7280',
    textTransform: 'uppercase',
    letterSpacing: 4,
  },
  massiveRingValue: {
    fontSize: 48,
    fontWeight: '900',
    color: '#FFF',
    marginTop: 12,
    letterSpacing: -1,
  },
  nextStop: {
    alignItems: 'center',
  },
  nextStopLabel: {
    fontSize: 11,
    fontWeight: '900',
    color: '#6B7280',
    textTransform: 'uppercase',
    letterSpacing: 3,
  },
  nextStopName: {
    fontSize: 32,
    fontWeight: '900',
    color: '#FFF',
    marginTop: 8,
    letterSpacing: -0.5,
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#18181B',
    borderRadius: 40,
    padding: 32,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  statLabel: {
    fontSize: 10,
    fontWeight: '900',
    color: '#6B7280',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  statValue: {
    fontSize: 24,
    fontWeight: '900',
    color: '#FFF',
    marginTop: 4,
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  endBtn: {
    backgroundColor: '#FFF',
    height: 64,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  endBtnText: {
    fontSize: 18,
    fontWeight: '900',
    color: '#000',
  },
});

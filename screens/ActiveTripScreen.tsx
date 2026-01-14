
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated, Dimensions, Easing } from 'react-native';
import { BusIcon, PlayIcon, PauseIcon, MusicIcon, ChevronRight } from './icons';

const { width, height } = Dimensions.get('window');

interface Props {
  onNavigate: () => void;
  onError: () => void;
}

const ActiveTripScreen: React.FC<Props> = ({ onNavigate, onError }) => {
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [reached, setReached] = useState(false);
  
  const moveAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Simulate Trip Progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setReached(true);
          return 100;
        }
        return prev + 1;
      });
    }, 400); // 40 seconds trip simulation
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    Animated.timing(moveAnim, {
      toValue: progress,
      duration: 400,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, { toValue: 1.2, duration: 1000, useNativeDriver: true }),
        Animated.timing(pulseAnim, { toValue: 1, duration: 1000, useNativeDriver: true }),
      ])
    ).start();
    
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const getThemeColor = () => {
    if (progress < 30) return '#00D1FF'; // Early: Cyan
    if (progress < 80) return '#2563EB'; // Middle: Blue
    return '#FF385C'; // End: Rose
  };

  const themeColor = getThemeColor();

  const translateX = moveAnim.interpolate({
    inputRange: [0, 100],
    outputRange: [0, width * 0.7],
  });

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      {/* Black Modern Map Area */}
      <View style={styles.mapContainer}>
        <View style={styles.mapBackground}>
          <svg width="100%" height="100%" viewBox="0 0 400 600" preserveAspectRatio="none">
            {/* Grid */}
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1E293B" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Main Path */}
            <path 
              d="M 50 100 Q 200 150 200 300 T 350 500" 
              stroke="#1E293B" 
              strokeWidth="12" 
              fill="none" 
              strokeLinecap="round" 
            />
            <path 
              d="M 50 100 Q 200 150 200 300 T 350 500" 
              stroke={themeColor} 
              strokeWidth="4" 
              fill="none" 
              strokeLinecap="round" 
              strokeDasharray="400"
              strokeDashoffset={400 - (progress * 4)}
              opacity="0.8"
            />
            
            {/* Dots */}
            <circle cx="50" cy="100" r="6" fill="#FFF" />
            <circle cx="350" cy="500" r="10" stroke={themeColor} strokeWidth="2" fill="none" />
            <circle cx="350" cy="500" r="4" fill={themeColor} />
          </svg>
        </View>

        {/* Floating Header */}
        <View style={styles.floatingHeader}>
           <View style={[styles.statusTag, { backgroundColor: themeColor + '20', borderColor: themeColor }]}>
              <View style={[styles.pulseDot, { backgroundColor: themeColor }]} />
              <Text style={[styles.statusText, { color: themeColor }]}>
                {reached ? 'ARRIVED' : progress < 30 ? 'WAITING' : 'ON ROUTE'}
              </Text>
           </View>
           <TouchableOpacity onPress={onError} style={styles.tripIdBox}>
              <Text style={styles.tripIdText}>#208-R</Text>
           </TouchableOpacity>
        </View>

        {/* Bus Marker (Animated) */}
        <Animated.View 
          style={[
            styles.busMarker, 
            { 
              left: moveAnim.interpolate({ inputRange: [0, 100], outputRange: [50, 350] }),
              top: moveAnim.interpolate({ inputRange: [0, 100], outputRange: [100, 500] }),
              transform: [{ scale: pulseAnim }] 
            }
          ]}
        >
          <View style={[styles.busGlow, { backgroundColor: themeColor }]} />
          <View style={styles.busIconContainer}>
             <BusIcon size={20} color="#000" />
          </View>
        </Animated.View>
      </View>

      {/* Modern Control Panel */}
      <View style={styles.controlPanel}>
        <View style={styles.handle} />
        
        <View style={styles.tripInfo}>
          <View>
            <Text style={styles.label}>NEXT STOP</Text>
            <Text style={styles.mainInfo}>{reached ? 'Kanombe Airport' : 'Remera Terminal'}</Text>
          </View>
          <View style={styles.etaBox}>
            <Text style={styles.etaValue}>{reached ? '0' : Math.max(1, 10 - Math.floor(progress/10))}</Text>
            <Text style={styles.etaUnit}>MIN</Text>
          </View>
        </View>

        <View style={styles.progressContainer}>
           <View style={styles.progressBarBg}>
              <Animated.View style={[styles.progressBarFill, { width: `${progress}%`, backgroundColor: themeColor }]} />
           </View>
           <View style={styles.progressLabels}>
              <Text style={styles.progressText}>08:45 AM</Text>
              <Text style={styles.progressText}>09:05 AM</Text>
           </View>
        </View>

        {/* Music Player Mini */}
        <View style={styles.musicPlayer}>
           <View style={styles.musicInfo}>
              <View style={styles.musicIconBox}>
                 <MusicIcon size={20} color={themeColor} />
              </View>
              <View style={{ flex: 1 }}>
                 <Text style={styles.trackName}>Kigali Summer Vibes</Text>
                 <Text style={styles.artistName}>Meddy • Commute Mix</Text>
              </View>
           </View>
           <TouchableOpacity onPress={() => setIsPlaying(!isPlaying)} style={styles.playBtn}>
              {isPlaying ? <PauseIcon size={20} color="#FFF" /> : <PlayIcon size={20} color="#FFF" />}
           </TouchableOpacity>
        </View>

        {/* Contextual Action Button */}
        {reached ? (
          <TouchableOpacity style={[styles.confirmBtn, { backgroundColor: themeColor }]} onPress={onNavigate}>
             <Text style={styles.confirmBtnText}>Complete Journey</Text>
             <ChevronRight size={20} color="#FFF" />
          </TouchableOpacity>
        ) : (
          <View style={styles.secondaryActions}>
             <TouchableOpacity style={styles.secAction}>
                <Text style={styles.secActionText}>Change Route</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.secAction}>
                <Text style={styles.secActionText}>Live Chat</Text>
             </TouchableOpacity>
          </View>
        )}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  mapContainer: { flex: 1.2, position: 'relative', overflow: 'hidden' },
  mapBackground: { ...StyleSheet.absoluteFillObject },
  floatingHeader: {
    position: 'absolute',
    top: 60,
    left: 24,
    right: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 10,
  },
  statusTag: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 100,
    borderWidth: 1,
  },
  pulseDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 8,
  },
  statusText: {
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1,
  },
  tripIdBox: {
    backgroundColor: '#1E293B',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
  },
  tripIdText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '700',
  },
  busMarker: {
    position: 'absolute',
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -16,
    marginTop: -16,
  },
  busGlow: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 16,
    opacity: 0.3,
  },
  busIconContainer: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  controlPanel: {
    flex: 1,
    backgroundColor: '#111111',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 32,
    paddingTop: 12,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 20,
    borderWidth: 1,
    borderColor: '#1E293B',
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: '#334155',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 32,
  },
  tripInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  label: {
    fontSize: 10,
    fontWeight: '900',
    color: '#64748B',
    letterSpacing: 1.5,
    marginBottom: 6,
  },
  mainInfo: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFF',
  },
  etaBox: {
    alignItems: 'flex-end',
  },
  etaValue: {
    fontSize: 32,
    fontWeight: '900',
    color: '#FFF',
    lineHeight: 32,
  },
  etaUnit: {
    fontSize: 10,
    fontWeight: '700',
    color: '#64748B',
    marginTop: 2,
  },
  progressContainer: {
    marginBottom: 40,
  },
  progressBarBg: {
    height: 6,
    backgroundColor: '#1E293B',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 3,
  },
  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  progressText: {
    fontSize: 11,
    color: '#475569',
    fontWeight: '600',
  },
  musicPlayer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    padding: 16,
    borderRadius: 24,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: '#334155',
  },
  musicInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  musicIconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  trackName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFF',
  },
  artistName: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },
  playBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
  confirmBtn: {
    height: 64,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  confirmBtnText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '800',
  },
  secondaryActions: {
    flexDirection: 'row',
    gap: 12,
  },
  secAction: {
    flex: 1,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#1E293B',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  secActionText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
  }
});

export default ActiveTripScreen;

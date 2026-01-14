
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

interface Props {
  onNavigate: () => void;
}

const WelcomeScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./../assets/images/access.png')} 
        style={styles.bgImage}
      />
      <View style={styles.overlay} />
      
      <View style={styles.content}>
        <View style={styles.topSection}>
     
          
        </View>

        <View style={styles.bottomSection}>
          <Text style={styles.title}>Travel across Rwanda with ease.</Text>
          <Text style={styles.subtitle}>Smart commute solutions for the modern explorer. Secure, live, and always on time.</Text>
          
          <TouchableOpacity 
            style={styles.primaryButton} 
            onPress={onNavigate}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Explore now</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton} onPress={onNavigate}>
            <Text style={styles.secondaryButtonText}>Already have an account? Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  bgImage: { ...StyleSheet.absoluteFillObject, width: '100%', height: '100%', opacity: 0.8 },
  // Fixed: 'background' is not a valid React Native style property; replaced with 'backgroundColor'.
  overlay: { 
    ...StyleSheet.absoluteFillObject, 
    backgroundColor: 'rgba(0,0,0,0.4)' 
  },
  content: { flex: 1, paddingHorizontal: 24, justifyContent: 'space-between', paddingBottom: 60, paddingTop: 80 },
  topSection: { alignItems: 'center' },
  logoBadge: { width: 60, height: 60, backgroundColor: '#FFF', borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  logoText: { fontSize: 18, fontWeight: '900', color: '#2563EB' },
  bottomSection: {},
  title: { fontSize: 44, fontWeight: '800', color: '#FFF', lineHeight: 52, letterSpacing: -1.5, marginBottom: 16 },
  subtitle: { fontSize: 17, color: 'rgba(255,255,255,0.8)', lineHeight: 26, fontWeight: '400', marginBottom: 40 },
  primaryButton: { 
    // Fixed: Removed duplicate 'backgroundColor' property to prevent object literal error.
    backgroundColor: '#2563EB',
    height: 56, 
    borderRadius: 12, 
    alignItems: 'center', 
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 }
  },
  buttonText: { color: '#FFF', fontSize: 18, fontWeight: '700' },
  secondaryButton: { marginTop: 20, alignItems: 'center' },
  secondaryButtonText: { color: '#FFF', fontSize: 14, fontWeight: '600', textDecorationLine: 'underline' }
});

export default WelcomeScreen;

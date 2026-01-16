
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { BackIcon } from './icons';

interface Props {
  onNavigate: () => void;
  onGoLogin: () => void;
}

const SignUpScreen: React.FC<Props> = ({ onNavigate, onGoLogin }) => {
  return (
    <View style={styles.container}>
      <View style={styles.graphicHeader}>
        <svg width="100%" height="220" viewBox="0 0 400 220" preserveAspectRatio="none">
          <defs>
            <linearGradient id="gradSignUp" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#2563EB', stopOpacity: 0.1 }} />
              <stop offset="100%" style={{ stopColor: '#FF385C', stopOpacity: 0.05 }} />
            </linearGradient>
          </defs>
          <path d="M0 0 C 150 100, 250 50, 400 150 L 400 0 L 0 0 Z" fill="url(#gradSignUp)" />
        </svg>
      </View>

      <View style={styles.headerRow}>
        <TouchableOpacity style={styles.backBtn} onPress={onGoLogin}>
          <BackIcon size={20} color="#222" />
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.flex}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.titleSection}>
            <Text style={styles.title}>Join Access Pro</Text>
            <Text style={styles.subtitle}>Start your smarter commute journey across Rwanda today.</Text>
          </View>

          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Full Name</Text>
              <TextInput style={styles.input} placeholder="Emery K." placeholderTextColor="#B0B0B0" />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email Address</Text>
              <TextInput 
                style={styles.input} 
                placeholder="emery@example.com" 
                keyboardType="email-address" 
                autoCapitalize="none" 
                placeholderTextColor="#B0B0B0" 
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Phone Number</Text>
              <View style={styles.phoneInputRow}>
                <View style={styles.countryBadge}><Text style={styles.countryCode}>+250</Text></View>
                <TextInput style={[styles.input, styles.flex]} placeholder="7XX XXX XXX" keyboardType="phone-pad" placeholderTextColor="#B0B0B0" />
              </View>
            </View>

            <TouchableOpacity style={styles.submitBtn} onPress={onNavigate} activeOpacity={0.8}>
              <Text style={styles.submitText}>Create Account</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.footerLink} onPress={onGoLogin}>
              <Text style={styles.footerText}>Already have an account? <Text style={styles.boldLink}>Log In</Text></Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  flex: { flex: 1 },
  graphicHeader: { position: 'absolute', top: 0, left: 0, right: 0, zIndex: 0 },
  headerRow: { paddingTop: 60, paddingHorizontal: 24, zIndex: 10 },
  backBtn: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#F0F0F0' },
  scrollContent: { paddingHorizontal: 24, paddingBottom: 40, paddingTop: 20 },
  titleSection: { marginBottom: 32 },
  title: { fontSize: 34, fontWeight: '800', color: '#0F172A', letterSpacing: -1, marginBottom: 12 },
  subtitle: { fontSize: 16, color: '#64748B', lineHeight: 24 },
  form: { gap: 20 },
  inputGroup: {},
  label: { fontSize: 13, fontWeight: '700', color: '#0F172A', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 10 },
  input: { height: 56, borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 14, paddingHorizontal: 16, fontSize: 16, color: '#222', backgroundColor: '#F8FAFC' },
  phoneInputRow: { flexDirection: 'row', gap: 12 },
  countryBadge: { height: 56, paddingHorizontal: 16, backgroundColor: '#F3F4F6', borderRadius: 14, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#E2E8F0' },
  countryCode: { fontSize: 16, fontWeight: '600', color: '#0F172A' },
  submitBtn: { backgroundColor: '#0F172A', height: 60, borderRadius: 16, alignItems: 'center', justifyContent: 'center', marginTop: 10 },
  submitText: { color: '#FFF', fontSize: 18, fontWeight: '700' },
  footerLink: { marginTop: 24, alignItems: 'center' },
  footerText: { fontSize: 14, color: '#64748B' },
  boldLink: { color: '#2563EB', fontWeight: '700', textDecorationLine: 'underline' }
});

export default SignUpScreen;

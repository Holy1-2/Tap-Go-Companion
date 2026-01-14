
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { MOCK_ROUTES } from '../theme/constants';
import { Route as RouteType } from '../theme/types';

interface SearchViewProps {
  query: { from: string; to: string };
  onBack: () => void;
  onSelectRoute: (route: RouteType) => void;
}

export const SearchView: React.FC<SearchViewProps> = ({ query, onBack, onSelectRoute }) => {
  const [from, setFrom] = useState(query || 'Current Location');
  const [to, setTo] = useState(query.to);

  return (
    <View style={styles.container}>
      {/* Header with Inputs */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backBtn}>
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
             <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
           </svg>
        </TouchableOpacity>

        <View style={styles.inputsWrapper}>
          <View style={styles.connector}>
            <View style={styles.dotTop} />
            <View style={styles.line} />
            <View style={styles.squareBottom} />
          </View>
          <View style={styles.inputs}>
            <TextInput 
              style={styles.input}
              value={from}
              onChangeText={setFrom}
              placeholder="From"
            />
            <TextInput 
              style={styles.input}
              value={to}
              onChangeText={setTo}
              placeholder="Where to?"
              autoFocus
            />
          </View>
        </View>
      </View>

      <ScrollView style={styles.results} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sectionTitle}>Suggested Routes</Text>
        {MOCK_ROUTES.map((route) => (
          <TouchableOpacity 
            key={route.id}
            style={styles.routeCard}
            onPress={() => onSelectRoute(route)}
            activeOpacity={0.8}
          >
            <View style={styles.routeRow}>
              <View style={styles.lineNumberBox}>
                <Text style={styles.lineNumberText}>{route.lineNumber}</Text>
              </View>
              <View style={styles.routeMainInfo}>
                <Text style={styles.routeName}>{route.name}</Text>
                <Text style={styles.routeStops}>{route.stops[0]} → {route.stops[route.stops.length-1]}</Text>
              </View>
              <View style={styles.routePriceInfo}>
                <Text style={styles.priceText}>{route.fare} RWF</Text>
                <View style={styles.statusBox}>
                  <View style={styles.greenDot} />
                  <Text style={styles.statusText}>Available</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  backBtn: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  inputsWrapper: {
    flexDirection: 'row',
    paddingLeft: 8,
  },
  connector: {
    width: 20,
    alignItems: 'center',
    paddingVertical: 14,
  },
  dotTop: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#9CA3AF',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  line: {
    flex: 1,
    width: 2,
    backgroundColor: '#E5E7EB',
    marginVertical: 4,
  },
  squareBottom: {
    width: 8,
    height: 8,
    backgroundColor: '#000',
    transform: [{ rotate: '45deg' }],
  },
  inputs: {
    flex: 1,
    gap: 12,
    marginLeft: 12,
  },
  input: {
    height: 44,
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 14,
    fontWeight: '700',
    color: '#1F2937',
  },
  results: {
    flex: 1,
  },
  scrollContent: {
    padding: 24,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: '900',
    color: '#9CA3AF',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 20,
  },
  routeCard: {
    marginBottom: 16,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 10,
  },
  routeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lineNumberBox: {
    backgroundColor: '#000',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    minWidth: 50,
    alignItems: 'center',
  },
  lineNumberText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
  },
  routeMainInfo: {
    flex: 1,
    marginLeft: 16,
  },
  routeName: {
    fontSize: 16,
    fontWeight: '900',
    color: '#000',
    letterSpacing: -0.4,
  },
  routeStops: {
    fontSize: 11,
    fontWeight: '500',
    color: '#9CA3AF',
    marginTop: 2,
  },
  routePriceInfo: {
    alignItems: 'flex-end',
  },
  priceText: {
    fontSize: 16,
    fontWeight: '900',
    color: '#000',
  },
  statusBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
  },
  greenDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#10B981',
  },
  statusText: {
    fontSize: 9,
    fontWeight: '900',
    color: '#10B981',
    textTransform: 'uppercase',
  },
});

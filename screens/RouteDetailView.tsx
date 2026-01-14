import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Route } from '../theme/types';

export const RouteDetailView: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { route: routeData } = route.params as { route: Route };
  const [selectedBus, setSelectedBus] = useState<string | null>(null);

  const handleStartTrip = () => {
    if (selectedBus) {
      navigation.navigate('TripMode', { 
        route: routeData,
        selectedBus: routeData.availableBuses.find(bus => bus.id === selectedBus)
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-left" size={24} color="#000" />
          </TouchableOpacity>
          <View style={styles.routeHeader}>
            <View style={styles.lineNumber}>
              <Text style={styles.lineNumberText}>{routeData.lineNumber}</Text>
            </View>
            <View>
              <Text style={styles.routeName}>{routeData.name}</Text>
              <Text style={styles.routeFare}>Fare: {routeData.fare} RWF</Text>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          {/* Available Buses Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Select Your Bus</Text>
              <Text style={styles.busCount}>{routeData.availableBuses.length} available</Text>
            </View>
            <View style={styles.busesList}>
              {routeData.availableBuses.map((bus) => (
                <TouchableOpacity
                  key={bus.id}
                  style={[
                    styles.busCard,
                    selectedBus === bus.id && styles.busCardSelected,
                  ]}
                  onPress={() => setSelectedBus(bus.id)}
                  activeOpacity={0.8}
                >
                  <View style={styles.busInfo}>
                    <View style={styles.busIconContainer}>
                      <Icon name="bus" size={24} color={selectedBus === bus.id ? '#FFF' : '#000'} />
                    </View>
                    <View>
                      <Text style={[
                        styles.busPlate,
                        selectedBus === bus.id && styles.busPlateSelected
                      ]}>
                        {bus.licensePlate}
                      </Text>
                      <View style={styles.busDetails}>
                        <View style={[
                          styles.statusBadge,
                          { backgroundColor: bus.status === 'Approaching' ? '#10B981' : '#F59E0B' }
                        ]}>
                          <Text style={styles.statusText}>{bus.status}</Text>
                        </View>
                        <Text style={[
                          styles.loadFactor,
                          selectedBus === bus.id && styles.loadFactorSelected
                        ]}>
                          • {bus.loadFactor} Load
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.busEta}>
                    <Text style={[
                      styles.etaTime,
                      selectedBus === bus.id && styles.etaTimeSelected
                    ]}>
                      {bus.estimatedArrival}
                    </Text>
                    <Text style={[
                      styles.etaLabel,
                      selectedBus === bus.id && styles.etaLabelSelected
                    ]}>
                      ETA
                    </Text>
                  </View>
                  {selectedBus === bus.id && (
                    <View style={styles.selectedIndicator}>
                      <Icon name="check-circle" size={20} color="#10B981" />
                    </View>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Route Information */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Route Information</Text>
            <View style={styles.infoCard}>
              <View style={styles.infoRow}>
                <Icon name="clock-outline" size={20} color="#6B7280" />
                <Text style={styles.infoLabel}>Total Duration</Text>
                <Text style={styles.infoValue}>45 min</Text>
              </View>
              <View style={styles.infoRow}>
                <Icon name="map-marker-distance" size={20} color="#6B7280" />
                <Text style={styles.infoLabel}>Distance</Text>
                <Text style={styles.infoValue}>12 km</Text>
              </View>
              <View style={styles.infoRow}>
                <Icon name="cash-multiple" size={20} color="#6B7280" />
                <Text style={styles.infoLabel}>Fare</Text>
                <Text style={styles.infoValue}>{routeData.fare} RWF</Text>
              </View>
            </View>
          </View>

          {/* Route Stops Visualization */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Route Stops</Text>
            <View style={styles.stopsContainer}>
              <View style={styles.stopsLine} />
              {routeData.stops.map((stop, index) => (
                <View key={stop} style={styles.stopItem}>
                  <View
                    style={[
                      styles.stopDot,
                      index === 0 ? styles.stopDotStart : 
                      index === routeData.stops.length - 1 ? styles.stopDotEnd :
                      styles.stopDotMid,
                    ]}
                  />
                  <View style={styles.stopContent}>
                    <Text style={[
                      styles.stopName,
                      index === 0 && styles.stopNameCurrent,
                    ]}>
                      {stop}
                    </Text>
                    {index < routeData.stops.length - 1 && (
                      <Text style={styles.stopDistance}>→ 3 km</Text>
                    )}
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.footerContent}>
          {selectedBus ? (
            <View style={styles.selectedBusInfo}>
              <Icon name="check-circle" size={16} color="#10B981" />
              <Text style={styles.selectedBusText}>
                Bus {routeData.availableBuses.find(b => b.id === selectedBus)?.licensePlate} selected
              </Text>
            </View>
          ) : (
            <Text style={styles.selectBusHint}>Select a bus to continue</Text>
          )}
          <TouchableOpacity
            style={[
              styles.confirmButton,
              !selectedBus && styles.confirmButtonDisabled,
            ]}
            onPress={handleStartTrip}
            activeOpacity={0.8}
            disabled={!selectedBus}
          >
            <Text style={styles.confirmButtonText}>
              {selectedBus ? 'Confirm & Start Trip' : 'Select a Bus'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 120,
  },
  header: {
    backgroundColor: '#FFF',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  backButton: {
    padding: 8,
    marginBottom: 16,
    alignSelf: 'flex-start',
  },
  routeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  lineNumber: {
    backgroundColor: '#000',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
  },
  lineNumberText: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#FFF',
  },
  routeName: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#000',
  },
  routeFare: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#6B7280',
    marginTop: 4,
  },
  content: {
    padding: 24,
    gap: 32,
  },
  section: {
    gap: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: 'Inter-Bold',
    color: '#000',
  },
  busCount: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#6B7280',
  },
  busesList: {
    gap: 12,
  },
  busCard: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  busCardSelected: {
    backgroundColor: '#000',
    borderColor: '#000',
  },
  busInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  busIconContainer: {
    padding: 8,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
  },
  busPlate: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: '#000',
  },
  busPlateSelected: {
    color: '#FFF',
  },
  busDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 4,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  statusText: {
    fontSize: 10,
    fontFamily: 'Inter-Bold',
    color: '#FFF',
  },
  loadFactor: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#6B7280',
  },
  loadFactorSelected: {
    color: '#D1D5DB',
  },
  busEta: {
    alignItems: 'flex-end',
  },
  etaTime: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#000',
  },
  etaTimeSelected: {
    color: '#FFF',
  },
  etaLabel: {
    fontSize: 10,
    fontFamily: 'Inter-Medium',
    color: '#9CA3AF',
    marginTop: 2,
  },
  etaLabelSelected: {
    color: '#D1D5DB',
  },
  selectedIndicator: {
    position: 'absolute',
    top: -8,
    right: -8,
  },
  infoCard: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    gap: 12,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  infoLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#6B7280',
    flex: 1,
  },
  infoValue: {
    fontSize: 14,
    fontFamily: 'Inter-Bold',
    color: '#000',
  },
  stopsContainer: {
    position: 'relative',
    paddingLeft: 32,
  },
  stopsLine: {
    position: 'absolute',
    left: 12,
    top: 0,
    bottom: 0,
    width: 2,
    backgroundColor: '#E5E7EB',
    borderRadius: 1,
  },
  stopItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 24,
    position: 'relative',
  },
  stopDot: {
    position: 'absolute',
    left: -24,
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: '#FFF',
  },
  stopDotStart: {
    backgroundColor: '#10B981',
  },
  stopDotMid: {
    backgroundColor: '#6B7280',
  },
  stopDotEnd: {
    backgroundColor: '#000',
  },
  stopContent: {
    flex: 1,
  },
  stopName: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#6B7280',
  },
  stopNameCurrent: {
    fontFamily: 'Inter-Bold',
    color: '#000',
  },
  stopDistance: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#9CA3AF',
    marginTop: 2,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 16,
  },
  footerContent: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  selectedBusInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 12,
  },
  selectedBusText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#059669',
  },
  selectBusHint: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 12,
  },
  confirmButton: {
    backgroundColor: '#000',
    padding: 18,
    borderRadius: 16,
    alignItems: 'center',
  },
  confirmButtonDisabled: {
    backgroundColor: '#E5E7EB',
  },
  confirmButtonText: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: '#FFF',
  },
});
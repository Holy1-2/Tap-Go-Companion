
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Modal } from 'react-native';
import { BackIcon, HomeIcon, WorkIcon, BusIcon, ChevronRight } from './icons';

interface Place {
  id: string;
  name: string;
  address: string;
  lat?: string;
  lng?: string;
  type: 'home' | 'work' | 'other';
}

interface Props {
  onBack: () => void;
}

const SavedPlacesScreen: React.FC<Props> = ({ onBack }) => {
  const [places, setPlaces] = useState<Place[]>([
    { id: '1', name: 'Home', address: 'KK 123 St, Kanombe, Kigali', type: 'home' },
    { id: '2', name: 'Work', address: 'KN 2 Ave, City Center', type: 'work' },
    { id: '3', name: 'Kimironko Market', address: 'Sector 4, Kimironko', type: 'other' },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [newName, setNewName] = useState('');
  const [newCoords, setNewCoords] = useState('');

  const handleAddPlace = () => {
    if (newName && newCoords) {
      setPlaces([
        ...places,
        { id: Date.now().toString(), name: newName, address: `Coords: ${newCoords}`, type: 'other' }
      ]);
      setNewName('');
      setNewCoords('');
      setModalVisible(false);
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'home': return <HomeIcon size={20} color="#2563EB" />;
      case 'work': return <WorkIcon size={20} color="#2563EB" />;
      default: return <BusIcon size={20} color="#2563EB" />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backBtn}>
           <BackIcon size={20} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Saved Places</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Manage Destinations</Text>
        <Text style={styles.subtitle}>Quickly access your most visited locations.</Text>

        <View style={styles.list}>
          {places.map((place) => (
            <TouchableOpacity key={place.id} style={styles.placeItem}>
               <View style={styles.iconContainer}>
                 {getIcon(place.type)}
               </View>
               <View style={styles.placeMeta}>
                  <Text style={styles.placeTitle}>{place.name}</Text>
                  <Text style={styles.placeSub} numberOfLines={1}>{place.address}</Text>
               </View>
               <ChevronRight size={18} color="#CBD5E1" />
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.addBtn} onPress={() => setModalVisible(true)}>
           <View style={styles.plusIcon}>
              <Text style={styles.plusText}>+</Text>
           </View>
           <Text style={styles.addText}>Add New Location</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
           <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Add Location</Text>
              <View style={styles.modalForm}>
                <TextInput 
                  placeholder="Location Name (e.g. Gym)" 
                  style={styles.modalInput} 
                  value={newName} 
                  onChangeText={setNewName}
                />
                <TextInput 
                  placeholder="Coordinates (Lat, Lng)" 
                  style={styles.modalInput} 
                  value={newCoords} 
                  onChangeText={setNewCoords}
                />
                <View style={styles.modalActions}>
                  <TouchableOpacity style={styles.cancelBtn} onPress={() => setModalVisible(false)}>
                    <Text style={styles.cancelText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.saveBtn} onPress={handleAddPlace}>
                    <Text style={styles.saveText}>Save Place</Text>
                  </TouchableOpacity>
                </View>
              </View>
           </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: { paddingTop: 60, paddingHorizontal: 24, flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  backBtn: { width: 44, height: 44, borderRadius: 14, backgroundColor: '#F8FAFC', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#E2E8F0' },
  headerTitle: { flex: 1, textAlign: 'center', marginRight: 44, fontSize: 18, fontWeight: '800', color: '#0F172A' },
  scrollContent: { paddingHorizontal: 24, paddingBottom: 120 },
  title: { fontSize: 28, fontWeight: '800', color: '#0F172A', marginBottom: 8 },
  subtitle: { fontSize: 15, color: '#64748B', marginBottom: 32 },
  list: { gap: 12 },
  placeItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 16, 
    borderRadius: 20, 
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0'
  },
  iconContainer: { 
    width: 44, 
    height: 44, 
    borderRadius: 12, 
    backgroundColor: '#FFF', 
    alignItems: 'center', 
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5
  },
  placeMeta: { flex: 1, marginLeft: 16 },
  placeTitle: { fontSize: 16, fontWeight: '700', color: '#0F172A' },
  placeSub: { fontSize: 13, color: '#94A3B8', marginTop: 2, fontWeight: '500' },
  addBtn: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 24, 
    padding: 20,
    borderRadius: 20,
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: '#E2E8F0',
    justifyContent: 'center'
  },
  plusIcon: { width: 28, height: 28, borderRadius: 14, backgroundColor: '#2563EB', alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  plusText: { color: '#FFF', fontSize: 18, fontWeight: '900' },
  addText: { fontSize: 16, fontWeight: '700', color: '#2563EB' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: '#FFF', borderTopLeftRadius: 32, borderTopRightRadius: 32, padding: 32 },
  modalTitle: { fontSize: 24, fontWeight: '800', color: '#0F172A', marginBottom: 24 },
  modalForm: { gap: 16 },
  modalInput: { height: 56, backgroundColor: '#F8FAFC', borderRadius: 16, paddingHorizontal: 16, borderWidth: 1, borderColor: '#E2E8F0', fontSize: 16 },
  modalActions: { flexDirection: 'row', gap: 12, marginTop: 12 },
  cancelBtn: { flex: 1, height: 56, alignItems: 'center', justifyContent: 'center' },
  cancelText: { fontSize: 16, fontWeight: '600', color: '#64748B' },
  saveBtn: { flex: 2, height: 56, backgroundColor: '#2563EB', borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  saveText: { color: '#FFF', fontSize: 16, fontWeight: '700' }
});

export default SavedPlacesScreen;

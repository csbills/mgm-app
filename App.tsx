import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  SafeAreaView
} from 'react-native';
import { EquipmentCard } from './src/components/EquipmentCard';
import { Footer } from './src/components/Footer';
import { Header } from './src/components/Header';

interface EquipmentProps {
  id: string,
  name: string,
  serialNumber: string,
}

export default function App() {
  const [equipments, setEquipments] = useState<EquipmentProps[]>([]);
  const [filteredEquipments, setFilteredEquipments] = useState<EquipmentProps[]>([]);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    setEquipments([
      ...equipments,
      {
        id: 'teste',
        name: 'Eagle C127',
        serialNumber: 'EA2700-BR10012',
      },

      {
        id: 'teste2',
        name: 'Medidor ORP',
        serialNumber: 'MO100-E10012S',
      },

      {
        id: 'teste3',
        name: 'Calibrador de tensão',
        serialNumber: 'CLT-2112S',
      },

      {
        id: 'teste3',
        name: 'Calibrador de tensão',
        serialNumber: 'CLT-2112S',
      },
    ])
  }, []);

/*   useEffect(() => {
    if (inputSearch === ""){
      setFilteredEquipments(equipments);
    }

    const results = equipments.filter((equipment) =>
      equipment.name.toLowerCase().includes(inputSearch)
    );

    setFilteredEquipments(results);
  }, [inputSearch]); */

  return (
    <View style={styles.container}>
      <Header />

      {/* Content */}
      <View style={styles.content}>
        <TextInput
          style={styles.inputSearch}
          placeholder="Pesquise pelo equipamento"
          value={inputSearch}
          onChangeText={setInputSearch}
        />

        <FlatList
          data={equipments}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <EquipmentCard data={item} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1, maxHeight: 375 }}
        />

      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  content: {
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },

  inputSearch: {
    width: '100%',
    backgroundColor: '#DEDEDE',
    height: 50,
    borderRadius: 16,
    padding: 20,
    marginBottom: 10,

    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
  }
});

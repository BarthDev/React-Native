import React, { useState } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Box } from 'native-base';
import CardCar from '../components/CardCar';
import { car } from "../utils/CarRegistation";

export default function ExploreScreen() {
  const [selectedCarLocation, setSelectedCarLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const handleCardPress = (location: { latitude: number; longitude: number }) => {
    setSelectedCarLocation(location);
  };

  const getMapRegion = (location: { latitude: number; longitude: number }) => {
    const padding = 0.00; // Ajuste o valor para criar um espaço extra
  
    return {
      latitude: location.latitude + padding, // Centralizando mais para cima
      longitude: location.longitude,
      latitudeDelta: 0.015 + padding,
      longitudeDelta: 0.0121 + padding,
    };
  };
  
  return (
    <Box flex={1}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.55052 + 0.02, // Ajuste aqui também
          longitude: -46.633308,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        region={
          selectedCarLocation
            ? getMapRegion(selectedCarLocation)
            : undefined
        }
      >
        {selectedCarLocation && (
          <Marker
            coordinate={selectedCarLocation}
            title="Localização do Carro"
            description="Carro disponível aqui"
          />
        )}
      </MapView>
  
      {/* Carrossel de cards */}
      <Box style={styles.cardContainer}>
        <FlatList
          data={car[0].cars} 
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleCardPress(item.location)}>
              <Box style={styles.cardWrapper}>
                <CardCar
                  tipo={item.tipo}
                  model={item.model}
                  price={item.price}
                  carShiftPattern={item.carShiftPattern}
                  fuel={item.fuel}
                  people={item.people}
                  star={item.star.toFixed(1)}
                  image={item.image}
                />
              </Box>
            </TouchableOpacity>
          )}
        />
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height * 0.9, // Reduzindo a altura do mapa
    },
    cardContainer: {
      position: 'absolute',
      bottom: 20,
      left: 0,
      right: 0,
    },
    cardWrapper: {
      width: Dimensions.get('window').width * 0.8,
      marginHorizontal: 10,
    },
  });
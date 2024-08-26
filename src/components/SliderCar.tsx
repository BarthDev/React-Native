import React, { useState } from 'react';
import { Box, Image, FlatList, VStack, HStack } from 'native-base';
import { TouchableOpacity } from 'react-native';


const CarImageSlider = () => {
  const [selectedImage, setSelectedImage] = useState(0);


  const images = [
    require('../assets/teslaModel3.png'),
    require('../assets/teslaModel3_2.png'),
    require('../assets/teslaModel3_3.png'),
    require('../assets/teslaModel3_4.png'),
  ];


  return (
    <VStack space={4} alignItems="center">
      <Box>
        <Image
         key={selectedImage}
          source={images[selectedImage]}
          alt="Carro"
          resizeMode="contain"
          width={300}
          height={150}
        />
      </Box>
      <Box backgroundColor="#FFF" h="16" borderRadius="lg" pr={4} w="100%">
      <FlatList
        data={images}
        horizontal
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => setSelectedImage(index)} >
            <Image
              source={item}
              alt={`Carro ${index}`}
              resizeMode="contain"
              width={71}
              height={50}
              mt={2}
              borderWidth={selectedImage === index ? 2 : 0}
              backgroundColor="#CECECE"
              borderColor="blue.500"
              borderRadius="xl"
              ml={1}
              
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
      </Box>
      
    </VStack>
  );
};


export default CarImageSlider;




import React, { useState } from 'react';
import { NativeBaseProvider, Box, Text, Pressable, VStack, HStack, Avatar, ScrollView, Image } from 'native-base';

import teslaModel3 from "../assets/teslaModel3.png"

const SobreTab = () => (
  <ScrollView>
  <VStack padding={4}>
    <Text fontWeight="bold" fontSize="lg">Parceiro de aluguel</Text>
   <Box flexDir="row" alignItems="center" mb={4}>
    <Avatar  size="md" source={{ uri: "https://github.com/BarthDev.png"}} mt={5} />
      <Box ml={4}>
        <Text marginTop={2} bold>Lucas Barh</Text>
        <Text color="gray.500">Proprietário</Text>
      </Box>
   </Box>
   <Text bold>Sobre</Text>
    <Text marginTop={4}>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </Text>
  </VStack>
  </ScrollView>
);

const GaleriaTab = () => (
  <VStack padding={4}>
    <Box flexDir="row" alignSelf="center" justifyContent="space-between" w="100%">
    <Box w="25%"  h="20"  >
    <Image source={teslaModel3} alt="Carro Tela Inicial"  resizeMode="contain" />
     </Box>
     <Box ml={2} w="25%"  h="20">
     <Image source={teslaModel3} alt="Carro Tela Inicial"  resizeMode="contain" />
    </Box>
    <Box w="25%" ml={2}  h="20">
    <Image source={teslaModel3} alt="Carro Tela Inicial"  resizeMode="contain" />
    </Box>
    </Box>
    
  </VStack>
);

const ReviewTab = () => (
  <VStack padding={4}>
    <Text>Review content goes here...</Text>
  </VStack>
);

export default function TabMenuExample() {
  const [selectedTab, setSelectedTab] = useState('sobre');

  const renderContent = () => {
    switch (selectedTab) {
      case 'sobre':
        return <SobreTab />;
      case 'galeria':
        return <GaleriaTab />;
      case 'review':
        return <ReviewTab />;
      default:
        return <SobreTab />;
    }
  };

  return (
    <NativeBaseProvider>
      <Box h="300" >
        <HStack justifyContent="space-around" borderBottomWidth={1} borderColor="gray.200">
          <Pressable onPress={() => setSelectedTab('sobre')}>
            <Text
              paddingY={2}
              color={selectedTab === 'sobre' ? 'blue.500' : 'gray.500'}
              fontWeight="bold"
            >
              Sobre
            </Text>
          </Pressable>
          <Pressable onPress={() => setSelectedTab('galeria')}>
            <Text
              paddingY={2}
              color={selectedTab === 'galeria' ? 'blue.500' : 'gray.500'}
              fontWeight="bold"
            >
              Galeria
            </Text>
          </Pressable>
          <Pressable onPress={() => setSelectedTab('review')}>
            <Text
              paddingY={2}
              color={selectedTab === 'review' ? 'blue.500' : 'gray.500'}
              fontWeight="bold"
            >
              Review
            </Text>
          </Pressable>
        </HStack>
        <Box flex={1}>{renderContent()}</Box>
      </Box>
    </NativeBaseProvider>
  );
}

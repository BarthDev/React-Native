import React from 'react';
import { Input, Icon, VStack, Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import SelectLocation from './SelectLocation';



export default function RoundedStatusBar() {
  return (
    <VStack>
      <VStack 
        backgroundColor = '#0085FF'
        borderBottomLeftRadius = "20"
        borderBottomRightRadius = "20"
        paddingTop= "10"
        paddingX = "10"
        paddingBottom = "8"
      >
        <Text  color="#fff" fontSize="md" mb={4} fontWeight="light">Localização</Text>
        <SelectLocation />
        <VStack space={4} mt={4}>
          <Input
            placeholder="Pesquisar"
            variant="filled"
            bg="white"
            borderRadius="10"
            py={3}
            px={1}
            _input={{ color: 'black' }}
            InputLeftElement={<Icon as={<Ionicons name="search" />} size={5} ml="2" color="gray.400" />}
            InputRightElement={<Icon as={<Ionicons name="options" />} size={5} mr="2" color="gray.400" />}
          />
        </VStack>
      </VStack>
    </VStack>
  );
}

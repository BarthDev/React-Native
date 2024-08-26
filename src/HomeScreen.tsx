// HomeScreen.tsx
import React from 'react';
import { Text, VStack, Image, Button, Box, Icon } from 'native-base';
import Carro1 from './assets/carro1.png';
import icon_money from './assets/icon_money.png';
import icon_seat from './assets/icon_seat.png';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { HomeScreenNavigationProp } from './types'; 

interface Props {
  navigation: HomeScreenNavigationProp;
}

export default function HomeScreen({ navigation }: Props) {
  return (
    <VStack flex={1}>
      <Box flexDirection="row" position="absolute" mt={'20'} p="10">
        <LinearGradient
          colors={['#FFFFFF', '#F4F4F4']}
          style={{ borderRadius: 40 }}
        >
          <Box p={4} borderRadius={10} flexDirection="row">
            <Image source={icon_seat} alt="Carro Tela Inicial" />
            <Text>07 Assentos</Text>
          </Box>
        </LinearGradient>
      </Box>
      <Box flexDirection="row" position="absolute" mt={'16'} ml="48">
        <LinearGradient
          colors={['#FFFFFF', '#F4F4F4']}
          style={{ borderRadius: 40 }}
        >
          <Box p={4} borderRadius={10} flexDirection="row">
            <Image source={icon_money} alt="Carro Tela Inicial" />
            <Text ml="1" fontWeight="semibold">
              <Text color="#0085FF" fontWeight="bold">R$ 120</Text> /hr
            </Text>
          </Box>
        </LinearGradient>
      </Box>

      <Image source={Carro1} alt="Carro Tela Inicial" w="100%" mt={'40'} ml={'16'} />

      <VStack w="70%" alignSelf="center" mt={7}>
        <Text fontSize="3xl" textAlign="center" fontWeight="medium">
          Sua Melhor Experiência em{' '}
          <Text color="#00B9C4" fontWeight={'bold'}>
            aluguel de carro
          </Text>
        </Text>
        <Text mt={4} textAlign="center" color="#797878" fontSize="lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Text>

        <Button
          w="100%"
          variant="outline"
          bgColor="transparent"
          borderColor="#0085FF"
          mt={8}
          mb={4}
          borderRadius="full"
          alignSelf="center"
          leftIcon={<Icon as={FontAwesome} name="google" size="sm" color="blue.500" />}
        >
          Entrar com o Google
        </Button>
        <Button
          w="100%"
          variant="outline"
          bgColor="transparent"
          borderColor="#0085FF"
          mb={4}
          borderRadius="full"
          alignSelf="center"
          leftIcon={<Icon as={FontAwesome} name="envelope" size="sm" color="blue.500" />}
          onPress={() => navigation.navigate('RegisterEmail')} 
        >
          Entre com seu melhor email
        </Button>

        <Box w="100%" flexDirection="row" justifyContent="center">
          <Text>Já tem uma conta?</Text>
          <TouchableOpacity>
            <Text color="#0085FF" ml={'1'}>
              Entrar
            </Text>
          </TouchableOpacity>
        </Box>
      </VStack>
    </VStack>
  );
}

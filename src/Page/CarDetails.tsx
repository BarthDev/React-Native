import { Box, Button, Icon, Link, Text, VStack } from "native-base";
import React from "react";
import BtnIconsCarDetails from "../components/BtnIconsCarDetails";
import SliderCar from "../components/SliderCar";
import { Ionicons } from "@expo/vector-icons";
import  TabsCarDetails  from "../components/TabsCarDetails"
import { HomeScreenNavigationProp } from "../types";

interface Props {
    navigation: HomeScreenNavigationProp;
  }

export default function CarDetails({navigation} : Props ) {
  return (
    <VStack>
      <Box 
        backgroundColor="#CECECE" 
        w="96%" 
        h="auto"  
        alignSelf="center" 
        borderRadius="lg"
        padding={4}  
      >
        <Box 
          flexDir="row" 
          alignItems="center" 
          w="100%" 
          justifyContent="space-between"
          mb={4} 
        >
          <Box flexDir="row" alignItems="center" w="75%" justifyContent="space-around">
            <BtnIconsCarDetails icon="arrow-back" onPress={() => navigation.navigate('Tabs')}/>
            <Text fontSize="lg" mr={4} fontWeight="medium">Detalhes do Carro</Text>
          </Box>
          <Box flexDir="row" alignItems="center" w="20%" justifyContent="flex-end">
            <BtnIconsCarDetails icon="share-social-sharp" />
            <Box ml={2}>
              <BtnIconsCarDetails icon="heart" />
            </Box>
          </Box>
        </Box>
          <SliderCar />
      </Box>
      
    <Box flexDir="row" w="95%" alignSelf="center" justifyContent="space-between">
    <Box mt={4} w="20%" h={4} borderRadius="xl" m={4} backgroundColor="#EEEEEE" flexDir="row" alignItems="center" justifyContent="center" >
       <Text color="#0085FF"> SUV</Text>
      </Box>
      <Box mt={4} w="20%" borderRadius="xl" m={4} backgroundColor="#EEEEEE" flexDir="row" alignItems="center" justifyContent="center">
        <Icon as={<Ionicons name="star" />} size={4} color="#FFE002" />
        <Text ml={1}>4.9</Text>
      </Box>
    </Box>

    <Box w="85%" alignSelf="center"m={4}>
        <Text fontSize="2xl">Tesla Model 3</Text>
    </Box>

    <TabsCarDetails />
    </VStack>
  );
}

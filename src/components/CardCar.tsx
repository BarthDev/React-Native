import { VStack, Text, Image, Box, Icon, Divider } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import teslaModel3 from "../assets/teslaModel3.png"
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ImageSourcePropType } from "react-native";

interface modelCarProps{
    tipo: string;
    model: string;
    price: number;
    carShiftPattern: string;
    fuel: string;
    people: string;
    star: number | string;
    image: ImageSourcePropType;
}

export default function CardCar ({
    tipo,
    model,
    price,
    carShiftPattern,
    fuel,
    people,
    star,
    image
}:modelCarProps ) : JSX.Element {
    return (
        <VStack flex={1}>
           <Box 
           backgroundColor="#FCFCFC"
           shadow={1}
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 2, height: 2 },
              shadowOpacity: 0.08,
              shadowRadius: 2.44,
            }}
            w="100%"
            h={"64"}
            borderRadius="2xl"
            mb={8}
           >
            <Box w="100%"   flexDir="row" alignItems="center" justifyContent="space-between">
                <Box flexDir="row" m={4} backgroundColor="#F3F3F3" w="20%" h="40%" alignItems="center" borderRadius={8} justifyContent="center">
                    <Icon as={<Ionicons name="star" />} size={4} color="#FFE002" />
                    <Text fontSize="md" ml="1">{star}</Text>
                </Box>
                <Icon mr="10" as={<Ionicons name="heart" />} size={4} color="#F10000" />
            </Box>

            <Image source={image} alt="imagem de lateral do carro da marca tesla model 3" alignSelf="center" mb={3} resizeMode="cover"/>

            <Box w="85%" m={4} >
                <Text mb={1} color="#0085FF">{tipo}</Text>
                <Box flexDir="row" w="100%" justifyContent="space-between">
                    <Text fontSize="xl" >{model}</Text>
                    <Text fontSize="xl"><Text color="#0085FF" bold>R$ {price}</Text> /hr</Text>
                </Box>
            </Box>
            <Divider mt={-1} />
            <Box mt={2} w="88%" flexDir="row" justifyContent="space-between" alignSelf="center">
                <Box flexDir="row" alignItems="center">
                    <Icons name="car-shift-pattern" size={15} color="#0085FF" />
                    <Text ml={1}>{carShiftPattern}</Text>
                </Box>
                <Box flexDir="row" alignItems="center">
                    <Icons name="fuel" size={15} color="#0085FF" />
                    <Text ml={1}>{fuel}</Text>
                </Box>
                <Box flexDir="row" alignItems="center">
                    <Icon as={<Ionicons name="person" />} size={4} color="#0085FF" />
                    <Text ml={1}>{people}</Text>
                </Box>
            </Box>
           </Box>
        </VStack>
    )
}
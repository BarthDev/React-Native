import { VStack,Text, Box, Divider } from "native-base";
import CardCar from "../components/CardCar";

export default function Favorites() {
    return(
        <VStack>
            <Box w="80%" alignSelf="center" m={4} mt={12}>
                <Text fontSize="2xl" bold>Seu Favoritos</Text>   
                <Divider alignSelf="center" mt={8}/> 
            </Box>
            <Box w="90%" alignSelf="center">
            <CardCar
                key={1}
                tipo= "Sedan"
                model = "Tesla Model 3"
                price = {300}
                carShiftPattern = "Autómatico"
                fuel =  "Elétrico"
                people = "5 Pessoas"
                star = {5.0.toFixed(1)}
                image= {require('../assets/teslaModel3.png')}
                />
            </Box>
          
        </VStack>
    )
}
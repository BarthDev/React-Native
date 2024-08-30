import { Box, Button, Link, Pressable, ScrollView } from "native-base";

import LogoToyta from "../assets/logoToyta.png"
import LogoBMW from "../assets/logoBmw.png"
import LogoMercedes from "../assets/logoMercedes.png"
import LogoTesla from "../assets/logoTesla.png"

import RoundedStatusBar  from "../components/RoundedStatusBar"
import Brands from "../components/Brands";
import TitleMenu from "../components/TitleMenu";
import CardCar from "../components/CardCar"
import {car} from "../utils/CarRegistation";
import { useState } from "react";
import { HomeScreenNavigationProp } from "../types";

interface Props {
    navigation: HomeScreenNavigationProp;
}

export default function Home({
    navigation
}: Props) {

    const [numCar, setNumCar] = useState(0);

    return(

        <ScrollView >
            <RoundedStatusBar />
            <TitleMenu 
            title="Marcas"
            btn="Ver Mais"
            />
            <Box mt={8} w="85%" alignSelf="center"  flexDirection="row">
                <Brands 
                source={LogoToyta}
                alt="Logo Marca da Toyota"
                />
                 <Brands 
                source={LogoBMW}
                alt="Logo Marca da BMW"
                />
                 <Brands 
                source={LogoMercedes}
                alt="Logo Marca da Mercedes"
                />
                 <Brands 
                source={LogoTesla}
                alt="Logo Marca da Tesla"
                />
            </Box>
            <Box mb={8}>
            <TitleMenu 
            title="Carros Populares"
            btn="Ver Mais"
            />
            </Box>

            <Pressable onPress={() => navigation.navigate('CarDetails')} >
            <Box w="80%" alignSelf="center">
             {
                  car[numCar].cars.map(cars => {
                    return (
                       
                            <CardCar 
                                key={cars.id}
                                tipo= {cars.tipo}
                                model = {cars.model}
                                price = {cars.price}
                                carShiftPattern = {cars.carShiftPattern}
                                fuel = {cars.fuel}
                                people = {cars.people}
                                star = {cars.star.toFixed(1)}
                                image={cars.image}
                            />
                        
                       
                        )
                  })
             }
            </Box>
            </Pressable>
            
     </ScrollView>   
    )
}
import React, { useState } from "react";
import { Box, Pressable, Icon, Text, Actionsheet, useDisclose } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

export default function SelectLocation() {

    const { isOpen, onOpen, onClose } = useDisclose();
    const [ SelectLocation, setSelectLocation ] = useState("São Paulo, SP");


    return(
        <Box w="90%"maxW="300px" flexDir="row"alignItems="center">
            <Icon as={MaterialIcons} name="place" size={5} color="#fff" />
            <Pressable flexDir="row" alignItems="center" onPress={onOpen}>
                <Text color="#fff" ml={2}>
                    {SelectLocation}
                </Text>
                <Icon 
                    as={MaterialIcons} 
                    name="keyboard-arrow-down" 
                    size={5}   
                    color="#fff"
                    ml={1} 
                />
            </Pressable>

            <Actionsheet isOpen={isOpen} onClose={onClose}>
                <Actionsheet.Content>
                    <Actionsheet.Item onPress={() => { setSelectLocation("São Paulo, SP"); onClose();}}>
                        São Paulo, SP
                    </Actionsheet.Item>
                    <Actionsheet.Item onPress={() => { setSelectLocation("Rio de Janeiro, RJ"); onClose();}}>
                        Rio de Janeiro, RJ
                    </Actionsheet.Item>
                    <Actionsheet.Item onPress={() => { setSelectLocation("Belo Horizonte, MG"); onClose();}}>
                        Belo Horizonte, MG
                    </Actionsheet.Item>
                    <Actionsheet.Item onPress={() => { setSelectLocation("Porto Alegre, RS"); onClose();}}>
                        Porto Alegre, RS
                    </Actionsheet.Item>
                    
                </Actionsheet.Content>
            </Actionsheet>

        </Box>
    )
}
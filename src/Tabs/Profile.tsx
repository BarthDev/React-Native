import { VStack,Text, Box, Avatar, HStack } from "native-base";
import BtnIconsCarDetails from "../components/BtnIconsCarDetails";
import BtnConfig from "../components/BtnConfig";

export default function Profile() {
    return(
        
        <VStack>
            <Box w="100%" backgroundColor="#CECECE" >
            <Box w="80%" alignSelf="center" flexDir="row" justifyContent="space-between" mt={8}>
                <BtnIconsCarDetails 
                    icon="arrow-back"
                />
                <Text fontSize="lg">Perfil</Text>
                <BtnIconsCarDetails 
                    icon="pencil"
                />
            </Box>
                <Box alignSelf="center" mt={8}>
                    <Avatar size="xl" source={{ uri: "https://github.com/BarthDev.png"}} mt={5}/>
                    <Text textAlign="center" mt={3} fontSize="lg" bold>Lucas Barth</Text>
                    <Text textAlign="center" fontWeight="light" mb={8}>Tesla Model 3</Text>
                </Box>
           </Box>
           <Box w="100%" backgroundColor="#fff" h="70%">
                <Box w="80%" m={8}>
                    <Text fontSize="lg" mb={2}>Configurações</Text>
                  <HStack space={5} mb={5}>
                  <BtnConfig 
                        icon="clipboard-edit"
                        text="Editar Anúncio"
                        
                    />
                     <BtnConfig 
                        icon="google-maps"
                        text="Mudar Local"
                    />
                     <BtnConfig 
                        icon="car"
                        text="Seus Carros"
                    />
                  </HStack>
                  
                  <HStack mb={3}>
                  <BtnConfig 
                        icon="account-settings"
                        text="Editar Anúncio"
                        orientation="horizontal"
                        alignLeft
                    />
                    
                  </HStack>
                  <HStack mb={3}>
                  <BtnConfig 
                        icon="card-bulleted-settings"
                        text="Editar dados do cartão"
                        orientation="horizontal"
                        alignLeft
                    />
                    
                  </HStack>
                 
                </Box>
                
            </Box>

          
        </VStack>
        
    )
}
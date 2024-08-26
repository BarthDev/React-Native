import { VStack, Text, Image, Box, FormControl, Input, Button } from "native-base";
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import passwordIlustracion from "./assets/passwordIlustracion.png";
import { HomeScreenNavigationProp } from "./types";
import TextsRegister from "./components/TextsRegister";

interface Props {
  navigation: HomeScreenNavigationProp;
}

export default function RegisterPassword({navigation}: Props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Box alignItems="center">
          <Image 
            source={passwordIlustracion} 
            alt="Ilustração de uma pessoa e um notebook com a senha" 
            resizeMode="contain"
            style={{ maxHeight: 200, marginBottom: 5 }} 
          />
           <TextsRegister 
            title="Qual é sua senha?"
            subtitle="Crie uma senha forte para proteger sua conta e garantir uma experiência segura de aluguel de carro."
          />
          
          <Box w="80%" alignSelf="center">
            <FormControl mb={10}>
              <FormControl.Label>Senha</FormControl.Label>
              <Input 
                placeholder="Insira sua senha"
                size="lg"
                borderRadius="lg"
                autoFocus
              />
            </FormControl>
          </Box>
        </Box>
      </ScrollView>
      
      <Box w="80%" alignSelf="center" mb={10}>
        <Button
          w="100%"
          bgColor="#0085FF"
          borderRadius="full"
          onPress={() => navigation.navigate("Tabs")} 
        >
          Próximo
        </Button>
      </Box>
      
    </KeyboardAvoidingView>
  );
}

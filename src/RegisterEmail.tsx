import { VStack, Text, Image, Box, FormControl, Input, Button } from "native-base";
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import emaiIIlustracion from "./assets/emaiIIlustracion.png";
import { HomeScreenNavigationProp } from "./types";
import TextsRegister from "./components/TextsRegister";

interface Props {
  navigation: HomeScreenNavigationProp;
}

export default function RegisterEmail({navigation}: Props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Box alignItems="center">
          <Image 
            source={emaiIIlustracion} 
            alt="Ilustração de um email e uma pessoa" 
            resizeMode="contain"
            style={{ maxHeight: 200, marginBottom: 5 }} 
          />
          <TextsRegister 
            title="Qual é seu e-mail?"
            subtitle="Com uma única conta, você tem o poder de alugar o carro que quiser, quando precisar."
          />
          <Box w="80%" alignSelf="center">
            <FormControl mb={10}>
              <FormControl.Label>Email</FormControl.Label>
              <Input 
                placeholder="Insira seu endereço de email"
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
          onPress={() => navigation.navigate("RegisterPassword")} 
        >
          Próximo
        </Button>
      </Box>
      
    </KeyboardAvoidingView>
  );
}

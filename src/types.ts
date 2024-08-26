
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


export type RootStackParamList = {
  HomeScreen: undefined;
  RegisterEmail: undefined;
  RegisterPassword: undefined;
  Tabs: undefined;
  CarDetails: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;

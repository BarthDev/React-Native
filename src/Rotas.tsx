import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Tab = createNativeStackNavigator();

import HomeScreen from "./HomeScreen";
import  RegisterEmail  from "./RegisterEmail"
import  RegisterPassword  from "./RegisterPassword"
import Tabs from "./Tabs";
import CarDetails from "./Page/CarDetails";


export default function Rotas(){
    return(
        <NavigationContainer independent={true}>
            <Tab.Navigator>
                <Tab.Screen 
                    name="HomeScreen" component={HomeScreen} options={{
                        headerShown: false
                    }}
                />
                <Tab.Screen 
                    name="RegisterEmail" component={RegisterEmail} options={{
                        headerShown: false
                    }}
                />
                 <Tab.Screen 
                    name="RegisterPassword" component={RegisterPassword} options={{
                        headerShown: false
                    }}
                />
                <Tab.Screen 
                    name="Tabs" component={Tabs} options={{
                        headerShown: false
                    }}
                />
                <Tab.Screen 
                    name="CarDetails" component={CarDetails} options={{
                        headerShown: false
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
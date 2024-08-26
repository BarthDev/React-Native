import {createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'

import Home from "./Home";
import Profile from "./Profile";
import Explore from "./Explore";
import Favorites from "./Favorites";


const Tab = createBottomTabNavigator()

const screenOptions = {
    tabBarActiveTintColor: "#339cff",
    tabBarInactiveTintColor: "#0B3B60",
    tabBarStyle: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    }
 }

 

 const tabs = [
    {
        id: 1,
        name: 'Home',
        component: Home,
        icon: 'home'
    },
    {
        id: 2,
        name: 'Explorar',
        component: Explore,
        icon: 'location'
    },
    {   
        id: 3,
        name: 'Favoritos',
        component: Favorites,
        icon: 'heart'
    },
    {
        id: 4,
        name: 'Perfil',
        component: Profile,
        icon: 'person'
    }
 ]

export default function Tabs(){
    return(
        <Tab.Navigator
            screenOptions={screenOptions}>
            {tabs.map((tab) => (
            <Tab.Screen 
                key={tab.id}
                name={tab.name}
                component={tab.component}
                options={{
                    headerShown: false, 
                    tabBarIcon:  ({color, size}) =>(
                        <Ionicons name={tab.icon} color={color}
                        size={size}/>
                    )
                }}
            /> 
            ))    
        }

        </Tab.Navigator>
    )
}
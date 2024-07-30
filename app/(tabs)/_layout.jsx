import * as React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Tabs, useNavigation, useRouter } from 'expo-router';
import { SuiviIcon } from '../../assets/icons/svg/Suivi';
import { ProfileIcon } from '../../assets/icons/svg/Profile';
import { CoachIcon } from '../../assets/icons/svg/Coach';
import { CalendarIcon } from '../../assets/icons/svg/Calendar';


function CustomTabBar({ state, descriptors, navigation }) {


    const rendreSuiviIcon = (route, isFocused) => {
        const size = 27;
        switch (route.name) {
            case 'Home':
                return <CalendarIcon height={size} width={size} color={isFocused ? '#0552B1' : '#ffffff'} />;
            case 'Stats':
                return <SuiviIcon height={size} width={size} color={isFocused ? '#0552B1' : '#ffffff'} />;
            case 'Settings':
                return <CoachIcon height={size} width={size} color={isFocused ? '#0552B1' : '#ffffff'} />;
            case 'Profile':
                return <ProfileIcon height={size} width={size} color={isFocused ? '#0552B1' : '#ffffff'} />;
            default:
                return null;
        }
    }

    return (
        <ImageBackground
            source={require('../../assets/backgroundFooter.png')}
            style={{ height: 110 }}
        >
            <View style={{ flexDirection: 'row', height: '100%' }}>
                {[0, 1, 2, 3, 4].map((columnIndex) => {

                    if (columnIndex === 2) {
                        return <View key={`empty-${columnIndex}`} style={{ flex: 1 }} />;
                    }

                    const routeIndex = columnIndex > 2 ? columnIndex - 1 : columnIndex;
                    const route = state.routes[routeIndex];
                    if (!route) {
                        return <View key={`empty-${columnIndex}`} style={{ flex: 1 }} />;
                    }

                    const { options } = descriptors[route.key];
                    const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;

                    const isFocused = state.index === routeIndex;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <TouchableOpacity
                            key={route.key}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                        >
                            {rendreSuiviIcon(route, isFocused)}
                        </TouchableOpacity>
                    );
                })}
            </View>
        </ImageBackground>
    );
}

const TabsLayout = () => {
    return (
        <Tabs tabBar={(props) => <CustomTabBar {...props} />}>
            <Tabs.Screen name="Home" options={{ title: 'Home', headerShown: false }} />
            <Tabs.Screen name="Stats" options={{ title: 'Stats', headerShown: false }} />
            <Tabs.Screen name="Settings" options={{ title: 'Settings', headerShown: false }} />
            <Tabs.Screen name="Profile" options={{ title: 'Profile', headerShown: false }} />
        </Tabs>
    );
};

export default TabsLayout;
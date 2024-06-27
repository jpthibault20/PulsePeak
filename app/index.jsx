import React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import { Redirect, router } from "expo-router";
import { CustomButton } from "../components/customButton"
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from "react-native-safe-area-context";
import { Logo } from "../assets/images/svg/Logo"


export default function App() {
    return (

        <LinearGradient
            colors={['#004AA6', '#48C4DB']}
            className="h-full"
        >
            <SafeAreaView >
                <View className="h-full justify-center space-y-10">
                    <View className="w-full items-center justify-center">
                        <Logo width={150} height={150}/>
                    </View>
                    <View className="w-full items-center justify-center px-4 space-y-6">
                        <Text className="font-msemibold text-3xl text-white">Bienvenue !</Text>
                        <Text className="font-mregular text-white">Transformer vos objectifs en réalité avec nos programmes d'entraînement sur mesure</Text>
                    </View>
                    <View className="w-full items-center space-y-6">
                        <View>
                            <CustomButton
                            title="Connexion"
                            handlePress={() => router.push('/')}
                            containerStyles="bg-[#E8E8E8]" />
                        </View>
                        
                        <View>
                            <CustomButton
                            title="Inscription"
                            handlePress={() => router.push('/')}
                            containerStyles="bg-transparent border-2 border-white" 
                            textStyles="text-white"/>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}

import React from 'react'
import { View, Text, Alert } from 'react-native'
import { GradientBackground } from '../../components/auth/GradientBackground'
import { CustomButton } from '../../components/customButton'
import { supabase } from '../../lib/supabase'
import { router } from 'expo-router'

const home = () => {
    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut()
        if (error) Alert.alert('Erreur lors de la déconnexion:', error)
        if (!error) router.replace("/")
    }

    return (
        <GradientBackground>
            <View className="w-full h-full justify-center items-center">
                <Text className="text-white font-msemibold text-2xl">Home page</Text>
                <CustomButton
                    title={"logout"}
                    handlePress={handleLogout}
                    containerStyles={"bg-white mt-10"}
                />
            </View>
        </ GradientBackground>
    )
}

export default home

import React from 'react'
import { View, Text } from 'react-native'
import { GradientBackground } from '../../components/auth/GradientBackground'

const home = () => {
    return (
        <GradientBackground>
            <View className="w-full h-full justify-center items-center">
                <Text className="text-white font-msemibold text-2xl">Home</Text>
            </View>
        </ GradientBackground>
    )
}

export default home

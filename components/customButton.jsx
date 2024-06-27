import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

export const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
    return (
        <TouchableOpacity 
            className={`w-[350px] h-[50px] rounded-xl items-center justify-center  ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
            onPress={handlePress}
            activeOpacity={0.7}
            disabled={isLoading}
        >
            <Text className={`font-msemibold text-lg ${textStyles}`}>{title}</Text>
        </TouchableOpacity>
    )
}
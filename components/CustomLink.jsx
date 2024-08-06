import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Redirect, router } from "expo-router";

export const CustomLink = ({ title1, titleLink, title2, link }) => {
    const handlePress = () => {
        router.push(link)
    }
    return (
        <View className="flex-row">
            <Text className="font-msemibold text-black text-base">
                {title1}
            </Text>
            <TouchableOpacity onPress={handlePress}>
                <Text className="text-white underline underline-offset-1 font-msemibold text-base">
                    {titleLink}
                </Text>
            </TouchableOpacity>
            <Text className="font-msemibold text-base">
                {title2}
            </Text>

        </View>
    )
}
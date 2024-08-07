import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'


export const ActivityWidth = ({ color, title, time, icon, activity }) => {

    return (
        <TouchableOpacity className={` bg-[${color}] w-full h-[50px] rounded-3xl flex flex-row justify-between items-center px-6 mb-2`}>
            <View className="flex-row items-center space-x-3">
                <View className="">
                    {icon}
                </View>
                <Text className="font-mregular text-base text-white">
                    {title}
                </Text>
            </View>
            <View>
                <Text className="font-mregular text-base text-white">
                    {time}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
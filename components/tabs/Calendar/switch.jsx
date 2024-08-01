import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export const SwitchView = ({ switchValue, setSwitchValue }) => {

    const onPress = () => {
        if (switchValue == "M") {
            setSwitchValue("W")
        }
        if (switchValue == "W") {
            setSwitchValue("M")
        }
    }

    return (
        <TouchableOpacity
            className="h-[25px] w-[140px] border rounded-2xl border-[#0552B1] flex flex-row justify-between items-center"
            onPress={onPress}
        >
            <View className={`h-[25px] w-[70px] justify-center items-center ${switchValue === "W" ? "border rounded-2xl border-[#0552B1] bg-[#0552B1]" : ""}  `}>
                <Text className={`font-mregular text-xs ${switchValue === "W" ? "text-white" : "text-[#0552B1]"}`}>
                    Semaine
                </Text>
            </View>
            <View className={`h-[25px] w-[70px] justify-center items-center ${switchValue === "M" ? "border rounded-2xl border-[#0552B1] bg-[#0552B1]" : ""}  `}>
                <Text className={`font-mregular text-xs ${switchValue === "M" ? "text-white" : "text-[#0552B1]"}`}>
                    Mois
                </Text>
            </View>
        </TouchableOpacity>
    )
}


import React, { useState } from 'react'
import { View, Text } from 'react-native'

const days = ['LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM', 'DIM']

const TitleColumn = ({ title }) => {
    return (
        <Text className="font-mmedium text-md mx-3">
            {title}
        </Text>
    )
}

export const MonthlyView = ({ calendar }) => {
    return (
        <View className="w-full items-center">
            <View className="flex flex-row ">
                {days.map((day, index) => (
                    <TitleColumn key={index} title={day} />
                ))}
            </View>

            <View>
                <Text className="font-mbold text-xl">
                    monthly view
                </Text>
            </View>
        </View >
    )
}
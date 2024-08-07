import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { splitPerDayWeek } from '../../../lib/calendar'

export const WeeklyView = ({ calendar, selectedDay, setSelectedDay, date }) => {
    const { nameOfDay, daysGroupedByWeekday } = splitPerDayWeek(calendar);

    return (
        <View className="w-full items-center">
            <Text className="font-mbold text-xl">
                Weekly view
            </Text>
        </View>
    )
}
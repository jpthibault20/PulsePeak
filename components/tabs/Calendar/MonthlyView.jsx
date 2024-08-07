import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { splitPerDayMonth } from '../../../lib/calendar'
import { Day } from './Day'





export const MonthlyView = ({ calendar, selectedDay, setSelectedDay }) => {
    const { nameOfDay, daysGroupedByWeekday } = splitPerDayMonth(calendar);

    return (
        <View className=" flex-row w-full justify-between px-2">
            {nameOfDay.map((dayName, index) => (
                <View key={index} className="items-center">
                    <Text className="font-mregular text-lg ">
                        {dayName}
                    </Text>
                    {daysGroupedByWeekday[dayName].map((event, dayIndex) => (
                        <View key={dayIndex}>
                            <Day
                                event={event}
                                setSelectedDay={setSelectedDay}
                                touchableDay={selectedDay.getFullYear() === event.year && selectedDay.getMonth() + 1 === event.month && selectedDay.getDate() === event.day ? true : false}
                            />
                        </View>
                    ))}
                </View>
            ))}
        </View>
    )
}
import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { splitPerDayWeek } from '../../../lib/calendar'
import { DayWeekly } from './DayWeekly'

export const WeeklyView = ({ calendar, selectedDay, setSelectedDay, date }) => {
    const { nameOfDay, daysGroupedByWeekday } = splitPerDayWeek(calendar);

    // console.log(nameOfDay);
    // console.log(daysGroupedByWeekday);

    return (
        <View className="w-full items-start flex-row justify-between px-2 ">
            {nameOfDay.map((dayName, index) => (
                <View
                    key={index}
                    className={`items-center flex-1 ${index === 6 ? '' : 'border-r border-[#CECECE] border-rounded-xl'}`}
                >
                    {daysGroupedByWeekday[dayName].map((event, dayIndex) => (
                        <DayWeekly
                            key={dayIndex}
                            dayName={dayName}
                            event={event}
                            setSelectedDay={setSelectedDay}
                            touchableDay={selectedDay.getFullYear() === event.year && selectedDay.getMonth() + 1 === event.month && selectedDay.getDate() === event.day}
                        />
                    ))}
                </View>
            ))}
        </View>
    )
}
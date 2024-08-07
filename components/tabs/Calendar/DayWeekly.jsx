import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { ActivityWidthWeekly } from './ActivityWidthWeekly'

export const DayWeekly = ({ event, setSelectedDay, touchableDay, dayName }) => {
    return (
        <TouchableOpacity
            className="flex justify-start items-center  h-[280px]"
            onPress={() => setSelectedDay(new Date(event.year, event.month - 1, event.day))}
        >
            <View className={`items-center justify-center ${touchableDay ? 'border rounded-lg border-[#0552B1] p-1' : ''}`}>
                <Text className={`text-sm ${event.today ? 'font-mbold' : 'font-mregular'} `}>
                    {dayName}
                </Text>
                <Text className={`text-sm ${event.today ? 'font-mbold' : 'font-mregular'} `}>
                    {event.day}
                </Text>
            </View>

            <View className="flex justify-center items-center">
                {event.Swimming ?
                    <ActivityWidthWeekly
                        activity={"Swimming"}
                        event={event}
                    />
                    :
                    null
                }
                {event.Running ?
                    <ActivityWidthWeekly
                        activity={"Running"}
                        event={event}
                    />
                    :
                    null
                }
                {event.Cycling ?
                    <ActivityWidthWeekly
                        activity={"Cycling"}
                        event={event}
                    />
                    :
                    null
                }
            </View>
        </TouchableOpacity>
    )
}
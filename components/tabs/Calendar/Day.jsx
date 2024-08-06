import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export const Day = ({ event, setSelectedDay, touchableDay }) => {

    const onPress = () => {
        // -1 to adapt to the month which starts with 0 in my object, +1 to counteract the time difference
        setSelectedDay(new Date(event.year, event.month - 1, event.day));
    }

    return (
        <TouchableOpacity
            className={`${touchableDay ? 'border rounded-lg border-[#0552B1]' : ''} h-[46px] w-[46px] items-center justify-center`}
            onPress={() => onPress()}
        >
            <Text className={`${event.type === 'current' ? 'text-black' : 'text-gray-400'} ${event.today ? 'font-mbold text-base' : 'font-mregular text-xs'} mb-1`}>
                {event.day}
            </Text>
            <View className="flex-row items-center w-full justify-center space-x-1 px-2">
                {/* Swimming Activity */}
                {event.validated === null && event.Swimming ?
                    (<View className="h-[8px] w-[8px] bg-[#03BADB] rounded-full">
                    </View>) : null
                }
                {/* Running Activity */}
                {event.validated === null && event.Running ?
                    (<View className="h-[8px] w-[8px] bg-[#7E57C2] rounded-full">
                    </View>) : null
                }
                {/* Cycling Activity */}
                {event.validated === null && event.Cycling ?
                    (<View className="h-[8px] w-[8px] bg-[#0552B1] rounded-full">
                    </View>) : null
                }
                {/* OK Activity */}
                {event.validated === true ?
                    (<View className="h-[8px] w-[8px] bg-[#359D05] rounded-full">
                    </View>) : null
                }
                {/* NOK Activity */}
                {event.validated === false ?
                    (<View className="h-[8px] w-[8px] bg-[#960000] rounded-full">
                    </View>) : null
                }
            </View>
        </TouchableOpacity>
    )
}
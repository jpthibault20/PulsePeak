import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { SwimmingIcon } from '../../../assets/icons/svg/SwimmingIcon'
import { RunningIcon } from '../../../assets/icons/svg/RunningIcon'
import { CyclingIcon } from '../../../assets/icons/svg/CyclingIcon'
import { ActivityWidth } from './ActivityWidth'



export const DetailDay = ({ selectedDay, calendar }) => {

    const result = calendar.filter(item =>
        item.day === selectedDay.getDate() &&
        item.month === selectedDay.getMonth() + 1 &&
        item.year === selectedDay.getFullYear()
    )
    if (result.length === 0) {
        return (
            <View></View>
        );
    }

    return (
        <View className="m-3">
            <Text className="font-mregular text-lg">
                {selectedDay.toLocaleString('fr-FR', { day: 'numeric' })} {selectedDay.toLocaleString('fr-FR', { month: 'long' })} {selectedDay.toLocaleString('fr-FR', { year: 'numeric' })}
            </Text>
            <View className="mt-6 space-y-2">
                {result[0].Swimming === true ? (
                    <ActivityWidth
                        color="#03BADB"
                        title="Natation"
                        time="1h"
                        icon={<SwimmingIcon width={35} height={20} />}
                    />
                ) : null}

                {result[0].Cycling === true ? (
                    <ActivityWidth
                        color="#0552B1"
                        title="Vélo"
                        time="3h"
                        icon={<CyclingIcon width={35} height={20} />}
                    />
                ) : null}

                {result[0].Running === true ? (
                    <ActivityWidth
                        color="#7E57C2"
                        title="Course à pied"
                        time="20min"
                        icon={<RunningIcon width={35} height={20} />}
                    />
                ) : null}

                {!result[0].Running && !result[0].Cycling && !result[0].Swimming ? (
                    <ActivityWidth
                        color="#999999"
                        title="Repos"
                        time=""
                        icon={null}
                    />
                ) : null}





















            </View>
        </View>
    )
}
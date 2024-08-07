import React from 'react'
import { View, Text, } from 'react-native'
import { SwimmingIcon } from '../../../assets/icons/svg/SwimmingIcon'
import { RunningIcon } from '../../../assets/icons/svg/RunningIcon'
import { CyclingIcon } from '../../../assets/icons/svg/CyclingIcon'

export const ActivityWidthWeekly = ({ activity, event }) => {

    return (
        <View className={`border border-transparent h-[60px] w-[40px] rounded-lg items-center justify-center mt-3 
                            ${activity === "Swimming" && event.validated === null ? "bg-[#03BADB]" :
                activity === "Running" && event.validated === null ? "bg-[#7E57C2]" :
                    activity === "Cycling" && event.validated === null ? "bg-[#0552B1]" :
                        event.validated === false ? "bg-[#960000]" :
                            event.validated === true ? "bg-[#359D05]" :
                                ""}`}>
            {activity === "Swimming" ?
                <SwimmingIcon height={30} width={30} />
                :
                null
            }
            {activity === "Running" ?
                <RunningIcon height={30} width={30} />
                :
                null
            }
            {activity === "Cycling" ?
                <CyclingIcon height={30} width={30} />
                :
                null
            }
        </View>
    )
}
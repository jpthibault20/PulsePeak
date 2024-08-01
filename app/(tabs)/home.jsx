import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { TemplatePP } from '../../components/tabs/TemplatePP'
import { generateCalendar } from '../../lib/calendar'
import { SwitchView } from '../../components/tabs/Calendar/switch'
import { MonthlyView } from '../../components/tabs/Calendar/MonthlyView'
import { WeeklyView } from '../../components/tabs/Calendar/WeeklyView'

const Home = () => {
    const [calendar, setCalendar] = useState([]);
    const [date, setDate] = useState(new Date());
    const [switchValue, setSwitchValue] = useState("M");

    useEffect(() => {
        setCalendar(generateCalendar(date.getFullYear(), date.getMonth()));
    }, [])

    return (
        <View className="bg-white h-full">
            <TemplatePP isLoading={true} />
            <View className="h-3/5 w-full bg-[#F4F4F4F4] bor">
                <View className="flex flex-row justify-between items-center p-6">
                    <View>
                        <Text className="font-mregular text-xl">
                            {date.toLocaleString('fr-FR', { month: 'long' })}, {date.toLocaleString('fr-FR', { year: 'numeric' })}
                        </Text>
                    </View>

                    <View >
                        <SwitchView
                            switchValue={switchValue}
                            setSwitchValue={setSwitchValue}
                        />
                    </View>
                </View>

                <View className="w-full border h-full">
                    {switchValue === "M" ? <MonthlyView calendar={calendar} /> : <WeeklyView calendar={calendar} />}
                </View>

            </View>
            <View className="h-full w-full">
                <Text>
                    Detail day calendar
                </Text>
            </View>
        </View>
    )
}

export default Home

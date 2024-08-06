import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { TemplatePP } from '../../components/tabs/TemplatePP'
import { generateCalendar } from '../../lib/calendar'
import { SwitchView } from '../../components/tabs/Calendar/switch'
import { MonthlyView } from '../../components/tabs/Calendar/MonthlyView'
import { WeeklyView } from '../../components/tabs/Calendar/WeeklyView'
import { DetailDay } from '../../components/tabs/Calendar/DetailDay'

const Home = () => {
    const [calendar, setCalendar] = useState([]);
    const [date, setDate] = useState(new Date());
    const [switchValue, setSwitchValue] = useState("M");
    const [selectedDay, setSelectedDay] = useState(new Date(new Date().getTime() + 7200000));

    useEffect(() => {
        setCalendar(generateCalendar(date.getFullYear(), date.getMonth()));
    }, []);


    return (
        <View className="bg-white h-full">
            <TemplatePP isLoading={true} />
            <View className="h-[55%] w-full bg-[#F4F4F4F4]">
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

                <View className="w-full">
                    {switchValue === "M" ?
                        <MonthlyView
                            calendar={calendar}
                            selectedDay={selectedDay}
                            setSelectedDay={setSelectedDay}
                        />
                        :
                        <WeeklyView calendar={calendar}
                        />}
                </View>

                <View className="items-center mt-8">
                    <View className="border rounded-xl w-[65px] bg-[#0552B1] border-[#0552B1]">
                    </View>
                </View>

            </View>
            <View className="h-full w-full">
                <DetailDay
                    selectedDay={selectedDay}
                    calendar={calendar}
                />
            </View>
        </View>
    )
}

export default Home

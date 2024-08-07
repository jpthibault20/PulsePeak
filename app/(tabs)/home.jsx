import React, { useEffect, useState, useRef } from 'react'
import { View, Text, SafeAreaView, PanResponder } from 'react-native'
import { TemplatePP } from '../../components/tabs/TemplatePP'
import { generateCalendarMonthly } from '../../lib/calendar'
import { SwitchView } from '../../components/tabs/Calendar/switch'
import { MonthlyView } from '../../components/tabs/Calendar/MonthlyView'
import { WeeklyView } from '../../components/tabs/Calendar/WeeklyView'
import { DetailDay } from '../../components/tabs/Calendar/DetailDay'
import { getMondayAndSunday } from '../../lib/calendar'
import { generateCalendarWeekly } from '../../lib/calendar'

const Home = () => {
    const [calendar, setCalendar] = useState([]);
    const [date, setDate] = useState(new Date());
    const [switchView, setSwitchView] = useState("M");
    const [selectedDay, setSelectedDay] = useState(new Date(new Date().getTime() + 7200000));
    const [title, setTitle] = useState("");

    // useRef pour stocker switchView
    const switchViewRef = useRef(switchView);

    // useEffect pour mettre à jour le useRef lorsque switchView change
    useEffect(() => {
        switchViewRef.current = switchView;
    }, [switchView]);

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderRelease: (evt, gestureState) => {
                // Si l'utilisateur a swipé de droite à gauche
                if (gestureState.dx < -50) {
                    setDate(prevDate => {
                        const newDate = new Date(prevDate);
                        switchViewRef.current === "M" ? newDate.setMonth(newDate.getMonth() + 1) : newDate.setDate(newDate.getDate() + 7);
                        return newDate;
                    })
                }
                // Si l'utilisateur a swipé de gauche à droite
                else if (gestureState.dx > 50) {
                    setDate(prevDate => {
                        const newDate = new Date(prevDate);
                        switchViewRef.current === "M" ? newDate.setMonth(newDate.getMonth() - 1) : newDate.setDate(newDate.getDate() - 7);
                        return newDate;
                    })
                }
            },
        })
    ).current;

    useEffect(() => {
        if (switchView === "M") {
            setCalendar(generateCalendarMonthly(date.getFullYear(), date.getMonth()));
            setTitle(date.toLocaleString('fr-FR', { month: 'long' }) + ", " + date.toLocaleString('fr-FR', { year: 'numeric' }));
        }
        else if (switchView === "W") {
            setCalendar(generateCalendarWeekly(date.getFullYear(), date.getMonth(), date.getDate()));
            // console.log(calendar)
            const { monday, sunday } = getMondayAndSunday(date);
            setTitle(monday + " - " + sunday + " " + date.toLocaleString('fr-FR', { month: 'long' }) + " " + date.toLocaleString('fr-FR', { year: 'numeric' }));
        }
    }, [switchView, date]);


    return (
        <View className="bg-white h-full">
            <TemplatePP isLoading={true} />
            <View className="h-[55%] w-full bg-[#F4F4F4]" {...panResponder.panHandlers}>
                {/* slide section */}
                <View className="flex flex-row justify-between items-center p-6">
                    <View>
                        <Text className="font-mregular text-xl">
                            {title}
                        </Text>
                    </View>
                    <View>
                        <SwitchView switchValue={switchView} setSwitchValue={setSwitchView} />
                    </View>
                </View>

                <View className="w-full">
                    {switchView === "M" ?
                        <MonthlyView
                            calendar={calendar}
                            selectedDay={selectedDay}
                            setSelectedDay={setSelectedDay}
                        />
                        :
                        <WeeklyView
                            calendar={calendar}
                            selectedDay={selectedDay}
                            setSelectedDay={setSelectedDay}
                            date={date}
                        />
                    }
                </View>

                <View className="items-center flex-1 justify-end mb-3">
                    <View className="border rounded-xl w-[65px] bg-[#0552B1] border-[#0552B1]" />
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

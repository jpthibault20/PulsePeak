import React, { useState, useContext } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Platform,
    ScrollView,
} from 'react-native';
import { GradientBackground } from "../../components/auth/GradientBackground";
import { useRouter } from 'expo-router';
import { ChevronLeft } from "../../assets/icons/svg/Chevronleft";
import { CustomButton } from "../../components/customButton";
import { CustomLink } from '../../components/CustomLink';
import AuthContext from '../../context/AuthContext';
import { ProgressBar } from '../../assets/icons/svg/ProgressBar';
import {DatePicker} from "../../components/DatePicker"

export default function SignUpDate() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { authState, setAuthState } = useContext(AuthContext);
    const [selectedDay, setSelectedDay] = useState(1);
    const [selectedMonth, setSelectedMonth] = useState(0);
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

    const months = [
        'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
        'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];


    const backbutton = () => {
        router.back();
    }

    const nextbutton = () => {
        const date = selectedDay + ' ' + months[selectedMonth] + ' ' + selectedYear;
        setAuthState((prevState) => ({
            ...prevState,
            date: date
        }));
        router.push('/sign-up_generated');
    }

    return (
        <GradientBackground>
            <SafeAreaView className="flex-1">
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    className="flex-1"
                    keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
                            <View className="flex-1 justify-between min-h-full">
                                {/* Header */}
                                <View className="w-full h-[90px] flex-row items-center">
                                    <View>
                                        <TouchableOpacity onPress={backbutton}>
                                            <ChevronLeft height={50} width={50} />
                                        </TouchableOpacity>
                                    </View>
                                    <View className="ml-8">
                                        <ProgressBar height={15} width={250} percentage={100}/>
                                    </View>
                                </View>

                                {/* Page content */}
                                <View className="w-full space-y-10">
                                    <View className="w-full justify-center items-center">
                                        <Text className="font-mregular text-white text-2xl text-center">
                                        Quand voulez vous atteindre votre
                                            <Text className="font-mbold"> pic de forme</Text>
                                            ?
                                        </Text>
                                    </View>

                                    <View>
                                        <DatePicker selectedDay={selectedDay} setSelectedDay={setSelectedDay} selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
                                    </View>
                                    <View className="w-full justify-center items-center px-6">
                                        <Text className="font-mregular text-white text-md text-center">
                                            Le pic de forme correspond à la periode ou vous voulez atteindre votre meilleure forme.
                                        </Text>
                                    </View>
                                    
                                </View>

                                {/* Footer */}
                                <View>
                                    <View className="w-full items-center">
                                    <CustomButton
                                            title="Ignorer"
                                            handlePress={() => skipbutton()}
                                            containerStyles="bg-[#1D4F68]"
                                            textStyles="text-white"
                                            isLoading={loading}
                                        />
                                        <CustomButton
                                            title="Suivant"
                                            handlePress={() => nextbutton()}
                                            containerStyles="mt-4 bg-[#E8E8E8]"
                                            isLoading={loading}
                                        />
                                    </View>

                                    <View className="w-full items-center my-4 mb-10">
                                        <CustomLink
                                            title1="Vous avez déjà un compte ? "
                                            titleLink="Connexion"
                                            link="/sign-in"
                                        />
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </GradientBackground>
    );
}

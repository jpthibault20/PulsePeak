import React, { useState, useContext, useEffect, useCallback } from 'react';
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
import AuthContext from '../../context/AuthContext';
import { ProgressBar } from '../../assets/icons/svg/ProgressBar';
import {DatePicker} from "../../components/DatePicker"
import { finaly_verification_signUp } from "../../api/verification_signUp";
import { FooterSignUp } from '../../components/auth/FooterSignUp';

export default function SignUpDate() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { authState, setAuthState } = useContext(AuthContext);
    const [selectedDay, setSelectedDay] = useState(1);
    const [selectedMonth, setSelectedMonth] = useState(0);
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [loadingAuthstate, setLoadingAuthstate] = useState(false);

    useEffect(() => {
        if(loadingAuthstate === true){
            finaly_verification_signUp(authState)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
            setLoadingAuthstate(false);
        }
    }, [loadingAuthstate]);

    const months = [
        'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
        'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];


    const backbutton = () => {
        router.back();
    }

    const skipbutton = () => {
        router.push('/sign-up_noGenerated');
    }

    const nextbutton = useCallback(() => {
        const date = `${selectedDay} ${months[selectedMonth]} ${selectedYear}`;
        setAuthState((prevState) => ({
            ...prevState,
            date: date,
        }));

        setLoadingAuthstate(true);
    }, [selectedDay, selectedMonth, selectedYear, setAuthState, authState, setLoadingAuthstate]);

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
                                    <FooterSignUp skipButton={true} nextButton={true} logInLink={true} skipFunction={skipbutton} nextFunction={nextbutton} loading={loading} />
                                </View>
                            </View>
                        </ScrollView>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </GradientBackground>
    );
}

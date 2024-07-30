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
    Alert,
} from 'react-native';
import { GradientBackground } from "../../components/auth/GradientBackground";
import { useRouter } from 'expo-router';
import { ChevronLeft } from "../../assets/icons/svg/Chevronleft";
import AuthContext from '../../context/AuthContext';
import { ProgressBar } from '../../assets/icons/svg/ProgressBar';
import { CustomRollingList } from '../../components/CustomRollingList';
import { FooterSignUp } from '../../components/auth/FooterSignUp';
import { goals_check } from '../../api/verification_signUp';
import { skip_signUp } from '../../api/verification_signUp';
import { finaly_verification_signUp } from '../../api/verification_signUp';

export default function SignUpGoals() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [goalsState, setGoalsState] = useState("");
    const [sportsState, setSportsState] = useState("");
    const [distanceState, setDistanceState] = useState("");
    const [typeState, setTypeState] = useState("");
    const { authState, setAuthState } = useContext(AuthContext);
    const [loadingAuthstate, setLoadingAuthstate] = useState(false);
    const [disabledAdvancedGoals, setDisabledAdvancedGoals] = useState(false);

    useEffect(() => {
        if (loadingAuthstate === true) {
            goals_check(authState)
                .then((response) => {
                    if (response.false) {
                        Alert.alert(response.false);
                    }
                    else {
                        if (authState.goal === "P") {
                            router.push('/sign-up_date');
                        }
                        else {
                            finaly_verification_signUp(authState)
                                .then((response) => {
                                    if (response.false) {
                                        Alert.alert(response.false);
                                    }
                                    else {
                                        router.push('/sign-up_generated');
                                    }
                                })
                                .catch((error) => {
                                    console.log(error);
                                });
                        }
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
            setLoadingAuthstate(false);
        }
    }, [loadingAuthstate]);

    useEffect(() => {
        if (goalsState === "P") {
            setDisabledAdvancedGoals(false);
        }
        else {
            setDisabledAdvancedGoals(true);
        }
    }, [goalsState]);

    const goals = [
        { label: 'Performance', value: 'P' },
        { label: 'Bien-être', value: 'B' },
    ];

    const sports = [
        { label: 'Vélo', value: 'V' },
        { label: 'Course à pied', value: 'C' },
        { label: 'Natation', value: 'N' },
        { label: 'Vélo, Course à pied', value: 'VC' },
        { label: 'Vélo, Natation', value: 'VN' },
        { label: 'Course à pied, Natation', value: 'CN' },
        { label: 'Vélo, Course à pied, Natation', value: 'VCN' },
    ];

    const distance = Array.from({ length: 301 }, (_, i) => ({ label: `${i} km`, value: i }));

    const type = [
        { label: 'plat', value: 'Pl' },
        { label: 'Vallonée', value: 'V' },
        { label: 'Montagneux', value: 'M' },
        { label: 'Piscine', value: 'Pi' },
        { label: 'Eau libre', value: 'El' },

    ];

    const backbutton = () => {
        router.back();
    }

    const skipbutton = () => {
        skip_signUp(authState)
            .then((response) => {
                if (response.false) {
                    Alert.alert(response.false);
                }
                else {
                    router.push('/sign-up_noGenerated');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const nextbutton = useCallback(() => {
        setLoadingAuthstate(true);

        setAuthState((prevState) => ({
            ...prevState,
            goal: goalsState,
            sport: sportsState,
            distance: distanceState,
            type: typeState
        }));
    }, [goalsState, sportsState, distanceState, typeState, setAuthState, authState, setLoadingAuthstate]);



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
                                        <ProgressBar height={15} width={250} percentage={83} />
                                    </View>
                                </View>

                                {/* Page content */}
                                <View className="w-full space-y-6">
                                    <View className="w-full justify-center items-center">
                                        <Text className="font-mregular text-white text-2xl text-center">
                                            Quels sont vos
                                            <Text className="font-mbold"> objectifs  </Text>
                                            ?
                                        </Text>
                                    </View>

                                    <View>
                                        <CustomRollingList
                                            title="Objectif"
                                            placeholder={'Votre objectif'}
                                            data={goals}
                                            setstate={setGoalsState}
                                            state={goalsState}
                                        />
                                        <CustomRollingList
                                            title="Sport"
                                            placeholder={"Sport de l'objectif"}
                                            data={sports}
                                            setstate={setSportsState}
                                            state={sportsState}
                                            disabled={disabledAdvancedGoals}
                                        />
                                        <CustomRollingList
                                            title="Distance"
                                            placeholder={"Distance de l'objectif"}
                                            data={distance}
                                            setstate={setDistanceState}
                                            state={distanceState}
                                            disabled={disabledAdvancedGoals}
                                        />
                                        <CustomRollingList
                                            title="Type"
                                            placeholder={"Type"}
                                            data={type}
                                            setstate={setTypeState}
                                            state={typeState}
                                            disabled={disabledAdvancedGoals}
                                        />
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

import React, { useState, useContext, useCallback, useEffect } from 'react';
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
import { ProgressBar } from "../../assets/icons/svg/ProgressBar";
import { PassportId } from "../../assets/images/svg/PassportId";
import { FormField } from '../../components/auth/FormField';
import AuthContext from '../../context/AuthContext';
import { FooterSignUp } from '../../components/auth/FooterSignUp';
import { trainingVolume_check } from '../../api/verification_signUp';
import InputDash from '../../components/InputDash';

export default function SignUpTrainingVolume() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { authState, setAuthState } = useContext(AuthContext);
    const [trainingVolume, setTrainingVolume] = useState("");
    const [loadingAuthstate, setLoadingAuthstate] = useState(false);

    useEffect(() => {
        if (loadingAuthstate === true) {
            trainingVolume_check(authState)
                .then((response) => {
                    if (response.false) {
                        Alert.alert(response.false);
                    }
                    else {
                        router.push('/sign-up_coach');
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
            setLoadingAuthstate(false);
        }
    }, [loadingAuthstate]);

    const backbutton = () => {
        router.back();
    }

    const skipbutton = () => {
        router.push('/sign-up_coach');
    }

    const nextbutton = useCallback(() => {
        setAuthState((prevState) => ({
            ...prevState,
            trainingVolume: trainingVolume
        }));

        setLoadingAuthstate(true);
    }, [trainingVolume, setAuthState, authState, setLoadingAuthstate]);


    return (
        <GradientBackground>
            <SafeAreaView className="flex-1">
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    className="flex-1"
                    keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <ScrollView
                            contentContainerStyle={{ flexGrow: 1 }}
                            keyboardShouldPersistTaps="handled"
                        >
                            <View className="flex-1 justify-between min-h-full">
                                {/* Header */}
                                <View className="w-full h-[90px] flex-row items-center">
                                    <TouchableOpacity onPress={backbutton}>
                                        <ChevronLeft height={50} width={50} />
                                    </TouchableOpacity>
                                    <View className="ml-8">
                                        <ProgressBar height={15} width={250} percentage={50} />
                                    </View>
                                </View>

                                {/* Page content */}
                                <View className="w-full space-y-28">
                                    <View className="w-full justify-center items-center px-4">
                                        <Text className="font-mregular text-white text-2xl text-center">
                                            Quel est votre
                                            <Text className="font-mbold"> volume d'entrainement</Text>
                                            actuel ?
                                        </Text>
                                    </View>

                                    <View>
                                        <InputDash title={"Nombre d'heure par semaine"} unit={"h/semaine"} setstate={setTrainingVolume} nbInput={2} />
                                    </View>

                                    <View>
                                        <Text className="font-mregular text-white text-md mt-6 text-center">
                                            Ce paramètre est configurable par la suite
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
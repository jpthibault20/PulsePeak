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
import { CustomButton } from "../../components/customButton";
import AuthContext from '../../context/AuthContext';
import { ProgressBar } from '../../assets/icons/svg/ProgressBar';
import { FooterSignUp } from '../../components/auth/FooterSignUp';
import { coach_check } from '../../api/verification_signUp';

export default function SignUpCoach() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { authState, setAuthState } = useContext(AuthContext);
    const [basicButton, setBasicButton] = useState(false)
    const [advancedButton, setAdvancedButton] = useState(false)
    const [loadingAuthstate, setLoadingAuthstate] = useState(false);

    useEffect(() => {
        if(loadingAuthstate === true){
            coach_check(authState)
            .then((response) => {
                if (response.false) {
                    Alert.alert(response.false);
                }
                else {
                    router.push('/sign-up_goals');
                }
            })
            setLoadingAuthstate(false);
        }
    }, [loadingAuthstate]);

    const handlePressBasic = () => {
        setBasicButton(!basicButton)
        setAdvancedButton(false)
    }

    const handlePressAdvanced = () => {
        setAdvancedButton(!advancedButton)
        setBasicButton(false)
    }

    const backbutton = () => {
        router.back();
    }

    const skipbutton = () => {
        router.push('/sign-up_goals');
    }

    const nextbutton = useCallback(() => {
        const coach_mode = basicButton ? "Basic" : (advancedButton ? "Advanced" : "");

        setAuthState((prevState) => ({
            ...prevState,
            coach_mode: coach_mode
        }));

        setLoadingAuthstate(true);
    }, [basicButton, advancedButton, setAuthState, authState, setLoadingAuthstate]);



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
                                        <ProgressBar height={15} width={250} percentage={67}/>
                                    </View>
                                </View>

                                {/* Content page */}
                                <View className="w-full space-y-10">
                                    <View className="w-full justify-center items-center">
                                        <Text className="font-mregular text-white text-2xl text-center">
                                            Configurons votre
                                            <Text className="font-mbold"> coach </Text>
                                            personnel
                                        </Text>
                                    </View>

                                    <View className="w-full justify-center items-center px-5">
                                        <Text className="font-mregular text-white text-md text-center">
                                            Si vous souhaitez pratiquer sans prise de tête le coach
                                            <Text className="font-mbold">
                                                {" "}basique{" "}
                                            </Text>
                                            es fais pour vous, si vous avez des besoin plus particulier le coach
                                            <Text className="font-mbold">
                                                {" "}avancé{" "}
                                            </Text> es là pour vous.
                                        </Text>
                                    </View>

                                    <View className="w-full flex flex-row space-x-10 justify-center">
                                        <View>
                                            <CustomButton
                                                title="Basique"
                                                handlePress={() => handlePressBasic()}
                                                containerStyles={`${basicButton ? ("bg-[#E8E8E8]") : ("bg-[#1D4F68]")} mt-14`}
                                                textStyles={`${basicButton ? ("text-black") : ("text-white")}`}
                                                isLoading={loading}
                                                largeButton={true}
                                            />
                                        </View>
                                        <View>
                                            <CustomButton
                                                title="Avancée"
                                                handlePress={() => handlePressAdvanced()}
                                                containerStyles={`${advancedButton ? ("bg-[#E8E8E8]") : ("bg-[#1D4F68]")} mt-14`}
                                                textStyles={`${advancedButton ? ("text-black") : ("text-white")}`}
                                                isLoading={loading}
                                                largeButton={true}

                                            />
                                        </View>
                                    </View>

                                    <View>
                                        <Text className="font-mregular text-white text-md text-center">
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

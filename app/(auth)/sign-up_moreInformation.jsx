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
import { HumanSymbole } from '../../components/HumanSymbole';
import InputDash from '../../components/InputDash';
import { FooterSignUp } from '../../components/auth/FooterSignUp';
import { moreInformation_check } from '../../api/verification_signUp';

export default function SignUpMoreInformation() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { authState, setAuthState } = useContext(AuthContext);
    const [malePressed, setMalePressed] = useState(false)
    const [femalePressed, setFemalePressed] = useState(false)
    const [hight, setHight] = useState("")
    const [weight, setWeight] = useState("")
    const [loadingAuthstate, setLoadingAuthstate] = useState(false);

    useEffect(() => {
        if (loadingAuthstate === true) {
            moreInformation_check(authState)
                .then((response) => {
                    if (response.false) {
                        Alert.alert(response.false);
                    }
                    else {
                        router.push('/sign-up_trainingVolume');
                    }
                })
            setLoadingAuthstate(false);
        }
    }, [loadingAuthstate]);

    const backbutton = () => {
        router.back();
    }

    const skipbutton = () => {
        router.push('/sign-up_trainingVolume');
    }

    const nextbutton = useCallback(() => {
        const gender = malePressed ? "Male" : (femalePressed ? "Female" : "");

        setAuthState((prevState) => ({
            ...prevState,
            gender: gender,
            hight: hight,
            weight: weight
        }));

        setLoadingAuthstate(true);
    }, [hight, weight, setAuthState, authState, setLoadingAuthstate]);

    return (
        <GradientBackground>
            <SafeAreaView className="flex-1">
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "hight"}
                    className="flex-1"
                    keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
                            <View className="flex-1 justify-between min-h-full">

                                {/* Header */}
                                <View className="w-full h-[90px] flex-row items-center">
                                    <TouchableOpacity onPress={backbutton}>
                                        <ChevronLeft height={50} width={50} />
                                    </TouchableOpacity>
                                    <View className="ml-8">
                                        <ProgressBar height={15} width={250} percentage={33} />
                                    </View>
                                </View>

                                {/* Page content */}
                                <View>
                                    <View className="w-full justify-center items-center px-4">
                                        <Text className="font-mregular text-white text-2xl text-center">
                                            Nous avons besoin d'un peu
                                            <Text className="font-mbold"> plus d'informations</Text>
                                        </Text>
                                    </View>

                                    <View className="w-full justify-center mt-6">
                                        <Text className="text-white font-mregular text-lg ml-6">Sexe</Text>
                                        <View className="flex-row items-center justify-center">
                                            <HumanSymbole
                                                sexe="Male"
                                                otherStyles={"mr-6"}
                                                setFemalePressed={setFemalePressed}
                                                setMalePressed={setMalePressed}
                                                femalePressed={femalePressed}
                                                malePressed={malePressed}
                                            />
                                            <Text className="text-white font-mregular text-lg">OU</Text>
                                            <HumanSymbole
                                                sexe="Female"
                                                otherStyles={"ml-6"}
                                                setFemalePressed={setFemalePressed}
                                                setMalePressed={setMalePressed}
                                                femalePressed={femalePressed}
                                                malePressed={malePressed}
                                            />
                                        </View>
                                    </View>
                                    <InputDash title={"poids"} unit={"kg"} setstate={setWeight} nbInput={3} />
                                    <InputDash title={"taille"} unit={"cm"} setstate={setHight} nbInput={3} />
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

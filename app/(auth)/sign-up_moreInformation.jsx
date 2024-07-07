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
import { ProgressBar2 } from '../../assets/icons/svg/ProgressBar2';
import { HumanSymbole } from '../../components/HumanSymbole';
import InputDash from '../../components/InputDash';

export default function SignUpMoreInformation() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { authState, setAuthState } = useContext(AuthContext);
    const [malePressed, setMalePressed] = useState(false)
    const [femalePressed, setFemalePressed] = useState(false)
    const [height, setHeight] = useState("")
    const [wight, setWight] = useState("")

    const backbutton = () => {
        router.back();
    }

    const nextbutton = () => {

        const gender = malePressed ? "Male" : (femalePressed ? "Female" : "");

        setAuthState((prevState) => ({
            ...prevState,
            gender: gender,
            height: height,
            wight: wight
        }));

        router.push('/sign-up_coach');
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
                                        <ProgressBar2 height={15} width={250} />
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
                                    <InputDash title={"wight"} setWight={setWight} />
                                    <InputDash title={"height"} setHeight={setHeight} />
                                </View>

                                {/* Footer */}
                                <View className="w-full items-center space-y-4">
                                    <View>
                                        <CustomButton
                                            title="Ignorer"
                                            handlePress={() => nextbutton()}
                                            containerStyles="bg-[#1D4F68]"
                                            textStyles="text-white"
                                            isLoading={loading}
                                        />
                                    </View>
                                    <View>
                                        <CustomButton
                                            title="Suivant"
                                            handlePress={() => nextbutton()}
                                            containerStyles="bg-[#E8E8E8]"
                                            isLoading={loading}
                                        />
                                    </View>
                                    <View className="w-full items-center mb-10">
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

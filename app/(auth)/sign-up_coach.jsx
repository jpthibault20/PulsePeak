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
import { ProgressBar3 } from '../../assets/icons/svg/ProgressBar3';

export default function SignUpCoach() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { authState, setAuthState } = useContext(AuthContext);
    const [basicButton, setBasicButton] = useState(false)
    const [advancedButton, setAdvancedButton] = useState(false)

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

    const nextbutton = () => {
        const coach_mode = basicButton ? "Basic" : (advancedButton ? "Advanced" : "");

        setAuthState((prevState) => ({
            ...prevState,
            coach_mode: coach_mode
        }));

        router.push('/sign-up_goals');
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
                                        <ProgressBar3 height={15} width={250} />
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
                                    <View className="w-full items-center">
                                        <CustomButton
                                            title="Ignorer"
                                            handlePress={() => nextbutton()}
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

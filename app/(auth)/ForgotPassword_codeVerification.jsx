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
import { EmailSvg } from "../../assets/icons/svg/EmailSvg";
import { VerificationCodeInput } from "../../components/VerificationCodeInput";

export default function ForgotPasswordCodeVerification() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [code, setCode] = useState("");

    const backbutton = () => {
        router.back();
    }

    const nextbutton = () => {
        router.push('/ForgotPassword_new');
    }

    const handlePressResendCode = () => {
        router.back();
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
                                </View>

                                {/* Page content */}
                                <View className="flex-1 justify-center px-4 space-y-6">
                                    <View className="w-full justify-center items-center">
                                        <Text className="font-mregular text-white text-3xl text-center">
                                            <Text className="font-mbold">Code</Text>
                                            {" "} de verification
                                        </Text>
                                    </View>
                                    <View>
                                        <Text className="font-mregular text-white text-md text-center">
                                            Entrer le code à 4 chiffres envoyé a .........................................................
                                        </Text>
                                    </View>
                                    <View className="w-full justify-center items-center">
                                        <EmailSvg height={250} width={300} />
                                    </View>
                                    <View className="w-full justify-center items-center">
                                        <VerificationCodeInput />
                                    </View>
                                    <View className="w-full justify-center items-center">
                                        <CustomButton
                                            title="Envoyer"
                                            handlePress={() => nextbutton()}
                                            containerStyles=" bg-[#E8E8E8]"
                                            isLoading={loading}
                                        />
                                    </View>
                                </View>

                                {/* Footer */}
                                <View className="w-full items-center space-y-6 mb-10">
                                    <View>
                                        <TouchableOpacity onPress={handlePressResendCode}>
                                            <Text className="text-white underline underline-offset-1 font-msemibold text-base">
                                                Renvoyer le code 1:38
                                            </Text>
                                        </TouchableOpacity>
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
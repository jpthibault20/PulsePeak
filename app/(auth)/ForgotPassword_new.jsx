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
import { ProgressBar } from "../../assets/icons/svg/ProgressBar";
import { PassportId } from "../../assets/images/svg/PassportId";
import { FormField } from '../../components/auth/FormField';
import { CustomButton } from "../../components/customButton";
import { CustomLink } from '../../components/CustomLink';
import { NewPasswordSvg } from "../../assets/icons/svg/NewPasswordSvg";

export default function NewPassword() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");   

    const backbutton = () => {
        router.back();
    }

    const nextbutton = () => {
        router.push('/ForgotPassword_codeVerification');
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
                                            Votre nouveau
                                            <Text className="font-mbold"> mot de passe</Text>
                                            {" "}?
                                        </Text>
                                    </View>
                                    <View>
                                        <Text className="font-mregular text-white text-md text-center">
                                            Pas de soucis, nous vous enverrons un code de réinitialisation !
                                        </Text>
                                    </View>
                                    <View className="w-full justify-center items-center">
                                        <NewPasswordSvg height={250} width={300} />
                                    </View>
                                    <View className="w-full justify-center items-center">
                                        <FormField
                                            title="password"
                                            value={password}
                                            handleChangeText={(e) => setPassword(e)}
                                            otherStyles=""
                                            placeholder="Nouveau mot de passe"
                                        />
                                        <FormField
                                            title="passwordConfirmation"
                                            value={passwordConfirmation}
                                            handleChangeText={(e) => setPasswordConfirmation(e)}
                                            otherStyles="mt-6"
                                            placeholder="Confirmation du mot de passe"
                                        />
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
                                <View>
                                    
                                </View>
                            </View>
                        </ScrollView>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </GradientBackground>
    );
}
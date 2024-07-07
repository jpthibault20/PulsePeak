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
import { ProgressBar4 } from '../../assets/icons/svg/ProgressBar4';
import { SelectSportTest } from '../../components/SelectSportTest';

export default function SignUpGoals() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { authState, setAuthState } = useContext(AuthContext);


    const backbutton = () => {
        router.back();
    }

    const nextbutton = () => {
        console.log(authState);
        // router.push('/sign-up');
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
                                        <ProgressBar4 height={15} width={250} />
                                    </View>
                                </View>

                                {/* Page content */}
                                <View className="w-full space-y-10">
                                    <View className="w-full justify-center items-center">
                                        <Text className="font-mregular text-white text-2xl text-center">
                                            Quels sont vos
                                            <Text className="font-mbold"> objectifs  </Text>
                                            ?
                                        </Text>
                                    </View>

                                    <View>
                                        <SelectSportTest />
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

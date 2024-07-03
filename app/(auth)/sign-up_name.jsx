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
import { ProgressBar1 } from "../../assets/icons/svg/Progressebar1";
import { PassportId } from "../../assets/images/svg/PassportId";
import { FormField } from '../../components/auth/FormField';
import { CustomButton } from "../../components/customButton";
import { CustomLink } from '../../components/CustomLink';
import AuthContext from '../../context/AuthContext';

export default function SignUpName() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { authState, setAuthState } = useContext(AuthContext);

    const backbutton = () => {
        router.back();
    }

    const nextbutton = () => {
        console.log(authState);
        router.push('/sign-up_moreInformation');
    }

    return (
        <GradientBackground>
            <SafeAreaView className="flex-1">
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    className="flex-1"
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                            <View className="w-full h-[90px] flex-row items-center">
                                <View>
                                    <TouchableOpacity onPress={backbutton}>
                                        <ChevronLeft height={50} width={50} />
                                    </TouchableOpacity>
                                </View>
                                <View className="ml-8">
                                    <ProgressBar1 height={15} width={250} />
                                </View>
                            </View>
                            <View className="w-full justify-center items-center">
                                <Text className="font-mregular text-white text-3xl text-center">
                                    Comment doit-on vous
                                    <Text className="font-mbold"> appeler</Text>
                                    {" "}?
                                </Text>
                            </View>
                            <View className="w-full justify-center items-center">
                                <PassportId height={300} width={300} />
                            </View>
                            <View className="w-full justify-center items-center">
                                <FormField
                                    title="lastname"
                                    value={authState.lastname}
                                    handleChangeText={(e) => setAuthState({ ...authState, lastname: e })}
                                    otherStyles=""
                                    placeholder="Nom"
                                />
                                <FormField
                                    title="firstname"
                                    value={authState.firstname}
                                    handleChangeText={(e) => setAuthState({ ...authState, firstname: e })}
                                    otherStyles="mt-6"
                                    placeholder="Prenom"
                                />
                            </View>
                            <View className="w-full items-center">
                                <CustomButton
                                    title="Suivant"
                                    handlePress={() => nextbutton()}
                                    containerStyles="mt-14 bg-[#E8E8E8]"
                                    isLoading={loading}
                                />
                            </View>
                            <View className="w-full items-center my-4">
                                <CustomLink
                                    title1="Vous avez déjà un compte ? "
                                    titleLink="Connexion"
                                    link="/sign-in"
                                />
                            </View>
                        </ScrollView>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </GradientBackground>
    );
}

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
import AuthContext from '../../context/AuthContext';

export default function SignUpName() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { authState, setAuthState } = useContext(AuthContext);

    const backbutton = () => {
        router.back();
    }

    const nextbutton = () => {
        router.push('/sign-up_moreInformation');
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
                                    <View className="ml-8">
                                        <ProgressBar height={15} width={250} percentage={20} />
                                    </View>
                                </View>

                                {/* Page content */}
                                <View className="flex-1 justify-center px-4">
                                    <View className="w-full justify-center items-center">
                                        <Text className="font-mregular text-white text-3xl text-center">
                                            Comment doit-on vous
                                            <Text className="font-mbold"> appeler</Text>
                                            {" "}?
                                        </Text>
                                    </View>
                                    <View className="w-full justify-center items-center my-8">
                                        <PassportId height={200} width={200} />
                                    </View>
                                    <View className="w-full justify-center items-center">
                                        <FormField
                                            title="firstname"
                                            value={authState.firstname}
                                            handleChangeText={(e) => setAuthState({ ...authState, firstname: e })}
                                            otherStyles=""
                                            placeholder="Prenom"
                                        />
                                        <FormField
                                            title="lastname"
                                            value={authState.lastname}
                                            handleChangeText={(e) => setAuthState({ ...authState, lastname: e })}
                                            otherStyles="mt-6"
                                            placeholder="Nom"
                                        />
                                    </View>
                                </View>

                                {/* Footer */}
                                <View className="w-full items-center space-y-6 mb-10">
                                    <CustomButton
                                        title="Suivant"
                                        handlePress={() => nextbutton()}
                                        containerStyles=" bg-[#E8E8E8]"
                                        isLoading={loading}
                                    />
                                    <View>
                                        <CustomLink
                                            title1="Vous avez déjà un compte ? "
                                            titleLink="Connexion"
                                            link="/sign-in"
                                            containerStyles=""
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
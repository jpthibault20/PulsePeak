import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ScrollView,
  SafeAreaView
} from 'react-native';
import { GradientBackground } from "../../components/auth/GradientBackground";
import { useRouter } from 'expo-router';
import AuthContext from '../../context/AuthContext';
import { CustomButton } from "../../components/customButton";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { FinishLine } from "../../assets/icons/svg/FinishLine";

const SignUpGenerated = () => {
  const { authState, setAuthState } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const nextbutton = () => {
    router.replace('/home');
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
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'handled' }}>
              <View className="flex-1 justify-between min-h-full">

                {/* Header */}
                <View></View>

                {/* Content page */}
                <View className="w-full justify-center items-center space-y-10 p-6">
                  <Text className="font-mregular text-center text-2xl mt-10 text-white">
                    Génération de votre <Text className="font-mbold"> assistant</Text> !
                  </Text>
                  <FinishLine width={300} height={300}/>
                  <LoadingSpinner text="Cette opération peut prendre un certain temps, veuillez patienter" />
                </View>


                {/* Footer */}
                <View className="w-full justify-center items-center mb-10">
                  <CustomButton
                    title="Terminer"
                    handlePress={() => nextbutton()}
                    containerStyles="mt-4 bg-[#E8E8E8]"
                    isLoading={loading}
                  />
                </View>

              </View>
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </GradientBackground>
  );
};

export default SignUpGenerated;

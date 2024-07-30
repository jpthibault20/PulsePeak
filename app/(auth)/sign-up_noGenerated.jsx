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
import { NoFiles } from "../../assets/icons/svg/NoFiles";

const signUpNoGenerated = () => {
  const { authState, setAuthState } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const nextbutton = () => {
    router.replace("/Home");
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
                    Votre
                    <Text className="font-mbold"> compte </Text>
                    es créé mais nous ne vous
                    <Text className="font-mbold"> connaissons pas encore assez </Text>
                    pour le moment
                  </Text>
                  <NoFiles width={300} height={300} />
                  <Text className="font-mregular text-center text-md mt-6 text-white">
                    Vous pourrez modifier vos informations plus tard
                  </Text>
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

export default signUpNoGenerated;

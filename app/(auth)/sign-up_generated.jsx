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

const SignUpGenerated = () => {
  const { authState, setAuthState } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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
                <Text> data : 
                  {JSON.stringify(authState)}
                </Text>
              </View>


              {/* Footer */}
              <View className="w-full justify-center items-center mb-10">
                
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

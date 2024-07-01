import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ScrollView
} from 'react-native';
import { GradientBackground } from "../../components/auth/GradientBackground";
import { FormField } from '../../components/auth/FormField';
import { CustomLink } from '../../components/CustomLink';
import { CustomButton } from "../../components/customButton";
import { OAuthButton } from "../../components/auth/OAuthButton";
import { supabase } from '../../lib/supabase';
import { useRouter } from 'expo-router';
import AuthContext from '../../context/AuthContext';

const SignUp = () => {
  const { authState, setAuthState } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function signUpWithEmail() {
    setLoading(true);
    // const {
    //   data: { session },
    //   error,
    // } = await supabase.auth.signUp({
    //   email: form.email,
    //   password: form.password,
    // })

    // if (error) Alert.alert(error.message);
    // if (!session) Alert.alert('Please check your inbox for email verification!');
    router.push('/sign-up_name');
    setLoading(false);
  }

  return (
    <GradientBackground>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
            <View className="w-full h-full justify-center items-center space-y-10">
              <View className="mx-5">
                <Text className="text-white font-mregular text-3xl text-center">
                  <Text className="font-mbold">Créer un compte </Text>
                  pour commencer !
                </Text>
              </View>
              <View>
                <FormField
                  title="Email"
                  value={authState.email}
                  handleChangeText={(e) => setAuthState({ ...authState, email: e })}
                  otherStyles="mt-6"
                  placeholder="Adresse mail"
                />
                <FormField
                  title="Password"
                  value={authState.password}
                  handleChangeText={(e) => setAuthState({ ...authState, password: e })}
                  otherStyles="mt-6"
                  placeholder="Mot de passe"
                />
                <View>
                  <CustomButton
                    title="S'enregistrer"
                    handlePress={() => signUpWithEmail()}
                    containerStyles="mt-14 bg-[#E8E8E8]"
                    isLoading={loading}
                  />
                </View>
              </View>
              <View className="flex-row items-center mx-10">
                <View className="flex-1 h-px bg-white"></View>
                <Text className="font-medium text-white mx-3">S'inscrire avec</Text>
                <View className="flex-1 h-px bg-white"></View>
              </View>
              <View className="w-full">
                <OAuthButton />
              </View>
              <View>
                <CustomLink
                  title1="Vous avez déjà un compte ? "
                  titleLink="Connexion"
                  link="/sign-in"
                />
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </GradientBackground>
  );
};

export default SignUp;

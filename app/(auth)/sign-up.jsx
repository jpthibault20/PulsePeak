import React, { useState } from 'react'
import { View, Text, Alert } from 'react-native'
import { GradientBackground } from "../../components/auth/GradientBackground"
import { FormField } from '../../components/auth/FormField'
import { CustomLink } from '../../components/CustomLink'
import { CustomButton } from "../../components/customButton"
import { OAuthButton } from "../../components/auth/OAuthButton"
import { supabase } from '../../lib/supabase'

const SignUp = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false)
  
  async function signUpWithEmail() {
    setLoading(true)
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
    })

    if (error) Alert.alert(error.message)
    if (!session) Alert.alert('Please check your inbox for email verification!')
    setLoading(false)
  }


  return (
    <GradientBackground>
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
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              otherStyles="mt-6"
              placeholder="Adresse mail"
            />
            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
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
          title1="Vous avez déja un compte ? "
          titleLink="Connexion"
          link="/sign-in"
        />
          </View>
        </View>
      
    </GradientBackground>
  )
}
export default SignUp;
import React, { useState } from 'react'
import { View, Text, Alert } from 'react-native'
import { GradientBackground } from "../../components/auth/GradientBackground"
import { FormField } from '../../components/auth/FormField'
import { CustomLink } from '../../components/CustomLink'
import { CustomButton } from "../../components/customButton"
import { OAuthButton } from "../../components/auth/OAuthButton"
import { supabase } from '../../lib/supabase'
import { Redirect, router } from "expo-router"

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {

    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    })

    if (error) {
      Alert.alert(error.message)
      setLoading(false)
      return
    }
    Alert.alert("connected")
    router.push("/home")
    setLoading(false)
  }

  return (
    <GradientBackground>
      <View className="w-full h-full justify-center items-center space-y-10">
        <View className="mx-5">
          <Text className="text-white font-mregular text-3xl text-center">
            <Text className="font-mbold">Bonjour</Text>
            , heureux de vous revoir !
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
          <View className="justify-end items-end mt-3 mr-3">
            <CustomLink
              titleLink="Mot de passe oublié ?"
              link="/home"
            />
          </View>
          <View>
            <CustomButton
              title="Se connecter"
              handlePress={() => signInWithEmail()}
              isLoading={loading}
              containerStyles="mt-14 bg-[#E8E8E8]"
            />
          </View>
        </View>
        <View className="flex-row items-center mx-10">
          <View className="flex-1 h-px bg-white"></View>
          <Text className="font-medium text-white mx-3">Se connecter avec</Text>
          <View className="flex-1 h-px bg-white"></View>
        </View>
        <View className="w-full">
          <OAuthButton />
        </View>
        <View>
          <CustomLink
            title1={"Pas de compte ? "}
            titleLink="Inscrivez vous"
            link="/sign-up"
          />
        </View>
      </View>
    </GradientBackground>
  )
}
export default SignIn;
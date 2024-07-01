import React, { useEffect, useState } from 'react'
import { View, Text, Alert } from 'react-native'
import { GradientBackground } from '../../components/auth/GradientBackground'
import { CustomButton } from '../../components/customButton'
import { supabase } from '../../lib/supabase'
import { router } from 'expo-router'

const home = () => {
    const [session_id, setSession_id] = useState("");
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getSessionId = async () => {
            const response = await supabase.auth.getSession();
            const { data, error } = response;

            if (error) {
                Alert.alert('Erreur lors de la connexion:', error.message);
            } else if (data && data.session && data.session.user) {
                setSession_id(data.session.user.id);
            }
        }

        const getUser = async () => {
            if (session_id) {
                const response = await supabase
                    .from('users')
                    .select('*')
                    .eq('session_id', session_id);
                const { data, error } = response;

                if (error) {
                    console.log("Err : ", error.message);
                } else if (data) {
                    setUser(data[0]); // Si vous attendez un seul utilisateur
                }
            }
        }

        getSessionId()
        getUser()

    }, [session_id])

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut()
        if (error) Alert.alert('Erreur lors de la déconnexion:', error.message)
        if (!error) router.replace("/")
    }

    return (
        <GradientBackground>
            <View className="w-full h-full justify-center items-center space-y-4">
                <Text className="text-white font-msemibold text-2xl">Home page</Text>
                <CustomButton
                    title={"logout"}
                    handlePress={handleLogout}
                    containerStyles={"bg-white mt-10"}
                />
                <View>
                    <View>
                        <Text>Session_id : {session_id}</Text>
                    </View>
                    <View>
                        <Text>firstname : {user ? user.firstName : ''}</Text>
                    </View>
                    <View>
                        <Text>lastname : {user ? user.lastName : ''}</Text>
                    </View>
                </View>
            </View>
        </ GradientBackground>
    )
}

export default home

import React from 'react'
import { View, Text, ActivityIndicator, TouchableOpacity, Alert, StatusBar, Platform } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { TextMe } from '../../assets/icons/svg/TextMe'
import { useState, useEffect } from 'react'
import { TextInputComponent } from "../TextInputComponent"
import { reportBug } from "../../api/reportBug"
import { supabase } from '../../lib/supabase'


export const TemplatePP = ({ isLoading }) => {
    const [modalVisible, setModalVisible] = useState(false)
    const [TextInput, setTextInput] = useState("")
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

    const onSubmit = () => {
        reportBug({ TextInput, user })
            .then(res => {
                if (res.error) {
                    Alert.alert('Erreur lors de la soumission du bug:', res.error);
                } else {
                    Alert.alert("Bug soumis avec succès");
                    setTextInput("");
                }
            })
            .catch(err => {
                Alert.alert('Err. ', err.message);
            })
    }

    return (
        <View className="w-full bg-white">
            <StatusBar barStyle="dark-content" />
            <TextInputComponent
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                Title="Signaler un bug"
                detail=""
                placholder="Détails de votre problème (context, pages, etapes, etc.)"
                TextInputprops={TextInput}
                setTextInputprops={setTextInput}
                onSubmit={onSubmit}
            />
            <View className={Platform.OS === 'android' ? 'h-[58px]' : 'h-[80px]'}>
                <LinearGradient
                    colors={['#03BADB', '#0097B2', '#0552B1']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    className="flex-1"
                >
                    <View className="flex-row justify-between items-end h-full">
                        <View className="h-full flex items-center justify-end ml-2 mb-1">
                            {isLoading ? <ActivityIndicator size={40} color="#ffffff" /> : null}
                        </View>

                        <TouchableOpacity
                            className="flex-row items-center space-x-2 mr-2 mb-3"
                            onPress={() => setModalVisible(true)}
                        >
                            <Text className="text-white text-xs font-mregular">
                                Version Beta - Signaler un bug
                            </Text>
                            <TextMe width={20} height={20} />
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        </View >
    )
}
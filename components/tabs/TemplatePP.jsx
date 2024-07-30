import React from 'react'
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { TextMe } from '../../assets/icons/svg/TextMe'
import { useState } from 'react'
import { TextInputComponent } from "../TextInputComponent"

export const TemplatePP = ({ children, isLoading }) => {
    const [modalVisible, setModalVisible] = useState(false)
    const [TextInput, setTextInput] = useState("")

    return (
        <View className="w-full h-full bg-white">
            <TextInputComponent
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                Title="Signaler un bug"
                detail=""
                placholder="Détails de votre problème (context, pages, etapes, etc.)"
                TextInput={setTextInput}
                setTextInput={setTextInput}
            />
            <View className="h-[58px]">
                <LinearGradient
                    colors={['#03BADB', '#0097B2', '#0552B1']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    className="flex-1"
                >
                    <View className="flex-row justify-between items-center h-full">
                        <View className="h-full flex items-center justify-center ml-2">
                            {isLoading ? <ActivityIndicator size={40} color="#ffffff" /> : null}
                        </View>

                        <TouchableOpacity
                            className="flex-row items-center space-x-2 mr-2"
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

            {children}
        </View >
    )
}
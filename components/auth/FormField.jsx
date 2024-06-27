import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

export const FormField = ({title, value, placeholder, handleChangeText, otherStyles, keyboardType, ...props}) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <View className={`space-y-2 w-[350px] h-[50px] ${otherStyles}`}>
            <View className="flex-row w-full h-full px-4 border-2 border-[#D9D9D9] rounded-2xl bg-[#68ADD0]  items-center">
                <TextInput 
                    className="flex-1 text-white font-msemibold text-base "
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#DCDCDC"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === 'Password' && !showPassword}
                />
            </View>
        </View>
    )
}
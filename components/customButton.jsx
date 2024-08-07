import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import React from 'react'

export const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading, largeButton }) => {


    return (
        <TouchableOpacity
            className={`${largeButton ? ("h-28") : ("h-[50px]")} ${largeButton ? (`w-36`) : ("w-[350px]")}  rounded-xl items-center justify-center  ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
            onPress={handlePress}
            style={styles.shadow}
            activeOpacity={0.7}
            disabled={isLoading}
        >
            <Text className={`font-msemibold text-lg ${textStyles}`}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    shadow: {
        // Ombrage pour iOS
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        // Ombrage pour Android
        elevation: 5,
    },
});
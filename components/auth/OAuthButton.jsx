import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'; // Assurez-vous d'importer useRouter
import { GoogleIcon } from "../../assets/icons/svg/GoogleIcon"
import { FacebookIcon } from '../../assets/icons/svg/FacebookIcon'


const Button = ({ title }) => {
    const router = useRouter(); // Utilisez le hook useRouter

    const handlePress = () => {
        if (title === "Google") {
            router.push("/");
        } else {
            router.push("/sign-in");
        }
    };
    return (
        <View className="flex-1 items-center justify-center">
            <TouchableOpacity onPress={handlePress} style={styles.shadow} className="items-center justify-center bg-[#E8E8E8] w-[150px] h-[50px] p-2 rounded-xl">
                    {title === "Google" ? (
                        <GoogleIcon height={"30px"} width={"30px"} />
                    ) : (
                        <FacebookIcon height={"30px"} width={"30px"} />
                    )}
            </TouchableOpacity>
        </View>
    )
}

export const OAuthButton = () => {
    return (
        <View className="flex-row w-full">
            <Button title="Google" />
            <Button title="Facebook" />
        </View>
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
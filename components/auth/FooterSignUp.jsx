import React from 'react'
import { View } from 'react-native'
import { CustomButton } from '../customButton';
import { CustomLink } from '../CustomLink';

export const FooterSignUp = ({ skipButton, nextButton, logInLink, skipFunction, nextFunction, loading }) => {
    return (
        <View className="w-full items-center space-y-4">
            {skipButton ? (
                <View>
                    <CustomButton
                        title="Ignorer"
                        handlePress={() => skipFunction()}
                        containerStyles="bg-[#1D4F68]"
                        textStyles="text-white"
                        isLoading={loading}
                    />
                </View>
            ):null}
            {nextButton ? (
                <View>
                    <CustomButton
                        title="Suivant"
                        handlePress={() => nextFunction()}
                        containerStyles="bg-[#E8E8E8]"
                        isLoading={loading}
                    />
                </View>
            ):null}
            {logInLink ? (
                <View className="w-full items-center">
                    <CustomLink
                        title1="Vous avez déjà un compte ? "
                        titleLink="Connexion"
                        link="/sign-in"
                    />
                </View>
            ):null}
        </View>
    )
}
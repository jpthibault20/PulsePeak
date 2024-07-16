import React from 'react';
import { View, Text } from 'react-native';
import { InputDashCode } from './InputDashCode';

export default function InputDash({ title, otherStylescontainer, otherStylesTitle, setstate,  }) {

    return (
        <View className={`w-full justify-center px-6 mt-6 ${otherStylescontainer}`}>
            <Text className={`text-white font-mregular text-lg ${otherStylesTitle}`}>{title === "weight" ? "Poids" : "Taille"}</Text>
            <View className="flex-row space-x-5 items-center">
                <InputDashCode setInput={setstate} />
                <Text className="text-white font-mbold text-xl">{title === "weight" ? "kg" : "cm"}</Text>
            </View>
        </View>
    );

}
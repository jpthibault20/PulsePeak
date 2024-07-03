import React from 'react';
import { View, Text, TextInput } from 'react-native';

export default function InputDash({ title, otherStylescontainer, otherStylesTitle, setHeight, setWeight }) {

    const onPressValues = (e) => {
        if (title === "weight") {
            setWeight(e)
        }
        else if (title === "height") {
            setHeight(e)
        }
    }

    return (
        <View className={`w-full justify-center px-6 mt-6 ${otherStylescontainer}`}>
            <Text className={`text-white font-mregular text-lg ${otherStylesTitle}`}>{title === "weight" ? "Poids" : "Taille"}</Text>
            <View className="flex-row space-x-5 items-center">
                <TextInput
                    className="w-[100px] border-b-[3px] border-b-white h-full font-mregular text-2xl ml-16"
                    placeholder="00"
                    keyboardType="numeric"
                    placeholderTextColor={"white"}
                    color="white"
                    textAlign='center'
                    textAlignVertical='center'
                    onChangeText={(e) => onPressValues(e)}
                />
                <Text className="text-white font-mbold text-xl">{title === "weight" ? "kg" : "cm"}</Text>
            </View>
        </View>
    );

}
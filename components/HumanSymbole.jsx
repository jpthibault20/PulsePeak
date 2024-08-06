import { View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Male } from '../assets/icons/svg/Male'
import { Femelle } from '../assets/icons/svg/Femelle'

export const HumanSymbole = ({ height, width, sexe, otherStyles, setFemalePressed, setMalePressed, femalePressed, malePressed }) => {

    const onPress = (type) => {
        if (type === "male") {
            setMalePressed(!malePressed)
            setFemalePressed(false)
        }
        else if (type === "female") {
            setFemalePressed(!femalePressed)
            setMalePressed(false)
        }
    }

    if (sexe === "Male") {
        return (
            <TouchableOpacity
                className={`${malePressed === true ? ("bg-[#FFFFFF]") : ("bg-[#1D4F68]")} w-[70px] h-[90px] rounded-xl justify-center items-center ${otherStyles}`}
                onPress={() => onPress("male")}
            >
                <Male height={77} width={45} color={malePressed === true ? "1D4F68" : "FFFFFF"} />
            </TouchableOpacity>
        )
    }
    else if (sexe === "Female") {
        return (
            <TouchableOpacity
                className={`${femalePressed === true ? ("bg-[#FFFFFF]") : ("bg-[#1D4F68]")} w-[70px] h-[90px] rounded-xl justify-center items-center ${otherStyles}`}
                onPress={() => onPress("female")}
            >
                <Femelle height={77} width={45} color={femalePressed === true ? "1D4F68" : "FFFFFF"} />
            </TouchableOpacity>
        )
    }
}
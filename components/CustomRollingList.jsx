import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { AntDesign } from '@expo/vector-icons';

export const CustomRollingList = ({ title, placeholder, data, setstate, state, disabled }) => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    if(disabled){
        return (
            <View className="px-4 py-2 opacity-50 mt-4" >
                <View>
                    <Text className="text-md font-mmedium text-white mb-2">
                        {title}
                    </Text>
                </View>
                <View className="border-b border-white">
                    <Text className="text-base font-mmedium text-black mb-2 px-2">
                        {placeholder}
                    </Text>

                </View>
            </View>
        );
    }


    return (
            <View className={`px-4 py-2 ${disabled ? "opacity-50" : ""}`} >
                <View>
                    <Text className="text-md font-mmedium text-white mb-2">
                        {title}
                    </Text>
                </View>
                <View className="border-b border-white">
                    <Dropdown
                        className="h-12  rounded-lg px-2"
                        placeholderStyle="text-base"
                        selectedTextStyle="text-base"
                        inputSearchStyle="h-10 text-base"
                        iconStyle="w-5 h-5"
                        data={data}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? placeholder : '...'}
                        value={state}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setstate(item.value);
                            setIsFocus(false);
                        }}
                        renderRightIcon={() => (
                            <AntDesign name="caretdown" size={15} color="white" />
                        )}
                    />
                </View>
            </View>
    );
};
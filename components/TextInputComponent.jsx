import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal, StyleSheet, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView, Platform, Keyboard } from 'react-native'
import { CustomButton } from './customButton'

export const TextInputComponent = ({ modalVisible, setModalVisible, Title, detail, placholder, TextInputprops, setTextInputprops, onSubmit }) => {


    const onSubmitPress = () => {
        onSubmit();
        setModalVisible(false)
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss();
                setModalVisible(false);
            }}>

                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{ flex: 1 }}
                >
                    <View className="flex-1 justify-center items-center mt-22">
                        <TouchableWithoutFeedback onPress={() => { }}>
                            <View
                                style={styles.modalView}
                            >
                                <Text className="font-mbold text-lg">
                                    {Title}
                                </Text>
                                {detail ? <Text className="font-mregular text-black text-sm mt-2">
                                    {detail}
                                </Text> : null}
                                <TextInput
                                    placeholder={placholder}
                                    value={TextInputprops}
                                    onChangeText={setTextInputprops}
                                    multiline={true}
                                    className="w-[300px] h-[100px] rounded-xl  bg-[#D9D9D9] font-mregular text-black p-2 mt-5"
                                />

                                <CustomButton
                                    title="Valider"
                                    handlePress={onSubmitPress}
                                    containerStyles={`mt-4 border p-2 rounded-xl justify-center items-center bg-[#004AA6] w-36`}
                                    textStyles="text-white font-mregular"
                                    isLoading={false}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </Modal >
    )
}


const styles = StyleSheet.create({
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }
})
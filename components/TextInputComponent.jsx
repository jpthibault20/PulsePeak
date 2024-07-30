import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal, StyleSheet, TextInput } from 'react-native'


export const TextInputComponent = ({ modalVisible, setModalVisible, Title, detail, placholder, TextInputprops, setTextInputprops }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View className="flex-1 justify-center items-center mt-22">
                <View
                    style={styles.modalView}
                >
                    <Text className="font-mbold text-lg">
                        {Title}
                    </Text>
                    <TextInput
                        placeholder={placholder}
                        value={TextInputprops}
                        onChangeText={setTextInputprops}
                    />
                    <TouchableOpacity
                        onPress={() => setModalVisible(false)}
                        className="mt-4 border p-2 rounded-xl justify-center items-center bg-red-900"
                    >
                        <Text className="text-white font-mbold">
                            Hide modal
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </Modal >
    )
}


const styles = StyleSheet.create({
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
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
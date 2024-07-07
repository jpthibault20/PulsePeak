import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, StyleSheet } from 'react-native';

export const SelectSportTest = () => {
    const [selectedSports, setSelectedSports] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const sports = [
        { label: 'Vélo', value: 'vélo' },
        { label: 'Course à pied', value: 'course à pied' },
        { label: 'Natation', value: 'natation' },
    ];

    const toggleSport = (sport) => {
        setSelectedSports((prevSelectedSports) =>
            prevSelectedSports.includes(sport)
                ? prevSelectedSports.filter((s) => s !== sport)
                : [...prevSelectedSports, sport]
        );
    };

    return (
        <View className="p-4">
            <Text className="text-xl font-bold text-white mb-2">Objectif</Text>
            <TouchableOpacity
                className="border border-white rounded p-2 bg-transparent"
                onPress={() => setModalVisible(true)}
            >
                <Text className="text-white">
                    {selectedSports.length > 0
                        ? selectedSports.join(', ')
                        : 'Votre objectif'}
                </Text>
                <Text className="text-white absolute right-3 top-3">⌄</Text>
            </TouchableOpacity>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.overlay} className="flex-1 justify-center items-center">
                    <View style={styles.modalView} className="rounded-lg p-4 w-3/4">
                        <ScrollView>
                            {sports.map((sport) => (
                                <TouchableOpacity
                                    key={sport.value}
                                    className="flex-row items-center mb-2"
                                    onPress={() => toggleSport(sport.value)}
                                >
                                    <View className={`w-4 h-4 border-2 border-gray-300 rounded ${selectedSports.includes(sport.value) ? 'bg-blue-500' : 'bg-white'}`} />
                                    <Text className="ml-2">{sport.label}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                        <TouchableOpacity
                            className="mt-4 bg-blue-500 p-2 rounded"
                            onPress={() => setModalVisible(false)}
                        >
                            <Text className="text-white text-center">Confirmer</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.65)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});
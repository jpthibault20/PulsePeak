import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView } from 'react-native';

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
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
                    <View className="bg-white rounded p-4 w-3/4">
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
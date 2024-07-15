import React, { useState } from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export const DatePicker = ({selectedDay, setSelectedDay, selectedMonth, setSelectedMonth, selectedYear, setSelectedYear}) => {

    

    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = [
        'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
        'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];
    const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i);

    return (
        <View className={`flex-row space-around items-center p-6 ${Platform.OS === 'android' ? 'pt-20' : 'pb-28'}`}>
            <View className="flex-1 items-center">
            {Platform.OS === 'android' && <Text className="text-lg font-mbold mb-2 text-white">Jour</Text>}
                <Picker
                    selectedValue={selectedDay}
                    onValueChange={(itemValue) => setSelectedDay(itemValue)}
                    style={Platform.OS === 'ios' ? styles.pickerIOS : styles.pickerAndroidDays}
                    itemStyle={styles.pickerItem}
                    
                >
                    {days.map(day => (
                        <Picker.Item key={day} label={day.toString()} value={day} />
                    ))}
                </Picker>
            </View>

            <View className="flex-1 items-center">
            {Platform.OS === 'android' && <Text className="text-lg font-mbold mb-2 text-white">Mois</Text>}
                <Picker 
                    selectedValue={selectedMonth}
                    onValueChange={(itemValue) => setSelectedMonth(itemValue)}
                    style={Platform.OS === 'ios' ? styles.pickerIOS : styles.pickerAndroid}
                    itemStyle={styles.pickerItem}
                >
                    {months.map((month, index) => (
                        <Picker.Item key={index} label={month} value={index} />
                    ))}
                </Picker>
            </View>

            <View className="flex-1 items-center">
                {Platform.OS === 'android' && <Text className="text-lg font-mbold mb-2 text-white">Année</Text>}
                <Picker
                    selectedValue={selectedYear}
                    onValueChange={(itemValue) => setSelectedYear(itemValue)}
                    style={Platform.OS === 'ios' ? styles.pickerIOS : styles.pickerAndroidYears}
                    className="text-white"
                    itemStyle={styles.pickerItem}
                >
                    {years.map(year => (
                        <Picker.Item key={year} label={year.toString()} value={year} />
                    ))}
                </Picker>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    pickerIOS: {
        width: 150,
        height: 100, 
        
    },
    pickerAndroid: {
        marginTop: 10,
        width: 170,
        height: 10, 
        color: 'white',
    },
    pickerAndroidDays: {
        marginTop: 10,
        width: 100,
        height: 10, 
        color: 'white',
    },
    pickerAndroidYears: {
        marginTop: 10,
        width: 120,
        height: 10, 
        color: 'white',
    },
    pickerItem: {
        height: 200, 
        fontSize: 16,
        color: 'white',
    },
});

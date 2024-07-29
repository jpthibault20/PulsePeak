import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';

export const InputDashCode = ({ setInput, CELL_COUNT }) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const handleChange = (newValue) => {
        setValue(newValue);
        setInput(newValue); // Met à jour le state dans le parent
    };

    return (
        <View style={styles.root}>
            <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={handleChange}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                    <View
                        onLayout={getCellOnLayoutHandler(index)}
                        key={index}
                        style={[styles.cell, isFocused && styles.focusCell]}
                    >
                        <Text style={styles.text}>
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        padding: 20,
        minHeight: 20,
    },
    codeFieldRoot: {
        marginTop: 0,
    },
    cell: {
        width: 40,
        height: 40,
        lineHeight: 40,
        fontSize: 24,
        borderBottomWidth: 3,
        borderColor: '#fff',
        textAlign: 'center',
        marginHorizontal: 10,  // Marge horizontale entre les cellules
    },
    focusCell: {
        borderColor: '#1D4F68',  // Couleur de la bordure lorsqu'elle est active
    },
    text: {
        fontSize: 24,
        color: '#fff',
        textAlign: 'center',
        lineHeight: 40,
    },
});

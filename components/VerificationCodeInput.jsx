import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';

const CELL_COUNT = 4;  // Le nombre de chiffres du code

export const VerificationCodeInput = () => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <View style={styles.root}>
            <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
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
        marginTop: 20,
    },
    cell: {
        width: 60,
        height: 60,
        lineHeight: 60,
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#fff',
        textAlign: 'center',
        borderRadius: 10,  // Bord arrondi
        marginHorizontal: 10,  // Marge horizontale entre les cellules
    },
    focusCell: {
        borderColor: '#00f',  // Couleur de la bordure lorsqu'elle est active
    },
    text: {
        fontSize: 24,
        textAlign: 'center',
        lineHeight: 60,
    },
});
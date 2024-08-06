import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export const GradientBackground = ({ children }) => {
    return (
        <LinearGradient
            colors={['#004AA6', '#48C4DB']}
            className="flex-1"
        >
            {children}
        </LinearGradient>
    );
}

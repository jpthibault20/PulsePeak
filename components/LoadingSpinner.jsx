import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

export const LoadingSpinner = ({text}) => {
  return (
    <View>
        <ActivityIndicator size="large" color="#ffffff" />
        <Text className="font-mregular text-white text-md text-center mt-6">{text}</Text>
    </View>
  )
}
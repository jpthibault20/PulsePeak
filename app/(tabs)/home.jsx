import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { TemplatePP } from '../../components/tabs/TemplatePP'

const Home = () => {
    return (
        <SafeAreaView className="bg-white">
            <TemplatePP isLoading={true} />
            <View className="border m-2 mb-[100px]">
                <Text>
                    Home page
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default Home

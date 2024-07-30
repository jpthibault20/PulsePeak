import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { TemplatePP } from '../../components/tabs/TemplatePP'

const Home = () => {
    return (
        <SafeAreaView className="bg-white">
            <TemplatePP>
                <View className="border m-2 mb-[100px]">
                    <Text>
                        Home page
                    </Text>
                </View>
            </TemplatePP>
        </SafeAreaView>
    )
}

export default Home

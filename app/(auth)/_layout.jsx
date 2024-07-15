import { View, Text } from 'react-native'
import { Stack } from 'expo-router'
import { AuthProvider } from '../../context/AuthContext'


const AuthLayout = () => {
    return (
        <AuthProvider>
            <Stack>
                <Stack.Screen
                    name='sign-in'
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name='sign-up'
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name='sign-up_name'
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name='sign-up_moreInformation'
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='sign-up_coach'
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='sign-up_goals'
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='sign-up_date'
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='sign-up_generated'
                    options={{
                        headerShown: false
                    }}
                />
            </Stack>
        </AuthProvider>
    );
}

export default AuthLayout
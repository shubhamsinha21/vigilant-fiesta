import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native'
import { LinearGradient } from 'react-native-linear-gradient'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function WelcomeScreen({ navigation }) {
    return (
        <>
            <View className="flex flex-1 justify-end">
                {/* Background Image */}
                <Image source={require("../assets/welcome.jpg")} className="w-full h-full absolute" />

                {/* content */}
                <View className="px-4 space-y-6 py-12">
                    <LinearGradient
                        colors={["transparent", "rgba(255, 255, 255, 0.2)"]}
                        style={{ width: wp(100), height: hp(60) }}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                        className="bottom-0 absolute"
                    />

                    <View className="space-y-6">
                        <Text className="text-white 
                         border-b-2 w-52 ml-3 border-white text-left" style={{ fontSize: wp(10) }}>Let's Travel</Text>
                        <Text className="text-neutral-200 font-medium ml-2" style={{ fontSize: wp(4) }}>Travelling is made easy with { }
                            <Text className="text-white text-2xl" style={{ fontSize: wp(8) }}>Travely</Text>.
                            Experience the best travelling journey with us.
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Text className="bg-white font-semibold text-black mx-auto p-3 px-8 rounded-full shadow-md shadow-white" style={{ fontSize: wp(6) }}>Let's go</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </>
    )
}
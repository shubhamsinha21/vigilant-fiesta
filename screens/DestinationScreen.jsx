import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { ChevronLeftIcon, HeartIcon } from 'react-native-heroicons/solid';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DestinationScreen(props) {

    const { navigation } = props;
    const destinationInfo = props.route.params;
    const [isFavorite, , setIsFavorite] = useState(false);

    return (
        <View className="bg-white">
            {/* destination screen image */}
            <Image source={destinationInfo.image}
                className="rounded-b-lg"
                style={{ width: wp(100), height: hp(55) }}
            />

            {/* back button */}
            <SafeAreaView className="flex-row justify-between absolute w-full items-center mt-8">
                <TouchableOpacity className="p-2 rounded-full ml-4"
                    style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
                    onPress={() => navigation.navigate("Home")}
                >
                    <ChevronLeftIcon size={wp(7)} color="white" strokeWidth={4} />
                </TouchableOpacity>

                <TouchableOpacity className="p-2 mr-4 rounded-full "
                    style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
                    onPress={() => setIsFavorite(!isFavorite)}
                >
                    <HeartIcon size={wp(7)} color={isFavorite ? "red" : "white"} strokeWidth={4} />
                </TouchableOpacity>
            </SafeAreaView>

            {/* title description and booking button */}
            <View>
                <ScrollView>
                    <View>
                        <Text>

                        </Text>
                        <Text>

                        </Text>
                    </View>
                </ScrollView>
            </View>

        </View>
    )
}
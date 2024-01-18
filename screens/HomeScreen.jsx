import { View, Text, ScrollView, TouchableOpacity, Image, Platform, TextInput } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Category from '../components/Category';


export default function HomeScreen() {
    const ios = Platform.OS === 'ios';
    const topMargin = ios ? 'mt-3' : 'mt-4'
    return (
        <ScrollView className={"" + topMargin}>

            {/* avatar */}
            <View className="flex-row justify-between mx-5 items-center mb-12">
                <Text className="text-neutral-800 font-bold" style={{ fontSize: wp(7) }}>Lets Discover</Text>
                <TouchableOpacity>
                    <Image source={require("../assets/avatar.png")}
                        style={{ width: wp(12), height: hp(6) }}
                    />
                </TouchableOpacity>
            </View>

            {/* search bar */}
            <View className="mx-5 mb-6">
                <View className="flex-row bg-neutral-200 rounded-full p-2 pl-6 items-center space-x-2">
                    <Image source={require("../assets/search-bar.png")} style={{ width: wp(6), height: hp(3) }} />
                    <TextInput placeholder="Search Destinations" className="font-neutral text-black" style={{ fontSize: wp(5) }} />
                </View>
            </View>

            {/* categories */}
            <View className="mb-4">
                <Category />
            </View>
        </ScrollView>
    )
}
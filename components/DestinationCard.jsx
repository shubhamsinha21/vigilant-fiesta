import { Text, TouchableOpacity, Image } from 'react-native'
import { LinearGradient } from 'react-native-linear-gradient'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { HeartIcon } from "react-native-heroicons/solid";
import { useState } from 'react'


export default function DestinationCard({ item, navigation }) {

    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("Destination")}
            style={{ width: wp(44), height: hp(40) }} className="flex justify-end p-4 py-6 mb-5 space-y-2 relative">
            <Image source={item.image} className="absolute rounded-3xl" style={{ width: wp(44), height: hp(40) }} />
            <LinearGradient
                colors={["transparent", "rgba(0, 0, 0, 0.8)"]}
                style={{ width: wp(44), height: hp(20) }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                className="bottom-0 absolute rounded-3xl"
            />
            <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)} className="absolute top-1 right-4 rounded-full p-1.5" style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}>
                <HeartIcon size={wp(5)} color={isFavorite ? "red" : "white"} />
            </TouchableOpacity>
            <Text className="text-white font-semibold" style={{ fontSize: wp(4) }}>{item.title}</Text>
            <Text className="text-white font-medium" style={{ fontSize: wp(3) }}>{item.shortDescription}</Text>
        </TouchableOpacity>
    )
}
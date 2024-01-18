import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react'

export default function Category() {
    return (
        <View className="">
            <View className="mx-5 flex-row justify-between items-center">
                <Text style={{ fontSize: wp(4) }} className="text-neutral-800 font-semibold">Categories</Text>
                <TouchableOpacity>
                    <Text className="text-orange-600 font-medium" style={{ fontSize: wp(4) }}>See all</Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                horizontal
                contentContainerStyle={{ paddingHorizontal: 10 }}
                showsHorizontalScrollIndicator={false}
                className="space-x-4"
            >
            </ScrollView>
        </View>
    )
}
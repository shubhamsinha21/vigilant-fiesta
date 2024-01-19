import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react'
import { categoriesData } from '../constants/constants';

export default function Category() {
    return (
        <View className="space-y-4">
            <View className="mx-5 flex-row justify-between items-center">
                <Text style={{ fontSize: wp(4) }} className="text-neutral-700 font-semibold">Categories</Text>
                <TouchableOpacity>
                    <Text className="text-orange-600 font-medium" style={{ fontSize: wp(4) }}>See all</Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                horizontal
                alwaysBounceVertical={true}
                contentContainerStyle={{ paddingHorizontal: 10 }}
                showsHorizontalScrollIndicator={false}
                className="space-x-4"
            >
                {categoriesData.map((category, index) => {
                    return (
                        <TouchableOpacity key={index} className="flex items-center">
                            <Image source={category.image} style={{ width: wp(20), height: hp(10) }} className="rounded-2xl" />
                            <Text className="font-medium text-neutral-700" style={{ fontSize: wp(4) }}>{category.title}</Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </View>
    )
}
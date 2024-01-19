import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { sortCategories } from '../constants/constants'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function SortCategory() {
    const [activeSort, setActiveSort] = useState("Popular");
    return (
        <View className="flex-row justify-around items-center mx-4 bg-neutral-200 p-2 rounded-full space-x-2">
            {
                sortCategories.map((SortCategory, index) => {
                    let isActive = SortCategory === activeSort;
                    let activeButton = isActive ? "bg-white" : "null"
                    return (
                        <TouchableOpacity key={index} onPress={() => setActiveSort(SortCategory)} className={`${activeButton} p-3 rounded-full px-4`}>
                            <Text className={`${isActive ? "text-orange-500" : "text-black"} font-semibold`} style={{ fontSize: wp(4) }} >{SortCategory}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}
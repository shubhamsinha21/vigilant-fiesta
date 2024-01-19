import { destinationsData } from '../constants/constants'
import { View } from 'react-native'
import DestinationCard from './DestinationCard'

export default function Destination({ navigation }) {
    return (
        <View className="flex-row justify-around mx-4 flex-wrap">
            {
                destinationsData.map((destinations, index) => {
                    return (
                        <DestinationCard navigation={navigation} key={index} item={destinations} />
                    )
                })
            }
        </View>
    )
}

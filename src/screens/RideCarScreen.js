import React from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { Button, Text } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import { Avatar } from '@rneui/themed'
import { Ionicons } from '@expo/vector-icons'
import { StoreContext } from '../../App'

const RideCarScreen = () => {

    const cars = [
        {
            id: 1,
            name: "Uber Go",
            image: require("../../assets/cars/UberGo.png")
        },
        {
            id: 2,
            name: "Premier",
            image: require("../../assets/cars/Premier.png")
        },
        {
            id: 3,
            name: "Go Sedan",
            image: require("../../assets/cars/GoSedan.png")
        },
        {
            id: 4,
            name: "Moto",
            image: require("../../assets/cars/Moto.png")
        },
        {
            id: 5,
            name: "UberXL",
            image: require("../../assets/cars/UberXL.png")
        },
        {
            id: 6,
            name: "Toto",
            image: require("../../assets/cars/Toto.png")
        },
    ]

    const {state} = React.useContext(StoreContext)
    const navigation = useNavigation()

    const [distance, setDistance] = React.useState(null)
    const [duration, setDuration] = React.useState(null)
    const [car, setCar] = React.useState(null)

    React.useEffect(() => {
        if(!state.distance || !state.duration) return

        setDistance(state.distance)
        setDuration(state.duration)

    }, [state.distance, state.duration])

    const handleback = () => {
        navigation.navigate("RideNavigation")
    }

    const Car = ({item}) => {
        return(
            <TouchableOpacity style={[{flex: 1, flexDirection: "row"}, item.id === car?.id && {borderWidth: 1, borderStyle: "solid", borderRadius: 10, borderColor: "grey"}]} 
                activeOpacity={1}
                key={item.id}
                onPress={() => setCar(item)}
            >
                <Avatar size={88} source={item.image} />
                <View style={{paddingTop: 16}}>
                    <Text style={{fontSize: 20, fontWeight: "500"}}>{item.name}</Text>
                    <Text style={{fontSize: 14, fontWeight: "normal"}}>Affordable, compact rides</Text>
                    <Text style={{fontSize: 12, color: "#6b6b6b"}}>In 12 mins. 03:54 drop-off</Text>
                </View>
                <View style={{paddingTop: 16, paddingHorizontal: 20}}>
                    <Text style={{fontSize: 17, fontWeight: "bold"}}>₹212.50</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const ItemSeparatorComponent = () => {
        return (
            <View style={{height: 10}}></View>
        )
    }

    return (
        <View style={{flex: 1, backgroundColor: "white", paddingHorizontal: 10}}>
            <View style={{flex: 0.1, flexDirection: "row", alignItems: "center", paddingVertical: 4, borderBottomWidth: 0.4, borderBottomStyle: "solid", borderBottomColor: "grey"}}>
                <Ionicons name="arrow-back" size={24} color="black" onPress={handleback} />
                {distance && duration && <Text style={{fontSize: 17, fontWeight: "500", marginHorizontal: 50}}>Travel {distance} km - {duration} h</Text>}
            </View>
            <View style={{flex: 0.8, paddingVertical: 10}}>
                <FlatList 
                    data={cars}
                    renderItem={Car}
                    ItemSeparatorComponent={ItemSeparatorComponent}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <Button 
                containerStyle={{flex: 0.2}}
                buttonStyle={{width: "100%"}}
                title={`Choose ${car?.name || ""}`}
                size="lg"
                color="black"
            />
        </View>
    )
}

export default RideCarScreen
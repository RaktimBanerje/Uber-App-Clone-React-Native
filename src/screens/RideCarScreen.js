import { Text } from '@rneui/base'
import React from 'react'
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Avatar } from '@rneui/themed';

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
    ]

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "white"
        }
    })

    const Car = ({item, index}) => {
        return(
            <TouchableOpacity style={{
                flex: 1,
                flexDirection: "row",
            }} 
            activeOpacity={1}
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
        <View style={styles.container}>
            <FlatList 
                data={cars}
                renderItem={Car}
                ItemSeparatorComponent={ItemSeparatorComponent}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default RideCarScreen
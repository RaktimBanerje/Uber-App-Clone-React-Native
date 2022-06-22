import React from 'react'
import { StyleSheet, FlatList, TouchableOpacity, View } from 'react-native'
import { Button, Text } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import { Avatar } from '@rneui/themed'
import { Ionicons } from '@expo/vector-icons'
import { StoreContext } from '../../App'

const RideOptionScreen = () => {

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

    const styles = StyleSheet.create({
        container: {
            flex: 1, 
            backgroundColor: "white", 
            paddingHorizontal: 10
        },
        headerContainer: {
            flex: 0.1, 
            flexDirection: "row", 
            alignItems: "center", 
            paddingVertical: 4, 
            borderBottomWidth: 0.4, 
            borderBottomStyle: "solid", 
            borderBottomColor: "grey"
        },
        headerText: {
            fontSize: 17, 
            fontWeight: "500", 
            paddingHorizontal: 50
        },
        listContainer: {
            flex: 0.8, 
            paddingVertical: 10
        },
        buttonContainerStyle: {
            flex: 0.2
        },
        buttonStyle: {
            width: "100%"
        },
        optionContainer: {
            flex: 1, 
            flexDirection: "row"
        },
        selectedOptionStyle: {
            borderWidth: 1, 
            borderStyle: "solid", 
            borderRadius: 10, 
            borderColor: "grey"
        },
        optionInformationContainer: {
            paddingTop: 16
        },
        optionHeading1Style: {
            fontSize: 20, 
            fontWeight: "500"
        },
        optionHeading2Style: {
            fontSize: 14, 
            fontWeight: "normal"
        },
        optionHeading3Style: {
            fontSize: 12, 
            color: "#6b6b6b"
        },
        optionPriceContainer: {
            paddingTop: 16, 
            paddingHorizontal: 20
        },
        optionPriceStyle: {
            fontSize: 17, 
            fontWeight: "bold"
        },
        itemSeparatorStyle: {
            height: 10
        }
    })

    const navigation = useNavigation()
    const {state} = React.useContext(StoreContext)
    const [rideOption, setRideOption] = React.useState(null)

    const RideOption = ({item}) => {
        return(
            <TouchableOpacity style={[styles.optionContainer, item.id === rideOption?.id && styles.selectedOptionStyle]} 
                activeOpacity={1}
                key={item.id}
                onPress={() => setRideOption(item)}
            >
                <Avatar size={88} source={item.image} />
                <View style={styles.optionInformationContainer}>
                    <Text style={styles.optionHeading1Style}>{item.name}</Text>
                    <Text style={styles.optionHeading2Style}>Affordable, compact rides</Text>
                    <Text style={styles.optionHeading3Style}>In 12 mins. 03:54 drop-off</Text>
                </View>
                <View style={styles.optionPriceContainer}>
                    <Text style={styles.optionPriceStyle}>₹212.50</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const ItemSeparatorComponent = () => {
        return (
            <View style={styles.itemSeparatorStyle}></View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Ionicons name="arrow-back" size={24} color="black" onPress={() => navigation.navigate("RideNavigation")} />
                {
                    state.distance && 
                    state.duration && 
                    <Text style={styles.headerText}>Travel {state.distance} km - {state.duration} h</Text>
                }
            </View>
            <View style={styles.listContainer}>
                <FlatList 
                    data={cars}
                    renderItem={RideOption}
                    ItemSeparatorComponent={ItemSeparatorComponent}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <Button 
                containerStyle={styles.buttonContainerStyle}
                buttonStyle={styles.buttonStyle}
                title={`Choose ${rideOption?.name || ""}`}
                size="lg"
                color="black"
            />
        </View>
    )
}

export default RideOptionScreen
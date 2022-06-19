import React from 'react'
import SafeAreaView from 'react-native-safe-area-view'
import { StyleSheet, Image, View, TouchableOpacity, FlatList } from 'react-native'
import { Text, Button } from '@rneui/base'
import { Ionicons } from '@expo/vector-icons'; 

const HomeScreen = ({navigation}) => {

    const services = [
        {
            id: 1,
            title: "Get a ride",
            image: require("../../assets/cars/UberGo.png"),
            screen: "Ride"
        },
        {
            id: 2,
            title: "Order food",
            image: require("../../assets/foods/bread.png"),
            screen: "Eat"
        },
    ]

    const Service = ({item, index}) => {

        const pressHandler = () => {
            navigation.navigate(item.screen)
        }

        return (
            <TouchableOpacity style={styles.box} activeOpacity={0.5} key={item.id} onPress={pressHandler}>
                <Image source={item.image} style={styles.boxImage} />
                <View style={styles.boxContent}>
                    <Text h4>{item.title}</Text>
                    <Ionicons name="arrow-forward-circle" size={40} color="black" />
                </View>
            </TouchableOpacity>
        )
    }
    
    const ItemSeparatorComponent = () => {
        return (
            <View style={{width: 10}}></View>
        )
    }
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginHorizontal: 10,
        },
        textContainer: {
            marginTop: 60,
            marginHorizontal: 6,
            flex: 0.1
        },
        // mapContainer: {
        //     flex: 0.5,
        // },  
        serviceContainer: {
            // flex: 0.4,
            flex: 0.8, 
            flexDirection: "row", 
            justifyContent: 'space-around'
        },
        buttonContainerStyle: {
            flex: 0.1,
        },
        box: {
            width: 165,
            backgroundColor: "whitesmoke",
            borderRadius: 10,
            borderStyle: "solid",
            borderWidth: 1, 
            borderColor: "#b5b5b5",
            height: 200,
        },
        boxImage: {
            height: 88, 
            width: "100%"
        },
        boxContent: {
            flex: 1,
            justifyContent: 'space-evenly',
            marginHorizontal: 26
        },
    })

    return (
        <SafeAreaView style={styles.container}>
           
            <View style={styles.textContainer}>
                <Text h1>Uber</Text>
            </View>
            
            {/* <View style={styles.mapContainer}></View> */}
           
            <View style={styles.serviceContainer}> 
                <FlatList 
                    data={services}
                    renderItem={Service}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={ItemSeparatorComponent}
                    horizontal
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            
            <Button 
                containerStyle={styles.buttonContainerStyle}
                title="Enter your pick up point"
                size="lg"
                color="black"
            />
    
        </SafeAreaView>
    )
}



export default HomeScreen
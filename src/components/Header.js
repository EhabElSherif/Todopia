import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.title}> My Todos </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        height:50,
        justifyContent:"center",
        backgroundColor:"coral"
    },
    title:{
        fontWeight:"bold",
        fontSize:20,
        color:"white",
        marginLeft:10
    }
})

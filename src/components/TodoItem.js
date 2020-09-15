import React, { Component } from 'react'
import { Text,View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class TodoItem extends Component {
    render() {
        return (
            <TouchableOpacity onPress={()=>this.props.deleteItem(this.props.item.id)}>
                <View style={styles.item}>
                    <Icon name="close-circle" size={18} color="#333" />
                    <Text style={styles.text}>{this.props.item.text}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    item:{
        flexDirection:"row",
        padding:16,
        marginTop:16,
        borderRadius:5,
        borderStyle:"dashed",
        borderColor:"grey",
        borderWidth:1,
    },
    text:{
        marginLeft:10
    }
})

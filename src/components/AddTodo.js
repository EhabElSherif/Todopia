import React, { Component } from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class AddTodo extends Component {

    constructor(props){
        super(props)
        
        this.state = {
            text:""
        }

        this.changeText = this.changeText.bind(this)
    }

    changeText = (newText)=>{
        this.setState({text:newText})
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="new todo..."
                    onChangeText={this.changeText}
                ></TextInput>
                <TouchableOpacity style={styles.button} onPress={()=>this.props.insertItem(this.state.text)}>
                    <Icon name="add" color="#ddd" size={24}></Icon>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center"
    },
    input:{
        flex:1,
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:2,
        borderBottomColor:"#999"
    },
    button:{
        backgroundColor:"coral",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:50,
        width:40,
        height:40,
    }
})

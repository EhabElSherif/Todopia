import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, Alert } from 'react-native'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'

export default class TodoList extends Component {

    constructor(props){
        super(props)

		this.state={
			todos:[
			]
        }
        
		this.renderItem = this.renderItem.bind(this)
		this.deleteItem = this.deleteItem.bind(this)
		this.insertItem = this.insertItem.bind(this)
    }

	renderItem = ({item})=>{
		return <TodoItem item={item} deleteItem={this.deleteItem}></TodoItem>
    }
    
    deleteItem = (id)=>{
        this.setState({
            todos: this.state.todos.filter( item =>item.id != id )
        })
    }

    insertItem = (text)=>{
        if(text.length <= 3){
            return Alert.alert(
                "Invalid Todo Description",
                "Todo must be more than 3 characters long",
                ["Ok"]
            )
        }
        let newItem = {
            text:text,
            id:Math.random().toString()
        }
        this.setState({
            todos: [newItem,...this.state.todos]
        })
    }

    render() {
        return (
            <View style={styles.list}>
                <AddTodo insertItem={this.insertItem}></AddTodo>
                {
                    this.state.todos.length == 0 ?
                    <Text style={{alignSelf:"center",color:"#333",marginTop:10}}>No Todos</Text>
                    :
                    <FlatList 
                        data={this.state.todos}
                        keyExtractor={(item)=>item.id}
                        renderItem={this.renderItem}
                    ></FlatList>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
	list:{
		flex:1,
		marginTop:4
    },
});


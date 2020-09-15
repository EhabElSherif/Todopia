import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import TodoList from './src/components/TodoList';
import Header from './src/components/Header';

export default class App extends Component {

	constructor(props){
		super(props)
	}

	render() {
		return (
			<TouchableWithoutFeedback onPress={()=>{
				Keyboard.dismiss();
			}}>
				<View style={styles.container}>
					<Header></Header>
					<View style={styles.content}>
						<TodoList></TodoList>
					</View>
				</View>
			</TouchableWithoutFeedback>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:"#ffffff"
	},
	content:{
		flex:1,
		marginTop:10,
		paddingHorizontal:20
	}
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "aa0fcbbe87f6e74889b2273ea5099672";

export default class extends React.Component {
	state = {
		isLoading: true
	};

	// define get openweather api function
	getWeather = async(latitude, longitude) => {
		const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
		console.log(data);
	};
	getLocation = async() => {
		try {
			await Location.requestForegroundPermissionsAsync();
			const { coords: { latitude, longitude }
			} = await Location.getCurrentPositionAsync();
			
			// send weather api call
			this.getWeather(latitude, longitude);
			
			// 위 작업 전부 처리되면 로딩화면 종료
			this.setState({ isLoading: false });
			} catch (error) {
			Alert.alert("Can't find you.", "So sad");
		}
		
		
	}
	
	componentDidMount(){
		this.getLocation();
	}
  render() {
		const { isLoading } = this.state;
		return isLoading ? <Loading /> : null;
	}
}
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";
import {WEATHER_API_KEY} from "./environment.js";


export default class extends React.Component {
	state = {
		isLoading: true
	};

	// define get openweather api function
	getWeather = async(latitude, longitude) => {
		const { 
			data: {
				main: { temp },
				weather
			}
		} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`);
		this.setState({
			isLoading: false,
			condition: weather[0].main,
			temp
		});
	};
	getLocation = async() => {
		try {
			await Location.requestForegroundPermissionsAsync();
			const { coords: { latitude, longitude }
			} = await Location.getCurrentPositionAsync();
			
			// send weather api call
			this.getWeather(latitude, longitude);
			
			} catch (error) {
			Alert.alert("Can't find you.", "So sad");
		}
	}
	
	componentDidMount(){
		this.getLocation();
	}
  render() {
		const { isLoading, temp, condition } = this.state;
		return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
	}
}
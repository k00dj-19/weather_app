import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
 
const weatherOptions = {
	Haze: {
		iconName: "weather-hail",
		gradient: ["#4DA0B0", "#D39D38"]
	},
	Thunderstorm: {
		iconName: "weather-lightning",
		gradient: ["#181818", "#BA8B02"]
	},
	Drizzle: {
		iconName: "weather-rainy",
		gradient: ["#3a6073", "#3a7bd5"]
	},
	Rain: {
		iconName: "weather-pouring",
		gradient: ["#283E51", "#4B79A1"]		
	},
	Snow: {
		iconName: "weather-snowy",
		gradient: ["#ADA996", "#EAEAEA"]		
	},
	Atmosphere: {
		iconName: "soundcloud",
		gradient: ["#C6FFDD","#FBD786","#DBDBDB"]		
	},
	Clear: {
		iconName: "white-balance-sunny",
		gradient: ["#f8b500", "#fceabb", "#DBDBDB"]		
	},
	Cloud: {
		iconName: "weather-cloudy",
		gradient: ["#2c3e50","#bdc3c7"]		
	},
	Mist: {
		iconName: "weather-fog",
		gradient: ["#000000","#e74c3c"]		
	},
	Smoke: {
		iconName: "weather-fog",
		gradient: ["#3f4c6b","#606c88"]		
	},
	Dust: {
		iconName: "weather-hail",
		gradient: ["#544a7d", "#ffd452"]		
	}
}


export default function Weather({temp, condition}){
	return (
		<LinearGradient 
			colors={weatherOptions['Dust'].gradient}
			style={styles.container}
		>
			<StatusBar barStyle="light-content"/>
			<View style={styles.halfContainer}>
				<MaterialCommunityIcons
					name={weatherOptions['Dust'].iconName}
					size={96}
					color="white"
				/>
				<Text style={styles.temp}>{temp}°</Text>
			</View>
			<View style={styles.halfContainer}>
			</View>
		</LinearGradient>
	);
}

Weather.propTypes = {
	temp: PropTypes.number.isRequired,
	condition: PropTypes.oneOf([
		"Thunderstorm",
		"Drizzle", // 이슬비
		"Rain",
		"Snow",
		"Atmosphere",
		"Clear",
		"Clouds",
		"Mist",
		"Smoke",
		"Haze", // 연무
		"Dust",
	]).isRequired
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	temp: {
		fontSize: 42,
		color: "white",
	},
	halfContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}
})
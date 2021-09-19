import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
 
const weatherOptions = {
	Haze: {
		iconName: "weather-hail",
		gradient: ["#4DA0B0", "#D39D38"],
		title: "Haze",
		subtitle: "Just don't go outside"
	},
	Thunderstorm: {
		iconName: "weather-lightning",
		gradient: ["#373B44", "#4286f4"]
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
		gradient: ["#f8b500", "#fceabb", "#DBDBDB"],
		title: "Clear",
		subtitle: "It's Sunny Day!!"
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
			colors={weatherOptions[condition].gradient}
			style={styles.container}
		>
			<StatusBar barStyle="light-content"/>
			<View style={styles.halfContainer}>
				<MaterialCommunityIcons
					name={weatherOptions[condition].iconName}
					size={96}
					color="white"
				/>
				<Text style={styles.temp}>{temp}°</Text>
			</View>
			<View style={{...styles.halfContainer, ...styles.textContainer}}>
				<Text style={styles.title}>{weatherOptions[condition].title}</Text>
				<Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
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
	},
	title: {
		color: "white",
		fontSize: 44,
		fontWeight: "300",
		marginBottom: 10
	},
	subtitle:{
		color: "white",
		fontSize: 24,
		fontWeight: "600"
	},
	textContainer: {
		paddingHorizontal: 20,
		alignItems: "flex-start"
	}
})
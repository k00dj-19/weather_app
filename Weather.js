import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
 
const weatherOptions = {
	Haze: {
		iconName: "dehaze",
		gradient: ["#4DA0B0", "D39D38"]
	},
	Thunderstorm: {
		iconName: "",
		gradient: []
	},
	Drizzle: {
		iconName: "",
		gradient: []
	},
	Rain: {
		iconName: "",
		gradient: []		
	},
	Snow: {
		iconName: "",
		gradient: []		
	},
	Atmosphere: {
		iconName: "",
		gradient: []		
	},
	Clear: {
		iconName: "",
		gradient: []		
	},
	Cloud: {
		iconName: "",
		gradient: []		
	},
	Mist: {
		iconName: "",
		gradient: []		
	},
	Smoke: {
		iconName: "",
		gradient: []		
	},
	Haze: {
		iconName: "",
		gradient: []		
	},
	Dust: {
		iconName: "",
		gradient: []		
	},
}


export default function Weather({temp}){
	return (
		<LinearGradient 
			colors={weatherOptions[condition].gradient}
			style={styles.container}
		>
			<StatusBar barStyle="light=content"/>
			<View style={styles.halfContainer}>
				<MaterialCommunityIcons
					name={weatherOptions[condition].iconName}
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
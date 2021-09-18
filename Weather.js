import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

export default function Weather({temp}){
	return (
		<View style={styles.container}>
				<View style={styles.halfContainer}>
					<Feather name="cloud-rain" size={96} color="black" />
					<Text style={styles.temp}>{temp}°</Text>
				</View>
				<View style={styles.halfContainer}>

				</View>
		</View>
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
		"Fog", // 안개
		"Sand",
		"Ash",
		"Squall",
		"Tornado"
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
	},
	halfContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}
})
import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";

export default function Weather({temp}){
	return (
		<View style={styles.container}>
			<Text>{temp}</Text>
		</View>
	);
}

Weather.propTypes = {
	temp: PropTypes.number.isRequired,
	condition: PropTypes.oneOf([
		"Thunderstorm",
		"Drizzle",
		"Rain",
		"Snow",
		"Atmosphere",
		"Clear",
		"Clouds",
		"Mist",
		"Smoke",
		"Haze",
		"Dust",
		"Fog",
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
	}
})
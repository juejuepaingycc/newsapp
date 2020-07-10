import React, { Component } from 'react';
import { View, TouchableHighlight, StyleSheet } from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';
import moment from 'moment';

const Article = (props) => {

	const time = moment(props.article.publishedAt || moment.now()).fromNow();
	const img = props.article.urlToImage
	const article = props.article;

	return (
		<TouchableHighlight onPress={() => props.navigation.navigate('Detail', { pass: article })}>
			<Card
				title={props.article.title}
				titleStyle={{
					textAlign: 'left',
					paddingLeft: 5,
					paddingRight: 5
				}}
				image={{
					uri: img
				}}
			>
				<Text style={{ marginBottom: 10 }}>
					{props.article.description || 'Read more...'}
				</Text>
				<Divider style={{ backgroundColor: '#dfe6e9' }} />
				<View
					style={{ flexDirection: 'row', justifyContent: 'space-between' }}
				>
					<Text style={styles.text}>
						{props.article.source.name.toUpperCase()}
					</Text>
					<Text style={styles.text}>
						{time}
					</Text>
				</View>
			</Card>
		</TouchableHighlight>
	);
}

export default Article;

const styles = StyleSheet.create({
	text: {
		margin: 5,
		fontStyle: 'italic',
		color: '#b2bec3',
		fontSize: 12
	}
})
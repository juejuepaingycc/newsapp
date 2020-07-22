import React, { Component } from 'react';
import { View, TouchableHighlight, StyleSheet } from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';
import moment from 'moment';

const ArticleCard = ( { props } ) => {
	
	const time = moment(props.article.publishedAt || moment.now()).fromNow();
	const img = props.article.urlToImage
	
	return <Card
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
}

const Article = (props) => {

	const nav = props.navigation;
	const article = props.article;
	const saved = props.page == 'saved' ? true: false;
	return (
		<View>
		{
			saved?
			<TouchableHighlight>
			<ArticleCard props={props} />
		</TouchableHighlight>
		:
		<TouchableHighlight onPress={() => nav.navigate('Detail', { pass: article })}>
		<ArticleCard props={props} />
	</TouchableHighlight>
		}
		</View>
	
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
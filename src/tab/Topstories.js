import React, { Component } from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet } from 'react-native';
import { getArticles } from '../service/news';
import Article from '../core/Article';
import { View, Text } from 'react-native';
import { IMAGE } from '../constants/image';
import { Overlay, Button } from 'react-native-elements';

export default class TopStoriesTab extends Component {

	state = {
		articles: [],
		refreshing: true,
		isVisible: true,
	};

	componentDidMount = () => {
		this.fetchNews();
	};

	fetchNews = () => {
		getArticles('general', '')
			.then(articles => {
				console.log("Top Stories Articles>>" + JSON.stringify(articles));
				this.setState({ articles, refreshing: false });
			})
			.catch(() => this.setState({ refreshing: false }));
	};

	handleRefresh = () => {
		this.setState({ refreshing: true }, () => this.fetchNews());
	};

	removeOverlay() {
		this.setState({ isVisible: false })
	}
	render() {

		let { navigation } = this.props;

		return (
			<SafeAreaView style={{ flex: 1 }}>
				<Overlay
					onBackdropPress={() => this.setState({ isVisible: false })}
					isVisible={this.state.isVisible}
					overlayStyle={{
						height: 466,
						width: 300,
						padding: 16
					}}>
					<Image source={IMAGE.ICON_WELCOME} />
					<Text style={styles.welcomeText}>Welcome to News</Text>
					<Text>
						By continuing to browse, you agree to our Privacy Policy and terms of use.
		  			</Text>
					<View style={styles.linkView}>
						<Text style={styles.policy}>
							Privacy Policy
						</Text>
						<Text style={styles.policy}>
							Terms of Use
						</Text>
					</View>

					<Button onPress={() => this.setState({ isVisible: false })}
						title="Browse" buttonStyle={{ backgroundColor: '#44464a', marginLeft: 16, marginRight: 16 }}
					/>

				</Overlay>

				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
					<FlatList
						data={this.state.articles}
						renderItem={({ item }) => <Article article={item} navigation={navigation} />}
						keyExtractor={item => item.url}
						refreshing={this.state.refreshing}
						onRefresh={this.handleRefresh}
					/>
				</View>

			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	welcomeText: { 
		fontWeight: 'bold', 
		fontSize: 25, 
		textAlign: 'center', 
		paddingTop: 20 
	},
	linkView: {
		flexDirection: 'row', 
		justifyContent: 'space-around', 
		padding: 10, 
		marginBottom: 13
	},
	policy: {
		color: '#376fde',
		textDecorationLine: 'underline', 
		textDecorationStyle: "solid", 
		textDecorationColor: "green"
	}
})

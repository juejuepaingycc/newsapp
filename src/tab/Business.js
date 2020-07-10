import React, { Component } from 'react';
import { getArticles } from '../service/news';
import Article from '../core/Article';
import { FlatList, SafeAreaView, View } from 'react-native';

export default class BusinessTab extends Component {

	state = {
		articles: [],
		refreshing: true
	};

	componentDidMount = () => {
		this.fetchNews();
	};

	fetchNews = () => {
		getArticles('business', '')
			.then(articles => {
				console.log("Articles here>>" + JSON.stringify(articles));
				this.setState({ articles, refreshing: false });
			})
			.catch(() => this.setState({ refreshing: false }));
	};

	handleRefresh = () => {
		this.setState({ refreshing: true }, () => this.fetchNews());
	};

	render() {
		let { navigation } = this.props;
		return (
			<SafeAreaView style={{ flex: 1 }}>
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



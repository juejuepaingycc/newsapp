import React, {Component} from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { getArticles } from '../service/news';
import Article from '../core/Article';

export default class ScienceTab extends Component{

  state = {
		articles: [],
		refreshing: true
	};

	componentDidMount = () => {
		this.fetchNews();
	};

	fetchNews = () => {
		getArticles('science','')
			.then(articles => {
        console.log("Science Articles>>"+ JSON.stringify(articles));
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



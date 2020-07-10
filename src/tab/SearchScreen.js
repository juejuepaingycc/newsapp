import React, {Component} from 'react';
import { FlatList, View, SafeAreaView } from 'react-native';
import { getArticles } from '../service/news';
import Article from '../core/Article';
import { SearchBar } from 'react-native-elements';
import { CustomHeader } from '../index';

export class SearchScreen extends Component{

  state = {
		articles: [],
        refreshing: true,
        search: '',
    	};

        updateSearch = (search) => {
            this.setState({ search });
            this.searchNews(search);
          };

          searchNews = (data) => {
            getArticles('general',data)
                .then(articles => {
            console.log("Articles here>>>>"+ JSON.stringify(articles));
                    this.setState({ articles, refreshing: false });
                })
                .catch(() => this.setState({ refreshing: false }));
        };
    

	componentDidMount = () => {
		this.fetchNews();
	};

	fetchNews = () => {
		getArticles('general','')
			.then(articles => {
        console.log("Articles here>>>>"+ JSON.stringify(articles));
				this.setState({ articles, refreshing: false });
			})
			.catch(() => this.setState({ refreshing: false }));
	};

	handleRefresh = () => {
		this.setState({ refreshing: true }, () => this.fetchNews());
	};

	render() {
        const { search } = this.state;
		const { navigation } = this.props;

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <CustomHeader title="" isHome={false} navigation={navigation}></CustomHeader>
                <View>
                <SearchBar round
                searchIcon={{ size: 40 }}
            placeholder="Search..."
            onChangeText={this.updateSearch}
            value={search}
          ></SearchBar>

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



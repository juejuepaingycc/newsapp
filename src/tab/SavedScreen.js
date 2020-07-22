import React, { Component } from 'react';
import Article from '../components/Article';
import { FlatList, SafeAreaView, View, Text } from 'react-native';
import { connect } from 'react-redux'

const SavedList = ({ list }) =>
{
    if (list !== null && list !== undefined && list.length > 0)
        return <FlatList
						data={list}
						renderItem={({ item }) => <Article article={item.article} page={'saved'} />}
						keyExtractor={item => item.url}
					/>
    else 
        return <Text style={{ fontSize: 30, color: 'gray', fontWeight: 'bold' }}>No Result Found!</Text>
}
export class SavedScreen extends Component {

    constructor(props) {
        super(props);
    }

	render() {
        let newsList = this.props.news.news;
        let savedList = []
        for(var i=0; i<newsList.length;i ++){
            if(newsList[i].booked){
                savedList.push(newsList[i]);
            }
        }
        console.log("newsList>>"+ JSON.stringify(newsList))
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
					<SavedList list={savedList} />
				</View>
			</SafeAreaView>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        news: state
    }
}
export default connect(mapStateToProps)(SavedScreen)




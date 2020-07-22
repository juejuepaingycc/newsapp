import React, { Component } from 'react';
import Article from '../components/Article';
import { FlatList, SafeAreaView, View, Text } from 'react-native';
import { connect } from 'react-redux'
import CustomHeader from '../CustomHeader'

const SavedList = ({ fuck, navigation }) =>
{
    if (fuck !== null && fuck !== undefined && fuck.length > 0)
   return <FlatList
						data={fuck}
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

	componentDidMount(){
       
	};


	render() {

        let fff = this.props.news.news;
        let real = []
        for(var i=0; i<fff.length;i ++){
            if(fff[i].booked){
                real.push(fff[i]);
            }
        }
        let { navigation } = this.props.navigation;
        console.log("fff>>"+ JSON.stringify(fff))
		return (
			<SafeAreaView style={{ flex: 1 }}>
                 {/* <CustomHeader isHome={false} navigation={navigation} /> */}
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
					<SavedList fuck={real} />
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

export default connect(mapStateToProps, null)(SavedScreen)




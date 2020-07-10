import React, { Component } from 'react';
import { CustomHeader } from '../index';
import { StyleSheet, Button, View, SafeAreaView, Text, TextInput, ScrollView } from 'react-native';
import { Image, ListItem } from 'react-native-elements';
import moment from 'moment';

export class Detail extends Component {

  render() {

    const list = [
      {
        name: 'Supreme Court says Manhattan DA can get Trump tax records ....',
        avatar_url: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/OTYI2HF6PAI6VF6BNTYRN77CNQ.jpg&w=1440',
        subtitle: 'July 9, 2020',
        source: 'Google News'
      },
      {
        name: 'How Warren Buffett’s Money Is Doing Environmental Double...',
        avatar_url: 'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f06179561c315000626df05%2F0x0.jpg%3FcropX1%3D0%26cropX2%3D1920%26cropY1%3D0%26cropY2%3D1080',
        subtitle: 'July 9, 2019',
        source: 'Forbes'
      }
    ]

    let { route, navigation } = this.props;
    const { passdata } = route.params;
    const time = moment(passdata.publishedAt || moment.now()).fromNow();

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <CustomHeader title="" navigation={navigation}></CustomHeader>
        <ScrollView style={styles.container}>
          <Image
            source={{ uri: passdata.urlToImage }}
            style={{
              width: null,
              height: 200
            }}
          />
          <View style={styles.upperText}>
            <Text style={styles.title}>
              {passdata.title}
            </Text>
            <View style={styles.author}>
              <Text style={styles.by}>
                By&nbsp;
	            </Text>
              <Text style={styles.authorName}>
                {passdata.author}
              </Text>
            </View>
            <Text style={styles.date}>
              {time}
            </Text>
          </View>

          <View style={styles.line}></View>

          <View style={styles.detailText}>
            <Text style={styles.detail}>
              {passdata.description}
            </Text>
          </View>

          <View style={styles.comment}>
            <View style={styles.commentText}>
              <TextInput placeholder="Write a comment" />
            </View>
            <View style={styles.commentBtn}>
              <Button title="Send" color="#606061" />
            </View>
          </View>

          <View style={styles.topnews}>
            <View style={{
              backgroundColor: 'white'
            }}>
              <Text style={styles.trending}>
                Trending
	            </Text>
            </View>
            {
              list.map((l, i) => (
                <ListItem
                  key={i}
                  leftAvatar={{
                    source: { uri: l.avatar_url },
                    rounded: false,
                    width: 100,
                    height: 80
                  }}
                  title={l.name}
                  subtitle={l.subtitle}
                  subtitleStyle={{
                    fontSize: 12
                  }}
                  bottomDivider
                  badge={{
                    value: l.source,
                    textStyle: { color: 'white' },
                    padding: 9,
                    color: 'red',
                    containerStyle: { position: 'absolute', right: 5, bottom: 17 }
                  }}
                />
              ))
            }
          </View>

        </ScrollView>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    padding: 10
  },
  trending: {
    fontSize: 23,
    fontWeight: 'bold',
    paddingBottom: 0,
    paddingTop: 8,
    color: '#303236',
    paddingLeft: 14
  },
  topnews: {
    marginTop: 30
  },
  upperText: {
    paddingBottom: 10,
    marginBottom: 5
  },
  line: {
    borderBottomWidth: 2,
    width: 50,
    borderBottomColor: '#9b9ea3',
    marginBottom: 20
  },
  title: {
    fontSize: 22,
    color: '#5b5d61',
    paddingTop: 18,
    paddingBottom: 18
  },
  author: {
    flexDirection: 'row',
  },
  by: {
    fontSize: 16,
    fontStyle: 'italic'
  },
  authorName: {
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  date: {
    fontSize: 13,
    color: 'gray',
    paddingTop: 10
  },
  detail: {
    fontSize: 17,
    lineHeight: 23
  },
  comment: {
    marginTop: 23,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  commentText: {
    flex: 4,
    height: 40,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 5
  },
  commentBtn: {
    flex: 1,
  }

}) 
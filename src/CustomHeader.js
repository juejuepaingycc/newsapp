import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { IMAGE } from './constants/image';
import { connect } from 'react-redux'
import { saveBooking, unsaveBooking } from './actions'
import { Overlay, Button } from 'react-native-elements';

const Bookmark = ({ booked, saveBook, unsaveBook }) => {
    if (!booked)
        return <TouchableOpacity onPress={saveBook}>
            <Image source={IMAGE.ICON_BOOKMARK} style={styles.bookmark} resizeMode="contain" />
        </TouchableOpacity>
    else
        return <TouchableOpacity onPress={unsaveBook}>
            <Image source={IMAGE.ICON_BOOKMARK_BLACK} style={styles.bookmark} resizeMode="contain" />
        </TouchableOpacity>
}

const OverlayContent = ({ image, title, text }) => {
    return <View
        style={{
            flex: 1, justifyContent: 'center',
            alignItems: 'center'
        }}>
        <Image source={image} style={styles.alertImage} />
        <Text style={styles.alertTitle}>{title}</Text>
        <Text style={styles.alertText}>{text}</Text>
    </View>
}

const OverlayAlert = ({ isVisible, saved, hideAlert }) => {
    return <Overlay
        onBackdropPress={hideAlert}
        isVisible={isVisible}
        overlayStyle={{
            height: 350,
            width: 250,
            padding: 16,
        }}>
        <>
            {
                saved ?
                    <OverlayContent image={IMAGE.ICON_BOOKMARK_ADD} title={'Story Saved!'} text={'See your saved stories in the Saved menu tab.'} />
                    :
                    <OverlayContent image={IMAGE.ICON_BOOKMARK_REMOVE} title={'Story Unsaved!'} text={'This story has been removed from your saved stories.'} />
            }
            <Button onPress={hideAlert} title="Got it" buttonStyle={{ backgroundColor: '#44464a', marginLeft: 16, marginRight: 16 }} />
        </>
    </Overlay>

}

class CustomHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            booked: false,
            isVisible: false,
            saved: false
        }
    }

    componentDidMount() {
        if (this.props.icon) { //from News Detail page
            for (let i = 0; i < this.props.news.news.length; i++) {
                if (this.props.news.news[i].url == this.props.passArticle.url) {
                    this.setState({ booked: this.props.news.news[i].booked });
                }
            }
        }
    }

    saveBook = () => {
        console.log("Article to save>>" + JSON.stringify(this.props.passArticle))
        this.props.saveArticle(this.props.passArticle);
        this.setState({ booked: true, isVisible: true, saved: true })
    }

    unsaveBook = () => {
        console.log("Article to unsave>>" + JSON.stringify(this.props.passArticle.url))
        this.props.unsaveArticle(this.props.passArticle.url);
        this.setState({ booked: false, isVisible: true, saved: false })
    }

    removeOverlay() {
        this.setState({ isVisible: false })
    }

    render() {
        let { navigation, isHome, title, icon } = this.props;
        return (
            <SafeAreaView style={{ flexDirection: 'row', justifyContent: 'space-evenly', height: 50 }}>
                <OverlayAlert isVisible={this.state.isVisible} saved={this.state.saved} hideAlert={() => this.removeOverlay()} />
                <View style={styles.nav}>
                    {
                        isHome ?
                            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                <Image source={IMAGE.ICON_MENU} style={styles.menu} resizeMode="contain" />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity style={styles.backView}
                                onPress={() => navigation.goBack()}
                            >
                                <Image source={IMAGE.ICON_BACK} style={styles.back} resizeMode="contain" />
                                <Text>Back</Text>
                            </TouchableOpacity>
                    }
                </View>
                <View style={styles.titleView}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={{ flex: 1 }} style={styles.book} >
                    {
                        icon
                            ?
                            <Bookmark booked={this.state.booked} saveBook={() => this.saveBook()} unsaveBook={() => this.unsaveBook()} />
                            :
                            null
                    }

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

const mapDispatchToProps = (dispatch) => {
    return {
        saveArticle: (article) => dispatch(saveBooking(article)),
        unsaveArticle: (url) => dispatch(unsaveBooking(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomHeader)

const styles = StyleSheet.create({
    alertTitle: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        paddingTop: 20
    },
    alertImage: {

    },
    alertText: {
        fontSize: 18,
        paddingTop: 20
    },
    bookmark: {
        width: 36,
        height: 35
    },
    book: {
        paddingTop: 13,
        paddingRight: 10
    },
    title: {
        fontSize: 20, fontWeight: 'bold'
    },
    titleView: {
        flex: 7, justifyContent: 'center', alignItems: 'center'
    },
    back: {
        width: 25, height: 25, marginLeft: 5
    },
    backView: {
        flexDirection: 'row', alignItems: 'center', marginLeft: 5
    },
    nav: {
        flex: 1, justifyContent: 'center'
    },
    menu: {
        width: 40, height: 30, marginLeft: 9
    }
})
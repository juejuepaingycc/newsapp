import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { IMAGE } from './constants/image';

export class CustomHeader extends Component {
    render() {
        let { navigation, isHome, title } = this.props;
        return (
            <View style={{ flexDirection: 'row', height: 50 }}>
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
                <View style={{ flex: 1 }}>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20, fontWeight: 'bold'
    },
    titleView: {
        flex: 1.5, justifyContent: 'center', alignItems: 'center'
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
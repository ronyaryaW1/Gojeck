import React, { Component } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import FeatureComponent from '../component/FeatureComponent'
import GopayComponent from '../component/GopayComponent'
import InfoComponent from '../component/InfoComponent'
import NavbarButtom from '../component/NavbarButtom'
import NewsComponent from '../component/NewsComponent'
import ScrollProduct from '../component/ScrollProduct';
import SearchComponent from '../component/SearchComponent'
import VoucherComponent from '../component/VoucherComponent'

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.body}>
                    <SearchComponent img={require('../../Assets/icon/search.png')}/>
                    <GopayComponent/>
                    <FeatureComponent/>
                    <View style={styles.line}/>
                    <View style={styles.newsContainer}>
                        <NewsComponent/>
                        <InfoComponent/>
                        <VoucherComponent/>
                        <View style={styles.borderButtom}/>
                    </View>
                    <ScrollProduct/>
                    <View style={styles.borderButtom}/>
                </ScrollView>
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    container: {
    },
    body: {
        
        backgroundColor: 'white', 
    },
    line: {
        height: 17,
        backgroundColor: '#F2F2F4',
        marginTop: 20,
    },
    newsContainer: {
        paddingTop: 16,
        paddingHorizontal: 17,
    },
    borderButtom: {
        marginTop: 20,
        borderBottomColor: '#E8E9ED',
        opacity: 0.1,
        borderWidth: 1,
    },
    bawah: {
        flexDirection: 'row',
        height: 54,
        backgroundColor: 'white',
    },
});

export default HomeScreen

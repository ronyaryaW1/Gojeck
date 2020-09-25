import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';

import ScrollableItem from './molecules/ScrollableItem';

class ScrollProduct extends Component {
    render() {
        return (
            <View style={styles.goFoodRestauran}>
                <View style={styles.logoGofood}>
                    <Image
                        source={require('../../Assets/logo/go-food.png')}
                        style={styles.logoFood}
                    />
                </View>
                <View style={styles.wrapTextNearby}>
                    <Text style={styles.titleNerbay}> Nearby Restaurants</Text>
                    <Text style={styles.seeAll}>See All</Text>
                </View>
                <ScrollView horizontal={true} style={styles.restoran}>
                    <ScrollableItem title="KFC Aeon Mall" img={require('../../Assets/dummy/go-food-kfc.jpg')} />
                    <ScrollableItem title="Bakmi GM Aeon Mall" img={require('../../Assets/dummy/go-food-gm.jpg')} />
                    <ScrollableItem title="Sate Banka" img={require('../../Assets/dummy/go-food-banka.jpg')} />
                    <ScrollableItem title="Sate Original Aeon" img={require('../../Assets/dummy/go-food-orins.jpg')} />
                    <ScrollableItem title="Sate Pak Boss" img={require('../../Assets/dummy/go-food-pak-boss.jpg')} />
                </ScrollView>
                <View style={styles.borderButtom} />
            </View>
        )
    }
}
const styles = StyleSheet.create({

    goFoodRestauran: {
        paddingHorizontal: 16,
        marginTop: 20
    },
    logoGofood: {
        width: 60,
        height: 15,
        marginLeft: 5,
    },
    wrapTextNearby: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    titleNerbay: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#1C1C1C',
    },
    seeAll: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#61A756',
    },
    restoran: {
        flexDirection: 'row',
    },
    contenRestoran: {
        marginRight: 15,
    },
    imgRestoran: {
        width: 150,
        height: 150,
        borderRadius: 8,
    },
    imgNearbyRest: {
        width: undefined,
        height: undefined,
        flex: 1,
        resizeMode: 'cover',
        borderRadius: 8,
    },
    logoFood: {
        width: undefined,
        height: undefined,
        flex: 1,
        resizeMode: 'contain',
    },
    namaRestoran: {
        marginTop: 12,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#1C1C1C',
    },

});
export default ScrollProduct;
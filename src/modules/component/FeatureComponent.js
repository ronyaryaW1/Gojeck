import { Image, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

import MainFeature from '../component/molecules/MainFeature'

const FeatureComponent = () => {
    return (
        <View style={styles.mainfeatur}>
                    <View>
                        <View style={styles.iconFeatur}>
                        <MainFeature
                    title="GO-RIDE"
                    img={require('../../Assets/icon/go-ride.png')}
                />
                <MainFeature
                    title="GO-CAR"
                    img={require('../../Assets/icon/go-car.png')}
                />
                <MainFeature
                    title="GO-BLUEBIRD"
                    img={require('../../Assets/icon/go-bluebird.png')}
                />
                <MainFeature
                    title="GO-SEND"
                    img={require('../../Assets/icon/go-send.png')}
                />
                        </View>
                        <View style={styles.iconFeatur}>
                        <MainFeature
                    title="GO-DEALS"
                    img={require('../../Assets/icon/go-deals.png')}
                />
                <MainFeature
                    title="GO-PULSA"
                    img={require('../../Assets/icon/go-pulsa.png')}
                />
                <MainFeature
                    title="GO-FOOD"
                    img={require('../../Assets/icon/go-food.png')}
                />
                <MainFeature
                    title="GO-MORE"
                    img={require('../../Assets/icon/go-more.png')}
                />
                        </View>
                    </View>
                </View>
    )
}
const styles = StyleSheet.create({
    mainfeatur: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 18,
    },
    iconFeatur: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        marginBottom: 18,
    },
});

export default FeatureComponent

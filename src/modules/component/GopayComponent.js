import { Image, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

import GopayFeature from '../component/molecules/Gopayfitur'

const GopayComponent = () => {
    return (
        <View style={styles.box}>
                    <View style={styles.gopay}>
                        <Image source={require('../../Assets/icon/gopay.png')} />
                        <Text style={styles.textGopay}>Rp 50.000</Text>
                    </View>
                    <View style={styles.wrapGopay}>
                        <GopayFeature title="Pay" img={require('../../Assets/icon/pay.png')}/>
                        <GopayFeature title="Nerbay" img={require('../../Assets/icon/nearby.png')}/>
                        <GopayFeature title="Top Up" img={require('../../Assets/icon/topup.png')}/>
                        <GopayFeature title="More" img={require('../../Assets/icon/more.png')}/>
                    </View>
         </View> 
    )
}
const styles = StyleSheet.create({
    box: {
        marginHorizontal: 17,
        marginTop: 15
    },
    gopay: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#2C5FB8',
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        padding: 14,
        marginTop: 15,
    },
    textGopay: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Roboto',
    },
    wrapGopay: {
        flexDirection: 'row',
        paddingBottom: 14,
        paddingTop: 20,
        backgroundColor: '#2F65BD',
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
    },
});

export default GopayComponent

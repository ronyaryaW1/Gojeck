// class component

import { Image, StyleSheet, Text, View } from 'react-native';

import React from 'react';

const MainFeature = (props) => {
    return (
        <View style={styles.menuContainer}>
            <View style={styles.iconMain}>
                <Image source={props.img} />
            </View>
            <Text style={styles.textMenuFuture}>{props.title}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    menuContainer: {
        width: `${100 / 4}%`,
        alignItems: 'center',
    },
    iconMain: {
        width: 58,
        height: 58,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#EFEFEF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textMenuFuture: {
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 5,
        textAlign: 'center',
    },
});
export default MainFeature;
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, TextInput, View } from 'react-native'

import React from 'react'

const SearchComponent = (props) => {
    return (
        <View  style={styles.head}>
        <View  style={styles.searchContainer}>
        <KeyboardAvoidingView
        behavior="padding">
            <TextInput
                placeholder="what do you want to eat?"
                style={styles.search}
            />
            <Image
            source={props.img}
            style={styles.iconSearch}
            />
            </KeyboardAvoidingView>
        </View>
        
        <View
                style={{
                width: 35,
                alignItems: 'center',
                justifyContent: 'center',
                }}>
                <Image source={require('../../Assets/icon/promo.png')} />
            </View>
</View>
    )
}
const styles = StyleSheet.create({
    head: {
        marginHorizontal: 17,
        flexDirection: 'row',
        marginTop: 15,
    },
    searchContainer: {
        position: 'relative',
        flex: 1,
        
    },
    search: {
        borderRadius: 25,
        borderColor: '#E8E8E8',
        borderWidth: 1,
        height: 40,
        fontSize: 12,
        paddingLeft: 55,
        paddingRight: 35,
    },
    iconSearch: {
        position: 'absolute',
        left: 15,
        top: 5,
    },
});

export default SearchComponent

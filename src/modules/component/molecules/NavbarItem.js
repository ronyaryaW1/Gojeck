import { Image, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'

const NavbarItem = (props) => {
    return (
        <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View>
            <Image source={props.img} />
            </View>
              <Text style={{fontSize: 10, color: '#545454', marginTop: 4,color: props.active ? '#61A756' : '#545454',
}}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default NavbarItem

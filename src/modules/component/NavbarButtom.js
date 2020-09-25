import { Image, Text, TouchableOpacity, View } from 'react-native'

import NavbarItem from './molecules/NavbarItem'
import React from 'react'

const NavbarButtom = () => {
    return (
        <View style={{height: 54, flexDirection: 'row', backgroundColor: 'white' }}>
          <NavbarItem title="Home" img={require('../../Assets/icon/home-active.png')} active/>
          <NavbarItem title="Orders" img={require('../../Assets/icon/order.png')}/>
          <NavbarItem title="Help" img={require('../../Assets/icon/help.png')}/>
          <NavbarItem title="Inbox" img={require('../../Assets/icon/inbox.png')}/>
          <NavbarItem title="Account" img={require('../../Assets/icon/account.png')}/>          
        </View>
    )
}

export default NavbarButtom


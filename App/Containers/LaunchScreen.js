import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'
import PayPal from 'react-native-paypal-wrapper';

export default class LaunchScreen extends Component {

  componentDidMount() {

    // 3 env available: NO_NETWORK, SANDBOX, PRODUCTION
    PayPal.initialize(PayPal.SANDBOX, "Your client id");
    PayPal.pay({
      price: '1.1',
      currency: 'USD',
      description: 'Your description goes here',
    }).then(confirm  => console.log(confirm))
      .catch(error => console.log(error));
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>
              This probably isn't what your app is going to look like. Unless your designer handed you this screen and, in that case, congrats! You're ready to ship. For everyone else, this is where you'll see a live preview of your fully functioning app using Ignite.
            </Text>
          </View>

          <DevscreensButton />
        </ScrollView>
      </View>
    )
  }
}

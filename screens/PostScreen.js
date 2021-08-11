import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class PostScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      light_theme: true
    };
  }

  componentDidMount() {}

  render() {
    if (!this.props.route.params) {
      this.props.navigation.navigate('Home');
    } else {
      return (
        <View style={this.state.light_theme ? styles.containerLight : styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require('../assets/logo.png')}
                style={styles.iconImage}></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={
                this.state.light_theme
                    ? styles.appTitleTextLight
                    : styles.appTitleText
              }>Spectagram</Text>
            </View>
          </View>
          <View style={styles.postContainer}>
            <ScrollView style={
              this.state.light_theme
                  ? styles.postCardLight
                  : styles.postCard
            }>
              <View style={styles.authorContainer}>
                <View style={styles.authorImageContainer}>
                  <Image
                    source={require('../assets/profile_img.png')}
                    style={styles.profileImage}></Image>
                </View>
                <View style={styles.authorNameContainer}>
                  <Text style={
                    this.state.light_theme
                        ? styles.postAuthorTextLight
                        : styles.postAuthorText
                  }>
                    {this.props.route.params.author}
                  </Text>
                </View>
              </View>
              <Image
                source={require('../assets/image_1.jpg')}
                style={styles.postImage}
              />
              <View style={styles.captionContainer}>
                <Text style={
                  this.state.light_theme
                      ? styles.postTextLight
                      : styles.postText
                }>
                  {this.props.route.params.caption}
                </Text>
              </View>
              <View style={styles.actionContainer}>
                <View style={styles.likeButton}>
                  <Ionicons name={'heart'} size={RFValue(30)} color={'white'} />
                  <Text style={
                    this.state.light_theme
                        ? styles.likeTextLight
                        : styles.likeText
                  }>12k</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  containerLight: {
    flex: 1,
    backgroundColor: "white"
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  appTitleTextLight: {
    color: "black",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  postContainer: {
    flex: 1,
  },
  postCard: {
    margin: RFValue(20),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20)
  },
  postCardLight: {
    margin: RFValue(20),
    backgroundColor: "white",
    borderRadius: RFValue(20),
    shadowColor: "rgb(0, 0, 0)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2
  },
  actionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: RFValue(10),
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    flexDirection: 'row',
    backgroundColor: '#eb3948',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(30),
  },
  likeText: {
    color: "white",
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    marginLeft: RFValue(5)
  },
  likeTextLight: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    marginLeft: RFValue(5)
  },
  authorContainer: {
    height: RFPercentage(10),
    padding: RFValue(10),
    flexDirection: 'row',
  },
  authorImageContainer: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: RFValue(100),
  },
  authorNameContainer: {
    flex: 0.85,
    padding: RFValue(10),
    justifyContent: 'center',
  },
  postAuthorText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(18),
    color: "white"
  },
  postAuthorTextLight: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(18),
    color: "black"
  },
  postImage: {
    width: '100%',
    alignSelf: 'center',
    height: RFValue(200),
    borderTopLeftRadius: RFValue(20),
    borderTopRightRadius: RFValue(20),
    resizeMode: 'contain',
  },
  captionContainer: {
    padding: RFValue(10),
  },
  postText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(15),
    color: "white"
  },
  postTextLight: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(15),
    color: "black"
  },
});

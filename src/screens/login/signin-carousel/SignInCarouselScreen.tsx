import * as React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import Carousel, {Pagination } from 'react-native-snap-carousel';
const bg1 = require("../../../assets/icons/comuni_bg1.png");
const bg2 = require("../../../assets/icons/comuni_bg2.png");
const bg3 = require("../../../assets/icons/comuni_bg3.png");
import { CustomInput } from '../../../components/input';
import styles from './SignInCarouselStyles';

const images = [
  {
    uri: bg1,
  },
  {
    uri: bg2,
  },
  {
    uri: bg3,
  },
];

const {width} = Dimensions.get("window")

const SignInCarouselScreen = ({navigation} : any) => {
    const [activeIndex, setActiveIndex] = React.useState(0);
  const [carouselItems, setCarouselItems] = React.useState(images);
  const [email, changeEmail] = React.useState<string>('');
    const [password, changePassword] = React.useState<string>('');
  const ref = React.useRef(null);

  const renderItem = React.useCallback(({ item, index }) => (
    <Image
    key={index}
          resizeMode="contain"
          style={styles.styledImg}
          source={item.uri}
        />
  ), []);

    return (
      <View style={styles.signInContainer}>
        <Text style={styles.textTitle}>Lorem ipsum dolor sit consectetur</Text>
        <Text style={styles.blurText}>
          Grow your business fast with online order system
        </Text>
        <Carousel
          layout="default"
          style={{overflow: 'visible'}}
          ref={ref}
          data={carouselItems}
          sliderWidth={width}
          itemWidth={width}
          renderItem={renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
        <Pagination dotsLength={images.length} activeDotIndex={activeIndex}/>
        <View style={styles.inputContainer}>
        <CustomInput 
            icon={
                <IconFeather
                style={styles.emailIcon}
                name="mail"
                size={20}
                color="#000"
              />
            }
            placeholder="Email"
            value={email}
            onChange={changeEmail}
          />
          <CustomInput 
            icon={
                <IconFeather
                style={styles.emailIcon}
                name="mail"
                size={20}
                color="#000"
              />
            }
            placeholder="Password"
            value={password}
            marginBot={true}
            onChange={changePassword}
          />
          <TouchableOpacity
            style={styles.signInButton}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: 14,
                marginBottom: 2,
                textTransform: "capitalize",
              }}
            >
              Sign In
            </Text>
          </TouchableOpacity>
          <Text onPress={() => navigation.navigate('ResetPasswordScreen')} style={styles.forgotPasswordText}>Forgot Password?</Text>
          <Text style={styles.accountText}>
            Don't have an account?{" "}
            <Text
              style={styles.signUpText}
            >
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    );
}

export default SignInCarouselScreen;
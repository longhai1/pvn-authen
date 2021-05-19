import * as React from "react";
import { View, Image } from "react-native";
import styles from "./SplashStyles";
import { retrieveData, importData } from '../../helper/asyncStorage';


const SplashScreen = ({ navigation }: any) => {

  React.useEffect(() => {
    retrieveData('LoginStatus').then((status) => {
      if (status === 'true') {
        navigation.navigate("PickCategoriesScreen");
        console.log('status', status);
      } else {
        navigation.navigate("SignInScreen");
        console.log('error')
      }
    })
  }, []);

  React.useEffect(() => {
    importData();
  }, [])

  return (
    <View>
      <Image
        style={styles.splashImg}
        source={require("../../assets/splash.png")}
      />
    </View>
  );
};

export default SplashScreen;

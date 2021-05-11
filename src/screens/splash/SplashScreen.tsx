import * as React from "react";
import { View, Image } from "react-native";
import styles from "./SplashStyles";

const SplashScreen = ({ navigation }: any) => {
  React.useEffect(() => {
    const timerid = setTimeout(() => {
      navigation.navigate("SignInScreen");
    }, 1000);
    return () => {
      if (timerid) {
        clearTimeout(timerid);
      }
    };
  }, []);

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

import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import styles from './TermAndConditionsStyles';

const TermAndConditionsScreen = ({navigation} : any) => {
    return (
      <View style={styles.emailSentContainer}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.iconContainer}>
            <View>
              <AntDesignIcon
                onPress={() => navigation.navigate("FinishSignUpScreen")}
                style={styles.closeIcon}
                name="close"
                size={20}
                color="#000"
              />
            </View>
            <View>
              <IconFeather
                style={styles.menuIcon}
                name="menu"
                size={20}
                color="#000"
              />
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textTitle}>Term & Conditions</Text>
            <Text style={styles.blurText}>
              Learn more about how Dribbble collects and uses data and your
              rights as a Dribbble user.
            </Text>
            <Text style={styles.tocText}>Table of contents</Text>
            <Text style={styles.termText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              exercitationem suscipit? Maiores nostrum architecto vitae voluptas
              aliquid ullam consequuntur optio at saepe laboriosam ducimus
              reprehenderit excepturi tenetur dolores, quibusdam adipisci.
            </Text>
            <Text style={styles.termText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              exercitationem suscipit? Maiores nostrum architecto vitae voluptas
              aliquid ullam consequuntur optio at saepe laboriosam ducimus
              reprehenderit excepturi tenetur dolores, quibusdam adipisci.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
}

export default TermAndConditionsScreen;
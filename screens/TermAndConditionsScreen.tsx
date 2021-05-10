import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const TermAndConditionsScreen = ({navigation} : any) => {
    return (
      <View style={styles.emailSentContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            borderBottomColor: "rgba(0,0,0,1)",
            borderBottomWidth: 1,
            paddingTop: 20,
            paddingBottom: 10
          }}
        >
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
            Learn more about how Dribbble collects and uses data and your rights
            as a Dribbble user.
          </Text>
          <Text style={styles.tocText}>Table of contents</Text>
          <Text style={{ opacity: 0.8, marginTop: 20 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            exercitationem suscipit? Maiores nostrum architecto vitae voluptas
            aliquid ullam consequuntur optio at saepe laboriosam ducimus
            reprehenderit excepturi tenetur dolores, quibusdam adipisci.
          </Text>
          <Text style={{ opacity: 0.8, marginTop: 20 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            exercitationem suscipit? Maiores nostrum architecto vitae voluptas
            aliquid ullam consequuntur optio at saepe laboriosam ducimus
            reprehenderit excepturi tenetur dolores, quibusdam adipisci.
          </Text>
        </View>
      </View>
    );
}

export default TermAndConditionsScreen;

const styles = StyleSheet.create({
    emailSentContainer: {
        paddingTop: 30,
        alignItems: 'flex-start',
        height: '100%',
        backgroundColor: '#fff',
    },
    textTitle: {
        fontWeight: "bold",
        textTransform: 'capitalize',
        marginTop: 150,
        fontSize: 25,
        color: '#000000',
    },
    blurText: {
        fontWeight: 'normal',
        marginTop: 10, 
        width: '80%',
        color: '#7da1ed',
        textAlign: 'left',
        opacity: 0.8,
        fontSize: 14,
        lineHeight: 22,
    },
    closeIcon: {
        marginLeft: 10,
    },
    menuIcon: {
        marginRight: 10,
    },
    tocText: {
        fontWeight: 'bold',
        marginTop: 50, 
        width: '100%',
        color: '#000000',
        paddingBottom: 20,
        textAlign: 'left',
        fontSize: 14,
        borderBottomColor: 'rgba(0,0,0,1)',
        borderBottomWidth: 1,
    },
    textContainer: {
        display: 'flex',
        width: '90%',
        marginHorizontal: 20,
        marginTop: 60,
    },
    backButton: {
        marginTop: 70,
        width: '100%',
        backgroundColor: '#7da1ed',
        borderRadius: 10,
        height: 55,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
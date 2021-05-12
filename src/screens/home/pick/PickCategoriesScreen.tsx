import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './PickCategoriesStyles';

const PickCategoriesScreen = () => {
    return (
      <View style={styles.emailSentContainer}>
        <Text style={styles.textTitle}>Pick 5 initial categories of interest</Text>
      </View>
    );
}

export default PickCategoriesScreen;
import { AsyncStorage } from 'react-native';

export const retrieveData = async (item : string) => {
    try {
      const value = await AsyncStorage.getItem(item);
      if (value !== null) {
        return value;
      }
    } catch (error) {
      console.log(error);
    }
};

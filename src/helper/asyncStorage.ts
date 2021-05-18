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

export const importData = async () => {
  try {
    // AsyncStorage.removeItem('LoginStatus');
    const keys = await AsyncStorage.getAllKeys();
    const result = await AsyncStorage.multiGet(keys);
    console.log(result);
    return result.map((req : any) => req).forEach(console.log);
  } catch (error) {
    console.error(error)
  }
}

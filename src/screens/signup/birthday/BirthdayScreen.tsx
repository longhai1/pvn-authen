import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, Platform, ScrollView } from 'react-native';
import IconFA from 'react-native-vector-icons/FontAwesome';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './BirthdayStyles';

const genders = [
  {
    id: 1,
    value: "Female"
  },
  {
    id: 2,
    value: "Male"
  },
  {
    id: 3,
    value: "Prefer Not to Say"
  },
]

const BirthdayScreen = ({navigation} : any) => {
  const [date, setDate] = React.useState(new Date());
  const [mode, setMode] = React.useState('date');
  const [show, setShow] = React.useState(false);
  const [activeNumber, setActiveNumber] = React.useState<number>(0);

  const onChange = (event: any, selectedDate : any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setShow(false);
  };

  const setActive = (id: any) => {
    setActiveNumber(id);
  }

  const showMode = (currentMode:any) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

    return (
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.signUpContainer}>
          <Text style={styles.textTitle}>What's Your Birthday & Gender?</Text>
          <Text style={styles.blurText}>
            Please note that all information is strictly confidental.
          </Text>
          <View style={styles.inputContainer}>
            <View style={styles.timeContainer}>
              <View style={styles.birthdaySection}>
                <IconFA
                  style={styles.dropMonthIcon}
                  name="caret-down"
                  size={20}
                  color="#000"
                />
                <Text style={styles.timeText}>Month</Text>
                <TouchableOpacity onPress={showDatepicker}>
                  <Text style={styles.birthText}>
                    {date.toISOString().slice(5, 7)}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.birthdaySection}>
                <Text style={styles.timeText}>Day</Text>
                <TouchableOpacity onPress={showDatepicker}>
                  <Text style={styles.birthText}>
                    {date.toISOString().slice(8, 10)}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.birthdaySection}>
                <IconFA
                  style={styles.dropIcon}
                  name="caret-down"
                  size={20}
                  color="#000"
                />
                <Text style={styles.timeText}>Year</Text>
                <TouchableOpacity onPress={showDatepicker}>
                  <Text style={styles.birthText}>
                    {date.toISOString().slice(0, 4)}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {genders.map(item => (
              <View key={item.id} style={styles.inputSection}>
                <TouchableOpacity onPress={() => setActive(item.id)}>
                  <FontistoIcon
                    style={[
                      styles.radioChecked,
                      { color: activeNumber === item.id ? "#6a88e3" : "#000" },
                      { opacity: activeNumber === item.id ? 1 : 0.4 }
                    ]}
                    name={
                      activeNumber === item.id
                        ? "radio-btn-active"
                        : "radio-btn-passive"
                    }
                    size={20}
                    color="#000"
                  />
                  <TextInput
                    style={styles.customInput}
                    secureTextEntry={false}
                    editable={false}
                    value={item.value}
                  />
                </TouchableOpacity>
              </View>
            ))}

            <TouchableOpacity
              onPress={() => navigation.navigate("FinishSignUpScreen")}
              style={styles.signUpButton}
            >
              <Text style={styles.nextText}>Next</Text>
            </TouchableOpacity>
            <Text style={styles.alreadyText}>
              Already on Comuni?&nbsp;
              <Text
                onPress={() => navigation.navigate("SignInScreen")}
                style={styles.signInText}
              >
                Sign In
              </Text>
            </Text>
          </View>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </View>
      </ScrollView>
    );
}

export default BirthdayScreen;
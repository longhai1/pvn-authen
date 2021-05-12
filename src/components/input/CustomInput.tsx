import * as React from "react";
import { View, TextInput, Text } from "react-native";
import styles from "./styles";

interface InputProps {
  icon?: React.ReactNode;
  subIcon?: React.ReactNode;
  color?: string;
  pdLeft?: boolean;
  value?: string;
  placeholder?: string;
  width?: string;
  onChange?: (value: string) => void;
  secure?: boolean;
  error?: string;
}

const CustomInput = (props: InputProps) => {
  const {
    icon,
    subIcon,
    color,
    pdLeft,
    value,
    placeholder,
    onChange,
    secure,
    width,
    error
  } = props;
  const [focus, setFocus] = React.useState<Boolean>(false);
  const [borderColor, setBorderColor] = React.useState<string>('rgba(0,0,0,0.2)');

  React.useEffect(() => {
    if (focus) {
      setBorderColor('#7da1ed');
    } else if (error) {
      setBorderColor('red');
    } else {
      setBorderColor('rgba(0,0,0,0.2)');
    }
  }, [error, focus]);

  const onFocus = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  return (
    <View
      style={[
        styles.inputSection,
        { marginBottom: error ? 0 : 20 },
        { width: width ? width : "100%" },
      ]}
    >
      {icon}
      {subIcon && subIcon}
      <TextInput
        style={[
          styles.customInput,
          { color: color ? color : "rgba(0,0,0,0.4)" },
          { paddingLeft: pdLeft ? 0 : 30 },
          {borderBottomColor: borderColor},
        ]}
        secureTextEntry={secure}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {!!error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default CustomInput;

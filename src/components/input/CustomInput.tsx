import * as React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';

interface InputProps {
    icon?: React.ReactNode;
    subIcon?: React.ReactNode;
    marginBot?: boolean;
    color?: string;
    pdLeft?: boolean;
    value?: string;
    placeholder?: string;
    width?: string;
    onChange?: (value : string) => void;
    secure? : boolean;
}

const CustomInput = (props : InputProps) => {
    const { icon,subIcon, marginBot, color, pdLeft, value, placeholder, onChange, secure, width } = props;
    return (
      <View style={[styles.inputSection, {marginBottom: marginBot ? 0 : 20}, {width: width ? width : '100%'}]}>
        {icon}
        {subIcon && subIcon}
        <TextInput style={[styles.customInput, {color: color ? color : 'rgba(0,0,0,0.4)'}, {paddingLeft: pdLeft ? 0 : 30},]} secureTextEntry={secure} placeholder={placeholder} value={value} onChangeText={onChange}/>
      </View>
    );
}

export default CustomInput;
import React, { useContext, useState } from 'react';
import { Platform, Switch } from 'react-native';
import { ThemeContext } from '../context/theme/ThemeContext';

interface Props {
    isOn: boolean,
    onChange: (value: boolean) => void
}
export const CustomSwitch = ({ isOn, onChange }: Props) => {
    const { theme: { colors } } = useContext( ThemeContext )
    
    const [ isEnabled, setIsEnabled ] = useState(isOn);
    const toggleSwitch = () => {
        setIsEnabled(isEnabled => !isEnabled);
        onChange(!isEnabled)
    }

    return(
        <Switch
            trackColor={{ false: colors.border, true: "#5856D6" }}
            thumbColor={ Platform.OS == 'android' ? "#5856D6" : "" }
            ios_backgroundColor={ colors.primary }
            onValueChange={ toggleSwitch }
            value={ isEnabled }
        />
    )
};

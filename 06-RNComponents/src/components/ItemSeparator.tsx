import React, { useContext } from 'react';
import { View } from 'react-native';

import { ThemeContext } from '../context/theme/ThemeContext';

import { styles } from '../theme/appTheme';

export const ItemSeparator = () => {
    const { theme } = useContext( ThemeContext )

    return(
        <View style={{ ...styles.itemSeparator, borderBottomColor: theme.dividerColor }}/>
    ) 
};

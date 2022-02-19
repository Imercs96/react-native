import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';

interface Props {
    iconName: string,
    size: number,
    color: string
}

export const TouchableIcon = ({ iconName, size, color } : Props) => {

    const { changeFavouriteIcon } = useContext(AuthContext)

    return (
        <TouchableOpacity
            onPress={() => changeFavouriteIcon(iconName)}
        >
             <Icon 
                name={ iconName }
                size={ size } 
                color={ color } />
        </TouchableOpacity>
    )
}

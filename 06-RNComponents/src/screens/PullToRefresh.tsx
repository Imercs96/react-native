import React from 'react';
import { RefreshControl, View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/theme/ThemeContext';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useState, useContext } from 'react';

export const PullToRefresh = () => {

    const { top } = useSafeAreaInsets()
    const [ refreshing, setRefreshing ] = useState(false);
    const [ data, setData ] = useState<string>('');
    const { theme: { colors, dividerColor, dark } } = useContext( ThemeContext )

    //Funcion que dispara una vez que se actualiza
    const onRefresh = () => {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
            setData('Refreshing: Hello World!')
        }, 1500);
    }
    return(
        <ScrollView
            style={{ marginTop: refreshing ? top : 0 }}
            refreshControl={
                <RefreshControl 
                    refreshing= { refreshing }
                    onRefresh={ onRefresh }
                    progressViewOffset={ 10 }
                    progressBackgroundColor={ dividerColor }
                    colors={[ colors.text ]}
                    //style={{ backgroundColor: '#5856D6'}}
                    tintColor={ dark ? 'white' : 'black' }
                />
            }
        >
            <View style={ styles.globalMargin }>  
                <HeaderTitle title='Pull to refresh'/>
                { data ? <HeaderTitle title={ JSON.stringify( data, null, 5 )} /> : null }
            </View>
        </ScrollView>
    );
};

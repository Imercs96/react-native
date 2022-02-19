import React from 'react';
import { SectionList, View, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';
import { styles } from '../theme/appTheme';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme/ThemeContext';

interface Houses {
    house: string;
    data: string[];
}

const houses: Houses[] = [
    {
        house: 'DC Comics',
        data: [ 'Batman', 'Superman', 'Robin', 'Batman', 'Superman', 'Robin', 'Batman', 'Superman', 'Robin']
    },
    {
        house: 'Marvel Comics',
        data: [ 'Antman', 'Thor', 'Spiderman', 'Hulk', 'Antman', 'Thor', 'Spiderman', 'Hulk', 'Antman', 'Thor', 'Spiderman', 'Hulk' ]
    },
    {
        house: 'Pixer',
        data: [ 'Woody', 'Bob Parr', 'Mike Wazowski', 'Buzz Lightyear', 'Woody', 'Bob Parr', 'Mike Wazowski', 'Buzz Lightyear', 'Woody', 'Bob Parr', 'Mike Wazowski', 'Buzz Lightyear' ]
    }
];

export const SectionListScreen = () => {
    const { theme: { colors, dividerColor, dark } } = useContext( ThemeContext )

    return(
        <View style={{ ...styles.globalMargin, flex: 1 }}>
            <SectionList 
                sections={ houses }
                keyExtractor={( item, index ) => item + index }

                ListHeaderComponent={() => <HeaderTitle title='SectionList' />}
                ListFooterComponent={() => (
                    <View style={{ marginBottom: 70 }}>
                       <HeaderTitle title={ `Total de houses: ${ houses.length }` } /> 
                    </View>
                )}

                renderItem={({ item }) => <Text style={{ color: colors.text }}> { item } </Text> }
                stickySectionHeadersEnabled

                renderSectionHeader={({ section }) => (
                    <View style={{ backgroundColor: colors.background }}>
                        <HeaderTitle title={ section.house } />
                    </View>
                )}
                renderSectionFooter={({ section }) => (
                    <HeaderTitle title={ `Total items: ${ section.data.length}` } />
                )}

                SectionSeparatorComponent={ () => <ItemSeparator /> }
                ItemSeparatorComponent={ () => <ItemSeparator /> }

                showsVerticalScrollIndicator={ false }
            />
            
        </View>
    );
};

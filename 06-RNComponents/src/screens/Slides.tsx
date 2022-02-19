import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useState, useContext } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAnimation } from '../hooks/useAnimation';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { ThemeContext } from '../context/theme/ThemeContext';

const { width: screenWidth } = Dimensions.get('window')

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

//Es recomendable utilizar todas las propiedades que vienen por default antes de usar el hook por temas de optimizacion, ya que el hook dispara una funcion
interface Props extends StackScreenProps<any, any> {}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png')
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png')
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png')
    },
]

export const Slides = ({ navigation }: Props) => {
    
    const { opacity, fadeIn, fadeOut } = useAnimation()
    const [ activeIndex, setActiveIndex ] = useState(0)
    const isVisible = useRef(false)
    const { theme: { colors } } = useContext( ThemeContext )
    
    // Uso del Hook
    //const navigation = useNavigation()

    const activeAnimationButton = () => 
        activeIndex == items.length - 1 ? fadeIn() : fadeOut()

    // Resuelve el desafio pero renderiza por cada cambio del length
    // useEffect(() => {
    //     activeAnimationButton()
    // }, [ activeIndex ]);
    


    const renderItem = (item: Slide) => {
        return(
            <View style={ stylesScreen.container }>
                <Image source={ item.img } style={ stylesScreen.image }/>
                <Text style={{ ...stylesScreen.title, color: colors.text }}> { item.title } </Text>
                <Text style={{ ...stylesScreen.subTitle, color: colors.text }}> { item.desc } </Text>
            </View>
        )
    }

    return(
        <SafeAreaView style={{ flex: 1, paddingTop: 50, backgroundColor: colors.background }}>

            <Carousel
              //ref={(c) => { this._carousel = c; }}
              data={ items }
              renderItem={({ item }) => renderItem(item)}
              sliderWidth={ screenWidth }
              itemWidth={ screenWidth }
              layout='default'
              onSnapToItem={(index) => {
                setActiveIndex(index)
                isVisible.current = false
                fadeOut()
                //Otra forma de hacerlo
                if(index == items.length - 1) {
                    isVisible.current = true
                    fadeIn()

                }
            }}
            />
            <View style={ stylesScreen.slideContainer }>
                <Pagination 
                    dotsLength={ items.length }
                    activeDotIndex={ activeIndex }
                    dotStyle={{ ...stylesScreen.dotCarousel, backgroundColor: colors.primary }}
                />

                { isVisible.current ?
                    <Animated.View
                        style={{ opacity }}
                    >
                        <TouchableOpacity 
                            style={ stylesScreen.button } 
                            activeOpacity={ 0.7 }
                            onPress={() => navigation.navigate('Home' as any)}
                        >
                            <Text style={ stylesScreen.buttonText }> Enter </Text>
                            <Icon 
                                name='chevron-forward-outline'
                                color='white'
                                size={ 30 }
                            />
                        </TouchableOpacity>
                    </Animated.View>
                    :
                    null
                }
            </View>


        </SafeAreaView>
    )
};

const stylesScreen = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 5,
        padding: 40,
        justifyContent: 'center'
    },
    slideContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        alignItems: 'center'
    },
    image: {
        width: 350,
        height: 400,
        resizeMode: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5856D6'
    },
    subTitle: {
        fontSize: 16
    },
    dotCarousel: {
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: '#5856D6'
    },
    button: {
        flexDirection: 'row',
        backgroundColor: '#5856D6',
        width: 140,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 25,
        color: 'white'
    }
});

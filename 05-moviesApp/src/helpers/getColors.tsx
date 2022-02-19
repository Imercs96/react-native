import ImageColors from 'react-native-image-colors'

export const getImageColors = async(uri: string) => {

    const colors = await ImageColors.getColors(uri, {})
    let primary, secondary, tertiary;

    switch (colors.platform) {
        case 'android':
          // android result properties
            primary = colors.dominant
            secondary = colors.average
            tertiary = colors.vibrant
            break
        case 'ios':
          // iOS result properties
            primary = colors.primary
            secondary = colors.secondary
            tertiary = colors.detail
            break
        default:
          throw new Error('Unexpected platform key')
      }

    return [ primary, secondary, tertiary ];
};

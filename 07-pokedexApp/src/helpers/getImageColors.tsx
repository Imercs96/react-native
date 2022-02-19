import ImageColors from 'react-native-image-colors'

export const getImageColors = async(uri: string) => {

    const colors = await ImageColors.getColors(uri, {
      fallback: 'grey'
    })
    let primary;

    switch (colors.platform) {
        case 'android':
          // android result properties
            primary = colors?.dominant
            break
        case 'ios':
          // iOS result properties
            primary = colors?.background
            break
        default:
          throw new Error('Unexpected platform key')
      }

    return [ primary ];
};
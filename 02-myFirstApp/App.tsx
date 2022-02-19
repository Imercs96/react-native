import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen'
import { CounterScreen } from './src/screens/CounterScreen'
import { HiWorldScreen } from './src/screens/HiWorldScreen'
import { DimensionsScreen } from './src/screens/DimensionsScreen'
import { PositionScreen } from './src/screens/PositionScreen';
import { FlexScreen } from './src/screens/FlexScreen'
import { HomeworkScreen } from './src/screens/HomeworkScreen'

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <HiWorldScreen/> */}
      {/* <CounterScreen/> */}
      {/* <BoxObjectModelScreen/> */}
      {/* <DimensionsScreen/> */}
      {/* <PositionScreen/> */}
      {/* <FlexScreen/> */}
      <HomeworkScreen/>
    </SafeAreaView>
  )
}


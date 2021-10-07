import React from 'react'
import { Text } from 'react-native'

const RegularText = ({ children }: { children: React.ReactNode }) => {
  return <Text style={{ fontSize: 20, color: '#fff' }}>{children}</Text>
}

export default RegularText

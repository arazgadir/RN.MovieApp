import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#30d0fe',
    justifyContent: 'center',
    paddingLeft: 22,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    color: '#fff',
    fontSize: 28,
    fontFamily: 'AvenirNext-DemiBold',
   paddingTop: 50
  }
})

const Header = props => {
  const { viewStyle, textStyle } = styles
 
 // console.log("title=" +this.title)
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.title}</Text>
    </View>
  )
}


export default Header
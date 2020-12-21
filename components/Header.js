import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

const image = { uri: 'https://scontent.xx.fbcdn.net/v/t31.0-8/15288685_241053856323272_180207036701878344_o.jpg?_nc_cat=107&ccb=2&_nc_sid=dd9801&_nc_ohc=AzjlcKJ2vekAX-X23X6&_nc_ht=scontent.xx&oh=ef45b3f8037c7bd0194905dc9ff79e34&oe=60014249' };


const styles = StyleSheet.create({
  
  textStyle: {
    color: 'white',
    paddingTop: 90,
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'Roboto',
  },

  image: {
    
    resizeMode: "cover",
    justifyContent: "center",
    width:  4.1,
    height: 0.33,
    
  },
})

const Header = props => {
  const { textStyle} = styles
 

  return (
    
    <View>
    <ImageBackground source={image} style={image}>
    <Text style={textStyle}>{props.title}</Text>
    </ImageBackground>
    </View>
    
  )
}


export default Header
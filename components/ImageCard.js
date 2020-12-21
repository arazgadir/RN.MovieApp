import React from 'react'
import { Dimensions, Image, View, Text, StyleSheet,  } from 'react-native'
const size=Dimensions.get('window')
const w=size.width
const h=size.height

const styles = StyleSheet.create({
  container: {
    width: w / 3,
    paddingVertical: 10,
    paddingBottom: 15
  },
  
  h1: {
    paddingTop: 15,
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 16,
    alignSelf: 'center',
    textAlign: 'center',
    color: 'white', 
    paddingBottom: 15
    
  },
  cover: {
    width: w / 3.5,
    height: w * 0.43,
    borderRadius: 10,
    alignSelf: 'center',
    
  }
  
})

const ImageCard = ({ data }) => {
  const { container, sub, h1, cover} = styles
  const { image, name,  } = data
   
let caption = 

  data.show.image == null ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIaFnTqJMVV-1gnkn-Gt7h7B5NYaT8ejHK3g&usqp=CAU' : data.show.image.medium




  return (

 
    <View style={container}>
     
      <View style={{ backgroundColor: 'black'}}>
        <Image style={cover} source={{ uri: caption}} />
      </View>
      <Text style={h1}>{data.show.name.toUpperCase()}</Text>
      
    </View>
  )
  
}

export default ImageCard
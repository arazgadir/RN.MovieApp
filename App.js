import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from './components/Header'
import ImageCard from './components/ImageCard'

const url = 'https://gitlab.com/gHashTag/react-native-init-data/raw/master/db.json'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "Welcome",
      data: [],
    }
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      this.setState({ data })
      console.log({ data })
    } catch (e){
     // throw e
     console.log("URL is wrong")

    }
    }

  render() {
    const { title, data } = this.state
    return (
      <View>
        <Header title={title} />
        <ScrollView>
          <View style={styles.container}>
            {data.map(item => (
              <ImageCard data={item} key={item.id} />
            ))}
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container: {
    marginTop: 30
  }
})

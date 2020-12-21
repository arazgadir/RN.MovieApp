import React, {Component} from 'react';
import {View,Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, FlatList} from 'react-native';
import Header from './components/Header';
import ImageCard from './components/ImageCard';

//const url = 'https://api.tvmaze.com/shows?page=1'
const url1 = 'https://api.tvmaze.com/search/shows?q=';
const url = 'https://api.tvmaze.com/search/shows?q=star';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeInput: '',
      title: 'YOUR  ONLINE  CINEMA',
      data: [],
    };
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({data});
      console.log({data});
    } catch (e) {
      
      console.log('URL is wrong');
    }
  };

  getSearch = async () => {
    try {
      if (this.state.changeInput != '') {
        const response = await fetch(url1 + this.state.changeInput);
        const data = await response.json();
        this.setState({data});
        console.log({data});
      }
    } catch (e) {
      console.log('url is wrong');
    }
  };

 

  
  render() {
    const {title, data} = this.state;
    let rows = [];
    return (
      <View style={{backgroundColor: 'black', flex: 1}}>
        <Header title={title} />
        <View style={{flexDirection: 'row', paddingTop: 5}}>
          <TextInput
            placeholder="Search movie"
            placeholderTextColor="#666"
            style={styles.im}
            onChangeText={text => this.setState({changeInput: text})}
            //value = {this.state.changeInput}
          />


          <TouchableOpacity
            onPress={() => this.getSearch(this.changeInput)}
            style={styles.searchButton}>
            <Text style={{color: 'grey', fontWeight: 'bold'}}>S E A R C H</Text>
          </TouchableOpacity>
       </View>


        <View>
          <TouchableOpacity
            onPress={() => this.componentDidMount()}
            style={styles.mainButton}>
            <Text style={{color: 'grey', fontWeight: 'bold'}}>M A I N    M E N U</Text>
          </TouchableOpacity>
        </View>

          
        <ScrollView >



          <View style={styles.container}>
            <View style={styles.row}>
              {data.map(item => (
                <ImageCard data={item} key={item.id} />
              ))}
            </View>
          </View>

        </ScrollView>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    
   
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    paddingBottom: 15
    
    
  },
  searchButton: {
    fontSize: 18,
    height: 40,
    borderWidth: 2,
    paddingLeft: 20,
    paddingVertical: 8,
    borderRadius: 5,
    backgroundColor: '#660000',
    marginVertical: 10,
    width: '30%',
  },
  im: {
    color: 'white',
    fontSize: 18,
    height: 39,
    borderColor: 'gray',
    borderWidth: 2,
    paddingLeft: 20,
    borderRadius: 5,
    backgroundColor: 'black',
    marginVertical: 10,
    width: '70%',
  },

  mainButton: {
    fontSize: 18,
    height: 40,
    borderWidth: 2,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#660000',
    alignItems: 'center',
  },
  flatview: {
    justifyContent: 'center',
    paddingTop: 30,
    borderRadius: 2,
  }
});

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.apiCall();
  }

  async apiCall() {
    // let resp = await fetch('https://randomuser.me/api/?seed=$%7Bseed%7D&page=$%7Bpage%7D&results=20')
    let resp = await fetch('https://randomuser.me/api/?seed=$%7Bseed%7D&page=$%7Bpage%7D&results=20');
    let respJson = await resp.json()
    // console.log(respJson)
    this.setState({ data: respJson.results })
  }

  // renderItem = ({ item, index }) => {
  //   return (
  //     <View style={styles.container}>

  //       <View style={styles.text}>
  //         <Text style={styles.text}>{item.title}</Text>
  //       </View>

  //     </View>
  //   )
  // }

  render() {
    return (
      <FlatList style={styles.list}

        data={this.state.data}
        // renderItem={renderItem}
        // keyExtractor={item => `key-${item.id}`}
        renderItem={({ item }) => (

          <View style={styles.container}>

            <Image style={styles.img}
              source={{ uri: item.picture.thumbnail }}
            />

            <View style={styles.text}>
              <Text style={styles.text}> {item.name.first + " " + item.name.last} </Text>
            </View>

          </View>

        )}
      />

    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 10,
    flexDirection: 'row',
  },

  text: {
    color: 'black',
    fontSize: 17,
    fontWeight: '500',
    margin: 7,
    justifyContent: 'center',
    textAlign: 'center'
  },

  list: {
    flex: 1,
    padding: 5,
    margin: 5
  },

  img: {
    width: 100,
    height: 100,
    borderRadius: 100
    // padding: 5
  }
});

export default App;

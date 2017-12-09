import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Content from './layout/Content';
import Put from './layout/Put';

export default class App extends React.Component {
  state = {
    menu : 'PUT',
    object : [],
    isLoading : false,
    resPut : ''
  }
  fetchMethodGet = async () =>{
    this.setState({isLoading : true})
    try{
      let object = await fetch('https://us-central1-testcrud-b0e56.cloudfunctions.net/api/').then(res => res.json())
      this.setState({object, isLoading : false})
    } catch(e){
      alert('sth worng')
      this.setState({isLoading : false})
    }
  }
  fetchMethodPut = async (id ,name ,tel ,desc) => {
    let Put = await fetch('https://us-central1-testcrud-b0e56.cloudfunctions.net/api/'+id,{
        method: "PUT",
        headers: new Headers({
          'Content-Type' : 'application/json'
        }),
        body: JSON.stringify({
          name : name,
          tel :tel,
          desc : desc,
        })
      })
      return Put.respone
    }
    clearObject = () =>{
      this.setState({ object : []})
    }
    selectMenu = menu => {
      this.setState({ menu })
    }

    changeLoading = () => {
      this.setState({ isLoading : !this.state.isLoading})
    }

  render() {
    return (
      <View style={styles.container}>
     
          <Content 
            menu = {this.state.menu}
            object = {this.state.object}
            fetchMethodGet = {this.fetchMethodGet}
            fetchMethodPut = {this.fetchMethodPut}
            clearObject = {this.state.isLoading}
            changeLoading = {this.changeLoading}
          />
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    height: 50,
   
  },
  navigator :{
    flex : 0.2,
    backgroundColor : 'red',
    paddingTop : 20,
    alignItems : 'center',
    flexDirection :'row'
  },
  content:{
    flex: 2.8
  }
});

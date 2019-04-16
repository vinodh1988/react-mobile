
import React,{Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

export class Home extends Component{
  render(){
      return(
         <View>
             {this.props.items.map(x=><Text>{x}</Text>)}
             <Button
          title="Contacts Page"
          onPress={() =>
            this.props.navigation.navigate('Contacts')
          }
        />
         </View>
      );
  }
}
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Scanner from './src/components/Scanner';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Scanner/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

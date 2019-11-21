
import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import Counter from './src/component/Counter';

const App = () => (
<View style = {styles.container}>
  <Counter />
</View>);

styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
  },
});

export default App;

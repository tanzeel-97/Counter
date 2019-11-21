import React from 'react';
import { Text, TouchableOpacity , StyleSheet} from 'react-native';

const CountBtn = props => {
    const{ title, onPress} = props;
    return(
    <TouchableOpacity  style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity >
    );
};

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: '#D3D3D3',
      borderRadius: 10,
      padding: 10,
    },

    text: {
      padding: 10,
    },
  });
  
  export default CountBtn;
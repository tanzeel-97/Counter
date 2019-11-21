import React, {Component} from 'react';
import{
View,
Text,
StyleSheet,
Dimensions
} from 'react-native';
import CountBtn from './CountBtn';
import SuccessMessage from './successMsg';

class Counter extends Component{

    constructor(props){
        super(props);
        this.state = {
            count : 0,
            message : '',
        };
    }

    CounterIncrement = () => {
        this.setState({count : this.state.count + 1}, () => {
        this.getMessage();    
        });
    }

    CounterDecrement = () => {
        this.setState({count : this.state.count - 1}, () => {
        this.getMessage();
        });
    }

    getMessage = () => {
        switch (this.state.count) {
            case 10:
              this.setState({message: 'successfully completed session 1'});
              break;
            case 20:
              this.setState({message: 'successfully completed session 2'});
              break;
            default:
              break;
        }
    };

    render(){
        return(
            <View style={styles.container}>
            <View style={styles.counterSection}>
              {this.state.count > 0 ? <CountBtn title="-" onPress={this.CounterDecrement} />:null}               
              <Text style={styles.counterValue}>{this.state.count}</Text>
              <CountBtn title="+"onPress={this.CounterIncrement} />
            </View>
            {this.state.count === 10 || this.state.count === 20 ? (
              <SuccessMessage value={this.state.message} />
            ) : null}
          </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      width: Dimensions.get('window').width - 20,
      height: Dimensions.get('window').width,
      borderRadius: Dimensions.get('window').width - 20 / 2,
      borderWidth: 1,
      borderColor: '#3289a8',
    },
    counterValue: {
      paddingLeft: 20,
      paddingRight: 20,
    },
    counterSection: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
export default Counter;
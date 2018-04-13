import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>trailze</Text>
        </View>
        <LoginForm/>
      </View>
    );
  }
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
  }

  render() {
    const loginStyles = StyleSheet.create({
      input: {
        borderColor: 'rgb(192,192,192)',
        backgroundColor: 'rgba(192, 192, 192, 0.1)',
        paddingHorizontal: 10,
        // marginBotton: 20,
        borderWidth: 1,
        height: 40,
        width: 300
      },
    });

    const bothEmpty = !(this.state.username.length > 0) || !(this.state.password.length > 0);
    console.log(bothEmpty);

    return (
      <View style={styles.login}>
        <TextInput
          placeholder={'username'}
          style={loginStyles.input}
          onChangeText={username => this.setState({username})}
          value={this.state.username}
          autoCorrect={false}
          keyboardType={'email-address'}
          autoCapitalize={'none'}
          returnKeyType={'next'}
          onSubmitEditing={() => this.passwordInput.focus()}
        />
        <TextInput
          placeholder={'password'}
          style={loginStyles.input}
          onChangeText={password => this.setState({password})}
          value={this.state.password}
          secureTextEntry={true}
          returnKeyType={'go'}
          ref={input => this.passwordInput = input}
        />
        <Button
          title={"Login"}
          onPress={() => alert(this.state.username)}
          disabled={bothEmpty}
        />
      </View>
    )
  }

}


const styles = StyleSheet.create({
  logoContainer: {
    flex: 0.25,
    backgroundColor: '#4b8b3b',
    alignItems: 'center'
  },
  logo: {
    color: 'white',
    fontSize: 70,
    fontFamily: 'System',
    position: 'absolute',
    bottom: 30
  },
  login: {
    flex: 0.75,
    alignItems: 'center',
    padding: 20
  }
});

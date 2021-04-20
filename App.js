import React, { useEffect } from 'react'
import { 
  View, 
  KeyboardAvoidingView, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  Animated } 
  from 'react-native'
import { useState } from 'react'

export default function App() {

  const [offset] = useState(new Animated.ValueXY({x: 0, y: 90}));
  const [opacity] = useState(new Animated.Value(0))

  useEffect(() => {

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 25
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
      })
    ]).start()
    
  }, [])

  return (

    <KeyboardAvoidingView style={styles.background}>
        
        <View style={styles.containerLogo}>
          
          <Image 
            style={{
              width: 130,
              height: 155
            }}
            source={require('./src/assets/logo.png')}
          />
        
        </View>

        <Animated.View style={[
          styles.container,
          {
            opacity: opacity,
            transform: [
              { translateY: offset.y }
            ]
          }
          ]}>

          <TextInput
            style={styles.input} 
            placeholder="Email"
            autoCorrect={false}
            onChangeText={() => {}}
          />
          
          <TextInput 
            style={styles.input} 
            placeholder="Password"
            autoCorrect={false}
            onChangeText={() => {}}
          />

          <TouchableOpacity style={styles.btnSubmit}>
            <Text style={styles.submitText}>Login</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.btnSignUp}>
            <Text style={styles.registerText}>Sign Up</Text>
          </TouchableOpacity>
            

        </Animated.View>
    
    </KeyboardAvoidingView>

  )

}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191919'
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 90
  },
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 15,
    padding: 10
  },
  btnSubmit: {
    backgroundColor: '#35AAFF',
    width: '65%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  submitText: {
    color: '#FFF',
    fontSize: 18
  },
  btnSignUp: {
    marginTop: 10
  },
  registerText: {
    color: '#FFF',
  }
})
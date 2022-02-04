import React, { useState } from "react";

import { Text,ScrollView,StyleSheet,Image,View,TextInput,StatusBar,KeyboardAvoidingView,TouchableWithoutFeedback,Button, Keyboard,Alert,Switch, TouchableOpacity,RefreshControl} from 'react-native';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
const Cat = () => { 
    
  // this is for switch
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  //this is for button that give many option
  const Hello1 = () =>
    Alert.alert(
      "title is here",
      "this is alert message",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
        
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

    //this is for counter button
    const [count, setCount] = useState(0);
    const onPress = () => setCount(count => count + 1);
    
   // refresh control
    const [Refreshing,SetRefreshing] = useState(false);
    const onRefresh = () =>{
      SetRefreshing(true);
      wait(1000).then(() => 
      SetRefreshing(false));
    };

  return (
    
    <ScrollView refreshControl={<RefreshControl
      refreshing={Refreshing}
      onRefresh={onRefresh}
      />}
    >
       
      <StatusBar
        animated={true}
        backgroundColor="#6495ED"
        barStyle={'default'}
      />
         
       
         
      <View style={styles.container}>
      
        
         <Image source={require('E:/Firstapp/Indian.png')}
          style={{width: 100, height: 100, alignItems:'flex-end',borderRadius: 10}}
         />
        
          <Text style={{marginTop: 20,marginBottom:20,fontSize: 20,fontWeight: "bold"}}>Hello world!</Text>
          <TextInput style={{ height: 40,width: 200,
          borderColor: 'red',
          borderWidth: 1,
          borderRadius:10,
          marginTop: 20,marginBottom:20}}
          defaultValue='default text'
          />
          <Switch
         onValueChange={toggleSwitch}
         value={isEnabled}
          />
          <Button title="redbutton" 
          onPress={ () => Alert.alert('this is red button')}
          />
          <Button 
          title="Press me"
          onPress={ () => Alert.alert('this is simple button')}
          />

  <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
     >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View >
          <Text style={styles.header}>Header</Text>
          <TextInput placeholder="Username" style={styles.textInput} />
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={ () => Alert.alert('this is simple button')} />

            <Button title="alert" onPress={Hello1} />
          </View>
        </View>

      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
            
      </View>
      <View style={styles.counter}>
              <Text>Count: {count}</Text>
            <TouchableOpacity style={styles.cntr}
        onPress={onPress}>
               <Text>Press Here</Text>
            </TouchableOpacity>
            </View>
    </ScrollView>
   
  );
}

export default Cat;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
    marginVertical: 16,
    marginBottom: 20
  },
  counter:{
    alignItems: 'center',
    padding: 30,
    marginVertical: 16,
  },
  header: {
    fontSize: 36,
    marginBottom: 30,
    marginTop:20
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 20
  },
  btnContainer: {
    backgroundColor: "white",
  },
  cntr:{
    backgroundColor: "#DDDDDD",
    marginTop: 10
  },
  btncntr:{
    marginBottom: 10,
    marginTop: 10
  }
});
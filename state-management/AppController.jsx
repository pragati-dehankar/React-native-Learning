import { StyleSheet,Text,View } from "react-native";
import React, { useState } from "react";
import CounterProvider from './context/CounterProvider'
import CounterComponent from './components/CounterComponent'
import { useTheme } from "./context/ThemeProvider";

const AppController=()=>{
    const {theme}=useTheme()
    return (
        <View style={{backgroundColor:theme==="light"?"#fff":"black"}}>
           <View></View>
           <CounterProvider>
            <CounterComponent/>
           </CounterProvider>
        </View>
    )
}

export default AppController;

const styles = StyleSheet.create({
  
})

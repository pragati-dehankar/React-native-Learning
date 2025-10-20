import { Button, StyleSheet,Text,View } from "react-native";
import React, { useState } from "react";
import CounterProvider from './context/CounterProvider'
import CounterComponent from './components/CounterComponent'
import { useTheme } from "./context/ThemeProvider";
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "./store/feature/theme-slice";

const AppController=()=>{
    const dispatch=useDispatch()
    const theme=useSelector((state)=>state.theme.mode)
    const textColor=theme==="light"?"black":"white"
    const handleSwitchTheme=()=>{
       dispatch(themeActions.toggleTheme())
    }
    return (
        <View style={{backgroundColor:theme==="light"?"#fff":"black"}}>
           <View>
            <Button title="Switch theme" onPress={handleSwitchTheme}/>
           </View>
           <CounterProvider>
            <CounterComponent/>
           </CounterProvider>
        </View>
    )
}

export default AppController;

const styles = StyleSheet.create({
  
})

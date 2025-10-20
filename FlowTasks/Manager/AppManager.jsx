import { StyleSheet,Text,View } from "react-native";
import React, { useState } from "react";
import AppScreens from '../utils/constants'
import AddTaskScreen from '../screens/AddTaskScreen'
import HomeScreen from '../screens/HomeScreen'


const AppManager=()=>{
    const [currScreen,setCurrScreen]=useState(AppScreens.HomeScreen)
    return (
        <View>
            {
                currScreen===AppScreens.AddTaskScreen?(
                    <AddTaskScreen/>
                ):(
                     <HomeScreen/>
                )
            }
        </View>
    )
}

export default AppManager;

const styles = StyleSheet.create({
  
})

import {Text,View,StyleSheet, StatusBar,Button,TextInput} from 'react-native'
import React, { useContext, useState } from 'react';
import { CounterContext, useCounter } from '@/context/CounterProvider';
import { useDispatch, useSelector } from 'react-redux';
import { counterAction } from '@/store/feature/counter-slice';

const CounterComponent=()=>{
    const dispatch=useDispatch()
    const [value,setValue]=useState("")
    const count=useSelector((state)=>state.counter.count)
    const IncrementHandler=()=>{
        // counterConsumer.increment()
        dispatch(counterAction.increment())
    }
    const DecrementHandler=()=>{
        // counterConsumer.decrement()
         dispatch(counterAction.decrement())
    }
    const incrementByValue=()=>{
        if(value && !isNaN(Number(value))){
            // counterConsumer.increment(Number(value))
             dispatch(counterAction.increment(Number(value)))
            setValue("")
        }
        return
    }
    const decrementByValue=()=>{
        if(value && !isNaN(Number(value))){
            // count.decrement(Number(value))
             dispatch(counterAction.decrement(Number(value)))
            setValue("")
        }
        return
    }
    return(
        <View style={styles.container}>
            <Text>
                Counter Context
            </Text>
            <Text>
                {count.counter}
            </Text>
            <View style={styles.buttons}>
            <Button onPress={IncrementHandler} title='Increment'/>
            <Button color={"teal"} onPress={DecrementHandler} title='Decrement'/>
            </View>
            <View style={styles.byValueStyles}>
                <TextInput style={styles.input} value={value} onChangeText={(text)=>setValue(text)} />
            </View>
            <View style={styles.buttons}> 
                <Button onPress={incrementByValue} title='Increment By Value'/>
                <Button onPress={decrementByValue} color={"teal"} title='Decrement By Value'/>
                 </View>
        </View>
    )
}
export default CounterComponent;

const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingTop:StatusBar.currentHeight+10,
        justifyContent:"center",
        alignItems:"center"
    },
    buttons:{
        flexDirection:"row",
        justifyContent:"space-around",
        gap:20,
        marginVertical:10,
    },
    byValueStyles:{
        gap:20,

    },
    input:{
        borderBottomWidth:2,
        borderColor:"black",
        padding:5,
        fontSize:18,
    }
})
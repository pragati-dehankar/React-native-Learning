import { Text, View } from "react-native";
import CounterProvider from '../context/CounterProvider';
import CounterComponent from '../components/CounterComponent'
import  ThemeProvider  from "../context/ThemeProvider";
export default function Index() {
  return (
    <ThemeProvider>
        <CounterProvider>
          <CounterComponent/>
        </CounterProvider>
        </ThemeProvider>
  );
}

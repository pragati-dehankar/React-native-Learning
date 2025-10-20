import CounterProvider from '../context/CounterProvider';
import CounterComponent from '../components/CounterComponent'
import  ThemeProvider  from "../context/ThemeProvider";
import { Provider } from "react-redux";
import{ store }from '../store/index';
import AppController from '../AppController'
export default function Index() {
  return (
    <Provider store={store}>
    {/* <ThemeProvider>
        <CounterProvider>
          <CounterComponent/>
        </CounterProvider>
        </ThemeProvider> */}
        <AppController/>
        </Provider>
  );
}

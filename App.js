//
import Root from "./app/_root";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
//
export default function App() {
  // 
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }} >
        {/* root */}
        <Root />
        {/* statusBar */}
        <StatusBar barStyle="dark-content" />
      </GestureHandlerRootView>
    </>
  );
  //
}
//
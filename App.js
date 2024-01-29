//
import Root from "./app/_root";
import { StatusBar } from "react-native";
import { PaperProvider } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
//
export default function App() {
  // 
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }} >
        <PaperProvider>
          <Root />
          <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
        </PaperProvider>
      </GestureHandlerRootView>
    </>
  );
  //
}
//
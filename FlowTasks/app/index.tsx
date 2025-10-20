import { Text, View } from "react-native";
import AppManager from '../Manager/AppManager'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text> <AppManager/> </Text>
    </View>
  );
}

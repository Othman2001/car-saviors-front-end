import { createStackNavigator } from "@react-navigation/stack";
import Splash from "../screens/Splash/Splash";

const Stack = createStackNavigator();
const LoadingNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="LoadingData" component={Splash} />
    </Stack.Navigator>
  );
};
export default LoadingNavigation;

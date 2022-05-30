import { createStackNavigator } from "@react-navigation/stack";

import Loading from "../screens/Loading/Loading";

const Stack = createStackNavigator();
const LoadingNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="LoadingData" component={Loading} />
    </Stack.Navigator>
  );
};
export default LoadingNavigation;

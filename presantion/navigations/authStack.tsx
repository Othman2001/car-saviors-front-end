import { createStackNavigator } from "@react-navigation/stack";
import Register from "../screens/RegisterScreen/RegisterScreen";
import Login from "../screens/LoginScreen/Login";

const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};
export default AuthStack;

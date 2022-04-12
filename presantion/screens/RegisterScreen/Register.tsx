import {
  StyleSheet,
  TextInput,
  Keyboard,
  Text,
  View,
  Button,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import { Controller, useForm } from "react-hook-form";

export default function Register() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      nationalID: "",
      password: "",
    },
  });

  const onSubmit = (data: any) => console.log(data);
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, paddingTop: 50 }}>
        <Text style={{ paddingBottom: 10, paddingLeft: 10, fontSize: 16 }}>
          {" "}
          Register
        </Text>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              maxLength={6}
              style={styles.textInput}
              placeholder="enter your user name"
              value={value}
              defaultValue="s"
            />
          )}
          name="firstName"
        />
        <Button title="submit" onPress={() => handleSubmit(onSubmit)} />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    margin: 10,
  },
});

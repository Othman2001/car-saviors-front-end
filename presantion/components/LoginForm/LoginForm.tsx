import { View } from "react-native";
import React from "react";
import * as Styled from "./style";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, Input } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import Spinner from "../common/Spinner";
import i18n from "../../../config/i18n/config";
import { useUserInfo } from "../../../application/custom-hooks/useUserInfo";
import { useTheme } from "../../../application/custom-hooks/useTheme";

interface ILoginForm {
  logIn: (payload: { email: string; password: string }) => Promise<void>;
  loading: boolean;
  error: string;
}

export default function LoginForm({ logIn, loading, error }: ILoginForm) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigation = useNavigation();
  const { user } = useUserInfo();
  const { fontFamily } = useTheme();
  useEffect(() => {
    if (user) {
      alert("user is logged in");
    }
  }, [user]);

  return (
    <View>
      <Styled.Title fontFamily={fontFamily} spaceTop={220}>
        {" "}
        {i18n.t("login.welcome")}
      </Styled.Title>
      {error ? (
        <Styled.ErrorText fontFamily={fontFamily}> {error} </Styled.ErrorText>
      ) : null}
      <Styled.FormLabel fontFamily={fontFamily} vertical={10} horizontal={62}>
        {i18n.t("login.email")}:
      </Styled.FormLabel>
      <Input
        autoCapitalize={false}
        textStyle={{
          color: "#000",
        }}
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
      />
      <Styled.FormLabel fontFamily={fontFamily} vertical={10}>
        {i18n.t("login.password")}:
      </Styled.FormLabel>
      <Input
        textStyle={{
          color: "#000",
        }}
        placeholder="*******"
        secureTextEntry={true}
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Styled.CommonButton>
        <Button
          accessoryLeft={loading && <Spinner />}
          onPress={() => {
            logIn({ email, password });
          }}
        >
          {i18n.t("login.login")}
        </Button>
      </Styled.CommonButton>
      <Styled.SmallText
        fontFamily={fontFamily}
        color="#000000;
"
      >
        {" "}
        {i18n.t("login.noAccount")}
        <Styled.Span
          fontFamily={fontFamily}
          onPress={() => {
            navigation.navigate("Register");
          }}
          color="
#265A60"
        >
          {" "}
          {i18n.t("login.register")}
        </Styled.Span>{" "}
      </Styled.SmallText>
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    color: "#ffffff",
  },
  input: {
    backgroundColor: "#ffffff",
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 15,
    color: "black",
  },
});

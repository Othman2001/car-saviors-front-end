import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { deleteDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../infstracture/firebase";
import { useUserInfo } from "../../../application/custom-hooks/useUserInfo";
import { useNavigation } from "@react-navigation/native";
import { useWinchActions } from "../../../application/custom-hooks/useWinchActions";

export default function FinishTrip() {
  const { user } = useUserInfo();
  const navigation = useNavigation();
  const { setStayAtHome } = useWinchActions();

  useEffect(() => {
    setTimeout(() => {
      if (user?.uid) {
        updateDoc(doc(db, "PendingRequets", user?.uid), {
          isFinished: true,
        });
        deleteDoc(doc(db, "PendingRequets", user?.uid));
        setStayAtHome({ stayAtHome: true });
        setDoc(doc(db, "completedRequets", user?.uid), {
          completed: true,
          userId: user?.uid,
          price: 200,
        });
        navigation.navigate("Home");
      }
    }, 2000);
  }, []);
  return (
    <View>
      <Text>Finishing the trip</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

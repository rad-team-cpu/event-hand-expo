import * as React from "react";
import { Text, TextInput, StyleSheet, TouchableOpacity, View } from "react-native";
import { useClerk, useSignUp } from "@clerk/clerk-expo";

import { VerifyCodeScreenProps } from "@/routes/types";
import { log } from "logger";

export default function VerifyCodeScreen({
  navigation,
}: VerifyCodeScreenProps) {
  const { isLoaded, signUp, setSession } = useSignUp();

  const [code, setCode] = React.useState("");

  const onPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      await setSession(completeSignUp.createdSessionId);
    } catch (err: any) {
      log("Error:> " + err?.status || "");
      log("Error:> " + err?.errors ? JSON.stringify(err.errors) : err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          value={code}
          style={styles.textInput}
          placeholder="Code..."
          placeholderTextColor="#000"
          onChangeText={(code) => setCode(code)}
        />
      </View>
      <TouchableOpacity style={styles.primaryButton} onPress={onPress}>
        <Text style={styles.primaryButtonText}>Verify Email</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 20,
      },

    inputView: {
        borderRadius: 5,
        width: "90%",
        height: 45,
        marginBottom: 20,
        borderColor: "#000",
        borderStyle: "solid",
        borderWidth: 1,
      },
      textInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
    
      primaryButton: {
        width: "90%",
        borderRadius: 5,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#000",
        color: "#ffffff",
      },
    
      primaryButtonText: {
        color: "#ffffff",
        fontWeight: "bold",
      },    
  });
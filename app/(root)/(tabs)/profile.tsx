import { useAuth, useUser } from "@clerk/expo";
import { router } from "expo-router";
import React from "react";
import { Alert, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const { user } = useUser();
  const { signOut } = useAuth();

  const handleSignOut = () => {
    Alert.alert("Sign Out ?", "Are you sure you want to sign out", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Sign Out",
        style: "destructive",
        onPress: async () => {
          await signOut();
          router.replace("/sign-in");
        },
      },
    ]);
  };
  return (
    <SafeAreaView className="flex-1 bg-brand-body" edges={["top"]}>
      <TouchableOpacity className="w-full bg-brand-blue py-4 rounded-xl items-center mb-4">
        <Text onPress={handleSignOut}>Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

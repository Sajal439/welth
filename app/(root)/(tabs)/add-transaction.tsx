import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddTransactionScreen() {
  return (
    <SafeAreaView className="flex-1 bg-brand-body">
      <View className="flex-1 justify-center items-center px-6">
        <Text className="text-2xl font-bold text-[#1A1D26] mb-2">Add Transaction</Text>
        <Text className="text-brand-text-muted text-base text-center">
          Record a new income or expense transaction.
        </Text>
      </View>
    </SafeAreaView>
  );
}

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { supabase } from "@/lib/supabase";

const profile = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text
        onPress={() => supabase.auth.signOut()}
        className="text-white text-lg"
      >
        SignOut
      </Text>
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({});

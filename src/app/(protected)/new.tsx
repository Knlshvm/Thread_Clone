import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const newPost = () => {
  const [text, setText] = useState<string>("");
  return (
    <SafeAreaView className="flex-1 p-4">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 130 : 0}
      >
        <Text className="text-white text-lg font-bold">Username</Text>
        <TextInput
          value={text}
          onChangeText={setText}
          className="text-white text-lg "
          placeholder="What's happening?"
          placeholderTextColor="gray"
          multiline
          numberOfLines={4}
        />

        <View className="mt-auto">
          <Pressable className="bg-white p-3 px-6 self-end rounded-full" onPress={() => {console.log(text)}}>
            <Text className="text-black text-center font-bold">Post</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default newPost;

const styles = StyleSheet.create({});

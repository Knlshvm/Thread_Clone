import { StatusBar } from "expo-status-bar";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { dummyPosts } from "@/dummyData";
import PostListItem from "@/components/PostListItem";
import { Link } from "expo-router";

export default function App() {
  return (
    <View>
      <FlatList
        data={dummyPosts}
        renderItem={({ item }) => <PostListItem post={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <Link href="/new">
            <Text className="text-white text-lg">Latest Posts</Text>
          </Link>
        )}
      />
    </View>
  );
}

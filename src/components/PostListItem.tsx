import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { Post } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const PostListItem = ({ post }: { post: Post }) => {
  return (
    <View className="flex-row px-4 py-3 border-b border-gray-800/70 bg-black">
      {/* Profile Image */}
      <Image
        source={{ uri: post.user.image }}
        className="w-10 h-10 rounded-full mr-3"
      />

      {/* Post Details */}
      <View className="flex-1">
        {/* Header */}
        <View className="flex-row items-center flex-wrap">
          <Text className="text-white font-bold mr-1">{post.user.name}</Text>
          {/* <Text className="text-gray-400">@{post.user.username}</Text> */}
          <Text className="text-gray-400 mx-1 text-xs">
            {dayjs(post.createdAt).fromNow()}
          </Text>
        </View>

        {/* Content */}
        <Text className="text-white mt-1">{post.content}</Text>

        {/* Action Bar */}
        <View className="flex-row gap-4 mt-2">
          <Pressable className="flex-row items-center ">
            <Ionicons name="heart-outline" size={20} color="#d1d5db" />
            <Text className="text-gray-300 text-sm ml-1">0</Text>
          </Pressable>
          <Pressable className="flex-row items-center ">
            <Ionicons name="chatbubble-outline" size={20} color="#d1d5db" />
            <Text className="text-gray-300 text-sm ml-1">
              {post.replies.length}
            </Text>
          </Pressable>
          <Pressable className="flex-row items-center ">
            <Ionicons name="repeat-outline" size={20} color="#d1d5db" />
            <Text className="text-gray-300 text-sm ml-1">0</Text>
          </Pressable>

          <Pressable className="flex-row items-center ">
            <Ionicons name="paper-plane-outline" size={20} color="#d1d5db" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default PostListItem;

import { View, Text, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import RestaurantCard from "./RestaurantCard";
import { FontAwesome5 } from "@expo/vector-icons";

export default function CeliacRow({ sortBySafetyList }) {
  return (
    <View>
      <TouchableOpacity className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">Sorted by safety score</Text>
        <FontAwesome5 name="arrow-right" size={24} color="#6b21a8" />
      </TouchableOpacity>
      <Text className="text-xs text-gray-500 px-4">
        Spots that serve gluten but with high safety score
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="pt-4"
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 20,
        }}
      >
        {sortBySafetyList.map((restaurant) => {
          return <RestaurantCard restaurant={restaurant} key={restaurant.id} />;
        })}
      </ScrollView>
    </View>
  );
}
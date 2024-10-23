import { FontAwesome6 } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: 'brown', headerShown: false,
      tabBarInactiveTintColor: "#aaa",
    }} >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={24} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="dreamlist"
        options={{
          title: 'Dream list',
          tabBarIcon: ({ color }) => <FontAwesome size={24} name="heart" color={color} />,
        }}
      />
      <Tabs.Screen
        name="varsadaBag"
        options={{
          title: 'Bag',
          tabBarIcon: ({ color }) => <FontAwesome6 size={24} name="bag-shopping" color={color} />,
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome size={24} name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}

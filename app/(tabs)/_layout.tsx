import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="main" />
      <Tabs.Screen name="profile" />
      <Tabs.Screen name="community" />
      <Tabs.Screen name="settings" />
    </Tabs>
  );
}

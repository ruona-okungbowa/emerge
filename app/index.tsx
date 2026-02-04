import { Redirect } from "expo-router";

export default function Index() {
  const isAuthenticated = false; // Your auth logic

  if (isAuthenticated) {
    return <Redirect href="/(tabs)" />;
  }

  return <Redirect href="/(auth)/home" />;
}

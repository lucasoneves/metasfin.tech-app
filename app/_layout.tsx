import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { Stack } from "expo-router";

export default function RootLayout() {
  const [loaded] = useFonts({
    Inter_400Regular,

    Inter_500Medium,

    Inter_600SemiBold,

    Inter_700Bold,
  });
  if (!loaded) {
    return null;
  }
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="challenges/index" options={{ headerShown: false }} />
      <Stack.Screen name="challenges/[id]" options={{ headerShown: false }} />
    </Stack>
  );
}

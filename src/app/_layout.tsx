import { Stack } from "expo-router";
import "../../global.css"
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen options={{ statusBarStyle: "dark", headerShown:false }} name="Onboarding" />
    </Stack>
  );
}

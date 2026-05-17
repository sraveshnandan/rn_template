import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen options={{ statusBarStyle: "dark" }} name="Onboarding" />
    </Stack>
  );
}

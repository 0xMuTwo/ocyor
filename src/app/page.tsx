import MainApp from "@/components/MainApp";
import { PasswordProtect } from "@/components/PasswordProtect"; // Ensure this path matches where you’ve created the PasswordProtect component.

export default function Home() {
  return (
    <PasswordProtect>
      <MainApp />
    </PasswordProtect>
  );
}

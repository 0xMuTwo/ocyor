import MainApp from "@/components/MainApp";
import { PasswordProtect } from "@/components/PasswordProtect";

export default function Home() {
  return (
    <PasswordProtect>
      <MainApp />
    </PasswordProtect>
  );
}

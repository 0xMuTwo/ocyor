import { CardWithForm } from "@/components/CardWithForm";
import Image from "next/image";

const intro_card1 = ["Welcome to Royco", "Version 0.0—Demo"];

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <CardWithForm
        title={intro_card1[0]}
        description={intro_card1[1]}
      ></CardWithForm>
    </main>
  );
}

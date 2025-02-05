import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BgColor, IntroState } from "@/types/types";
import { CardWithContent } from "./CardWithContent";
const cardContent = {
  title: "You are an LP",
  subheading: "",
  descriptions: [
    "You have extra capital...",
    "You're willing to provide it,",
    "for the right price.",
  ],
};
const LP1Flow = () => {
  const [LP1FlowState, setLP1FlowState] = useState<IntroState>("Card");
  const router = useRouter();
  useEffect(() => {
    if (LP1FlowState === "Market") {
      router.push("/market");
    }
  }, [LP1FlowState, router]);

  return (
    <>
      {LP1FlowState === "Card" ? (
        <div className="flex justify-center items-center min-h-screen">
          <CardWithContent
            title={cardContent.title}
            subheading={cardContent.subheading}
            description={cardContent.descriptions}
            onNext={() => setLP1FlowState("Market")}
            bgColor={BgColor.LP1}
          />
        </div>
      ) : null}
    </>
  );
};
export default LP1Flow;

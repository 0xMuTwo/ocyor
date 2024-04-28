import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BgColor, IntroState } from "@/types/types";
import { CardWithContent } from "./CardWithContent";
const cardContent = {
  title: "You are an LP",
  subheading: "",
  descriptions: [
    "You have just heard about the protocol",
    "You want some tokens",
    "Lucky for you, it looks like someone is trying to get rid of some...",
  ],
};
const LP2Flow = () => {
  const [LP2FlowState, setLP2FlowState] = useState<IntroState>("Card");
  const router = useRouter();
  useEffect(() => {
    if (LP2FlowState === "Market") {
      router.push("/market");
    }
  }, [LP2FlowState, router]);

  return (
    <>
      {LP2FlowState === "Card" ? (
        <div className="flex justify-center items-center min-h-screen">
          <CardWithContent
            title={cardContent.title}
            subheading={cardContent.subheading}
            description={cardContent.descriptions}
            onNext={() => setLP2FlowState("Market")}
            bgColor={BgColor.LP2}
          />
        </div>
      ) : null}
    </>
  );
};
export default LP2Flow;

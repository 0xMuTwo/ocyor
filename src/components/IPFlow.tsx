import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BgColor, IPState } from "@/types/types";
import { CardWithContent } from "./CardWithContent";
const cardContent = {
  title: "You are a builder",
  subheading: "",
  descriptions: [
    "You have a product.",
    "You don't have a ton of capital.",
    "Create a market, then provide incentives for users to seed liquidity",
  ],
};

const IPFlow = () => {
  const [ipFlowState, setIpFlowState] = useState<IPState>("Card");
  const router = useRouter();
  useEffect(() => {
    if (ipFlowState === "Market") {
      router.push("/market");
    }
  }, [ipFlowState, router]);

  return (
    <>
      {ipFlowState === "Card" ? (
        <div className="flex justify-center items-center min-h-screen">
          <CardWithContent
            title={cardContent.title}
            subheading={cardContent.subheading}
            description={cardContent.descriptions}
            onNext={() => setIpFlowState("Market")}
            bgColor={BgColor.IP}
          />
        </div>
      ) : null}
    </>
  );
};
export default IPFlow;

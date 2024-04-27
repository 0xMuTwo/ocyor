"use client";
import { useState } from "react";
import { AppState, BgColor } from "@/types/types";
import { CardWithContent } from "./CardWithContent";
const cardContents = [
  {
    title: "Welcome to Royco",
    subheading: "Version—0",
    descriptions: [
      "Demo Implementation of “Royco: The Liquidity Coordination Protocol”",
      "Jai Bhavnani & James Folkestad",
      "March 31, 2024",
    ],
  },
  {
    title: "How this works:",
    subheading: "You'll interact as 3 users.", //TODO Make this more bold, blow it up. It's the most important. Giving this information is important.
    descriptions: [
      "First, a Builder (Incentive Provider)",
      "Second, a Liquidity Provider.",
      "Third, as Pool Token buyer.",
      "*This is a DEMO, running locally in your browser. ",
      "There is no server, no smart contracts are called. You cannot mess this up.",
      "If you want to start over, just click refresh.",
    ],
  },
];

type IntroFlowProps = {
  changeState: (newState: AppState) => void;
};

const IntroFlow = ({ changeState }: IntroFlowProps) => {
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const handleContinue = () => {
    setCurrentCardIndex((prevIndex) => prevIndex + 1);
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <CardWithContent
        title={cardContents[currentCardIndex].title}
        subheading={cardContents[currentCardIndex].subheading}
        description={cardContents[currentCardIndex].descriptions}
        onNext={handleContinue}
        isLastCard={currentCardIndex === cardContents.length - 1}
        handleLastCard={() => changeState("IP")}
        bgColor={BgColor.IP}
      />
    </div>
  );
};

export default IntroFlow;

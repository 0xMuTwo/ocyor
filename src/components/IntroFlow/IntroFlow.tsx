"use client";
import { useState } from "react";
import { IntroWithContent } from "../IntroWithContent";
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
    subheading: "You'll interact as 3 users.",
    descriptions: [
      "First, a Builder (Incentive Provider)",
      "Second, a Liquidity Provider.",
      "Third, as Pool Token buyer.",
      "*This is a DEMO, running locally in your browser. ",
      "There is no server, no smart contracts are called. You cannot mess this up.",
    ],
  },
];
const IntroFlow = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const handleContinue = () => {
    setCurrentCardIndex((prevIndex) => prevIndex + 1);
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <IntroWithContent
        title={cardContents[currentCardIndex].title}
        subheading={cardContents[currentCardIndex].subheading}
        description={cardContents[currentCardIndex].descriptions}
        onNext={handleContinue}
        isLastCard={currentCardIndex === cardContents.length - 1}
        handleLastCard={() => console.log("Last Card")}
      />
    </div>
  );
};

export default IntroFlow;

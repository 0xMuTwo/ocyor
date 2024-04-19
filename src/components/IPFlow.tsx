import { CardWithContent } from "./CardWithContent";
const cardContent = {
  title: "You are a builder on Royco",
  subheading: "Version—0",
  descriptions: [
    "Demo Implementation of “Royco: The Liquidity Coordination Protocol”",
    "Jai Bhavnani & James Folkestad",
    "March 31, 2024",
  ],
};

const IPFlow = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <CardWithContent
        title={cardContent.title}
        subheading={cardContent.subheading}
        description={cardContent.descriptions}
        onNext={() => console.log("button clicked")}
      />
    </div>
  );
};
export default IPFlow;

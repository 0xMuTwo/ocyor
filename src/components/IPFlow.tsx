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

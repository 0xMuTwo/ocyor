import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardWithContentProps {
  title: string;
  subheading: string;
  description: string[];
  onNext: () => void;
  isLastCard?: boolean; //Assumes TRUE if no val passed
  handleLastCard?: () => void; //If no function, runs onNext.
  buttonText?: string;
  bgColor?: string;
}

export function CardWithContent({
  title,
  description,
  subheading,
  isLastCard = true,
  onNext,
  handleLastCard,
  buttonText,
  bgColor,
}: CardWithContentProps) {
  // Determine which handler to use. If isLastCard is true and handleLastCard is provided,
  // use handleLastCard; otherwise, use onNext.
  const clickHandler = isLastCard && handleLastCard ? handleLastCard : onNext;
  return (
    <Card className={`w-[450px] ${bgColor}`}>
      <CardHeader>
        <CardTitle className="flex justify-center text-4xl text-center">
          {title}
        </CardTitle>
        <CardDescription className="flex justify-center text-xl">
          {subheading}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col justify-center ">
        {description.map((desc, index) => (
          <p key={index} className="text-xl my-2 text-center">
            {desc}
          </p>
        ))}
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button className="px-28" onClick={clickHandler}>
          {buttonText || "Continue"}
        </Button>
      </CardFooter>
    </Card>
  );
}

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface IntroWithContentProps {
  title: string;
  subheading: string;
  description: string[];
  isLastCard: boolean;
  onNext: () => void;
  handleLastCard: () => void;
}

export function IntroWithContent({
  title,
  description,
  subheading,
  isLastCard,
  onNext,
  handleLastCard,
}: IntroWithContentProps) {
  return (
    <Card className="w-[450px]">
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
        <Button
          className="px-28"
          onClick={isLastCard ? handleLastCard : onNext}
        >
          Continue
        </Button>
      </CardFooter>
    </Card>
  );
}
